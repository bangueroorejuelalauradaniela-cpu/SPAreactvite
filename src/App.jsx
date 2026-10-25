import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Catalogo from "./pages/Catalog";
import Layout from "./layout/Layout";
import Productodetail from "./pages/Productodetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
           <Route path="/catalogo/:id" element={<Productodetail />} />
          <Route path="/favoritos" element={<Favorites />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;