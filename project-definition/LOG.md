# LOG — Registro del proyecto

Registro de decisiones confirmadas, cambios relevantes, problemas y soluciones. Entradas cronológicas, con la más reciente arriba.

## 2026-11-24 — Quitado el estudio de Kim y Han
- **Cambio:** Se quitan de Salud las cifras basadas en Kim y Han (fila del 60 % de volumen, primer paso de riesgo, volumen máximo de seis smartphones, fila 2018 de la línea de tiempo y la fuente). En Conclusión, el cálculo de dB se hace a 63 y 67 dB(A) como niveles de ejemplo, sin atribuirlos a ningún estudio.
- **Motivo:** El usuario decide quitarlo, porque no es importante y no estaba verificado.
- **Estado:** en local, sin subir a `main`.

## 2026-11-24 — CONTEXT al día con la V1
- **Cambio:** `CONTEXT.md` refleja la web tal como está: cinco secciones (sin Trabajo hecho en clase), contenido de Referentes y Conclusión, loops de Datos y gráfica, definición de la gráfica, paleta de referencia y pendientes reales (calculadora y Kim y Han).
- **Archivos afectados:** `project-definition/CONTEXT.md`, `project-definition/LOG.md`.
- **Estado:** en local, sin subir a `main`.

## 2026-11-24 — Ficha 1 del loop al día
- **Cambio:** La ficha 1 de `FICHAS-LOOP.md` describe el loop actual: todos los bloques de Datos, con barras y números que suben al entrar en pantalla. Incluye los commits de la generalización y los campos «Dónde decide el usuario» y «Quién verifica».
- **Archivos afectados:** `project-definition/FICHAS-LOOP.md`, `project-definition/LOG.md`.
- **Estado:** en local, sin subir a `main`.

## 2026-11-24 — Quién decide y quién verifica en las fichas del loop
- **Cambio:** Las dos fichas del loop y la plantilla incluyen «Dónde decide el usuario» y «Quién verifica». En todas, las decisiones y la verificación son de Mario Fernandes: él decide los niveles, colores, duraciones y datos animados, y comprueba el resultado en el navegador antes de dar el visto bueno.
- **Motivo:** Requisito de la entrega: cada ficha debe indicar dónde decide el usuario y quién verifica.
- **Archivos afectados:** `project-definition/FICHAS-LOOP.md`, `project-definition/LOG.md`.
- **Estado:** en local, sin subir a `main`.

## 2026-11-24 — Nombre completo en el pie
- **Cambio:** El pie de la web muestra «Mario Fernandes» en lugar de «MJ».
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Resumen del día: web V1 y datos
- **Qué se hizo:** referentes (ocho capturas, enlaces y lo que se lleva de cada uno, desde las notas de Figma en solo lectura); Datos con barras y números que se construyen al entrar en pantalla; definición de qué cuenta cada punto de la gráfica de evolución; sección Conclusión con datos, cálculo de dB y texto personal; se quitó «Trabajo hecho en clase»; referencia visual de paleta y tipografía en el repositorio; revisión visual y accesibilidad marcada como hecha.
- **Commits subidos a `main` hoy:** `1f991ae`, `2949bba`, `b137496`, `3189375`, `befde1d`, `d218759`, `4014436`, `fb6867a`, `77777bb`, `8012895`, `04b7948`, `596fb57`, `788b1b4`, `593620f`, `558de2f`, `1c75ec4`, `db90836`, `bd322b6`, `2074ac6`, `0f7fe6b`, `39e075c`, `25d9f8e`, `33c00c1`, `0f4e336`.
- **Pendiente para la entrega:** calculadora personal (Salud, la deja el usuario para más adelante); comprobar la cifra de Kim y Han (63–67 dB(A) a 60 % de volumen y 105,7 dB(A)), que aparece en Salud y en Conclusión.
- **Estado:** todo subido a `main`.

