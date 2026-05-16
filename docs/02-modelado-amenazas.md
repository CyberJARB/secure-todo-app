# Modelado de Amenazas

## Objetivo

Identificar amenazas relevantes para Secure To-Do App considerando aplicación, dependencias y entorno de despliegue.

---

## Activos protegidos

Activos identificados:

- API REST
- integridad de tareas
- disponibilidad del servicio
- configuración de entorno
- API Key
- imagen Docker
- pipeline CI/CD

---

## Amenazas identificadas

### Acceso no autorizado

Riesgo:

Un atacante intenta ejecutar operaciones sensibles sin autenticación.

Impacto:

- modificación no autorizada
- pérdida de integridad

Mitigación:

- middleware requireApiKey
- validación del header x-api-key

Principio:

- Zero Trust

---

### Entrada maliciosa

Riesgo:

Payloads manipulados o datos inválidos.

Impacto:

- errores
- ejecución inesperada
- vulnerabilidades lógicas

Mitigación:

- Joi validation

---

### Abuso del servicio

Riesgo:

Exceso de peticiones automatizadas.

Impacto:

- degradación
- denegación parcial de servicio

Mitigación:

- rate limiting

---

### Vulnerabilidades de dependencias

Riesgo:

Uso de paquetes vulnerables.

Impacto:

- ejecución remota
- escalada

Mitigación:

- npm audit
- Trivy

---

### Entorno inseguro

Riesgo:

Configuraciones incorrectas del entorno.

Impacto:

- exposición accidental
- pérdida de confidencialidad

Mitigación:

- Docker
- variables de entorno
- CI pipeline

---

### Falta de auditoría

Riesgo:

Eventos no detectados.

Impacto:

- imposibilidad de investigación

Mitigación:

- securityLog()

---

## Enfoque Zero Trust

La aplicación adopta un enfoque académico Zero Trust:

No confiar implícitamente en solicitudes sensibles.

Cada petición protegida debe validarse explícitamente.

No se confía por:

- localhost
- cliente
- red
- contexto previo