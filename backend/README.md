
# NextGen Backend

## Descripción
Este es el backend del proyecto NextGen, una plataforma educativa que permite a los usuarios obtener capítulos y contenidos personalizados según su perfil. El backend está construido con Node.js, Express, y MongoDB.

## Instalación

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/nextgen.git
cd nextgen/backend
```

### 2. Instalar dependencias

Instala las dependencias necesarias:

```bash
npm install
```

### 3. Configurar la conexión a MongoDB

Asegúrate de que MongoDB esté corriendo en tu máquina local. Si no tienes MongoDB instalado, puedes seguir las instrucciones en [MongoDB Documentation](https://www.mongodb.com/docs/manual/installation/).

Para iniciar MongoDB, ejecuta el siguiente comando en una nueva terminal:

```bash
mongod
```

El servidor MongoDB debería estar corriendo en `localhost:27017`. Puedes ajustar la URL de conexión en `server.js` si usas otra configuración.

### 4. Poblar la base de datos

Utiliza el archivo `populate.js` para rellenar la base de datos con los datos iniciales (capítulos, preguntas, perfiles).

```bash
node populate.js
```

Esto añadirá los datos iniciales a la base de datos MongoDB.

### 5. Iniciar el servidor backend

Ejecuta el siguiente comando para iniciar el servidor backend:

```bash
node server.js
```

El servidor estará corriendo en `http://localhost:5000`.

## Estructura del Código

- `server.js`: Archivo principal que configura el servidor Express y las rutas de la API.
- `models/`: Carpeta que contiene los modelos de MongoDB (capítulos, perfiles, preguntas).
- `populate.js`: Script para poblar la base de datos MongoDB con datos iniciales.
- `routes/`: Carpeta que contiene las rutas de la API para manejar las solicitudes del frontend.

## Rutas principales de la API

- **GET** `/api/chapters`: Obtener todos los capítulos o filtrar por perfil.
- **GET** `/api/chapters/:id`: Obtener un capítulo específico por su ID.
- **GET** `/api/profiles`: Obtener todos los perfiles de usuario.
