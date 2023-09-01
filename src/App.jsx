import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Venue from "./pages/Venues";

import { Routes, Route } from "react-router-dom";
import { useAdobeFonts } from "react-adobe-fonts";

function App() {
  const projectId = "txs7jyy";

  const fontsLoaded = useAdobeFonts(projectId);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venues/:id" element={<Venue />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
