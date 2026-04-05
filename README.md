# CoverCraftAI ✉️

An AI-powered cover letter and cold email generator. Enter your job description, skills, and experience — get a professional, tailored letter in seconds.

---

## ✨ Features

- **AI Generation** — Instantly generates cover letters and cold emails tailored to your job application
- **Flexible Output** — Choose between a Cover Letter, Cold Email, or Both
- **Tone Selection** — Pick from Formal, Friendly, or Startup tone to match the company culture
- **Edit Inline** — Edit the generated output directly in the app before using it
- **Copy to Clipboard** — Copy your letter with a single click
- **Regenerate** — Not satisfied? Regenerate a fresh version instantly using your same inputs
- **Auto-saved History** — Your last 10 generated results are saved automatically in the browser
- **Detail View** — Click any history item to view the full letter anytime
- **Delete & Clear** — Delete individual results or clear all history (with a confirm step to avoid accidents)
- **Dark Mode** — Full dark mode support, toggled from the header, remembered across sessions
- **Floating Nav Bar** — Quick access to Home, histoy and the form from any page
- **Responsive** — Works smoothly on both mobile and desktop

---

## 🖥️ Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, how it works, features, sample output, FAQ |
| `/form` | Fill in your details and generate a letter |
| `/result` | View, edit, copy, or regenerate your output |
| `/history` | Browse, view, and manage all saved results |
| `/detail/:id` | Full view of a specific saved result |

---

## 🛠️ Tech Stack

- **React** with React Router v6
- **Tailwind CSS** for styling
- **Remix Icons** for icons
- **Groq API** (Llama 3.3 70B) for AI generation
- **localStorage** for client-side history and theme persistence
- **Vite** as the build tool

---

## ⚙️ Environment Variables

| Variable | Description |
|---|---|
| `VITE_GROQ_API_KEY` | Your Groq API key from [console.groq.com](https://console.groq.com) |

---

## 🔒 Privacy

All your data — history, theme preference — is stored only in your browser's `localStorage`. Nothing is stored on any server. The only external call made is to the Groq API to generate your letter.