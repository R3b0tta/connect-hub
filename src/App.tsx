import React from 'react';
import { Home } from "./pages/Home";
import { FormPage } from "./pages/FormPage";
import "./scss/app.scss"
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form" element={<FormPage />} />
      </Routes>
    </div>
  );
}

export default App;
