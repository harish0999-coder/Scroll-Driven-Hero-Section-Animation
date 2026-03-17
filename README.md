# Itzfizz Digital — Scroll-Driven Hero Section

> **Internship Assignment** — Web Development Internship @ Itzfizz Digital

## Live Demo
🔗 [Deploy link will go here after GitHub Pages setup]

## GitHub Repository
🔗 [Your GitHub repo URL here]

---

## Overview

A scroll-driven hero section animation built with **Next.js**, **Tailwind CSS**, and **GSAP ScrollTrigger** — inspired by the reference at https://paraschaturvedi.github.io/car-scroll-animation.

## Features

### ✅ Functional Requirements Met

| Requirement | Implementation |
|---|---|
| Hero section fills viewport (above the fold) | `h-screen` on hero section |
| Letter-spaced headline `W E L C O M E  I T Z F I Z Z` | Rendered as individual `<span>` letters |
| Impact metrics / statistics | 4 animated stat counters |
| Initial load animations | GSAP timeline with stagger |
| Statistics animate in one by one | `stagger: 0.12` on GSAP timeline |
| Scroll-based animation tied to scroll progress | GSAP `ScrollTrigger` with `scrub` |
| Smooth easing / interpolation | `scrub: 1.2–2` for natural fluid motion |
| Uses `transform` properties | Orb uses `y`, `scale`, `rotation` — no layout reflow |
| Performant | `will-change` on animated elements, no layout-triggering props |

### 🌟 Plus Points
- Clean, responsive layout
- Exportable as static site (GitHub Pages ready)
- Custom ambient orb float loop
- Noise texture overlay for depth

---

## Tech Stack

- **Next.js 14** (App Router, static export)
- **React 18**
- **Tailwind CSS**
- **GSAP + ScrollTrigger** (scroll-driven animations)
- Google Fonts: Bebas Neue (display) + DM Sans (body)

---

## Getting Started

```bash
# Install dependencies
npm install

# Development server
npm run dev
# → http://localhost:3000

# Build for production
npm run build

# The /out folder is the static export — deploy to GitHub Pages
```

## Deploying to GitHub Pages

1. Push code to a GitHub repository
2. In `next.config.js`, set `basePath` if deploying to a sub-path:
   ```js
   basePath: '/your-repo-name'
   ```
3. Run `npm run build` — this generates an `/out` folder
4. Enable GitHub Pages in repository Settings → Pages → Deploy from `/out` branch
   OR use the [gh-pages](https://www.npmjs.com/package/gh-pages) package:
   ```bash
   npm install --save-dev gh-pages
   # Add to package.json scripts:
   # "deploy": "gh-pages -d out"
   npm run build && npm run deploy
   ```

---

## Project Structure

```
itzfizz-hero/
├── src/
│   ├── app/
│   │   ├── globals.css        # Tailwind + CSS variables + fonts
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Entry page
│   └── components/
│       └── HeroSection.jsx    # All animation logic lives here
├── public/
├── next.config.js             # Static export config
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Animation Architecture

```
Page Load
  └── GSAP Timeline (sequential)
       ├── Letters: y:80→0, opacity:0→1, rotateX:-40→0, stagger:0.025
       ├── Tagline: y:30→0, opacity:0→1
       ├── Stats: y:40→0, opacity:0→1, stagger:0.12
       ├── Orb: scale:0.4→1, opacity:0→1 (elastic ease)
       └── Orbit ring: scale:0→1

Scroll (scrubbed to scroll progress)
  ├── Orb → y:-40vh, scale:1.6, rotation:180  (scrub:1.2)
  ├── Orbit ring → scale:2.5, opacity:0        (scrub:1.5)
  ├── Gradient blob → x:+15vw, y:-20vh         (scrub:2)
  ├── Headline → y:-15vh, opacity:0            (scrub:1)
  ├── Stats → y:-10vh, opacity:0              (scrub:1)
  └── Dot grid → y:+25vh (parallax)           (scrub:1)

Ambient (infinite loop, independent of scroll)
  └── Orb float: y±18px, 3s sine ease, yoyo
```

---

*Submitted by: [Your Name] | [Your Email]*
