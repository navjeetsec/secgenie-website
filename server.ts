import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

// Multi-turn Gemini chatbot endpoint using gemini-3.8-flash
app.post('/api/chat', async (req, res) => {
  try {
    const { messages } = req.body;

    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return res.status(400).json({ error: 'Messages array is required' });
    }
    if (!process.env.GEMINI_API_KEY) {
      return res.status(503).json({ error: 'SecGenie AI is not configured. Add GEMINI_API_KEY to the server environment and restart it.' });
    }

    const ai = new GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        timeout: 12000,
        retryOptions: { attempts: 1 },
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    if (messages.some((message: unknown) =>
      typeof message !== 'object' ||
      message === null ||
      !('role' in message) ||
      !('text' in message) ||
      typeof message.role !== 'string' ||
      typeof message.text !== 'string'
    )) {
      return res.status(400).json({ error: 'Each message must include a role and text.' });
    }

    const contents = messages.map((m: { role: string; text: string }) => ({
      role: m.role === 'assistant' || m.role === 'model' ? 'model' : 'user',
      parts: [{ text: m.text }],
    }));

    const systemInstruction =
      'You are SecGenie AI Defense Copilot, an expert AI cybersecurity assistant for SecGenie.ai. SecGenie AI combines Continuous Threat Exposure Management (CTEM) and autonomous AI SOC automation. Assist security executives, CISOs, detection engineers, and SOC analysts with: 1) Asset discovery & attack graph path mapping, 2) Vulnerability prioritization and exploitability analysis (CISA KEV, EPSS), 3) SOC alert fatigue suppression and Tier-1 autonomous triage, 4) Certified integrations with SIEM (Splunk, Microsoft Sentinel, Elastic, Google SecOps) and EDR (CrowdStrike Falcon, SentinelOne Singularity, Microsoft Defender). Keep responses crisp, technical, structured with bullet points where appropriate, and actionable.';

    const modelsToTry = ['gemini-3.8-flash', 'gemini-flash-latest'];
    let lastError: unknown;

    for (const modelName of modelsToTry) {
      try {
        const response = await ai.models.generateContent({
          model: modelName,
          contents,
          config: {
            systemInstruction,
            httpOptions: {
              timeout: 12000,
              retryOptions: { attempts: 1 },
            },
          },
        });
        if (response.text) {
          return res.json({ reply: response.text });
        }
        lastError = new Error(`Model ${modelName} returned an empty response.`);
      } catch (err: unknown) {
        lastError = err;
        console.warn(`Model ${modelName} failed; trying the next model.`);
      }
    }

    console.error('All configured Gemini models failed:', lastError);
    const providerStatus = typeof lastError === 'object' && lastError !== null && 'status' in lastError &&
      typeof lastError.status === 'number'
      ? lastError.status
      : 502;
    const providerUnavailable = providerStatus === 503 || providerStatus === 504 || providerStatus === 429;
    return res.status(providerUnavailable ? 503 : 502).json({
      error: providerUnavailable
        ? 'The AI provider is temporarily unavailable or taking too long to respond. Please try again shortly.'
        : 'SecGenie AI could not get a response from the AI provider. Please try again shortly.',
    });
  } catch (error: unknown) {
    console.error('Chat error:', error);
    res.status(500).json({
      error: 'The SecGenie AI request failed. Please try again.',
    });
  }
});

// Vite middleware for development or static serving for production
const isProduction = process.env.NODE_ENV === 'production' || process.argv.includes('--production');
if (!isProduction) {
  const vite = await createViteServer({
    server: { middlewareMode: true, hmr: false },
    appType: 'spa',
  });
  app.use(vite.middlewares);
} else {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (_req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => {
  console.log(`SecGenie AI Server running on port ${port}`);
});
