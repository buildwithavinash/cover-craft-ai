# CoverCraftAI ✉️

An AI-powered cover letter and cold email generator built with React and the Gemini API. Enter your job description, skills, and experience — get a professional, tailored letter in seconds.

---

## 🚀 Features

- **AI Generation** — Powered by Google Gemini 2.5 Flash to generate cover letters and cold emails based on your input
- **Flexible Output** — Choose between a Cover Letter, Cold Email, or Both
- **Tone Selection** — Pick from Formal, Friendly, or Startup tone
- **Edit & Copy** — Edit the generated output inline and copy it to clipboard with one click
- **Regenerate** — Not happy with the result? Regenerate a new version instantly using your original inputs
- **History** — Last 10 generated results are saved automatically in your browser
- **Detail View** — Click any history item to view the full letter
- **Delete & Clear** — Delete individual results or clear all history (with a confirm step to avoid accidents)
- **Dark Mode** — Full dark mode support, toggled via the header, persisted across sessions
- **Responsive Design** — Works on mobile and desktop

---

## 🛠️ Tech Stack

- **React** (with React Router v6)
- **Tailwind CSS** for styling
- **Remix Icons** (`remixicon`) for icons
- **Google Gemini API** (`gemini-2.5-flash`) for AI generation
- **localStorage** for client-side history persistence
- **Vite** as the build tool

---

## 📦 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/buildwithavinash/cover-craft-ai.git
cd cover-craft-ai
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Create a `.env` file in the root of the project:

```env
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

> Get your free API key from [Google AI Studio](https://aistudio.google.com/app/apikey)

### 4. Start the development server

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx        # Top nav with dark mode toggle and history link
│   └── Loader.jsx        # Animated loading spinner
├── pages/
│   ├── Landing.jsx       # Home page with hero, how it works, features, FAQ
│   ├── Form.jsx          # Input form to generate a letter
│   ├── Result.jsx        # Displays generated output with edit/copy/regen
│   ├── History.jsx       # Grid of saved results with delete/clear
│   └── Detail.jsx        # Full view of a single saved result
├── utils/
│   └── api.js            # Gemini API call logic
└── App.jsx               # Router setup and dark mode state
```

---

## 🖥️ Pages & Routes

| Route | Page | Description |
|---|---|---|
| `/` | Landing | Hero section, how it works, features, sample output, FAQ |
| `/form` | Form | Input form to generate a new letter |
| `/result` | Result | View, edit, copy, or regenerate the output |
| `/history` | History | Browse, view, and delete saved results |
| `/detail/:id` | Detail | Full view of a specific saved result |

---

## ⚙️ Environment Variables

| Variable | Description |
|---|---|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key |

---

## 📝 Usage

1. Click **Try Demo** or the **+** button in the floating nav
2. Paste the **Job Description** you're applying for
3. Enter your **Skills** (comma-separated, e.g. `React, Node.js, TypeScript`)
4. Describe your **Experience** in a sentence or two
5. Choose your **Tone** and **Output type**
6. Hit **Generate** — your letter appears in seconds
7. **Edit**, **Copy**, or **Regenerate** as needed
8. All results are auto-saved to **History** for later access

---

## 🔒 Privacy

All your data (history, theme preference) is stored exclusively in your browser's `localStorage`. Nothing is sent to any server other than the Gemini API call for generation.

---

## 📄 License

MIT License. Feel free to use, modify, and distribute.