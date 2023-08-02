import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./NotFound";
import "./app.css";
import { Login, SampleEvaluation } from "./pages";

function App() {
  const [access, setAcces] = useState("");

  if (sessionStorage.getItem("token") == "") {
    return <Login setAccess={setAcces} />
  }

  console.log("access[" + access + "]");

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

