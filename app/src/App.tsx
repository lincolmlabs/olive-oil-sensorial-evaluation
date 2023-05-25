import "./app.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { SampleEvaluation } from "./pages";
import { NotFound } from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SampleEvaluation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export { App };
