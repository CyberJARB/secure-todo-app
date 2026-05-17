# Checklist OWASP / Secure Development Controls

- [x] Validación de entradas con Joi
- [x] Uso de cabeceras HTTP seguras con Helmet
- [x] Rate limiting para reducir abuso de peticiones
- [x] Gestión de configuración mediante variables de entorno
- [x] No se almacenan secretos en el código fuente
- [x] Control de acceso mediante API Key para endpoints sensibles
- [x] Aplicación de principio Zero Trust mediante validación explícita por solicitud
- [x] Registro de eventos de seguridad (audit logging)
- [x] Manejo seguro de errores y respuestas HTTP controladas
- [x] Uso de Docker para aislamiento del entorno
- [x] Contenedor ejecutado con usuario no root
- [x] Auditoría de dependencias con npm audit
- [x] Análisis estático con ESLint
- [x] Escaneo de imagen Docker con Trivy
- [x] Pruebas dinámicas con OWASP ZAP
- [x] Pruebas automatizadas con Jest y Supertest
- [x] Pipeline DevSecOps con GitHub Actions