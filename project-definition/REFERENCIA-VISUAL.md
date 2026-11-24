# Referencia visual: paleta y tipografía

Referencia principal: loket.design (estudio de diseño de producto). Captura guardada en `referencia-visual/loket-design-paleta.png`.

## Paleta de la referencia

| Nombre en la web | Hex | Variable en `style.css` | Uso |
|---|---|---|---|
| Rojo | `#E43D12` | `--rojo` | Titulares grandes, acentos, gráfica |
| Rosa | `#D6536D` | `--rosa` | Acentos secundarios |
| Rosa claro | `#FFA2B6` | `--rosa-claro` | Acentos suaves |
| Amarillo | `#EFB11D` | `--amarillo` | Acentos y gráfica |
| Crema | `#EBE9E1` | `--crema` | Fondo general |

Colores de texto añadidos para cumplir contraste (WCAG, 4,5:1 en texto pequeño):

| Hex | Variable | Contraste sobre crema |
|---|---|---|
| `#2a1206` | `--tinta` | texto principal |
| `#B92E0E` | `--rojo-texto` | 4,99:1 |
| `#6B6259` | `--gris-texto` | 4,91:1 |

## Tipografía

- Cuerpo: `"Helvetica Neue", Arial, sans-serif`.
- Etiquetas y tablas: `"Arial Narrow", "Helvetica Neue", Arial, sans-serif`.
- La referencia usa una grotesca de palo seco en mayúsculas muy grandes para los titulares. La web usa las fuentes del sistema, sin cargar fuentes externas.

## Notas

- La paleta de la web sale directamente de la referencia. Los dos colores de texto son una excepción para cumplir el contraste.
- Si cambian los colores, actualizar `:root` en `style.css` y esta tabla a la vez.
