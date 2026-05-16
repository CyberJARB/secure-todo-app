// Importa el framework Express para crear La API web
const express = require("express");

// Helmet a¤adecabeceras HTTP seguras para proteger la aplicacion 
const helmet = require("helmet");

// MiddLeware para Limitar peticiones y evitar abuso/bruteforce
const rateLimit = require("express-rate-limit");

// Joi se usa para validar entradas del usuario
const Joi = require("joi");

// Carga variables de entorno desde archivo .env
require("dotenv").config();


// Inicializa la aplicacion Express
const app = express();

// Define el puerto desde variable de entorno o usa 3000 por defecto
const PORT = process.env.PORT || 3000;

// MiddLeware de seguridad

// Anade cabeceras seguras como:
// X-Content-Type-Options
// Content-Security-Policy
// X-Frame-Options

app.use(helmet());



// Permite recibir JSON en peticiones HTTP
app.use(express.json());

// Limita peticiones para prevenir abuso
app.use(
  rateLimit({
    // Ventana de tiempo: 15 minutos & maximo 100 peticipones por IP
    windowMs: 15 * 60 * 1000,
    max: 100,
    message: { error: "TOO many requests" }
  })
);


// validacion segura de datos & Define que formato debe tener una tarea
const taskSchema = Joi.object({
  // titulo obligatorio, minimo 1 caracter, maximo 100
  title: Joi.string().min(1).max(100).required()
});

// Base de datos tempotal en memoria 6& // (Solo para esta practica)
let tasks = [];

// Rutas principal
app.get("/", (req, res) => {
  res.json({
    message: "Secure To-Do App funcionando"
  });
});

// endpoint de salud para monitorización
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});


// Obtener todas las tareas
app.get("/tasks", (req, res) => {
  res.json(tasks);
});


// Crear nueva tarea 
app.post("/tasks", (req, res) => {
  // Valida los datos recibidos & si hay error de validacion
  const { error } = taskSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      error: error.details[0].message
    });
  }

  // Crear objeto para tarea
  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  // Guardar en memoria
  tasks.push(task);

  // Responder con exito
  res.status(201).json(task);
});

// Arrancar servidor

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor seguro ejecutandose en puerto ${PORT}`);
  });
}

module.exports = app;
