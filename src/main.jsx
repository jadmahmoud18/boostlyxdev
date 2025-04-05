import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/public/*" element={<h1>Not Allowed</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  </StrictMode>
);
