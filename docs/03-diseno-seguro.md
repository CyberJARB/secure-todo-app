# Diseño Seguro

## Principios aplicados

### Defense in Depth

La seguridad no depende de un único control.

Capas implementadas:

- Helmet
- rate limiting
- input validation
- access control
- logging
- CI security checks
- container isolation

---

### Least Privilege

Solo endpoints sensibles requieren autenticación:

- POST /tasks
- DELETE /tasks/:id

---

### Zero Trust

Principio:

Nunca confiar, siempre verificar.

Aplicación práctica:

Toda operación sensible requiere validación explícita mediante API Key.

No se asume confianza basada en:

- red interna
- localhost
- origen del cliente
- estado previo

---

### Fail Secure

Solicitudes inválidas son rechazadas inmediatamente.

Respuestas:

- 400
- 401
- 404

---

### Secure by Default

Configuración segura por defecto:

- Helmet activo
- rate limiting activo
- validación JSON
- control de acceso