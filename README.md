# Frontend Portfolio 2025

A modern, customizable portfolio template built with TypeScript, React (Vite), TailwindCSS, Framer Motion, and more. Ideal for developers, designers, and creators to showcase their work and personality.

## Features
- Built with TypeScript (88.9%), JavaScript, HTML, and CSS
- Responsive design suitable for all devices
- Smooth animations with Framer Motion
- Easy to customize sections and styles
- Fast development experience with Vite

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/diip3sh/devfolio2.0.git
cd devfolio2.0
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Locally
```bash
npm run dev
```
Visit `http://localhost:5173` to view your portfolio.

### 4. Build for Production
```bash
npm run build
```

## Customization
- Update your personal information and sections in the `src/data` folder (e.g., `profile.ts`, `projects.ts`).
- Change colors and themes in `tailwind.config.js`.
- Add, remove, or reorder sections in the main layout (`src/App.tsx`).
- Swap out images and icons in the `public` folder or directly in components.

## Example Content Structure
```typescript
// src/data/profile.ts
export const profile = {
  name: "Your Name",
  role: "Frontend Developer",
  bio: "Brief bio about yourself...",
  links: [
    { name: "GitHub", url: "https://github.com/yourusername" },
    { name: "LinkedIn", url: "https://linkedin.com/in/yourusername" },
  ],
};
```

## Deployment
- Deploy to Vercel, Netlify, GitHub Pages, or any static hosting provider.
- See respective provider documentation for details.

## Contributing
Feel free to fork, submit pull requests, or suggest features!

## License
This project is open-source and free for anyone to use, modify, and distribute for personal or commercial purposes. No attribution required.

---

**Made with:**
- TypeScript
- TailwindCSS
- Framer Motion
- React + Vite