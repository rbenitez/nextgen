
# NextGen Frontend

## Descripción
Este es el frontend del proyecto NextGen, una plataforma educativa diseñada con React que permite a los usuarios contestar preguntas y obtener contenidos personalizados basados en su perfil.

## Instalación

### 1. Clonar el repositorio

Clona el repositorio en tu máquina local:

```bash
git clone https://github.com/usuario/nextgen.git
cd nextgen/frontend
```

### 2. Instalar dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias:

```bash
npm install
```

### 3. Iniciar el servidor frontend

Para iniciar el servidor de desarrollo de React, ejecuta el siguiente comando:

```bash
npm start
```

Esto abrirá automáticamente la aplicación en tu navegador en `http://localhost:3000`.

## Estructura del Código

- `src/components/`: Contiene los componentes de React como `ChapterSelection`, `ChapterView`, y `ProfileResult`.
- `src/App.js`: Archivo principal que maneja las rutas del frontend.
- `src/App.css`: Archivo de estilos para la aplicación.

## Navegación en la aplicación

- La página de selección de capítulos está disponible en `/chapter-selection`.
- Cada capítulo se puede visualizar en `/chapter/:id`, donde `id` es el identificador único del capítulo.
- La visualización del perfil y la selección de capítulos personalizados está en `/profile`.
