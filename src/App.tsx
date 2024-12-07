import { BrowserRouter, Routes, Route } from "react-router-dom";

import GamePage from "./game/Game.page";
import IndicationsPage from "./indications/Indications.page";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/pins" element={<GamePage />} />
        <Route path="/pins/indications" element={<IndicationsPage />} />
        <Route path="/pins/*" element={<GamePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
