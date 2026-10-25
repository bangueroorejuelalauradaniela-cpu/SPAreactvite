
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const { verificarToken } = require("../middleware/authMiddleware");

const router = express.Router();

// REGISTRO
router.post("/register", async (req, res) => {
  try {
    const { nombre, email, password } = req.body;

    if (
      typeof nombre !== "string" ||
      !nombre.trim() ||
      typeof email !== "string" ||
      !email.trim() ||
      typeof password !== "string" ||
      password.length < 8
    ) {
      return res.status(400).json({
        mensaje: "Ingresa nombre, correo y contraseña de al menos 8 caracteres.",
      });
    }

    const correo = email.trim().toLowerCase();

    const existente = await User.findOne({ email: correo });

    if (existente) {
      return res.status(409).json({
        mensaje: "Este correo ya está registrado.",
      });
    }

    const passwordHash = await bcrypt.hash(password, 10);

    const usuario = await User.create({
      nombre: nombre.trim(),
      email: correo,
      password: passwordHash,
    });

    res.status(201).json({
      mensaje: "Usuario registrado correctamente.",
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({
        mensaje: "Este correo ya está registrado.",
      });
    }

    console.error("Error en el registro:", error.message);

    res.status(500).json({
      mensaje: "No se pudo registrar el usuario.",
    });
  }
});

// INICIO DE SESIÓN
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      typeof email !== "string" ||
      typeof password !== "string" ||
      !email.trim() ||
      !password
    ) {
      return res.status(400).json({
        mensaje: "Ingresa tu correo y contraseña.",
      });
    }

    const usuario = await User.findOne({
      email: email.trim().toLowerCase(),
    });

    if (!usuario) {
      return res.status(401).json({
        mensaje: "Correo o contraseña incorrectos.",
      });
    }

    const passwordValida = await bcrypt.compare(
      password,
      usuario.password
    );

    if (!passwordValida) {
      return res.status(401).json({
        mensaje: "Correo o contraseña incorrectos.",
      });
    }

    if (!process.env.JWT_SECRET) {
      throw new Error("Falta configurar JWT_SECRET en .env");
    }

    const token = jwt.sign(
      {
        id: usuario._id.toString(),
        rol: usuario.rol,
      },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.json({
      mensaje: "Inicio de sesión exitoso.",
      token,
      usuario: {
        id: usuario._id,
        nombre: usuario.nombre,
        email: usuario.email,
        rol: usuario.rol,
      },
    });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error.message);

    res.status(500).json({
      mensaje: "No se pudo iniciar sesión.",
    });
  }
});

const { verificarToken } = require("../middleware/authMiddleware");

router.get("/perfil", verificarToken, async (req, res) => {
  try {
    const usuario = await User.findById(req.usuario.id).select(
      "-password"
    );

    if (!usuario) {
      return res.status(404).json({
        mensaje: "Usuario no encontrado.",
      });
    }

    res.json({
      mensaje: "Acceso autorizado.",
      usuario,
    });
  } catch (error) {
    res.status(500).json({
      mensaje: "No se pudo consultar el perfil.",
    });
  }
});


module.exports = router;
