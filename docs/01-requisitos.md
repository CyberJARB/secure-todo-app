# Requisitos de Seguridad

## Objetivo

El objetivo de este documento es definir los requisitos de seguridad para la aplicación Secure To-Do App siguiendo principios de Secure Software Development Lifecycle (S-SDLC).

La aplicación ha sido diseñada considerando que la seguridad no depende únicamente del código, sino también del entorno de ejecución, la configuración, las dependencias, el control de acceso y el proceso de despliegue.

---

## Requisitos funcionales

La aplicación debe permitir:

- consultar el estado del servicio
- listar tareas registradas
- crear nuevas tareas
- eliminar tareas existentes

---

## Requisitos de seguridad

### 1. Validación de entrada

Toda entrada recibida desde clientes externos debe ser validada antes de ser procesada.

Objetivo:

Prevenir errores de procesamiento, entradas maliciosas y comportamientos inesperados.

Implementación:

- Joi validation schema

---

### 2. Protección HTTP

La aplicación debe reducir exposición frente a vulnerabilidades web comunes.

Objetivo:

Proteger frente a headers inseguros y configuraciones débiles.

Implementación:

- Helmet

---

### 3. Protección frente a abuso

La aplicación debe limitar peticiones excesivas.

Objetivo:

Reducir ataques de denegación de servicio básicos y abuso automatizado.

Implementación:

- express-rate-limit

---

### 4. Control de acceso

Las operaciones sensibles no deben estar disponibles sin autenticación explícita.

Endpoints protegidos:

- POST /tasks
- DELETE /tasks/:id

Implementación:

- API Key mediante header x-api-key

Principio aplicado:

- Least Privilege
- Zero Trust

---

### 5. Gestión segura de secretos

Las credenciales no deben almacenarse en código fuente.

Implementación:

- variables de entorno
- dotenv
- archivo .env.example

---

### 6. Logging de seguridad

Los eventos relevantes deben registrarse para auditoría.

Eventos registrados:

- intentos no autorizados
- validaciones fallidas
- creación de tareas
- eliminación de tareas

---

### 7. Seguridad del entorno

La aplicación debe considerar la seguridad del entorno de despliegue.

Controles:

- Docker container isolation
- dependencia controlada
- pipeline automatizado
- CI security checks