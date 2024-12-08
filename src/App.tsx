// import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { delayFallback } from "./generic/utils/delayFallback";
// import { LoaderComponent } from "./generic/components/loader/Loader.component";
// import { LoaderComponent } from "./generic/components/loader/Loader.component";
import GamePage from "./game/primary/Game.page";
import ConceptPage from "./concept/primary/Concept.page";

import "./App.scss";

// const GamePage = lazy(() =>
//   delayFallback(import("./game/primary/Game.page"), 2e3)
// );

// const ConceptPage = lazy(() =>
//   delayFallback(import("./concept/primary/Concept.page"), 1e3)
// );

function App() {
  return (
    // <Suspense fallback={<LoaderComponent />}>
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<GamePage />} />
          <Route path="/pins/*" element={<GamePage />} />
          <Route path="/pins" element={<GamePage />} />
          <Route path="/pins/concept" element={<ConceptPage />} />
        </Routes>
      </BrowserRouter>
    </>
    // </Suspense>
  );
}

export default App;
