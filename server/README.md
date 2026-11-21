# QUALIFY AI API server (v0.3 scaffold)

This server keeps the OpenAI API key off the browser and exposes `POST /api/analyze`.

## Supported input in this first integration slice
- PDF (sent to the Responses API as an input file)
- JPEG / PNG / WebP (sent as image input)
- DOCX (text extraction with Mammoth)
- XLSX / XLS (sheet-to-CSV extraction)
- CSV / TXT / Markdown (UTF-8 text)

The frontend sends multipart fields `files`, `qualificationId`, and `instructions`.
The response has `extractedQuestions` (review before adding) and `predictions` (auto-added).

## Run locally
1. Install Node.js 20 or later.
2. In this folder: `npm install`
3. Copy `.env.example` to `.env` and set `OPENAI_API_KEY`, `FRONTEND_ORIGIN`, and optionally `OPENAI_MODEL`.
4. `npm start`
5. Set the frontend's AI server URL to `http://localhost:8787` only when testing on the same computer. For an iPhone, deploy this server to a public HTTPS host and enter that HTTPS URL.

Never commit `.env` or put the API key in the GitHub Pages frontend. The API key is separate from a ChatGPT subscription and API usage may incur charges.

## Important limitations
- This is an integration scaffold; it must be deployed and tested with a real API key before AI import works in the public app.
- Very large or complex documents should be split into smaller files. Scanned PDFs, tables, engineering drawings, and tiny text need human verification.
- The model may make mistakes. Source-extracted questions go to the review queue. Predictions are auto-registered but should be checked before relying on them for exam preparation.
- The first version does not perform web research or verify current official exam specifications. Predictions are based on uploaded material and user instructions only.
- This starter server does not include user accounts, permanent server-side question storage, multi-device sync, rate limiting, or per-user authorization. Those are required before sharing publicly with other people.
