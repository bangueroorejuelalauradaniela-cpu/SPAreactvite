
require("dotenv").config();

const mongoose = require("mongoose");
const Product = require("./models/Product");

async function crearProductoInicial() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    const producto = await Product.create({
      nombre: "Loción Técnica Egeobutterfly",
      descripcion: "Producto de prueba para el catálogo Egeobutterfly.",
      precio: 0,
      imagen: "",
      categoria: "Lociones técnicas",
      stock: 10,
    });

    console.log("Producto creado correctamente:");
    console.log(producto);

  } catch (error) {
    console.error("Error al crear el producto:", error.message);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
}

crearProductoInicial();
