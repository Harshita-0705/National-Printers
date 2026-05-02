# Original National Printers — Mandap Decoration

🌐 **Live Site:** [https://national-printers-3zlj.vercel.app](https://national-printers-3zlj.vercel.app)

A full-stack web application for **Original National Printers** — a Mandap Decoration business in Ichalkaranji, Maharashtra.

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite + CSS Modules |
| Backend | Node.js + Express |
| Database | MongoDB (Mongoose) |
| Deployment | Vercel (Frontend) · Render (Backend) |

---

## Features

- Mobile responsive design
- Hero section with real mandap background photo
- About section with business pamphlet image
- Contact & Location with Google Maps embed
- Services section (6 decoration categories)
- Photo Gallery (11 real decoration photos)
- Why Choose Us section
- Floating WhatsApp button
- Admin dashboard at `/admin` to manage inquiries
- REST API for booking inquiries (Express + MongoDB)

---

## Project Structure

```
national-printers/
├── frontend/                  # React + Vite
│   ├── public/images/         # All decoration photos
│   └── src/
│       ├── components/        # Navbar, FloatingWhatsApp
│       ├── sections/          # Hero, About, Contact, Services, Gallery, WhyUs, Footer
│       └── pages/             # Home, Admin
└── backend/                   # Express REST API
    ├── models/                # Inquiry schema (MongoDB)
    ├── routes/                # /api/inquiries
    └── server.js
```

---

## Run Locally

### Frontend
```bash
cd national-printers/frontend
npm install
npm run dev
# http://localhost:5173
```

### Backend
```bash
cd national-printers/backend
npm install
cp .env.example .env    # add your MONGO_URI
npm run dev
# http://localhost:5000
```

---

## API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | /api/inquiries | Submit new inquiry |
| GET | /api/inquiries | List all (admin) |
| PATCH | /api/inquiries/:id | Update status |
| DELETE | /api/inquiries/:id | Delete inquiry |

---

## Business Info

📍 12/270 Bunglow Road, Opposite IM Fit Club Galli, Ichalkaranji, Maharashtra 416115
📞 9325832543
🕐 Mon–Sun: 9:00 AM – 9:00 PM
