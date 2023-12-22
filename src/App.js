import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Leaderboard } from "./components/pages/Leaderboard";
import { Stocks } from "./components/pages/Stocks";
import { Home } from "./components/pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/stocks" element={<Stocks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
