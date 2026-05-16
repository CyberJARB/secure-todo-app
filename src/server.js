const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const Joi = require("joi");
if (!process.env.API_KEY  || !process.env.PORT) {
  requireApiKey("dotenv").config();
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet());
app.use(express.json());

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  message: { error: "Too many requests" }
});

app.use(limiter);

function requireApiKey(req, res, next) {
  const apiKey = req.header("x-api-key");

  if (!apiKey || apiKey !== process.env.API_KEY) {
    securityLog("Unauthorized access attempt", req);

    return res.status(401).json({
      error: "Unauthorized"
    });
  }

  next();
}

function securityLog(event, req) {
  const timestamp = new Date().toISOString();
  const ip = req.ip || req.connection.remoteAddress;
  console.log(`[SECURITY] ${timestamp} | ${event} | IP: ${ip}`);
}

const taskSchema = Joi.object({
  title: Joi.string().min(1).max(100).required()
});

let tasks = [];

app.get("/", (req, res) => {
  res.json({
    message: "Secure To-Do App funcionando"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    status: "healthy",
    uptime: process.uptime()
  });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", requireApiKey, (req, res) => {
  const { error } = taskSchema.validate(req.body);

  if (error) {
    securityLog("Invalid task creation attempt", req);
    return res.status(400).json({
      error: error.details[0].message
    });
  }

  const task = {
    id: tasks.length + 1,
    title: req.body.title,
    completed: false
  };

  tasks.push(task);
  securityLog(`Task created with id ${task.id}`, req);

  res.status(201).json(task);
});

app.delete("/tasks/:id", requireApiKey, (req, res) => {
  const taskId = Number(req.params.id);

  if (!Number.isInteger(taskId) || taskId <= 0) {
    securityLog("Invalid task deletion attempt", req);
    return res.status(400).json({
      error: "Invalid task id"
    });
  }

  const taskExists = tasks.some((task) => task.id === taskId);

  if (!taskExists) {
    securityLog(`Attempt to delete non-existing task id ${taskId}`, req);
    return res.status(404).json({
      error: "Task not found"
    });
  }

  tasks = tasks.filter((task) => task.id !== taskId);
  securityLog(`Task deleted with id ${taskId}`, req);

  res.status(200).json({
    message: "Task deleted successfully"
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Servidor seguro ejecutandose en puerto ${PORT}`);
  });
}

module.exports = app;