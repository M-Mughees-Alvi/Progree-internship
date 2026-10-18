# Progree Frontend Development Internship

This repository contains the web development projects completed as part of my **Frontend Development Internship at Progree**.

## Task 2: Sip - Smart Water Bottle Landing Page

A responsive, single-page marketing website for Sip, a fictional smart water bottle, built with HTML5 and CSS3.

### Features

- Semantic HTML5 structure
- Full-width hero section with background image and overlay text
- Features and pricing sections using Flexbox
- Responsive layouts for desktop, tablet, and mobile
- Smooth scrolling, gradient transitions, card borders, and hover effects
- CSS variables for colors, border radius, and transitions
- Responsive breakpoints at 992px, 768px, and 480px

### Technologies

- HTML5
- CSS3: Flexbox, media queries, CSS variables, and transitions

### Getting Started

1. Open the `Task2-marketing-landing-page/` folder.
2. Keep `index.html`, `style.css`, and `hero-img.png` together.
3. Open `index.html` in a modern web browser.

No installation or build tools are required.

## Task 3: Weather Portal

A responsive React application that lets users search for a city and view current weather using the OpenWeatherMap Current Weather API.

### Features

- Search by city name, such as `Faisalabad` or `Faisalabad, PK`
- Display temperature, weather description, feels-like temperature, humidity, and wind speed
- Loading feedback while weather data is fetched
- Error handling for invalid API keys, unknown cities, and network problems
- Responsive layout for phones, tablets, and desktops
- Dark theme with yellow accents and CSS variables

### Technologies

- React 18
- JavaScript
- Vite
- HTML5 and CSS3
- OpenWeatherMap Current Weather API

### Getting Started

1. Install Node.js (LTS) and npm.
2. Get an API key from [OpenWeatherMap](https://openweathermap.org/).
3. Open a terminal in `Task3-weather-portal-application/` and run:
  ```
  npm install
  ```
4. In `src/App.jsx`, replace the API key placeholder with your own key:
  ```
  const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
  ```
5. Start the development server:
  ```
  npm run dev
  ```
6. Open the local URL shown in the terminal, usually `http://localhost:5173`.

**Security:** Never commit a real API key to a public repository.

### Production Build

Run `npm run build` inside the Task 3 directory. The generated files will be placed in `dist/`.

### How It Works

1. The user enters a city through the `SearchBox` component.
2. `App.jsx` requests weather data using `fetch` and `async/await`.
3. A loading message appears while the request is processed.
4. Successful results are displayed by `WeatherCard`.
5. Appropriate error messages appear if the request fails.

## Repository Structure

```
Progree-internship/
|-- README.md
|-- Task2-marketing-landing-page/
|   |-- index.html
|   |-- style.css
|   `-- hero-img.png
`-- Task3-weather-portal-application/
    |-- README.md
    |-- package.json
    |-- package-lock.json
    |-- index.html
    |-- vite.config.js
    |-- eslint.config.js
    |-- .gitignore
    `-- src/
        |-- App.jsx
        |-- index.css
        |-- main.jsx
        `-- components/
            |-- SearchBox.jsx
            `-- WeatherCard.jsx
```

## Author

**Mughees Alvi**

Frontend Development Intern at Progree.