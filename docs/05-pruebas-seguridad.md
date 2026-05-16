# Pruebas de Seguridad

## Pruebas implementadas

### Unit / Integration Tests

Herramientas:

- Jest
- Supertest

Validaciones:

- endpoints funcionales
- validación de entrada
- autenticación requerida

---

### Static Analysis

Herramienta:

- ESLint

Objetivo:

Calidad y seguridad de código.

---

### Dependency Analysis

Herramienta:

- npm audit

Objetivo:

Detectar vulnerabilidades conocidas.

---

### Container Analysis

Herramienta:

- Trivy

Objetivo:

Analizar imagen Docker.

---

### Dynamic Security Testing

Herramienta:

- OWASP ZAP

Objetivo:

Pruebas dinámicas sobre API.

---

### Verificación manual

Comandos curl utilizados:

- GET /
- GET /health
- POST protegido
- acceso sin API key