# CONTEXT — Contexto del proyecto

## Identificación
- Proyecto: Proyecto Web Elisava
- Repositorio: `mario2005junior-star/Proyecto_Web_Elisava_Mario`
- Rama principal: `main`
- Idioma del documento HTML: español (`lang="es"`)

## Asignatura
- Ejercicio: «Configurar la IA» (Elisava).
- Pasos del ejercicio: crear estos documentos en el proyecto, subirlos a GitHub, trabajar con ChatGPT y comprobar cómo ajusta o completa los archivos, experimentar en el proyecto y compartirlo con dpaladinia@elisava.net.

## Tema del proyecto
Página web personal con los datos de Spotify del usuario, con distintos datos y visualizaciones. Incluye:
- Un resumen de sus datos: artistas más escuchados, tipo de música, entre otros.
- Un apartado de salud auditiva que explica cómo afecta la música a los oídos, según la información recopilada.
- Una calculadora en la que el visitante introduce su tiempo de escucha semanal (que puede consultar en Spotify) y el tipo de auriculares que usa más, y obtiene una estimación de su salud auditiva.

## Público
Jóvenes de 18 a 30 años.

## Estado conocido del repositorio
La raíz contiene `index.html`, `style.css`, `script.js` y `README.md`. Versión V1 de la web:
- `index.html` tiene cinco secciones: 1 Introducción, 2 Referentes, 3 Datos, 4 Salud y 5 Conclusión. La sección «Trabajo hecho en clase» se ha quitado porque no va en esta web. Salud tiene su contenido, salvo la calculadora personal, que está pendiente.
- `style.css` usa la paleta de la referencia visual (fondo crema, rojos, rosas y amarillo) y es responsive.
- `script.js` contiene los datos de Spotify ya extraídos (historial, detalle por mes de 13 meses, evolución de artistas, podcasts, biblioteca, playlists, búsquedas, Wrapped, publicidad, Sound Capsule). Los datos están fijos en el código, no se actualizan solos.
- El gráfico de horas por hora del día no está incluido en esta versión.
- Publicada en GitHub Pages: https://mario2005junior-star.github.io/Proyecto_Web_Elisava_Mario/ (Settings → Páginas, rama `main`, carpeta `/ (root)`).
- Dos loops de scroll: en todos los bloques de Datos, las barras crecen en cascada y los números suben al entrar en pantalla, y en la gráfica de evolución la línea se dibuja sola al entrar. Ambos se borran al salir. Las barras de «Detalle por mes» también se construyen al cambiar de mes.
- La gráfica de evolución cuenta todas las escuchas del historial de cada artista al mes, también las de menos de 30 segundos (eje con 0, 250, 500 y 750), no tiempo. Las horas están en Historial. La web lo explica en el texto y enlaza la regla de Spotify para artistas.
- Las fichas del loop y el proceso para repetirlo están en `project-definition/FICHAS-LOOP.md`. El pie de la web enlaza a ese documento.
- Referentes: ocho referentes con captura, enlace y lo que se lleva de cada uno, según las notas de Figma.
- Conclusión: datos de escucha, cálculo de dB con las fórmulas OMS y NIOSH, y conclusión personal de Mario Fernandes.
- Salud: contenido informativo sobre riesgo auditivo (guías de referencia, fórmulas de dosis, tiempos orientativos, señales de alarma y evidencia en jóvenes). La calculadora personal está pendiente.
- Paleta y tipografía de referencia en `project-definition/REFERENCIA-VISUAL.md`.
- Pendiente: calculadora personal.

## Pregunta de investigación
«¿Cómo está mi salud auditiva durante un año entero?»

## Pendiente de confirmar
No inventar ni dar por establecido:
- El concepto, la narrativa y la dirección visual.
- Las páginas, secciones y funcionalidades finales.
- Los requisitos concretos de la asignatura y sus criterios de evaluación.

Este archivo es una referencia viva. Añade la información confirmada cuando el usuario la aporte, y no conviertas ideas tentativas en decisiones definitivas sin confirmación.
