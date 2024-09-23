
# NextGen - Plataforma de Educación Familiar

NextGen es una plataforma diseñada para ayudar a las familias hispanohablantes a educar a sus hijos para alcanzar una madurez óptima. El proyecto está basado en el stack MERN (MongoDB, Express, React y Node.js) y utiliza una serie de preguntas para determinar el perfil del usuario y ofrecer contenido educativo personalizado basado en el perfil generado.

## Requisitos Previos

- **Node.js** (v14 o superior)
- **npm** (gestor de paquetes de Node.js)
- **MongoDB** (corriendo en `localhost:27017`)

## Configuración del Proyecto

Sigue estos pasos para instalar y configurar el proyecto en tu máquina local.

### 1. Clonar el Repositorio

Clona este repositorio en tu máquina local o descarga los archivos correspondientes.

```bash
git clone https://github.com/usuario/nextgen.git
cd nextgen
```

### 2. Instalar las Dependencias

Ejecuta el siguiente comando tanto en la carpeta del backend como en la carpeta del frontend para instalar todas las dependencias necesarias.

#### Backend:

```bash
cd nextgen_backend
npm install
```

#### Frontend:

```bash
cd ../nextgen_frontend
npm install
```

### 3. Configurar la Base de Datos MongoDB

Asegúrate de que MongoDB esté corriendo en tu máquina. Si no tienes MongoDB instalado, puedes seguir las instrucciones en [MongoDB Documentation](https://www.mongodb.com/docs/manual/installation/).

Para iniciar MongoDB, ejecuta el siguiente comando en una nueva terminal:

```bash
mongod
```

El servidor MongoDB debería estar corriendo en `localhost:27017`.

### 4. Poblar la Base de Datos

Este proyecto incluye un script para insertar preguntas, perfiles y capítulos en la base de datos. Ejecuta el siguiente script para poblar la base de datos MongoDB con el contenido inicial.

#### Ejecución del script `populate.js`:

1. Navega a la carpeta del backend:
   
   ```bash
   cd nextgen_backend
   ```

2. Ejecuta el siguiente comando para poblar la base de datos:

   ```bash
   node populate.js
   ```

Este script insertará las preguntas, los perfiles de usuario (Globalizado, Conservador, Activista Social) y los capítulos asociados a cada perfil.

### 5. Iniciar el Servidor Backend

Después de haber configurado la base de datos, puedes iniciar el servidor backend con el siguiente comando:

```bash
node server.js
```

El servidor backend estará corriendo en `http://localhost:5001`.

### 6. Iniciar el Servidor Frontend

En otra terminal, navega a la carpeta del frontend y ejecuta el siguiente comando para iniciar la aplicación React:

```bash
npm start
```

La aplicación frontend estará disponible en `http://localhost:3000`.

## Estructura del Proyecto

- **Backend (Node.js + Express)**: Maneja las APIs REST para preguntas, perfiles y capítulos. También contiene la lógica para determinar el perfil del usuario basado en sus respuestas.
- **Frontend (React)**: Interfaz de usuario que permite a los usuarios contestar preguntas, ver su perfil y acceder a capítulos personalizados.

### Principales Archivos

- `server.js`: Archivo principal del servidor que maneja la lógica del backend y la conexión a MongoDB.
- `populate.js`: Script para poblar la base de datos MongoDB con preguntas, perfiles y capítulos.
- `App.js`: Componente principal de React que gestiona las rutas de la aplicación.
- `QuestionForm.js`: Componente que muestra el formulario para que los usuarios contesten las preguntas.
- `ProfileResult.js`: Componente que muestra el perfil generado.
- `ChapterSelection.js`: Componente que permite seleccionar los capítulos disponibles.

## Endpoints Importantes

### API de Preguntas
- **GET** `/api/questions`: Obtener todas las preguntas.
- **POST** `/api/questions`: Crear una nueva pregunta.

### API de Perfiles
- **GET** `/api/profiles`: Obtener todos los perfiles.
- **POST** `/api/profiles`: Crear un nuevo perfil.

### API de Capítulos
- **GET** `/api/chapters`: Obtener todos los capítulos.
- **POST** `/api/chapters`: Crear un nuevo capítulo.

### API para Enviar Respuestas
- **POST** `/api/submit-answers`: Enviar respuestas de preguntas y recibir el perfil generado.

## Consideraciones Finales

Una vez que la base de datos esté poblada y ambos servidores (backend y frontend) estén corriendo, podrás acceder a la plataforma desde el navegador (`http://localhost:3000`).

Si tienes problemas con la conexión de MongoDB o algún otro aspecto del proyecto, asegúrate de verificar los logs del servidor en busca de errores.

## Próximos Pasos

1. Agregar más preguntas, perfiles y capítulos si es necesario.
2. Mejorar el diseño de la interfaz del frontend.
3. Agregar funcionalidad de autenticación si es necesario.
4. Desplegar la aplicación en producción (por ejemplo, en Heroku para el backend y Vercel para el frontend).

## Contribuciones

Si deseas contribuir al proyecto, no dudes en abrir una **issue** o enviar un **pull request**. ¡Toda contribución es bienvenida!

---

¡Gracias por usar NextGen! 🎓
