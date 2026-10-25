
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.json({
    mensaje: "API de Egeobutterfly funcionando correctamente"
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    estado: "servidor activo",
    mongodb: mongoose.connection.readyState === 1
      ? "conectado"
      : "desconectado"
  });
});

const PORT = process.env.PORT || 5000;

async function iniciarServidor() {
  try {
    if (!process.env.MONGODB_URI) {
      throw new Error("Falta configurar MONGODB_URI en el archivo .env");
    }

    await mongoose.connect(process.env.MONGODB_URI);

    console.log("MongoDB Atlas conectado correctamente");

    app.listen(PORT, () => {
      console.log(`Servidor activo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error al iniciar el servidor:", error.message);
    process.exit(1);
  }
}

iniciarServidor();
