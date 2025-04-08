# Usa una imagen base de Node.js
FROM node:16

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Instala nodemon globalmente
RUN npm install -g nodemon

# Copia los archivos necesarios para instalar las dependencias
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos del proyecto al contenedor
COPY . .

# Comando para iniciar la aplicación
CMD ["npm", "start"]