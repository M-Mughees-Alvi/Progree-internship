# Weather Portal

A simple, responsive weather app built with React. Search for any city and see its current weather in real time, using the OpenWeatherMap API.

Built as Task 3 of the Progree Frontend Development Internship.

## Features

- Search weather by city name (for example `Faisalabad` or `Faisalabad, PK`)
- Shows temperature, weather description, feels-like temperature, humidity and wind speed
- Loading message while data is being fetched
- Clear error messages for an invalid API key, a city that is not found, and network problems
- Fully responsive layout for phones, tablets and desktops
- Dark theme with yellow accents, with all colors kept in CSS variables

## Tech Stack

- React 18
- Vite
- OpenWeatherMap Current Weather API
- Plain CSS

## Getting Started

### 1. Requirements

- Node.js (LTS version) from [nodejs.org](https://nodejs.org)
- A free OpenWeatherMap API key

### 2. Get a free API key

1. Sign up at [openweathermap.org](https://openweathermap.org)
2. Verify your email
3. Open your username menu, then **My API keys**
4. Copy the default key

A new key can take from about 10 minutes up to 2 hours to activate. Until then the app shows an "Invalid API key" message.

### 3. Install and run

```bash
npm install
npm run dev
```

Open the link shown in the terminal (usually `http://localhost:5173`).

### 4. Add your API key

Open `src/App.jsx` and replace the placeholder:

```js
const apiKey = "YOUR_OPENWEATHERMAP_API_KEY";
```

Do not push your real key to a public GitHub repository.

## Project Structure

```text
Task3-weather-portal-application/
|-- src/
|   |-- components/
|   |   |-- SearchBox.jsx
|   |   `-- WeatherCard.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
|-- package-lock.json
|-- vite.config.js
|-- eslint.config.js
`-- .gitignore
```

## How It Works

1. The user types a city and submits the form in `SearchBox`.
2. `App.jsx` calls the OpenWeatherMap endpoint with `fetch` and `async/await`:

   ```
   https://api.openweathermap.org/data/2.5/weather?q={city}&units=metric&appid={API key}
   ```

3. While waiting, a loading message is shown.
4. If the request fails, an error message is shown. Otherwise the result is passed to `WeatherCard`.