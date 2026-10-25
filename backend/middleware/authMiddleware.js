
const jwt = require("jsonwebtoken");

function verificarToken(req, res, next) {
  const authorization = req.headers.authorization;

  if (!authorization || !authorization.startsWith("Bearer ")) {
    return res.status(401).json({
      mensaje: "Debes iniciar sesión para acceder.",
    });
  }

  const token = authorization.split(" ")[1];

  try {
    if (!process.env.JWT_SECRET) {
      throw new Error("JWT_SECRET no está configurado.");
    }

    const datos = jwt.verify(token, process.env.JWT_SECRET);

    req.usuario = {
      id: datos.id,
      rol: datos.rol,
    };

    next();
  } catch (error) {
    return res.status(401).json({
      mensaje: "Token inválido o expirado. Inicia sesión nuevamente.",
    });
  }
}

function soloAdmin(req, res, next) {
  if (!req.usuario || req.usuario.rol !== "admin") {
    return res.status(403).json({
      mensaje: "No tienes permisos para realizar esta acción.",
    });
  }

  next();
}

module.exports = {
  verificarToken,
  soloAdmin,
};