## 2026-11-24 — Contraste accesible en textos pequeños
- **Decisión/cambio:** Los textos pequeños (menú, logo, entradilla, enlaces de referentes) usan un rojo más oscuro (#B92E0E, contraste 4,99 sobre crema). El texto «pendiente» usa un gris más oscuro (#6B6259, contraste 4,91). El texto del pie pasa a color tinta. Los titulares grandes mantienen el rojo original.
- **Motivo:** Revisión de accesibilidad: el rojo original daba 3,47 sobre crema y el gris 3,15, por debajo de 4,5 para texto normal.
- **Archivos afectados:** `style.css`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: revisión visual en escritorio.

## 2026-11-24 — Referencia visual en el repositorio
- **Cambio:** Se añade `project-definition/REFERENCIA-VISUAL.md` con la paleta de la referencia (loket.design), su relación con las variables de `style.css`, las fuentes usadas y los dos colores de texto añadidos por contraste. Se guarda también la captura de referencia en `project-definition/referencia-visual/`.
- **Motivo:** Pedido del usuario: que la paleta y la tipografía de referencia estén en GitHub.
- **Estado:** subido a `main`.

## 2026-11-24 — Cierre de la V1 para la entrega
- **Cambio:** Se quita la sección «Trabajo hecho en clase» de la web y su enlace del menú, porque el usuario confirma que no va en este apartado. Se marcan como hechos en INSTRUCTIONS.md la recopilación de requisitos y criterios (rúbrica recibida) y la comprobación final, aprobada por el usuario.
- **Pendiente:** calculadora personal (Salud), que el usuario deja para más adelante. Comprobar el dato de Kim y Han: el estudio existe y el máximo de 113,1 dB(A) coincide, pero no he confirmado el rango de 105,7 dB(A) ni el de 63–67 dB(A) a 60 % de volumen.
- **Archivos afectados:** `index.html`, `project-definition/INSTRUCTIONS.md`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Conclusión personal
- **Cambio:** La sección Conclusión incluye la conclusión personal del usuario: concienciar sobre la salud auditiva y usar los datos para regular las horas y el volumen de escucha.
- **Pendiente:** comprobar la fuente de Kim y Han.
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Conclusión con datos y cálculo de dB
- **Cambio:** La sección Conclusión tiene tres bloques: lo que dicen los datos (artistas, tipos de música según las inferencias de Spotify, canciones más repetidas, mes con más escucha y artista top de cada mes), el cálculo de dB con las fórmulas OMS/ITU y NIOSH al 60 % de volumen, y un bloque pendiente para la conclusión personal.
- **Comprobación:** Cifras calculadas desde `StreamingHistory_music_*.json` (solo música, sin podcasts) y `Inferences.json`. Los tiempos a dB se calcularon con las fórmulas de la propia sección Salud.
- **Pendiente:** conclusión personal con las palabras del usuario; comprobar la fuente de Kim y Han.
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Definición de reproducción en la gráfica
- **Cambio:** El texto de la gráfica de evolución define qué cuenta cada punto: todas las escuchas del historial, también las de menos de 30 segundos. Se aclara que Spotify cuenta como stream solo las de al menos 30 segundos, con enlace a su ayuda para artistas.
- **Motivo:** Los datos de la gráfica ya contaban todas las filas del historial. Se ha elegido mantener los datos y aclarar el texto, para no recalcular la gráfica.
- **Comprobación:** Los valores de la gráfica coinciden con el recuento de todas las filas de cada artista y mes en `StreamingHistory_music_*.json`.
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Revisión visual y accesibilidad
- **Cambio:** Se marca como hecho el punto de revisión visual y accesibilidad en INSTRUCTIONS.md. El usuario ha revisado la web en escritorio y está conforme. El contraste de texto ya se revisó antes. La adaptación a móvil queda fuera de alcance por decisión del usuario.
- **Archivos afectados:** `project-definition/INSTRUCTIONS.md`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Datos se construye al entrar en pantalla
- **Cambio:** Todos los bloques de Datos (historial, detalle por mes, podcasts, búsquedas, publicidad, Sound Capsule) construyen sus barras en cascada y sus números suben desde 0 al entrar en pantalla, y vuelven a 0 al salir. El detalle por mes también cuenta sus cifras al cambiar de mes.
- **Motivo:** Pedido del usuario: que la sección se vaya construyendo mientras se hace scroll.
- **Archivos afectados:** `script.js`, `index.html` (versión `script.js?v=3`), `project-definition/LOG.md`.
- **Estado:** subido a `main`. Las tarjetas de Wrapped no cuentan, porque sus valores son texto y no números.

## 2026-11-24 — Referentes en la web
- **Cambio:** La sección Referentes muestra las ocho capturas de `img/referentes/`, con su enlace y lo que el usuario se lleva de cada uno (texto de las notas «¿Qué me llevo?» del archivo de Figma, solo lectura).
- **Corrección:** Las primeras descripciones que añadí no salían del archivo (solo había leído nombres y enlaces). Se han sustituido por las notas reales.
- **Pendiente:** confirmar la captura 5 (sin asignar con seguridad a DRĄSA STUDIO).
- **Archivos afectados:** `index.html`, `img/referentes/`, `project-definition/LOG.md`.
- **Estado:** subido a `main`.

## 2026-11-24 — Se quita el apartado Otros archivos
- **Decisión/cambio:** Se elimina el apartado «Otros archivos» de la sección Datos, por decisión del usuario. Se actualiza `CONTEXT.md`.
- **Motivo:** El usuario indica que no lo quiere en la web.
- **Archivos afectados:** `index.html`, `project-definition/CONTEXT.md`, `project-definition/LOG.md`.
- **Estado:** completado en `main`.

## 2026-11-24 — Fuentes de la sección Salud
- **Decisión/cambio:** Se añade un bloque de fuentes con enlaces oficiales: OMS («Making listening safe»), norma OMS/UIT para dispositivos de escucha segura, NIOSH 98-126, OSHA 29 CFR 1910.95, Directiva 2003/10/CE (EUR-Lex) y Kim y Han (2018, BMC Public Health).
- **Verificado:** los enlaces se han buscado en fuentes oficiales. Confirmado en la fuente: los 84,1–92,4 dB(A) del primer paso de riesgo y el máximo de 113,1 dB(A), la media OMS de 1.100 millones de jóvenes y la cifra de 85 dB(A) de 8 h de NIOSH y del criterio de la OMS para el trabajo. Los modos de la norma H.870 (80 dB(A) para adultos y 75 dB(A) para niños, 40 h semanales) quedan confirmados en la página de la OMS. No se han verificado en fuente las cifras 105,7 dB(A) y 63–67 dB(A) de Kim y Han. Conviene revisarlas antes de la entrega.
- **Motivo:** Que las cifras de Salud tengan referencia comprobable, como pide el criterio de investigación.
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: revisar las cifras de Kim y Han no verificadas.

## 2026-11-24 — Contenido de la sección Salud
- **Decisión/cambio:** La sección Salud recoge el contenido informativo sobre riesgo auditivo aportado por el usuario: guías de referencia, fórmulas de dosis con ejemplos, volumen del móvil, factores de riesgo, tiempos orientativos, señales de alarma y evidencia en jóvenes. La calculadora personal queda pendiente.
- **Corrección:** el ejemplo NIOSH del documento aportado tenía errores de cálculo. A 96 dB(A), 1 h supone el 158,7 % (no el 100 %), la dosis total es 238,1 % (no 179,4 %) y el TWA es 88,8 dB(A) (no 91,9). Se publican las cifras corregidas. Las demás cuentas del documento se han comprobado y son correctas.
- **Motivo:** Completar la sección Salud de la web V1.
- **Archivos afectados:** `index.html`, `project-definition/CONTEXT.md`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: que el usuario revise la sección en el ordenador y confirme las fuentes que quiere citar.

## 2026-11-24 — Vuelta completa: animación automática de la gráfica de evolución
- **Comprender:** el usuario indica que con el scroll la gráfica de evolución no se ve entera, porque la animación avanza solo mientras se baja y en ese tramo no da tiempo a verla.
- **Proponer:** sustituir la animación ligada al scroll por una animación por tiempo que se dispara al entrar en pantalla (threshold 0,3), y que se repite al volver al apartado. Archivos: `script.js`, `style.css`. Limitación: no se puede comprobar en móvil desde el entorno de trabajo.
- **Implementar:** commit `3189375`. Se añade la clase `dibuja` a la gráfica y una transición de 2,4 s en el trazo de cada artista, con un retraso de 0,2 s entre líneas. Movimiento reducido: se muestra completa.
- **Verificar:** prueba en navegador local (Playwright): al entrar en la sección, el trazo pasa de 0,81 px a 0 px en unos 3 s, sin errores de consola. Pendiente: comprobar en la web publicada y en móvil.
- **Documentar:** entradas de este LOG, ficha 2 de `FICHAS-LOOP.md` actualizada, y `CONTEXT.md` con el comportamiento actual.
- **Comunicar:** se avisa al usuario de que la web publicada tarda uno o dos minutos en actualizarse y se indica cómo recargar con Cmd+Shift+R.

## 2026-11-24 — Barras de Detalle por mes con animación
- **Decisión/cambio:** Las barras de artistas top del mes se construyen desde cero al entrar en el apartado y cada vez que se cambia de mes, con un pequeño retraso entre filas. Se añade como tercer loop en `script.js`.
- **Motivo:** Que el detalle de cada mes se vaya construyendo igual que la gráfica de evolución.
- **Archivos afectados:** `script.js`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: comprobar en la web publicada.

## 2026-11-24 — Unidad de la gráfica de evolución
- **Decisión/cambio:** La gráfica se explica como número de reproducciones (veces que se reprodujo música de cada artista en el mes), no como tiempo. Se cambia el título del eje a «Nº de reproducciones al mes» y se aclara el texto de introducción, indicando que las horas están en Historial.
- **Motivo:** Que quede claro qué mide cada valor del eje. La definición exacta de «reproducción» en el archivo de Spotify está pendiente de confirmar.
- **Archivos afectados:** `index.html`, `script.js`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: confirmar en el archivo de Spotify la definición exacta de «reproducción».

## 2026-11-24 — Escala vertical en la gráfica de evolución
- **Decisión/cambio:** Se añaden líneas de referencia con 0, 250, 500 y 750 reproducciones y el título «Reproducciones al mes» en el eje vertical de la gráfica.
- **Motivo:** La gráfica no permitía saber qué cantidad representaba cada altura.
- **Archivos afectados:** `script.js`, `project-definition/LOG.md`.
- **Estado:** completado en `main`.

## 2026-11-24 — Gráfica de evolución con animación automática
- **Decisión/cambio:** La gráfica ya no depende del scroll. Al entrar en pantalla, las seis líneas se dibujan solas en unos 2,4 s, una tras otra, y se repiten cada vez que se vuelve al apartado. Con movimiento reducido se muestra completa. Se actualiza la ficha 2 de `FICHAS-LOOP.md`.
- **Motivo:** Con el scroll, la gráfica se dibujaba solo mientras se bajaba, y en ese tramo no daba tiempo a verla entera.
- **Archivos afectados:** `script.js`, `style.css`, `project-definition/FICHAS-LOOP.md`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: comprobar en la web publicada.

## 2026-11-24 — Versión de CSS y JS para evitar la caché
- **Decisión/cambio:** Tras el despliegue, la web publicada seguía mostrando las barras vacías. En local la corrección funciona, así que se trata de caché del CSS y del JS. Se añade `?v=2` a los enlaces de `style.css` y `script.js` para forzar la versión nueva.
- **Motivo:** Que la web publicada muestre las barras llenas.
- **Archivos afectados:** `index.html`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: comprobar en la web publicada.

## 2026-11-24 — Corrección del relleno de las barras
- **Decisión/cambio:** Las barras de todos los apartados aparecían vacías porque `.pista` y `.relleno` son elementos en línea, y en línea no admiten altura ni ancho. Se hacen bloques (`display: block`). La corrección del umbral del 23 de noviembre no era la causa real.
- **Motivo:** Que se vea la barra llena según el valor de cada fila.
- **Archivos afectados:** `style.css`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: comprobar en la web publicada.

## 2026-11-24 — Fichas del loop y proceso documentado
- **Decisión/cambio:** Se crea `project-definition/FICHAS-LOOP.md` con una ficha por cada loop de scroll (Barras de Historial y Dibujo de la gráfica de evolución), el código clave, cómo comprobar cada uno, y el proceso paso a paso para repetirlo. Se añade un enlace a ese documento en el pie de la web.
- **Motivo:** La entrega pide compartir el proceso con el que se construye la web, con las fichas del loop de cada scroll, en GitHub y en GitHub Pages, y que el proceso se pueda seguir y repetir.
- **Archivos afectados:** `project-definition/FICHAS-LOOP.md` (nuevo), `index.html`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: confirmar el criterio de «loop» con el profesor y revisar las fichas en móvil.

## 2026-11-23 — Estado de la web: resumen de lo hablado
- **Decisión/cambio:** Se publica la web V1 en GitHub Pages, en https://mario2005junior-star.github.io/Proyecto_Web_Elisava_Mario/ (Settings → Pages, rama `main`, carpeta `/ (root)`). La web tiene seis secciones (Introducción, Referentes, Datos, Salud, Conclusión y Trabajo hecho en clase) con navegación entre ellas, y usa la paleta de la referencia visual. En Datos se muestran los datos de Spotify ya extraídos (historial, detalle por mes, evolución de artistas, podcasts, biblioteca, playlists, búsquedas, Wrapped, publicidad y Sound Capsule). Se añaden dos loops de scroll: las barras de Historial crecen al entrar en pantalla y se vacían al salir, y la gráfica de evolución se dibuja según avanza el scroll. El umbral del loop de Historial se corrige a 0 para que las barras se vean llenas.
- **Motivo:** Cumplir el requisito de la entrega del 25.11.26 (versión V1 publicada y loops de scroll). El criterio de «loop» del curso no estaba claro: la definición encontrada en internet era general, así que se eligieron los dos efectos de scroll con el criterio de «efecto que se repite al hacer scroll».
- **Correcciones:** se quitan de la web referentes, enlaces, textos de «Trabajo hecho en clase» y de «Otros archivos» que no salían del material. Los datos mensuales se verifican contra las tablas de Spotify.
- **Archivos afectados:** `index.html`, `style.css`, `script.js`, `project-definition/CONTEXT.md`, `project-definition/LOG.md`.
- **Estado:** web publicada. Pendiente: (a) confirmar con el profesor el criterio de «loop» y definir las fichas del loop (mínimo dos, una por cada scroll trabajado); (b) añadir los referentes desde la memoria de Figma con su enlace; (c) escribir el contenido de Salud, Conclusión, Trabajo hecho en clase y Otros archivos; (d) actualizar `SOUL.md` e `INSTRUCTIONS.md`; (e) gráfico de horas por hora del día sin incluir.

## 2026-11-23 — Corrección de las barras de Historial
- **Decisión/cambio:** Las barras de Historial aparecían vacías porque el bloque es muy alto y el loop exigía que se viera al menos el 25 % del bloque. Se cambia el umbral a 0: las barras crecen en cuanto cualquier parte del bloque entra en pantalla.
- **Motivo:** Que se vea la barra llena según las horas de cada mes.
- **Archivos afectados:** `script.js`, `project-definition/LOG.md`.
- **Estado:** completado en `main`.

## 2026-11-23 — Dos loops de scroll en la web
- **Decisión/cambio:** Se añaden dos loops, que se repiten al hacer scroll. Loop 1: las barras de Historial crecen al entrar en pantalla y vuelven a 0 al salir. Loop 2: la gráfica de evolución de artistas se dibuja según avanza el scroll y se borra al subir. Con movimiento reducido no se aplica ninguno. La elección de estos dos es del asistente, porque la definición de «loop» del curso no estaba clara.
- **Motivo:** La entrega pide una ficha por cada scroll trabajado, con un mínimo de dos.
- **Archivos afectados:** `script.js`, `style.css`, `project-definition/LOG.md`.
- **Estado:** completado en `main`. Pendiente: confirmar con el profesor el criterio de «loop» y escribir las fichas.

## 2026-11-23 — Web V1 en el repositorio
- **Decisión/cambio:** Se construye la web V1 en el repositorio (`index.html`, `style.css`, `script.js`) con la paleta de la referencia visual (crema, rojos, rosas y amarillo), titulares grandes y condensados, y las seis secciones de la memoria (1 Introducción, 2 Referentes, 3 Datos, 4 Salud, 5 Conclusión, 6 Trabajo hecho en clase) con navegación entre ellas. En Datos se muestran los datos de Spotify ya extraídos: historial (horas por mes, top de artistas y canciones), detalle por mes de 13 meses con selector, evolución de los 6 artistas principales en un gráfico SVG, podcasts, biblioteca, playlists, búsquedas, Wrapped 2025, publicidad, Sound Capsule. Los datos van fijos en `script.js`. `CONTEXT.md` describe la V1.
- **Motivo:** Cumplir el requisito de la entrega del 25.11.26 de tener una versión V1 de la web en GitHub.
- **Archivos afectados:** `index.html`, `style.css`, `script.js`, `project-definition/CONTEXT.md`, `project-definition/LOG.md`.
- **Estado:** completado en `main`, pendiente de activar GitHub Pages (Settings → Páginas, rama `main`) y de anotar la URL. Pendiente: contenido de Referentes (añadir desde la memoria), Salud, Conclusión, Trabajo hecho en clase y «Otros archivos»; gráfico de horas por hora del día no incluido; `SOUL.md` e `INSTRUCTIONS.md` sin actualizar; fichas del loop pendientes de definir.

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
