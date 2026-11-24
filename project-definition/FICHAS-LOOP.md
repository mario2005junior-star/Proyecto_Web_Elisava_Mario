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

## Ficha 2 · Dibujo de la gráfica de evolución

| Campo | Contenido |
|---|---|
| Scroll trabajado | Recorrido completo de la sección «Evolución de artistas» (dentro de Datos). |
| Qué se repite | La línea de cada artista se dibuja según avanza el scroll y se borra al subir. Se repite en cada pasada. |
| Disparador | Evento `scroll` (passive) con `requestAnimationFrame`. |
| Progreso | `(altura de la ventana − top de la sección) / (altura de la sección + altura de la ventana)`, limitado entre 0 y 1. |
| Estado inicial | `pathLength = 1`, `stroke-dasharray = 1`, `stroke-dashoffset = 1` (línea invisible). |
| Estado final | `stroke-dashoffset = 0` (línea completa). |
| Desactivado con | `prefers-reduced-motion: reduce`. La gráfica se muestra completa. |
| Commit | `e404919`. |

**Código clave**
```js
const trazos = $("#grafica-evolucion").querySelectorAll("path");
trazos.forEach(p => {
  p.setAttribute("pathLength", "1");
  p.style.strokeDasharray = "1";
  p.style.strokeDashoffset = "1";
});
const dibuja = () => {
  const r = seccion.getBoundingClientRect();
  const avance = Math.min(1, Math.max(0, (window.innerHeight - r.top) / (r.height + window.innerHeight)));
  trazos.forEach(p => { p.style.strokeDashoffset = (1 - avance).toFixed(3); });
};
window.addEventListener("scroll", () => {
  if (!pendiente) { pendiente = true; requestAnimationFrame(dibuja); }
}, { passive: true });
```

**Decisión:** el progreso usa toda la sección, no solo la parte visible, para que la línea llegue completa al final del apartado.

**Cómo comprobarlo:** abrir «3 Datos», bajar hasta «Evolución de artistas». La línea debe dibujarse al bajar y borrarse al subir.

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
