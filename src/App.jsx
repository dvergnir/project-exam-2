import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Venue from "./pages/Venues";
import Login from "./pages/Login";

import { Routes, Route } from "react-router-dom";
import { useAdobeFonts } from "react-adobe-fonts";
import Register from "./pages/Register";

function App() {
  const projectId = "txs7jyy";

  const fontsLoaded = useAdobeFonts(projectId);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/venues/:id" element={<Venue />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
