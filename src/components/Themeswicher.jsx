import { useState } from "react";

function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const appstyles = {
    backgroundColor: darkMode ? "#222" : "#f4f4f4",
    Color: darkMode ? "#fff" : "#000",
    paddind: "2rem",
    textAlign: "center",
    borderRadius: "10px",
  };
  return (
    <div style={appstyles}>
      <h2>{darkMode ? "Dark Mose" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>
        switch to {darkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
}

export default ThemeToggle;
