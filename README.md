# Sitio personal — Diego González Lara

Sitio estático, bilingüe (ES/EN), sin build y sin backend. Se publica en GitHub Pages
y se actualiza editando HTML a mano.

## Qué hay aquí

```
index.html            La espina: posición, dos carriles, INGENIA, pilares,
                      casos, trayectoria, lo que sigue sin resolver, contacto
caso-minutas.html     Rediseño con DMAIC del proceso de minutas
caso-lepp.html        El laboratorio construido desde cero (EMERGE va dentro)
caso-garabato.html    La apuesta actual, sin tracción, buscando socios
assets/styles.css     Todo el sistema visual
assets/site.js        Dos cosas: el conmutador de idioma y los rieles
assets/*.pdf          CV en español y en inglés
```

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

## Los rieles

Los dos hairlines que recorren la página los dibuja `site.js` en un SVG que cubre toda
la altura del documento. Convergen en un punto que se calcula a partir del bloque que
lleva el atributo `data-union` — el de contacto. Si mueves ese bloque, los rieles lo
siguen solos; un `ResizeObserver` los redibuja cuando cambia el alto de la página, ya
sea por el idioma o por imágenes que cargan tarde.

Dos cosas que romperían el efecto y conviene no tocar:

- `.rieles` está excluido a propósito de la regla `.pagina > :not(.rieles)`. Si esa
  regla lo alcanza, le gana a su `position: absolute` y la capa colapsa.
- El vértice cierra **arriba** del titular de contacto. Cerrarlo más abajo hace que las
  diagonales crucen el texto, porque el bloque está centrado.

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

Este sitio vive en `diegoglezlara3/personal` y se publica en
`diegoglezlara3.github.io/personal`. Todas las rutas del HTML son relativas, así que
funciona igual en una subcarpeta que en la raíz; si algún día quieres la URL corta,
basta con renombrar el repositorio a `diegoglezlara3.github.io`.

## Decisiones que no son accidentes

- **La foto va a color.** Rompe la Regla del Blanco y Negro del sistema Garabato a
  petición explícita de Diego.
- **"Lo que sigue sin resolver"** nombra tres huecos abiertos. Es el diferenciador del
  sitio, no un descuido.
- **INGENIA es el único programa con caso propio.** Los demás reciben una línea
  honesta: Diego da soporte, no forma parte de esos equipos.
- **Sin blog, sin analítica, sin formulario.** El único objetivo es una conversación.

El sistema visual completo está documentado en `DESIGN.md`. El contrato de dirección
y la estrategia de la superficie, en `.impeccable/surfaces/index-html.md`. La
especificación de la que salió todo, en `docs/superpowers/specs/`.
