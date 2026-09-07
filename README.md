# Sitio personal — Diego González Lara

Sitio estático, bilingüe (ES/EN), sin build y sin backend. Se publica en GitHub Pages
y se actualiza editando HTML a mano.

## Qué hay aquí

```
index.html            La espina: posición, pilares, portafolio (tarjetas +
                      modal), experiencia, formación, el CTA de Garabato,
                      contacto
caso-lepp.html        El laboratorio construido desde cero (EMERGE va dentro)
caso-garabato.html    La apuesta actual, sin tracción, buscando socios
assets/styles.css     Todo el sistema visual
assets/site.js        Dos cosas: idioma y los modales de ficha
assets/*.pdf          CV en español y en inglés
```

`caso-minutas.html` existió y se borró (2026-09-06): el rediseño DMAIC de minutas
vive ahora sólo dentro de la entrada de Redwood en "Mi experiencia", no como caso
propio.

## Cómo editar

**Cambiar un texto.** Cada nodo traducible lleva `data-es` y `data-en`. Hay que
cambiar **los tres**: el atributo `data-es`, el atributo `data-en` y el texto visible
entre las etiquetas. Si sólo cambias el texto visible, se revierte en cuanto alguien
toca el conmutador de idioma.

```html
<p data-es="Texto nuevo" data-en="New text">Texto nuevo</p>
```

Para atributos existen `data-es-alt` / `data-en-alt` (texto alternativo de imagen),
`data-es-label` / `data-en-label` (`aria-label`) y `data-es-html` / `data-en-html`
(cuando el texto lleva enlaces dentro). El título de la pestaña y la meta descripción
viven en el elemento `<html>`, como `data-titulo-es`, `data-titulo-en`, `data-desc-es`
y `data-desc-en`.

**Añadir una sección.** Copia una `<section>` existente. Si lleva kicker, cámbiale el
color con `style="--kicker-color: var(--rojo)"` — los colores disponibles son `--rojo`,
`--naranja`, `--amarillo`, `--esmeralda`, `--morado` y `--azul`.

**Añadir una imagen.** Ponla en `assets/`, referénciala con `width` y `height` reales,
y agrégale `loading="lazy"` si está por debajo del primer pantallazo.

## El portafolio de proyectos

Cada proyecto es una tarjeta compacta (`<button class="ficha-card" data-modal="…">`)
que abre un `<dialog id="…">` con el detalle completo. Es `<dialog>` nativo, no una
librería: el navegador resuelve solo el centrado, el fondo oscurecido (`::backdrop`),
la tecla Esc y el regreso del foco al botón que abrió el modal. `site.js` sólo cablea
tres cosas — el clic que abre (`showModal()`), el botón de cierre, y el clic en el
fondo (el `<dialog>` nativo no se cierra solo al hacer clic fuera).

**Para añadir un proyecto:** copia un `<button class="ficha-card">` y su `<dialog>`
correspondiente, dales un `id`/`data-modal` nuevo y coordinado entre ambos, y
registra el `<h3>` del modal con `aria-labelledby` apuntando a su propio `id`.

**Por qué no son fichas completas en la página:** la primera versión mostraba todo el
detalle directamente (sin modal) y la sección ocupaba un tercio de la página completa.
El patrón tarjeta+modal resuelve eso sin perder ningún contenido.

El botón de cierre (`.ficha-modal-cerrar`) es hijo directo del `<dialog>`, no del
`<div class="ficha-modal-cuerpo">` que hace scroll — por eso se queda fijo en la
esquina aunque el contenido sea más alto que el modal (como los 7 programas de LEPP
en pantallas angostas). Si algún día lo mueves adentro del cuerpo, se irá con el
scroll.

## Los rieles

Dos hairlines verticales de 1px que marcan el margen de la columna de lectura. Es
CSS puro (`.rieles::before`/`::after` en `assets/styles.css`) — sin SVG, sin JS, sin
recompute. Su posición replica en `calc()` la misma matemática que `.envoltura` usa
para centrarse (`max-width: 1180px` + `var(--marco)`), así que quedan siempre en el
margen vacío y nunca sobre el contenido, en cualquier ancho.

Antes convergían en un punto animado sobre el bloque de contacto (el "estilo funnel").
Se quitó a propósito (2026-09-07): son rectos, y punto.

Una cosa que conviene no tocar: `.rieles` está excluido de la regla
`.pagina > :not(.rieles)`. Si esa regla lo alcanza, le gana a su `position: absolute`
y la capa colapsa.

## Publicar

1. El repositorio contiene **sólo esta carpeta**. El árbol `Personal/` del proyecto
   padre queda fuera por completo: guarda documentación con datos personales de
   terceros y no puede salir del disco. El `.gitignore` lo bloquea, pero la protección
   real es no meterlo.
2. Settings → Pages → Deploy from branch → `main` / root.

El material de trabajo interno (`PRODUCT.md`, `docs/`, `.impeccable/`) también está
excluido: vive en el disco, no en el repositorio público.

El usuario de GitHub pasó de `diegoglezlara2003-cmyk` a **`diegoglezlara3`**
(septiembre 2026). Los enlaces de repositorio redirigen, pero **las URL de Pages no**:
si el demo de Garabato estaba publicado en `diegoglezlara2003-cmyk.github.io/garabato`,
esa dirección dejó de funcionar y hay que republicarlo bajo el usuario nuevo. Los
sitios con dominio propio (institutokune.org, blog.institutokune.org) no se ven
afectados.

Este sitio vive en el repositorio `diegoglezlara3/diegoglezlara3.github.io` y se
publica en **https://diegoglezlara3.github.io**. Todas las rutas del HTML son
relativas, así que también funcionaría desde una subcarpeta si algún día cambia.

Los CV publicados **no llevan teléfono**: el repositorio es público y los PDF quedan
indexables. Si regeneras los CV, no vuelvas a meter el número.

## Decisiones que no son accidentes

- **La foto va a color.** Rompe la Regla del Blanco y Negro del sistema Garabato a
  petición explícita de Diego.
- **"Lo que sigue sin resolver" se convirtió en el CTA de Garabato** (2026-09-07):
  "Un colectivo, no sólo un producto." Sigue siendo el mismo panel marino, y sigue
  abriendo con una admisión honesta (una herramienta sola no basta), pero ahora es
  una invitación a construir un colectivo de GovTech, no una lista de pendientes.
  El ítem de ruido salió de aquí porque ya vive en su propia ficha del portafolio.
- **El rediseño de minutas no tiene mención propia.** Vive únicamente dentro de la
  experiencia en Redwood — decisión explícita de Diego, no un recorte de espacio.
- **El portafolio son tarjetas, no páginas.** INGENIA, LEPP, el caso del ruido y
  Garabato aparecen como tarjetas iguales que abren un modal; ninguno tiene trato
  especial en la página principal, aunque LEPP y Garabato además tengan su propio
  caso completo enlazado desde el modal.
- **Sin blog, sin analítica, sin formulario.** El único objetivo es una conversación.

El sistema visual completo está documentado en `DESIGN.md`. El contrato de dirección
y la estrategia de la superficie, en `.impeccable/surfaces/index-html.md`. La
especificación de la que salió todo, en `docs/superpowers/specs/`.
