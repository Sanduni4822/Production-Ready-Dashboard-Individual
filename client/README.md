
# MERN Stack Frontend (React) Developer Task

## Overview

This project implements a **production-ready dashboard UI** using React with routing, simulated authentication, reusable components, and SEO optimization using React Helmet, following **clean architecture and atomic design principles**.

## Objectives

* Professional dashboard UI with **React.js**
* **Routing** with protected routes (`react-router-dom`)
* Simulated token-based authentication
* **Reusable components**: Button, Card, Modal, InputField
* SEO with **dynamic titles** (`react-helmet`)
* **Atomic/component folder separation** for maintainability

## Tech Stack

* React.js + Vite
* react-router-dom
* react-helmet
* Tailwind CSS (or CSS Modules)
* LocalStorage (token simulation)
* Prettier & ESLint (recommended)

## Folder Structure

```
src/
  components/     // Reusable components (Button, Card, Modal, InputField)
  layouts/        // Navbar, Sidebar
  pages/          // Dashboard, Profile, Settings, Login
  routes/         // ProtectedRoute logic
  App.jsx         // App entry with routing
  main.jsx       // Main entry
```

## Features

* **Login Page:** Dummy login with LocalStorage token
* **Dashboard:** Displays welcome message, user stats, recent activity (dummy JSON)
* **Profile & Settings Pages:** Accessible only after login
* **Sidebar & Navbar:** Fully responsive and collapsible
* **Reusable Components:** Button, Card, Modal, InputField
* **SEO:** Dynamic page titles with `react-helmet`

## Local Setup

Clone the repo:

```bash
git clone <repo-link>
cd <repo-folder>
```

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Access: `http://localhost:5173`

## Live Demo

Deployed on Vercel:
 [Live Demo](vercel-link)

## Deliverables

* [x] GitHub repository with complete code
* [x] Hosted link (Vercel)
* [x] Screenshot of folder structure
* [x] Peer code review request
* [x] Industry-level `README.md`

## License

MIT License © 2025 Sanduni Wathsala

## Contributing

PRs and suggestions are welcome for improvements.

## Contact

For questions or clarifications, reach out via email or open an issue in the repo.

---

> **This project demonstrates professional React structure, reusable components, routing, and SEO best practices to prepare you for industry-level React development.**
