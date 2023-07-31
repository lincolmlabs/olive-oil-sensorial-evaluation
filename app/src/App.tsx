import "./app.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { SampleEvaluation, Login } from "./pages";
import { NotFound } from "./NotFound";

function App() {
  const [access, setAcces] = useState("");

  if (!access) {
    return <Login setAccess={setAcces} />
  }

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
