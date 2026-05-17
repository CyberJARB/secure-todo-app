# Modelo de Amenazas - Secure To-Do App

## Activos protegidos

- Datos de tareas
- API REST de la aplicación
- configuración del entorno
- API Key de autenticación
- imagen Docker desplegable
- pipeline CI/CD

---

## Amenazas identificadas

### 1. Acceso no autorizado

Riesgo:

Un usuario no autenticado intenta crear o eliminar tareas.

Impacto:

- modificación no autorizada de datos
- pérdida de integridad

Mitigación:

- middleware requireApiKey
- validación del header x-api-key

Principios aplicados:

- Zero Trust
- Least Privilege

---

### 2. Ataques de inyección / entrada maliciosa

Riesgo:

Entrada manipulada enviada por el usuario.

Impacto:

- comportamiento inesperado
- corrupción lógica
- errores de aplicación

Mitigación:

- validación estricta mediante Joi

---

### 3. Denegación de servicio (DoS)

Riesgo:

Sobrecarga mediante múltiples peticiones automatizadas.

Impacto:

- degradación del servicio
- indisponibilidad

Mitigación:

- express-rate-limit

---

### 4. Exposición por cabeceras inseguras

Riesgo:

Ausencia de protecciones HTTP estándar.

Impacto:

- mayor superficie de ataque
- exposición de información

Mitigación:

- Helmet

---

### 5. Dependencias vulnerables

Riesgo:

Uso de paquetes externos con vulnerabilidades conocidas.

Impacto:

- ejecución remota
- compromiso del sistema

Mitigación:

- npm audit
- Trivy

---

### 6. Escalada de privilegios en contenedor

Riesgo:

Mayor impacto si el contenedor ejecuta como root.

Impacto:

- compromiso del host
- mayor daño post-explotación

Mitigación:

- usuario no privilegiado en Docker

---

### 7. Fallos en despliegue

Riesgo:

Código inseguro desplegado sin validación.

Impacto:

- propagación de vulnerabilidades

Mitigación:

- GitHub Actions CI
- pruebas automatizadas
- ESLint
- ZAP