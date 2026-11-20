# LOG — Registro del proyecto

Registro de decisiones confirmadas, cambios relevantes, problemas y soluciones. Entradas cronológicas, con la más reciente arriba.

## 2026-11-19 — Memoria en Figma: referentes, datos, navegación y secciones
- **Decisión/cambio:** Se trabaja en el archivo de Figma de la memoria («Sin título», `cYLAhFe2hnW7C2TEjMswqk`) y se leen en solo lectura el archivo «Mis datos de Spotify» (`spZlbzMHS7TO1hmdAeTiSk`), el archivo de referentes (`YUAGHb3RflqjLZ47A5asiX`) y la web publicada de Spotify. Cambios hechos en la memoria: (1) apartado de referentes como carrusel de 8 pantallas con botones «Anterior» y «Siguiente», con nombre, enlace y texto de cada referente; (2) apartado de datos con una pantalla por cada gráfico del apartado Historial, que cambia solo la imagen (con avance automático de 4 s en las tres primeras), más una pantalla por cada apartado de datos (Detalle por mes con 13 meses, Evolución de artistas, Podcasts y biblioteca, Búsquedas y Wrapped, Publicidad y Sound Capsule); (3) barra superior con seis apartados (Introducción, Referentes, Datos, Salud, Conclusión y Trabajo hecho en clase), con navegación al apartado correspondiente, en todos los marcos; (4) agrupación de la memoria en seis secciones, sin cambiar tamaños ni contenido ni borrar marcos vacíos. Los gráficos de datos son reconstrucciones en gris (no se copiaron los colores ni los trazos del gráfico de líneas). La web publicada no se ha modificado.
- **Motivo:** Que la memoria recoja los referentes y los datos de forma navegable, con la misma estructura que la web y el orden de los apartados del proyecto.
- **Archivos afectados:** archivo de Figma de la memoria (`cYLAhFe2hnW7C2TEjMswqk`). Ningún archivo del repositorio. Los archivos de Figma de datos y referentes no se han modificado.
- **Estado:** completado con pendientes: (a) faltan en la memoria tres pantallas de Historial (imagen 3 y 4) y una de Podcasts (imagen 3), por lo que las flechas de imagen 2 de ambos apartados apuntan a pantallas que no existen; (b) el gráfico de líneas de «Detalle por mes» de la web no se ha reproducido; (c) el apartado «Estadística» no aparece en la web y no se ha añadido; (d) el contenido de salud, conclusiones y trabajo hecho en clase sigue pendiente, según indica el usuario.

## 2026-11-18 — Adaptación de la web a la plantilla de Figma
- **Decisión/cambio:** Se lee en solo lectura la plantilla de Figma «Sin título» (archivo `NsUf02LQ9xSW908aCEPFfy`, página 1). Es un boceto de estructura, sin textos ni colores, con 13 pantallas: inicio, explicación, historial (tres partes), estadística, podcasts y biblioteca, búsquedas y Wrapped, publicidad, Sound Capsule, audición, calculadora, comparativa y una barra de secciones arriba con una barra de pie abajo. El usuario elige aplicar estructura y estilo: se reorganiza la web publicada (versión 15) en ese orden, con barra de secciones y barra de pie. Audición, calculadora y comparativa quedan como pendientes porque aún no tienen contenido. La barra de pie usa «Elisava · Configurar la IA» como texto provisional.
- **Motivo:** Que la web siga la plantilla que el usuario ha diseñado en Figma.
- **Archivos afectados:** la página publicada de Spotify (artefacto `81dca5e1-2758-4584-8f11-e9e10e03afba`). El archivo de Figma no se ha modificado.
- **Estado:** completado en la página publicada. Pendiente: revisar la página en móvil y escritorio, y definir el contenido de audición, calculadora y comparativa.

