import React, { useState } from "react";
import "./styles/Dashboard.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };
  return (
    <>
      <div className={`dashboard ${isDarkMode ? "dark-theme" : "light-theme"}`}>
        <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <div className="dashboard-body">
          <Sidebar />
          <MainContent />
        </div>
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default App;
