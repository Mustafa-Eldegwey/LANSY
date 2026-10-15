# LANSY — Link-in-Bio Website

> **YOUR STYLE. YOUR STORY.**

A complete, premium, production-ready link-in-bio website for the **LANSY** fashion brand. Built with clean HTML5, CSS3, and Vanilla JavaScript — no frameworks, no build tools, no dependencies.

---

## 📁 Project Structure

```
LANSY/
├── index.html      ← Main page (structure & content)
├── style.css       ← All styling, design tokens, animations
├── script.js       ← Copyright year, interactions, accessibility
├── og-image.png    ← Open Graph social sharing image
└── README.md       ← This file
```

---

## ✨ Features

- **Premium editorial design** — Playfair Display + DM Sans typography
- **Beige & brown luxury palette** — warm ivory background, caramel accents
- **Three social links** — Facebook, Instagram, TikTok (all open in a new tab)
- **Staggered entrance animations** — smooth, load-in sequence
- **Shimmer + ripple effects** — tactile hover/click feedback
- **Animated brand emblem** — L monogram with rotating ring on hover
- **Responsive** — mobile-first, works on all screen sizes
- **Accessible** — semantic HTML, ARIA labels, keyboard navigation, focus states
- **Prefers-reduced-motion** support
- **SEO-ready** — meta tags, Open Graph, Twitter Card
- **Inline SVG favicon** — no external image needed
- **Auto-updating copyright year** via JavaScript

---

## 🚀 How to Run Locally

### Option 1 — Open directly in browser (simplest)

1. Double-click `index.html` — it will open in your default browser.
2. All features work without a server (no API calls required).

### Option 2 — Use VS Code Live Server

1. Open the `LANSY` folder in **VS Code**.
2. Install the **Live Server** extension (if not already installed).
3. Right-click `index.html` → **Open with Live Server**.
4. The site opens at `http://127.0.0.1:5500`.

### Option 3 — Use Python's built-in server

```bash
# Python 3
cd LANSY
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

### Option 4 — Use Node.js `serve`

```bash
npx serve .
```

---

## 🌐 How to Deploy on GitHub Pages

Follow these steps to publish your website for free on GitHub Pages:

### Step 1 — Create a GitHub repository

1. Go to [github.com](https://github.com) and sign in.
2. Click **New repository**.
3. Name it `lansy` (or any name you prefer).
4. Set visibility to **Public**.
5. Click **Create repository**.

### Step 2 — Push your files

```bash
cd LANSY
git init
git add .
git commit -m "Initial commit — LANSY link-in-bio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/lansy.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 3 — Enable GitHub Pages

1. In your repository, go to **Settings** → **Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Select branch: `main`, folder: `/ (root)`.
4. Click **Save**.

### Step 4 — Access your live site

After 1–2 minutes, your site will be live at:

```
https://YOUR_USERNAME.github.io/lansy/
```

> **Tip:** Update the Open Graph `og:image` URL in `index.html` to an absolute URL once your site is live (e.g., `https://YOUR_USERNAME.github.io/lansy/og-image.png`).

---

## 🎨 Design Tokens

All colors and spacing values are defined as CSS custom properties in `style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| `--color-bg-primary` | `#F8F5F0` | Main background (warm ivory) |
| `--color-bg-secondary` | `#EDE3D5` | Icon backgrounds |
| `--color-bg-card` | `#FFFDF9` | Card backgrounds |
| `--color-text-primary` | `#3B2A21` | Main text (dark espresso) |
| `--color-text-secondary` | `#8B7765` | Supporting text (warm taupe) |
| `--color-accent` | `#A67C52` | Caramel accent |
| `--color-accent-secondary` | `#D6C2A8` | Muted sand |
| `--color-border` | `#E5D8C8` | Borders |
| `--color-hover` | `#5A3E2B` | Deep chocolate hover |

---

## 📄 License

© 2025 LANSY. All Rights Reserved.
