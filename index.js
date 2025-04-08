import app from './src/app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5002; // Usa el puerto dinámico proporcionado por Railway o 5002 como predeterminado

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});