## 2026-11-17 — Pregunta de investigación confirmada
- **Decisión/cambio:** La pregunta de investigación queda confirmada: «¿Cómo está mi salud auditiva durante un año entero?». Se registra en `CONTEXT.md` y se marca como completada en `INSTRUCTIONS.md`.
- **Motivo:** Es la pregunta que el usuario ha decidido para la web.
- **Archivos afectados:** `project-definition/CONTEXT.md`, `project-definition/INSTRUCTIONS.md`, `project-definition/LOG.md`.
- **Estado:** completado en rama `claude/pregunta-investigacion`, pendiente de fusionar.

## 2026-11-17 — Revisión del contenido del Figma «Mis datos de Spotify»
- **Decisión/cambio:** A petición del usuario, el asistente leyó el archivo de Figma «Mis datos de Spotify» (solo lectura, sin modificarlo) y explicó qué información contiene: horas escuchadas por mes (oct 2025 – oct 2026), escuchas por hora del día, top de artistas y canciones, podcasts, biblioteca y playlists, búsquedas, Wrapped 2025, gustos y segmentos publicitarios de Spotify, Sound Capsule y una sección de otros archivos. Los datos personales (Identity, UserAttributes, UserAddress, Identifiers, Payments) están marcados como excluidos de cualquier gráfico.
- **Motivo:** Que el usuario tenga clara la información que contiene su archivo de Figma antes de usarla en la web.
- **Archivos afectados:** `project-definition/LOG.md`. El archivo de Figma no se ha modificado.
- **Estado:** completado. Pendiente: comprobar las cifras contra los CSV originales antes de usarlas en la web o en una entrega.

## 2026-11-17 — Respuesta del asistente sobre de qué trata la web
- **Decisión/cambio:** Se registra la respuesta dada por el asistente a la pregunta «¿de qué trata mi página web?», según `CONTEXT.md`: es una página personal con tus datos de Spotify, con tres partes: estadísticas musicales (artistas más escuchados, tipos de música, etc.), salud auditiva (cómo afecta la música a los oídos, según los datos recopilados) y calculadora auditiva (el visitante indica su tiempo de escucha semanal y el tipo de auriculares que más usa, y obtiene una estimación de su salud auditiva). Público: jóvenes de 18 a 30 años.
- **Corrección:** la respuesta original decía que la pregunta de investigación no estaba definida. Ya está confirmada: «¿Cómo está mi salud auditiva durante un año entero?». Quedan pendientes el concepto visual y las páginas finales.
- **Motivo:** Dejar constancia de la descripción del proyecto tal como la dio el asistente.
- **Archivos afectados:** `project-definition/LOG.md`.
- **Estado:** completado.

## 2026-11-17 — Prueba: descripción del proyecto
- **Decisión/cambio:** Se hace una prueba para comprobar que el asistente entiende el proyecto. La descripción registrada es: web personal con los datos de Spotify, con tres partes: estadísticas musicales (artistas más escuchados, tipos de música), salud auditiva (cómo afecta la música a los oídos, según los datos recopilados) y calculadora auditiva (el visitante indica su tiempo de escucha semanal y el tipo de auriculares que más usa, y obtiene una estimación de su salud auditiva). Público: jóvenes de 18 a 30 años.
- **Motivo:** Comprobar que el asistente describe el proyecto igual que `CONTEXT.md`.
- **Archivos afectados:** `project-definition/LOG.md`.
- **Estado:** completado. La pregunta de investigación ya está confirmada (ver entrada del mismo día), así que queda pendiente solo el concepto visual y las páginas finales.

## 2026-11-17 — Regla de subida: todo a main, registrado en LOG.md
- **Decisión/cambio:** Todo lo que se suba al repositorio se hace en `main`, y los cambios relevantes se registran en `project-definition/LOG.md` de `main`. No se usan otras ramas para guardar trabajo, salvo cuando el usuario lo pide para revisar algo antes de fusionar.
- **Motivo:** El usuario quiere que todo esté en un único sitio y que no queden ramas sueltas con trabajo.
- **Archivos afectados:** `project-definition/LOG.md`.
- **Estado:** completado.

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
