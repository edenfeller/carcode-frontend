import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import ReportOptions from "./ReportOptions";
import Report from "./Report";
import ThankYou from "./ThanksYou";

function ReporterHome() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });

  const [selectedReport, setSelectedReport] = useState(null);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    localStorage.setItem("darkMode", JSON.stringify(newMode));
  };

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
  }, [isDarkMode]);

  return (
    <div className="App flex flex-col h-screen">
      <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      <main className="flex-grow mt-12 p-4 bg-teal-50 dark:bg-slate-800 dark:text-secondary-100">
        {selectedReport ? (
          selectedReport === "thankYou" ? (
            <ThankYou />
          ) : (
            <Report
              title={selectedReport}
              goBack={(page) => setSelectedReport(page)}
            />
          )
        ) : (
          <ReportOptions onSelectReport={setSelectedReport}/>
        )}
      </main>
      <Footer isDarkMode={isDarkMode} />
    </div>
  );
}

export default ReporterHome;
