# Fichas del loop de scroll

Documento del proceso de la web «Mis datos de Spotify». Recoge una ficha por cada scroll trabajado (mínimo dos) y el procedimiento para repetirlo.

**Criterio usado:** un loop es un efecto que cambia o se repite mientras el usuario hace scroll: algo se anima, se dibuja o vuelve a empezar al desplazarse. Este criterio está pendiente de confirmar con el profesor.

Web publicada: https://mario2005junior-star.github.io/Proyecto_Web_Elisava_Mario/
Código: `script.js` (funciones `iniciaLoops`) y `style.css` (bloque «Loop de Historial»).

---

## Ficha 1 · Barras de Historial

| Campo | Contenido |
|---|---|
| Scroll trabajado | Entrada y salida de la sección «Historial de escucha» (dentro de Datos). |
| Qué se repite | Cada vez que el bloque entra en pantalla, las barras crecen desde 0 hasta su valor. Al salir, vuelven a 0. |
| Disparador | `IntersectionObserver` sobre `#historial` con `threshold: 0` (basta con que se vea cualquier parte del bloque). |
| Estado inicial | `.bloque.anima:not(.en-vista) .relleno { width: 0 }`. |
| Estado final | Ancho en % según el valor máximo del listado (`pintaBarras`). |
| Desactivado con | `prefers-reduced-motion: reduce`. Las barras se muestran llenas sin animación. |
| Commits | `e404919` (creación), `41234dc` (corrección del umbral). |

**Código clave**
```js
const historial = $("#historial");
historial.classList.add("anima");
const observador = new IntersectionObserver(
  ([entrada]) => historial.classList.toggle("en-vista", entrada.isIntersecting),
  { threshold: 0 }
);
observador.observe(historial);
```
```css
.bloque.anima .relleno { transition: width 0.6s ease; }
.bloque.anima:not(.en-vista) .relleno { width: 0 !important; }
```

**Decisión y problema resuelto:** la primera versión usaba `threshold: 0.25`. El bloque es muy alto, así que nunca llegaba al 25 % visible y las barras se quedaban vacías. Con `threshold: 0` funciona al entrar en pantalla.

**Cómo comprobarlo:** abrir la web, ir a «3 Datos», bajar hasta «Historial de escucha», subir y volver a bajar. Las barras deben vaciarse y volver a crecer.

---

## Ficha 2 · Dibujo automático de la gráfica de evolución

| Campo | Contenido |
|---|---|
| Scroll trabajado | Entrada en pantalla de la sección «Evolución de artistas» (dentro de Datos). |
| Qué se repite | Al entrar en pantalla, las seis líneas se dibujan solas, una tras otra (unos 2,4 s). Al salir, se borran y vuelven a dibujarse la siguiente vez. |
| Disparador | `IntersectionObserver` sobre `#grafica-evolucion` con `threshold: 0.3`. Añade la clase `dibuja`. |
| Estado inicial | `stroke-dashoffset: 1` con `pathLength = 1` (línea invisible). |
| Estado final | `stroke-dashoffset: 0` (línea completa). |
| Desactivado con | `prefers-reduced-motion: reduce`. La gráfica se muestra completa sin animación. |
| Commits | `e404919` (primera versión, ligada al scroll), siguiente commit (versión automática). |

**Código clave**
```js
const grafica = $("#grafica-evolucion");
const trazos = grafica.querySelectorAll("path");
trazos.forEach(p => p.setAttribute("pathLength", "1"));
const observadorGrafica = new IntersectionObserver(([entrada]) => {
  grafica.classList.toggle("dibuja", entrada.isIntersecting);
  trazos.forEach((p, i) => {
    p.style.transitionDelay = entrada.isIntersecting ? `${i * 0.2}s` : "0s";
  });
}, { threshold: 0.3 });
observadorGrafica.observe(grafica);
```
```css
#grafica-evolucion path { stroke-dasharray: 1; stroke-dashoffset: 1; transition: stroke-dashoffset 0.3s ease; }
#grafica-evolucion.dibuja path { stroke-dashoffset: 0; transition: stroke-dashoffset 2.4s ease-out; }
```

**Decisión:** la primera versión avanzaba con el scroll, pero en el tramo de la sección que se ve de una vez la gráfica no llegaba a verse entera. Se pasa a una animación por tiempo, que se dispara al entrar en pantalla.

**Cómo comprobarlo:** abrir «3 Datos», ir a «Evolución de artistas» y esperar. La gráfica debe dibujarse sola, sin mover el scroll.

---

## Proceso (para repetir)

1. **Elegir un scroll** y escribir su ficha antes de programarlo: qué se repite, disparador, estado inicial y final.
2. **Implementar el cambio mínimo** en `script.js` y `style.css`. No tocar el contenido del resto de apartados.
3. **Comprobar la sintaxis** con `node --check script.js`.
4. **Probar en el navegador** subiendo y bajando por la sección, y con movimiento reducido activado en el sistema.
5. **Registrar** en `project-definition/LOG.md`: decisión, motivo, archivos y estado.
6. **Commit y push a `main`** citando la ficha en el mensaje. GitHub Pages se actualiza en uno o dos minutos.
7. **Actualizar esta ficha** con el commit y cualquier decisión nueva.

---

## Plantilla de ficha

```
## Ficha N · Nombre del efecto
| Scroll trabajado | ... |
| Qué se repite | ... |
| Disparador | ... |
| Estado inicial | ... |
| Estado final | ... |
| Desactivado con | ... |
| Commits | ... |
```
