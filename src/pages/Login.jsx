
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setCargando(true);

    try {
      await login(email, password);
      navigate("/catalogo");
    } catch (err) {
      setError(
        err.response?.data?.mensaje ||
        "No se pudo iniciar sesión."
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Bienvenida a Egeobutterfly
        </h1>

        <p className="mb-6 text-foreground/70">
          Inicia sesión para continuar.
        </p>

        <label className="mb-2 block">Correo electrónico</label>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="correo@ejemplo.com"
        />

        <label className="mb-2 block">Contraseña</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Tu contraseña"
        />

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        <button
          type="submit"
          disabled={cargando}
          className="w-full rounded-lg bg-primary p-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {cargando ? "Ingresando..." : "Iniciar sesión"}
        </button>

        <p className="mt-5 text-center text-sm">
          ¿No tienes cuenta?{" "}
          <Link to="/registro" className="font-semibold text-primary">
            Regístrate aquí
          </Link>
        </p>

        <Link
          to="/"
          className="mt-4 block text-center text-sm text-primary hover:underline"
        >
          Volver al inicio
        </Link>
      </form>
    </main>
  );
}
