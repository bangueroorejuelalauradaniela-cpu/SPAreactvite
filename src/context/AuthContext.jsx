
import { createContext, useContext, useState, useEffect } from "react";
import api from "../services/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [usuario, setUsuario] = useState(null);
  const [token, setToken] = useState(
    localStorage.getItem("token")
  );
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const verificarSesion = async () => {
      if (!token) {
        setCargando(false);
        return;
      }

      try {
        const respuesta = await api.get("/auth/perfil", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUsuario(respuesta.data.usuario);
      } catch (error) {
        localStorage.removeItem("token");
        setToken(null);
        setUsuario(null);
      } finally {
        setCargando(false);
      }
    };

    verificarSesion();
  }, [token]);

  const login = async (email, password) => {
    const respuesta = await api.post("/auth/login", {
      email,
      password,
    });

    const nuevoToken = respuesta.data.token;

    localStorage.setItem("token", nuevoToken);
    setToken(nuevoToken);
    setUsuario(respuesta.data.usuario);

    return respuesta.data;
  };

  const registro = async (nombre, email, password) => {
    const respuesta = await api.post("/auth/register", {
      nombre,
      email,
      password,
    });

    return respuesta.data;
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUsuario(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario,
        token,
        cargando,
        login,
        registro,
        logout,
        autenticado: Boolean(token && usuario),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
