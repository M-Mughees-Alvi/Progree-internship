import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import DataTable from "./pages/DataTable";

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(
    function () {
      if (isDark) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    },
    [isDark],
  );

  function handleThemeClick() {
    setIsDark(!isDark);
  }

  return (
    <div>
      <Navbar isDark={isDark} handleThemeClick={handleThemeClick} />

      <div className="page">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/table" element={<DataTable />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
