import { useState, useEffect } from "react";
import { LuSun, LuMoonStar } from "react-icons/lu";

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
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <LuSun /> : <LuMoonStar />}
      </button>
    </header>
  );
};

export default Header;