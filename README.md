# Ramadan Preparation Course Website

A Next.js website for Ramadan preparation course featuring 16 classes covering complete Salah, 11 essential Surahs, and daily Masnun Duas.

## Features

- 🕌 16-week course syllabus (Rajab & Shaban months)
- 📺 YouTube video embeds for recorded classes
- 👨‍🏫 Teacher profiles section
- 📝 Student registration form
- 🌙 Islamic-themed design
- 🇧🇩 Full Bangla language support

## Tech Stack

- **Framework:** Next.js 14+ with App Router
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Fonts:** Noto Sans Bengali, Noto Naskh Arabic

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
ramadan-prep/
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root layout with metadata
│   │   ├── page.tsx         # Homepage
│   │   └── globals.css      # Global styles
│   ├── components/          # Reusable components
│   └── lib/                 # Utility functions
├── public/                  # Static assets
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── next.config.ts          # Next.js configuration
```

## Course Content

### 16 Classes Include:
- Complete Salah (prayer) components
- 11 Basic Surahs (Al-Fatiha, Al-Asr, Al-Fil, etc.)
- Daily Masnun Duas (supplications)
- Arabic letter (Harf) pronunciation practice

### Teachers:
- **Hafez Salek bin Hosen** - Course Instructor
- **Hafez Mawlana Osama Tamim** - Supervisor (Principal, Darul Hikmah Academy)
- **Hafez Mawlana Mufti Osman Zubaer** - Supervisor (Principal, Darun Najat Madrasa)

## Development

```bash
# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint
```

## License

MIT

---

**Note:** This is a paid course. Payment is handled manually through bKash (no integrated payment gateway).
