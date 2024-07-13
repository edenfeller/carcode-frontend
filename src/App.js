import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReporterHome from "./components/ReporterHome";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/report" element={<ReporterHome />} />
      </Routes>
    </Router>
  );
}

export default App;
