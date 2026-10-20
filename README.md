# Progree Frontend Development Internship

This repository contains independent web development projects completed as part of my **Frontend Development Internship at Progree**. Each task is maintained in its own folder.

## Task 2: Sip - Smart Water Bottle Landing Page

A responsive marketing landing page for a fictional smart water bottle, built with HTML5 and CSS3.

**Features**

- Full-width hero section with background image and overlay text
- Features and pricing sections using Flexbox
- Responsive layouts for desktop, tablet, and mobile
- Smooth scrolling, gradients, and hover effects
- CSS variables and responsive breakpoints

**Technologies:** HTML5, CSS3, Flexbox, media queries

**Run locally:** Open `Task2-marketing-landing-page/index.html` in a modern web browser. No installation required.

## Task 3: Weather Portal

A responsive React application that lets users search for a city and view current weather using the OpenWeatherMap Current Weather API.

**Features**

- Search by city name
- Display temperature, weather conditions, feels-like temperature, humidity, and wind speed
- Loading states and error handling
- Responsive layout with a dark theme and yellow accents

**Technologies:** React 18, JavaScript, Vite, CSS3, OpenWeatherMap API

**Run locally:**

1. Install Node.js and npm.
2. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/).
3. Open a terminal in `Task3-weather-portal-application/` and run:
  ```
  npm install
  npm run dev
  ```
4. Configure your API key in `src/App.jsx` using the existing placeholder.
5. Open the local URL displayed in the terminal.

**Production build:** Run `npm run build` inside the Task 3 folder.

**Security:** Never commit a real API key to a public repository.

## Task 4: Enterprise Analytical Administration Portal

A responsive React analytics dashboard featuring interactive charts, regional filtering, and a searchable, sortable product data table.

**Features**

- Monthly revenue and profit trend charts
- Revenue comparisons by product using Recharts
- Regional filtering for dashboard data
- Case-insensitive search across product names, categories, and regions
- Multi-column table sorting
- Light and dark themes
- Client-side navigation with React Router
- Responsive design and Vercel routing support

**Technologies:** React 19, React Router 7, Recharts 3, Vite 8, CSS

**Run locally:**

1. Open a terminal in `Task4-enterprise-analytical-administration-portal/`.
2. Install dependencies and start the development server:
  ```
  npm install
  npm run dev
  ```
3. Open the local URL displayed in the terminal.

**Production build:** Run `npm run build` inside the Task 4 folder.

**Data:** Uses local mock data; no backend, API keys, or external API requests are required.

## Repository Structure

```
Progree-internship/
├── README.md
├── Task2-marketing-landing-page/
│   ├── index.html
│   ├── style.css
│   └── hero-img.png
├── Task3-weather-portal-application/
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   └── src/
│       ├── App.jsx
│       ├── index.css
│       ├── main.jsx
│       └── components/
│           ├── SearchBox.jsx
│           └── WeatherCard.jsx
└── Task4-enterprise-analytical-administration-portal/
    ├── README.md
    ├── package.json
    ├── package-lock.json
    ├── index.html
    ├── vite.config.js
    ├── eslint.config.js
    ├── vercel.json
    └── src/
        ├── App.jsx
        ├── data.js
        ├── main.jsx
        ├── styles.css
        ├── components/
        │   └── Navbar.jsx
        └── pages/
            ├── Dashboard.jsx
            └── DataTable.jsx
```

## Author

**Mughees Alvi**  
Frontend Development Intern at Progree

