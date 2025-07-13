
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
  components/             # Reusable UI components
    Button/               # Custom button component
    Card/                 # Info/stat card components
    InputField/           # Input field with label & validation
    Modal/                # Modal dialog component
    Navbar/               # Top navigation bar
    Sidebar/              # Responsive sidebar
    PrivateRoute.jsx      # Auth-protected route logic

  context/
    UserContext.jsx       # React Context for global user state

  layouts/                # Layout wrappers
    MainLayout.jsx        # Page layout with navbar + sidebar

  pages/                  # Main pages
    Dashboard.jsx         # User dashboard page
    Profile.jsx           # User profile page
    Settings.jsx          # User settings page
    Login.jsx             # Login page

  routes/
    AppRoutes.jsx         # Route definitions

  services/
    api.jsx               # Axios instance
    authService.js        # Login/auth-related API calls
    userService.js        # User-related API functions

  styles/
    index.css             # Tailwind base styles + custom styles

  App.jsx                 # Root component (routing defined here)
  main.jsx                # React entry point (renders <App />)

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
git clone https://github.com/Sanduni4822/Production-Ready-Dashboard-Individual.git
cd Production-Ready-Dashboard-Individual
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

## CI/CD Integration

### GitHub Actions – Continuous Integration

This project uses **GitHub Actions** to automate the build process on every push to the `main` branch.

#### Workflow Details:

- **Workflow Path:** `.github/workflows/deploy.yml`
- **Working Directory:** `client/`
- **Handled Steps:**
  - Checkout the code
  - Install dependencies (`npm install`)
  - Build the React app (`npm run build`)

#### Sample Workflow Snippet:
```yaml
defaults:
  run:
    working-directory: ./client
``` 
## Live Demo

### Deployed on Vercel (Continuous Deployment)

🌐 **Live Demo:** [Production-Ready Dashboard](https://production-ready-dashboard-individu.vercel.app/)

## Project Folder Structure (Screenshots)

Below are the visual representations of the project's folder structure:

| Screenshot | Description |
|------------|-------------|
| ![Folder Structure 1](docs/folder-structure1.png) | Base `src/` structure including core folders up to `routes/` |
| ![Folder Structure 2](docs/folder-structure2.png) | `routes/` folder expanded showing `vercel.json` and configs |
| ![Folder Structure 3](docs/folder-structure3.png) | `components/` folder expanded showing internal components |
| ![Folder Structure 4](docs/folder-structure4.png) | Other folders (`context/`, `services/`, etc.) expanded |

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
