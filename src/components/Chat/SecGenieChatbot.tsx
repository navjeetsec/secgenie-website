import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Sparkles, Bot, User, Trash2, Shield, RefreshCw } from 'lucide-react';

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: string;
}

const getLocalChatReply = (question: string) => {
  const query = question.toLowerCase();

  if (/\bctem\b|vulnerab|exposure management|vulnerability scanning/.test(query)) {
    return '**CTEM** (Continuous Threat Exposure Management) is an ongoing cycle of discovering assets, assessing exposures, prioritizing them by real-world risk, validating attack paths, and mobilizing remediation. Unlike a vulnerability scan alone, CTEM connects findings to business impact and helps teams focus on the exposures attackers can actually reach.';
  }

  if (/alert fatigue|noise|suppression|false positive/.test(query)) {
    return 'SecGenie helps reduce alert fatigue by correlating related signals, adding asset and exposure context, and prioritizing alerts by risk. Automated triage can group repetitive or low-value alerts so analysts can focus on incidents that need investigation. Keep response actions reviewable and aligned with your team’s policies.';
  }

  if (/siem|edr|integration|connector|splunk|sentinel|elastic|crowdstrike|sentinelone|defender/.test(query)) {
    return 'SecGenie is designed to work with security tools including Splunk, Microsoft Sentinel, Elastic, Google SecOps, CrowdStrike Falcon, SentinelOne, and Microsoft Defender. Connector availability and capabilities can vary by deployment; contact the SecGenie team to confirm support for your environment.';
  }

  if (/attack graph|attack path|crown jewel|critical asset/.test(query)) {
    return 'An attack graph links assets, identities, vulnerabilities, and reachable services to show plausible paths toward critical systems (“crown jewels”). Security teams can use those paths to prioritize exposures that are both reachable and impactful, then validate fixes by reassessing the path.';
  }

  if (/ai soc|soc automation|triage|autonomous|tier.?1/.test(query)) {
    return 'AI SOC automation can enrich and group alerts, summarize relevant context, and help with Tier-1 triage. Analysts should retain oversight for consequential actions, with automation boundaries and escalation rules configured to match the organization’s incident-response policy.';
  }

  if (/secgenie|platform|what do you|what is/.test(query)) {
    return 'SecGenie combines Continuous Threat Exposure Management (CTEM) with AI-assisted SOC workflows. The platform focuses on asset discovery, exposure and attack-path prioritization, alert triage, and integrations with security tools. This built-in assistant can answer common platform questions; a configured server enables full generative AI responses.';
  }

  return 'I can help with common questions about CTEM, vulnerability prioritization, attack graphs, AI SOC triage, alert fatigue, and SIEM/EDR integrations. For a detailed answer outside those topics, connect this site to its SecGenie AI server for full generative chat.';
};

