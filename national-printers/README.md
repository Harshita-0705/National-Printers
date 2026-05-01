# Original National Printers — Full Stack Website

A full-stack web application for **Original National Printers** (Mandap Decoration), Ichalkaranji.

## Tech Stack

- **Frontend**: React 18 + Vite + CSS Modules
- **Backend**: Node.js + Express
- **Database**: MongoDB (Mongoose)

## Project Structure

```
national-printers/
├── frontend/          # React app (Vite)
│   └── src/
│       ├── components/   # Navbar, FloatingWhatsApp
│       ├── sections/     # Hero, About, Services, Gallery, WhyUs, Contact, Footer
│       └── pages/        # Home, Admin
└── backend/           # Express API
    ├── models/        # Inquiry schema
    ├── routes/        # /api/inquiries
    └── server.js
```

## Getting Started

### 1. Backend

```bash
cd backend
npm install
cp .env.example .env   # add your MONGO_URI
npm run dev            # runs on http://localhost:5000
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev            # runs on http://localhost:5173
```

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/inquiries | Submit new inquiry |
| GET | /api/inquiries | List all inquiries (admin) |
| PATCH | /api/inquiries/:id | Update inquiry status |
| DELETE | /api/inquiries/:id | Delete inquiry |

## Pages

- `/` — Main website (Hero, About, Services, Gallery, Why Us, Contact + Map)
- `/admin` — Admin dashboard to manage inquiries

## Add Your Images

Place your decoration photos in `frontend/public/images/`:
- `banner.jpeg`, `ceiling1.jpeg`, `mandap1.jpeg`
- `blue-ceiling.jpeg`, `red-ceiling.jpeg`, `white-mandap.jpeg`
- `red-flower.jpeg`, `pink-canopy.jpeg`, `shop.jpeg`
