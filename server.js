const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Servir archivos estáticos de la carpeta public
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal que entrega el mapa
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
    console.log(`Servidor de Pizzerías corriendo en el puerto ${PORT}`);
});