# Desarrollo Seguro

## Prácticas aplicadas

### Secure Coding

Implementado:

- validación estricta
- manejo de errores
- separación de configuración
- control de acceso
- rechazo explícito de entradas inválidas

---

### Gestión de dependencias

Dependencias verificadas mediante:

- npm audit

Objetivo:

Reducir riesgo de librerías vulnerables.

---

### Revisión estática

Herramienta:

- ESLint

Objetivo:

Detectar errores y malas prácticas.

---

### Protección de secretos

Se evita hardcoding de credenciales.

Configuración:

- dotenv
- .env.example

---

### Testing automatizado

Herramientas:

- Jest
- Supertest

Casos cubiertos:

- disponibilidad
- health check
- creación válida
- validación inválida
- acceso no autorizado