# Secure To-Do App

## Author
Jose Andres Ruiz Bautista (CyberJARB)

## Proyecto universitario – Desarrollo Seguro del Ciclo de Vida del Software (S-SDLC)

---

## 1. Introducción

Este proyecto consiste en el desarrollo de una API REST para gestión de tareas (To-Do App), diseñada aplicando principios de Secure Software Development Life Cycle (S-SDLC).

El objetivo es desarrollar una aplicación funcional integrando controles de seguridad desde el diseño hasta el despliegue.

---

## 2. Objetivos del proyecto

- desarrollar una aplicación funcional
- aplicar principios de desarrollo seguro
- integrar controles de seguridad desde el diseño
- identificar amenazas potenciales
- mitigar riesgos comunes en aplicaciones web
- automatizar pruebas y verificaciones
- contenerizar la aplicación de forma segura
- documentar evidencias técnicas
- aplicar prácticas DevSecOps

---

## 3. Tecnologías utilizadas

### Desarrollo
- Node.js
- Express.js

### Seguridad
- Helmet
- express-rate-limit
- Joi
- dotenv

### Testing
- Jest
- Supertest

### Contenerización
- Docker
- Docker Compose

### Análisis y automatización
- npm audit
- ESLint
- Trivy
- GitHub Actions

---

## 4. Funcionalidad

La aplicación permite:

- verificar funcionamiento del servicio
- comprobar estado del sistema
- consultar tareas
- crear nuevas tareas

### Endpoints

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Endpoint principal |
| GET | `/health` | Estado del servicio |
| GET | `/tasks` | Obtener tareas |
| POST | `/tasks` | Crear tarea |

---

## 5. Ejecución local

### Clonar proyecto

```bash
git clone <repositorio>
cd secure-todo-app