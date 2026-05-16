# Modelo de Amenazas - Secure To-Do App

## Activos protegidos
- Datos de tareas
- Código fuente de la aplicación
- Imagen Docker desplegable
- Configuración del entorno

## Amenazas identificadas

### 1. Ataques de inyección
Riesgo:
Entrada maliciosa enviada por el usuario para alterar el comportamiento del sistema.

Mitigación:
Validación estricta de entradas mediante Joi.

---

### 2. Denegación de servicio (DoS)
Riesgo:
Sobrecarga del servicio mediante múltiples peticiones.

Mitigación:
Implementación de rate limiting con express-rate-limit.

---

### 3. Exposición por cabeceras inseguras
Riesgo:
Ausencia de cabeceras HTTP de seguridad.

Mitigación:
Uso de Helmet para protección automática.

---

### 4. Dependencias vulnerables
Riesgo:
Bibliotecas de terceros con vulnerabilidades conocidas.

Mitigación:
Análisis con npm audit y Trivy.

---

### 5. Escalada de privilegios en contenedor
Riesgo:
Mayor impacto si el contenedor se ejecuta como root.

Mitigación:
Configuración Docker con usuario no privilegiado.

---

### 6. Fallos en despliegue
Riesgo:
Código inseguro desplegado sin validación.

Mitigación:
Pipeline automatizado con GitHub Actions.
