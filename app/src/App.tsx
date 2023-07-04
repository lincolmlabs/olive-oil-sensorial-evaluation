import "./app.css";
import { Route, Routes } from "react-router-dom";
import { SampleEvaluation } from "./pages";
import { Login } from "./login";
import { NotFound } from "./NotFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SampleEvaluation />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export { App };
