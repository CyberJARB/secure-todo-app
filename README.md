# Secure To-Do App

## Proyecto universitario – Desarrollo Seguro del Ciclo de Vida del Software (S-SDLC)

**Autor:** Jose Andres Ruiz Bautista (CyberJARB)

---

## 1. Descripción de la aplicación

Secure To-Do App es una aplicación tipo API REST desarrollada con Node.js y Express para la gestión básica de tareas.

Permite:

- verificar el funcionamiento del servicio
- consultar el estado de salud de la aplicación
- listar tareas registradas
- crear nuevas tareas

La aplicación ha sido diseñada aplicando principios de **Secure Software Development Life Cycle (S-SDLC)**, incorporando controles de seguridad desde las primeras fases del desarrollo.

---

## 2. Objetivos del proyecto

Este proyecto tiene como objetivo:

- desarrollar una aplicación funcional
- aplicar principios de desarrollo seguro
- integrar seguridad desde el diseño
- identificar amenazas potenciales
- mitigar riesgos comunes en aplicaciones web
- automatizar verificaciones de seguridad
- desplegar la aplicación de forma contenerizada
- documentar el proceso siguiendo S-SDLC
- aplicar buenas prácticas DevSecOps

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

### Automatización y análisis
- ESLint
- npm audit
- Trivy
- OWASP ZAP
- GitHub Actions

---

## 4. Endpoints disponibles

| Método | Endpoint | Descripción |
|--------|----------|-------------|
| GET | `/` | Endpoint principal |
| GET | `/health` | Estado del servicio |
| GET | `/tasks` | Obtener listado de tareas |
| POST | `/tasks` | Crear nueva tarea |

---

## 5. Cómo ejecutar la aplicación

### Clonar repositorio

```bash
git clone https://github.com/CyberJARB/secure-todo-app.git
cd secure-todo-app
```

### Ejecutar con Docker

```bash
docker compose up --build
```

### Verificar funcionamiento

Endpoint principal:

```bash
curl http://localhost:3000/
```

Health check:

```bash
curl http://localhost:3000/health
```

Obtener tareas:

```bash
curl http://localhost:3000/tasks
```

Crear tarea:

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-d '{"title":"Nueva tarea"}'
```

---

## 6. Consideraciones de seguridad implementadas

Siguiendo principios de desarrollo seguro, se incorporaron los siguientes controles:

- **Helmet**
  - protección mediante cabeceras HTTP seguras

- **Rate limiting**
  - mitigación frente a abuso del servicio y ataques de denegación

- **Validación de entrada con Joi**
  - prevención de entradas maliciosas o malformadas

- **Gestión de configuración**
  - uso de variables de entorno mediante `.env`

- **Análisis de dependencias**
  - revisión de vulnerabilidades con `npm audit`

- **Análisis estático**
  - revisión de calidad y seguridad del código con ESLint

- **Escaneo de contenedor**
  - análisis de imagen Docker con Trivy

- **Pruebas dinámicas**
  - análisis básico de seguridad con OWASP ZAP

- **Automatización DevSecOps**
  - pipeline CI con GitHub Actions

---

## 7. Desarrollo del proyecto siguiendo S-SDLC

### 1. Requisitos

Se definió una aplicación sencilla de gestión de tareas con funcionalidades básicas:

- consultar estado
- listar tareas
- crear tareas

También se identificaron riesgos iniciales relacionados con exposición del servicio y validación de entradas.

Documentación:
`docs/01-requisitos.md`

---

### 2. Modelado de amenazas

Se analizaron amenazas potenciales como:

- denegación de servicio (DoS)
- manipulación de entradas
- abuso de endpoints públicos
- vulnerabilidades en dependencias

Documentación:
`docs/02-modelado-amenazas.md`
`security/threat-model.md`

---

### 3. Diseño seguro

Se incorporaron decisiones de seguridad desde arquitectura:

- validación de datos
- protección HTTP
- limitación de peticiones
- separación de configuración

Documentación:
`docs/03-diseno-seguro.md`

---

### 4. Implementación segura

Durante el desarrollo se aplicaron prácticas de codificación segura:

- validación estricta
- dependencias controladas
- configuración desacoplada
- middleware de protección

Documentación:
`docs/04-desarrollo-seguro.md`

---

### 5. Pruebas de seguridad

Se ejecutaron controles de validación:

- pruebas automatizadas con Jest
- análisis estático con ESLint
- revisión de dependencias con npm audit
- pruebas dinámicas con OWASP ZAP

Documentación:
`docs/05-pruebas-seguridad.md`
`security/npm-audit.md`
`security/eslint-report.md`
`security/zap-report.md`

---

### 6. Despliegue seguro

Se utilizó contenerización y validación del entorno:

- Docker
- Docker Compose
- escaneo de imagen con Trivy
- pipeline CI automatizado

Documentación:
`docs/06-despliegue-seguro.md`
`security/trivy-scan.md`

---

### 7. Mantenimiento

Se contemplan medidas de mantenimiento continuo:

- actualización de dependencias
- revisiones periódicas
- re-evaluación de amenazas
- mejora continua de seguridad

Documentación:
`docs/07-mantenimiento.md`

---

## 8. Estructura del proyecto

```text
secure-todo-app/
├── docker/
├── docs/
├── security/
├── src/
│   └── __tests__/
├── .github/workflows/
├── docker-compose.yml
├── README.md
```

---

## 9. Autoría

Proyecto desarrollado por:

**Jose Andres Ruiz Bautista**  
GitHub: https://github.com/CyberJARB