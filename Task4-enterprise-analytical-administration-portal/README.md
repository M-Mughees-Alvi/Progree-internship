# Enterprise Analytical Administration Portal

A responsive React analytics dashboard featuring interactive charts, regional filtering, and a searchable, sortable data table. Developed as **Task 4 of the internship** and maintained as an independent application within the `Progree-internship` repository.

## Features

- **Interactive Dashboard:** Monthly revenue and profit trends, plus revenue comparisons by product using Recharts.
- **Regional Filtering:** Filter dashboard data by region.
- **Searchable Data Table:** Search products by name, category, or region.
- **Column Sorting:** Sort product records by multiple columns.
- **Light/Dark Theme:** Toggle between themes.
- **Client-Side Routing:** Dashboard (`/`) and Data Table (`/table`) using React Router.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Mock Data:** Local data with no backend, API keys, or external API requests.
- **Vercel Routing:** `vercel.json` supports direct access to client-side routes and page refreshes.



## Tech Stack

- React 19
- React Router 7
- Recharts 3
- Vite 8
- CSS
- ESLint



## Project Structure

```
Task4-enterprise-analytical-administration-portal/
├── public/
├── src/
│   ├── components/
│   │   └── Navbar.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   └── DataTable.jsx
│   ├── App.jsx
│   ├── data.js
│   ├── main.jsx
│   └── styles.css
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── vercel.json
└── vite.config.js
```



## Getting Started

**Prerequisites:** Node.js 20.19+ or 22.13+ and npm.

From the repository root, run:

```
cd Task4-enterprise-analytical-administration-portal
npm install
npm run dev
```



### Available Commands


| Command           | Purpose                      |
| ----------------- | ---------------------------- |
| `npm run dev`     | Start the development server |
| `npm run build`   | Create a production build    |
| `npm run preview` | Preview the production build |
| `npm run lint`    | Run ESLint checks            |




## Vercel Deployment

Deploy this application independently from the parent repository:

1. Import the `Progree-internship` GitHub repository into [Vercel](https://vercel.com/).
2. Set **Root Directory** to `Task4-enterprise-analytical-administration-portal`.
3. Select **Vite** as the framework preset.
4. Set the build command to `npm run build` and output directory to `dist`.
5. Deploy. No environment variables or API keys are required.

The `vercel.json` rewrite configuration supports React Router routes such as `/table` when opened directly or refreshed.

## Data

All dashboard and table data is stored locally in `src/data.js`. Update this file to customize the displayed records and chart data.