const renderInlineMarkdown = (text: string) =>
  text.split(/(\*\*.+?\*\*|`[^`]+`|\*[^*]+\*)/g).map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return <strong key={index} className="font-semibold text-white">{part.slice(2, -2)}</strong>;
    }

    if (part.startsWith('`') && part.endsWith('`')) {
      return <code key={index} className="rounded bg-slate-800 px-1 py-0.5 font-mono text-cyan-200">{part.slice(1, -1)}</code>;
    }

    if (part.startsWith('*') && part.endsWith('*')) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    }

    return part.replace(/\*\*/g, '');
  });

const AssistantMessage: React.FC<{ text: string }> = ({ text }) => {
  const content: React.ReactNode[] = [];
  let paragraph: string[] = [];
  let orderedItems: string[] = [];
  let unorderedItems: string[] = [];
  let orderedStart = 1;
  let key = 0;

  const flushParagraph = () => {
    if (paragraph.length) {
      content.push(
        <p key={key++}>{renderInlineMarkdown(paragraph.join(' '))}</p>,
      );
      paragraph = [];
    }
  };

  const flushOrderedList = () => {
    if (orderedItems.length) {
      content.push(
        <ol key={key++} start={orderedStart} className="list-decimal space-y-2 pl-5 marker:font-semibold marker:text-cyan-300">
          {orderedItems.map((item, index) => (
            <li key={index} className="pl-1">{renderInlineMarkdown(item)}</li>
          ))}
        </ol>,
      );
      orderedItems = [];
    }
  };

  const flushUnorderedList = () => {
    if (unorderedItems.length) {
      content.push(
        <ul key={key++} className="list-disc space-y-1.5 pl-5 marker:text-cyan-400">
          {unorderedItems.map((item, index) => (
            <li key={index} className="pl-1">{renderInlineMarkdown(item)}</li>
          ))}
        </ul>,
      );
      unorderedItems = [];
    }
  };

  text.split(/\r?\n/).forEach((line) => {
    const orderedMatch = line.match(/^\s*(\d+)\.\s+(.*)$/);
    const unorderedMatch = line.match(/^\s*[-*]\s+(.*)$/);

    if (orderedMatch) {
      flushParagraph();
      flushUnorderedList();
      if (!orderedItems.length) orderedStart = Number(orderedMatch[1]);
      orderedItems.push(orderedMatch[2]);
      return;
    }

    if (unorderedMatch) {
      flushParagraph();
      flushOrderedList();
      unorderedItems.push(unorderedMatch[1]);
      return;
    }

    flushOrderedList();
    flushUnorderedList();
    if (line.trim()) {
      paragraph.push(line.trim());
    } else {
      flushParagraph();
    }
  });

  flushParagraph();
  flushOrderedList();
  flushUnorderedList();

  return <div className="space-y-2">{content}</div>;
};

export const SecGenieChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [localMode, setLocalMode] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'init-1',
      role: 'assistant',
      text: 'Greetings. I am SecGenie AI. Ask me anything about Continuous Threat Exposure Management (CTEM), AI SOC automation, attack graphs, or SIEM/EDR integrations.',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSend = async (textToSend?: string) => {
    const text = (textToSend || inputMessage).trim();
    if (!text || isLoading) return;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInputMessage('');
    setIsLoading(true);
    if (localMode) {
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: getLocalChatReply(text),
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
      return;
    }

    const controller = new AbortController();
    const timeoutId = window.setTimeout(() => controller.abort(), 30000);

    try {
      // Send conversation history to backend Gemini API
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        signal: controller.signal,
        body: JSON.stringify({
          messages: updatedMessages.map((m) => ({
            role: m.role,
            text: m.text,
          })),
        }),
      });

      if (!response.ok) {
        const errorData: { error?: string } = await response.json().catch(() => ({}));
        throw new Error(errorData.error || `Server responded with ${response.status}`);
      }

      const data: { reply?: unknown } = await response.json();
      if (typeof data.reply !== 'string' || !data.reply.trim()) {
        throw new Error('SecGenie AI returned an empty response. Please try again.');
      }
      setLocalMode(false);
      const assistantMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: data.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err: unknown) {
      setLocalMode(true);
      const errorMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: `${getLocalChatReply(text)}\n\n*Using built-in responses because the AI service is unavailable. Deploy the server with GEMINI_API_KEY for full generative chat.*`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      window.clearTimeout(timeoutId);
      setIsLoading(false);
    }
  };

  const handleClearHistory = () => {
    setMessages([
      {
        id: 'init-reset',
        role: 'assistant',
        text: 'Conversation history reset. How can SecGenie AI assist your security operations today?',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
  };

  const samplePrompts = [
    'How does CTEM differ from standard vulnerability scanning?',
    'Explain SecGenie alert fatigue suppression',
    'Which SIEM and EDR platforms are natively supported?',
    'How do attack graphs trace paths to crown jewels?',
  ];

  return (
    <>
      {/* Floating Chat Trigger Button - Compact Copilot Logo Only */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center bg-[#0c2b5e] hover:bg-[#0052cc] text-white rounded-full shadow-[0_8px_20px_rgba(0,102,245,0.45)] border border-cyan-400/50 hover:scale-110 active:scale-95 transition-all duration-200 group cursor-pointer"
          title="SecGenie AI"
          aria-label="Open SecGenie AI"
        >
          <div className="relative flex items-center justify-center">
            <Bot className="w-5 h-5 text-cyan-300 group-hover:rotate-6 transition-transform" />
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0c2b5e] animate-pulse" />
          </div>
        </button>
      )}

      {/* Floating Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] h-[580px] max-h-[85vh] bg-slate-950 text-slate-100 rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-cyan-500/30 flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-[#031525] via-[#09223e] to-[#041a30] border-b border-cyan-500/20 flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center text-cyan-300 shadow-inner">
                <Bot className="w-4 h-4 text-cyan-400" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-bold text-white tracking-tight">SecGenie AI</h3>
                  <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border ${
                    localMode
                      ? 'bg-amber-500/15 text-amber-200 border-amber-500/30'
                      : 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30'
                  }`}>
                    {localMode ? 'Local mode' : 'Ready'}
                  </span>
                </div>
                <p className="text-[10px] text-cyan-300/80 font-mono">
                  Autonomous Cyber Defense Copilot
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={handleClearHistory}
                className="p-1.5 rounded-lg text-slate-400 hover:text-rose-400 hover:bg-slate-800/60 transition-colors cursor-pointer"
                title="Clear conversation"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors cursor-pointer"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Messages Scroll Area */}
          <div className="flex-1 p-4 overflow-y-auto no-scrollbar [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden space-y-3.5 bg-radial from-slate-900/60 via-slate-950 to-slate-950 text-xs">
            {messages.map((m) => {
              const isAssistant = m.role === 'assistant';
              return (
                <div
                  key={m.id}
                  className={`flex gap-2.5 ${isAssistant ? 'justify-start' : 'justify-end'}`}
                >
                  {isAssistant && (
                    <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`${isAssistant ? 'max-w-[88%]' : 'max-w-[82%]'} rounded-2xl px-3.5 py-2.5 leading-relaxed shadow-sm ${
                      isAssistant
                        ? 'bg-slate-900/90 text-slate-200 border border-slate-800'
                        : 'bg-[#0066f5] text-white rounded-br-xs'
                    }`}
                  >
                    {isAssistant ? (
                      <AssistantMessage text={m.text} />
                    ) : (
                      <p className="whitespace-pre-wrap">{m.text}</p>
                    )}
                    <span
                      className={`block text-[9px] mt-1 text-right ${
                        isAssistant ? 'text-slate-500' : 'text-blue-200'
                      }`}
                    >
                      {m.timestamp}
                    </span>
                  </div>

                  {!isAssistant && (
                    <div className="w-6 h-6 rounded-lg bg-blue-700 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}

            {isLoading && (
              <div className="flex gap-2.5 justify-start">
                <div className="w-6 h-6 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-300 flex items-center justify-center shrink-0">
                  <Bot className="w-3.5 h-3.5" />
                </div>
                <div className="bg-slate-900 border border-slate-800 rounded-2xl px-4 py-3 flex items-center gap-1.5 text-cyan-400">
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span className="text-[11px] text-slate-400">SecGenie AI is analyzing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Prompt Suggestions */}
          {messages.length <= 2 && (
            <div className="px-4 py-2 bg-slate-900/40 border-t border-slate-800/60 overflow-x-auto no-scrollbar flex items-center gap-1.5 shrink-0">
              {samplePrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="px-2.5 py-1 rounded-full bg-slate-800/80 hover:bg-slate-700 text-[10px] text-cyan-200 whitespace-nowrap border border-cyan-500/20 hover:border-cyan-400 transition-colors cursor-pointer shrink-0"
                >
                  <Sparkles className="w-2.5 h-2.5 inline mr-1 text-cyan-400" />
                  {prompt}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="p-3 bg-slate-950 border-t border-slate-800/80 flex items-center gap-2 shrink-0"
          >
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Ask about CTEM, AI SOC, or connectors..."
              disabled={isLoading}
              className="flex-1 bg-slate-900 border border-slate-700/80 rounded-xl px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 focus:border-cyan-400 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!inputMessage.trim() || isLoading}
              className="p-2.5 rounded-xl bg-[#0066f5] hover:bg-[#0052cc] text-white disabled:opacity-40 disabled:cursor-not-allowed transition-all cursor-pointer shadow-md"
              aria-label="Send message"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
