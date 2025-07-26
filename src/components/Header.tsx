import { useState, useEffect } from "react";

const Header: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    console.log("Dark mode preference changed:", isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <header>
      <h1>My Portfolio</h1>
      <button onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
    </header>
  );
};

export default Header;