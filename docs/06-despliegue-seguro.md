# Despliegue Seguro

## Entorno

La aplicación se despliega usando:

- Docker
- Docker Compose

---

## Seguridad del entorno

Controles:

- aislamiento del contenedor
- configuración reproducible
- separación de dependencias

---

## Gestión de configuración

Variables externas:

- PORT
- API_KEY

Beneficio:

Separación entre configuración sensible y código.

---

## DevSecOps

Pipeline GitHub Actions ejecuta:

- tests
- npm audit
- ESLint

Objetivo:

Integrar seguridad dentro del proceso de despliegue.

---

## Disponibilidad

Endpoint:

- /health

Permite verificar disponibilidad operativa.