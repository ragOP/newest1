import CongratulationsPage from "./Pages/CongratulationsPage";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/result" element={<CongratulationsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
