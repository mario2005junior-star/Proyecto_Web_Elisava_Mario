# INSTRUCTIONS — Instrucciones de trabajo

## Activación
Cuando el usuario diga «Activa el skill de Elisava», «Trabajemos en el proyecto web» o una frase equivalente:
1. Lee `SOUL.md`, `CONTEXT.md` e `INSTRUCTIONS.md`.
2. Consulta `LOG.md` para conocer decisiones y cambios anteriores.
3. Inspecciona los archivos reales del repositorio antes de proponer o hacer cambios.
4. Resume brevemente el estado actual y continúa desde el último punto conocido.

## Jerarquía de información
- Las peticiones explícitas y actuales del usuario tienen prioridad.
- Los archivos de `project-definition/` documentan acuerdos y contexto.
- El código existente muestra lo implementado. No des por terminada una funcionalidad solo porque aparezca en los objetivos.
- Si hay contradicciones entre documentos o con el código, señálalas y pregunta antes de decidir algo importante.

## Reglas esenciales
- No inventes requisitos, contenidos, decisiones de diseño ni avances.
- No modifiques archivos sin que el usuario lo haya pedido.
- Antes de implementar código, explícalo primero y espera el visto bueno del usuario.
- Conserva las tecnologías y la estructura existentes salvo que haya una razón acordada para cambiarlas.
- Nunca guardes contraseñas, tokens, claves privadas ni datos personales sensibles en estos documentos.

## Flujo de trabajo
1. **Comprender:** lee los documentos, inspecciona el repositorio e identifica qué está hecho, qué es provisional y qué falta. Si falta información que cambia mucho la solución, haz una pregunta concreta.
2. **Proponer:** antes de un cambio significativo, explica qué problema se aborda, qué archivos se tocarían, qué solución propones y qué limitaciones tiene. Espera aprobación si el cambio no se pidió explícitamente.
3. **Implementar:** cambios pequeños y coherentes. Respeta los criterios documentados. No sobrescribas trabajo existente sin revisarlo. No toques archivos ajenos a la tarea.
4. **Verificar:** revisa los archivos modificados, las referencias entre HTML, CSS y JavaScript, y el comportamiento en móvil y escritorio cuando sea posible. Indica qué no se ha podido comprobar.
5. **Documentar:** añade a `LOG.md` las decisiones y cambios relevantes. Actualiza `CONTEXT.md` cuando se confirme información estable. Registra solo lo que ayude a retomar el trabajo, no cada ajuste visual.
6. **Comunicar:** al terminar, indica qué se ha hecho y qué archivos han cambiado.

## Criterios de diseño y desarrollo
### Diseño e interacción
- Cada elemento visual debe tener una función y responder al concepto del proyecto.
- Mantén coherencia en tipografía, color, espaciado y estados interactivos.
- Prioriza una jerarquía visual clara y una navegación comprensible.
- Evita animaciones que distraigan o dificulten el uso.
- Diseña los estados de interacción (reposo, hover, foco, activo y deshabilitado) cuando correspondan.

### Accesibilidad y usabilidad
- Usa HTML semántico y etiquetas descriptivas.
- Asegura contraste suficiente y tamaños de texto legibles.
- Los controles deben poder usarse con teclado.
- No comuniques información solo con el color.
- Añade textos alternativos útiles a las imágenes informativas.

### Desarrollo
- Mantén HTML, CSS y JavaScript separados, salvo decisión justificada.
- Usa nombres de clases, variables e identificadores claros.
- Evita duplicar código y soluciones innecesariamente complejas.
- No añadas librerías externas sin explicar por qué son necesarias.
- Comprueba rutas de imágenes, hojas de estilo y scripts.
- Ten en cuenta distintos tamaños de pantalla y el comportamiento responsive.

### Antes de dar una tarea por terminada
1. Revisa que el código sea coherente con el resto del proyecto.
2. Comprueba enlaces, rutas y selectores.
3. Revisa posibles errores de consola cuando sea posible.
4. Comprueba móvil y escritorio cuando aplique.
5. Resume qué se ha cambiado y qué queda pendiente.

## Objetivos y tareas
### Objetivo general
Desarrollar el proyecto web de Elisava de forma coherente con su concepto, los requisitos de la asignatura y las decisiones del usuario.

### Estado de los objetivos
- [x] Definir el tema y propósito de la web.
- [x] Identificar el público destinatario.
- [x] Establecer funcionalidades e interacciones necesarias.
- [x] Confirmar la pregunta de investigación.
- [ ] Recopilar los requisitos y criterios de evaluación de la asignatura.
- [ ] Definir estructura, contenidos y recorrido de navegación.
- [ ] Acordar la dirección visual: referencias, tipografía, paleta y estilo.

### Primeras tareas técnicas
- [ ] Revisar la estructura actual del repositorio.
- [ ] Sustituir los textos provisionales de la plantilla cuando se confirme el contenido.
- [ ] Desarrollar el diseño visual acordado.
- [ ] Implementar y probar las interacciones necesarias.
- [ ] Revisar accesibilidad y adaptación responsive.
- [ ] Hacer una comprobación final antes de la entrega.

Marca una tarea como completada solo cuando el cambio esté implementado y comprobado.
