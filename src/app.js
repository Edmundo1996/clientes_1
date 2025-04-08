import bodyParser from "body-parser";
import express from "express";
import clientRoutes from "./routes/clientRoutes.js";
import swaggerSpec from "./api-docs.js";
import swaggerUI from "swagger-ui-express";
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json());
app.use("/app/clients", clientRoutes);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

// Configuración del puerto
const PORT = process.env.PORT || 5002; // Usa el puerto proporcionado por Railway o 5002 como predeterminado

// Inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});