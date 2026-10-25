
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: true,
      trim: true,
    },
    descripcion: {
      type: String,
      default: "",
    },
    precio: {
      type: Number,
      required: true,
      min: 0,
    },
    imagen: {
      type: String,
      default: "",
    },
    categoria: {
      type: String,
      default: "Lociones técnicas",
    },
    stock: {
      type: Number,
      default: 0,
      min: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Product", productSchema);
