
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Catalogo from "./pages/Catalog";
import Productodetail from "./pages/Productodetail";
import Login from "./pages/Login";
import Register from "./pages/Register";

import Layout from "./layout/Layout";
import RutaProtegida from "./components/RutaProtegida";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
          </Route>

         
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />

         
          <Route element={<RutaProtegida />}>
            <Route element={<Layout />}>
              <Route path="/catalogo" element={<Catalogo />} />
              <Route path="/catalogo/:id" element={<Productodetail />} />
              <Route path="/favoritos" element={<Favorites />} />
            </Route>
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
