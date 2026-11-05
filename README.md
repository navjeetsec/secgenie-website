<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.



## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set `GEMINI_API_KEY` in `.env` to your Gemini API key for full generative chat. Keep this key server-side; do not use a `VITE_`-prefixed variable.
3. Run the app:
   `npm run dev`

## Production

1. Build the frontend assets with `npm run build`.
2. Start the production server with `npm start` (or use `npm run preview` to test the production build locally).

The production server serves the built frontend and the `/api/chat` endpoint together. Deploy it as a Node.js server with `GEMINI_API_KEY` configured in the server environment for full generative chat. Hosting only the `dist` folder as static files still supports the chatbot’s built-in answers for common SecGenie topics, but does not provide free-form AI responses. Never put the Gemini key in frontend code or a `VITE_` variable.
