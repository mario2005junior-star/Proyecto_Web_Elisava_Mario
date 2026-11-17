# LOG — Registro del proyecto

Registro de decisiones confirmadas, cambios relevantes, problemas y soluciones. Entradas cronológicas, con la más reciente arriba.

## 2026-11-17 — Pregunta de investigación confirmada
- **Decisión/cambio:** La pregunta de investigación queda confirmada: «¿Cómo está mi salud auditiva durante un año entero?». Se registra en `CONTEXT.md` y se marca como completada en `INSTRUCTIONS.md`.
- **Motivo:** Es la pregunta que el usuario ha decidido para la web.
- **Archivos afectados:** `project-definition/CONTEXT.md`, `project-definition/INSTRUCTIONS.md`, `project-definition/LOG.md`.
- **Estado:** completado en rama `claude/pregunta-investigacion`, pendiente de fusionar.

## 2026-11-17 — Normas de trabajo para Claude y ChatGPT
- **Decisión/cambio:** Claude lee `SOUL.md`, `CONTEXT.md`, `INSTRUCTIONS.md` y `LOG.md` al empezar cada sesión de trabajo en el repositorio, y aplica `INSTRUCTIONS.md` en todo momento. Esto incluye no subir cambios ni tocar `main` sin que el usuario lo pida, explicar antes de implementar código y registrar las decisiones relevantes en `LOG.md`.
- **Motivo:** Que el trabajo con Claude siga las mismas reglas que el asistente de ChatGPT, y que no dependa de recordarlas en cada conversación.
- **Archivos afectados:** `project-definition/LOG.md`.
- **Estado:** completado en rama `claude/registro-normas-log`, pendiente de subida.

## 2026-11-17 — Prueba con ChatGPT (proyecto de ChatGPT)
- **Decisión/cambio:** Se crea un proyecto en ChatGPT con `SOUL.md` en las instrucciones y se suben `CONTEXT.md`, `INSTRUCTIONS.md` y `LOG.md` como archivos. Primero se intentó que leyera los archivos desde GitHub, pero devolvió un error 404 y respondió con la versión antigua (siete archivos). Tras subir los archivos nuevos directamente, ChatGPT resume bien el contexto, sigue el proceso de `INSTRUCTIONS.md` y no inventa el concepto visual ni la pregunta de investigación.
- **Motivo:** Comprobar cómo ajusta y completa ChatGPT los documentos, como pide el ejercicio.
- **Archivos afectados:** ninguno (la prueba se hizo en ChatGPT).
- **Estado:** completado. Aprendizaje: a ChatGPT hay que pasarle los archivos subidos, no el enlace de GitHub.

## 2026-11-17 — Adaptación de la documentación al ejercicio «Configurar la IA»
- **Decisión/cambio:** Se reorganiza `project-definition/` en cuatro documentos: `SOUL.md` (personalidad), `CONTEXT.md` (contexto), `INSTRUCTIONS.md` (instrucciones, flujo y criterios) y `LOG.md` (registro). Se fusionan los antiguos `SKILL`, `WORKFLOW`, `CRITERIA` y `GOALS` en `INSTRUCTIONS.md`.
- **Motivo:** Adaptarse a la estructura pedida en el ejercicio de la asignatura.
- **Archivos afectados:** `project-definition/` (eliminados los archivos antiguos y creados los nuevos).
- **Estado:** subido a la rama `claude/adaptar-docs-ejercicio-ia`. Pendiente de fusionar en `main`.

## 2026-11-04 — Creación de la documentación de definición
- Se acuerda organizar las instrucciones del asistente en documentos Markdown independientes.
- Se documenta el estado inicial conocido de `index.html`, `style.css` y `script.js`.
- **Estado:** completado (la documentación se ha reorganizado el 2026-11-17).

## Plantilla para futuras entradas
### AAAA-MM-DD — Título breve
- **Decisión/cambio:**
- **Motivo:**
- **Archivos afectados:**
- **Estado:** pendiente / en curso / completado
