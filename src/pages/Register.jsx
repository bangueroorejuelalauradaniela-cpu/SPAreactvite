
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Register() {
  const { registro } = useAuth();
  const navigate = useNavigate();

  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmarPassword, setConfirmarPassword] = useState("");
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMensaje("");

    if (password.length < 8) {
      setError("La contraseña debe tener mínimo 8 caracteres.");
      return;
    }

    if (password !== confirmarPassword) {
      setError("Las contraseñas no coinciden.");
      return;
    }

    setCargando(true);

    try {
      await registro(nombre, email, password);
      setMensaje("¡Cuenta creada correctamente!");
      setTimeout(() => navigate("/login"), 1200);
    } catch (err) {
      setError(
        err.response?.data?.mensaje ||
        "No se pudo crear la cuenta."
      );
    } finally {
      setCargando(false);
    }
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg"
      >
        <h1 className="mb-2 text-3xl font-bold text-primary">
          Crear cuenta
        </h1>

        <p className="mb-6 text-foreground/70">
          Únete a Egeobutterfly.
        </p>

        <label className="mb-2 block">Nombre completo</label>
        <input
          type="text"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Tu nombre"
        />

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
          minLength={8}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Mínimo 8 caracteres"
        />

        <label className="mb-2 block">Confirmar contraseña</label>
        <input
          type="password"
          required
          value={confirmarPassword}
          onChange={(e) => setConfirmarPassword(e.target.value)}
          className="mb-4 w-full rounded-lg border p-3"
          placeholder="Repite tu contraseña"
        />

        {error && (
          <p className="mb-4 text-sm text-red-600">{error}</p>
        )}

        {mensaje && (
          <p className="mb-4 text-sm text-green-600">{mensaje}</p>
        )}

        <button
          type="submit"
          disabled={cargando}
          className="w-full rounded-lg bg-primary p-3 font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-50"
        >
          {cargando ? "Registrando..." : "Crear cuenta"}
        </button>

        <p className="mt-5 text-center text-sm">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="font-semibold text-primary">
            Inicia sesión
          </Link>
        </p>
      </form>
    </main>
  );
}
