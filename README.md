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
- eliminar tareas existentes

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

| Método | Endpoint | Descripción | Protección |
|--------|----------|-------------|------------|
| GET | `/` | Endpoint principal | Público |
| GET | `/health` | Estado del servicio | Público |
| GET | `/tasks` | Obtener listado de tareas | Público |
| POST | `/tasks` | Crear nueva tarea | API Key |
| DELETE | `/tasks/:id` | Eliminar tarea | API Key |

---

## 5. Control de acceso

Siguiendo principios de seguridad y el modelo **Zero Trust**, los endpoints sensibles requieren autenticación explícita mediante API Key.

Endpoints protegidos:

- `POST /tasks`
- `DELETE /tasks/:id`

Header requerido:

```http
x-api-key: secure-demo-key
```

Este enfoque permite aplicar:

- control de acceso básico
- principio de mínimo privilegio
- verificación explícita antes de permitir operaciones sensibles
- enfoque Zero Trust académico

---

## 6. Configuración segura

La aplicación utiliza variables de entorno para separar configuración sensible del código fuente.

Archivo de ejemplo:

```bash
.env.example
```

Variables utilizadas:

```env
PORT=3000
API_KEY=secure-demo-key
```

Esto evita:

- credenciales hardcodeadas
- exposición accidental de configuración sensible
- malas prácticas de gestión de secretos

---

## 7. Cómo ejecutar la aplicación

### Clonar repositorio

```bash
git clone https://github.com/CyberJARB/secure-todo-app.git
cd secure-todo-app
```

### Crear archivo de configuración

```bash
cd src
cp ../.env.example .env
```

Contenido esperado:

```env
PORT=3000
API_KEY=secure-demo-key
```

### Ejecutar con Docker

```bash
docker compose up --build
```

---

## 8. Ejemplos de uso

### Endpoint principal

```bash
curl http://localhost:3000/
```

### Health check

```bash
curl http://localhost:3000/health
```

### Obtener tareas

```bash
curl http://localhost:3000/tasks
```

### Crear tarea

```bash
curl -X POST http://localhost:3000/tasks \
-H "Content-Type: application/json" \
-H "x-api-key: secure-demo-key" \
-d '{"title":"Nueva tarea"}'
```

### Eliminar tarea

```bash
curl -X DELETE http://localhost:3000/tasks/1 \
-H "x-api-key: secure-demo-key"
```

---

## 9. Consideraciones de seguridad implementadas

Siguiendo principios de desarrollo seguro, se incorporaron los siguientes controles:

### Protección HTTP
- **Helmet**
  - protección mediante cabeceras HTTP seguras

### Protección contra abuso
- **Rate limiting**
  - mitigación frente a abuso del servicio y ataques de denegación

### Validación de entrada
- **Joi**
  - prevención de entradas maliciosas o malformadas

### Gestión de configuración
- **dotenv**
  - externalización de configuración sensible

### Control de acceso
- **API Key middleware**
  - protección de endpoints sensibles
  - aplicación de principio de mínimo privilegio

### Zero Trust básico
- verificación explícita de solicitudes antes de permitir acciones sensibles

### Logging / Audit trail
- registro de:
  - creación de tareas
  - intentos inválidos
  - accesos no autorizados
  - eliminación de tareas

### Seguridad del código
- **ESLint**
  - revisión de calidad y buenas prácticas

### Gestión de vulnerabilidades
- **npm audit**
  - análisis de dependencias vulnerables

### Seguridad de contenedores
- **Trivy**
  - análisis de imagen Docker

### Pruebas dinámicas
- **OWASP ZAP**
  - escaneo básico de seguridad

### DevSecOps
- **GitHub Actions**
  - pipeline automatizado de validación de seguridad

---

## 10. Desarrollo del proyecto siguiendo S-SDLC

### 1. Requisitos

Se definió una aplicación sencilla de gestión de tareas con funcionalidades básicas:

- consultar estado
- listar tareas
- crear tareas
- eliminar tareas

Se identificaron riesgos iniciales:

- abuso de endpoints
- acceso no autorizado
- validación insuficiente
- exposición de configuración

Documentación:

```text
docs/01-requisitos.md
```

---

### 2. Modelado de amenazas

Se analizaron amenazas potenciales:

- Denial of Service (DoS)
- abuso de endpoints públicos
- acceso no autorizado
- manipulación de entradas
- vulnerabilidades en dependencias

Documentación:

```text
docs/02-modelado-amenazas.md
security/threat-model.md
```

---

### 3. Diseño seguro

Se incorporaron decisiones de seguridad desde arquitectura:

- validación de datos
- middleware de seguridad
- protección HTTP
- limitación de peticiones
- control de acceso
- externalización de secretos

Documentación:

```text
docs/03-diseno-seguro.md
```

---

### 4. Implementación segura

Durante el desarrollo se aplicaron:

- validación estricta
- middleware defensivo
- control de acceso
- logging de seguridad
- manejo controlado de configuración

Documentación:

```text
docs/04-desarrollo-seguro.md
```

---

### 5. Pruebas de seguridad

Se ejecutaron:

- pruebas automatizadas con Jest
- análisis estático con ESLint
- auditoría de dependencias con npm audit
- pruebas dinámicas con OWASP ZAP

Documentación:

```text
docs/05-pruebas-seguridad.md
security/npm-audit.md
security/eslint-report.md
security/zap-report.md
```

---

### 6. Despliegue seguro

Se aplicaron controles de despliegue:

- Docker
- Docker Compose
- escaneo de imagen con Trivy
- CI automatizado

Documentación:

```text
docs/06-despliegue-seguro.md
security/trivy-scan.md
```

---

### 7. Mantenimiento

Medidas contempladas:

- actualización de dependencias
- reevaluación de amenazas
- mejora continua
- revisiones periódicas
- monitorización de seguridad

Documentación:

```text
docs/07-mantenimiento.md
```

---

## 11. Estructura del proyecto

```text
secure-todo-app/
├── docker/
│   └── Dockerfile
├── docs/
│   ├── 01-requisitos.md
│   ├── 02-modelado-amenazas.md
│   ├── 03-diseno-seguro.md
│   ├── 04-desarrollo-seguro.md
│   ├── 05-pruebas-seguridad.md
│   ├── 06-despliegue-seguro.md
│   └── 07-mantenimiento.md
├── security/
│   ├── checklist-owasp.md
│   ├── eslint-report.md
│   ├── npm-audit.md
│   ├── threat-model.md
│   ├── trivy-scan.md
│   └── zap-report.md
├── src/
│   ├── __tests__/
│   ├── package.json
│   ├── server.js
│   └── eslint.config.js
├── .github/workflows/
├── docker-compose.yml
├── .env.example
├── README.md
```

---

## 12. Autoría

Proyecto desarrollado por:

**Jose Andres Ruiz Bautista**  
GitHub: https://github.com/CyberJARB