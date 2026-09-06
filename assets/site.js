/* =========================================================================
   Diego González Lara — comportamiento del sitio
   Dos piezas y nada más: el conmutador de idioma y los rieles convergentes.
   Sin dependencias, sin build.
   ========================================================================= */

(function () {
  "use strict";

  var IDIOMA_DEFECTO = "es";
  var LLAVE = "dgl-idioma";

  /* ---------------------------------------------------------------------
     1. Idioma
     Cada nodo traducible lleva data-es y data-en. Cambiar de idioma es
     recorrer el documento una vez y reescribir; no hay páginas duplicadas.
     --------------------------------------------------------------------- */

  var MAPA_ATRIBUTOS = [
    { sufijo: "html", aplicar: setHTML },
    { sufijo: "alt", aplicar: atributo("alt") },
    { sufijo: "label", aplicar: atributo("aria-label") },
    { sufijo: "title", aplicar: atributo("title") },
  ];

  function atributo(nombre) {
    return function (el, valor) {
      el.setAttribute(nombre, valor);
    };
  }

  function setHTML(el, valor) {
    el.innerHTML = valor;
  }

  function leerGuardado() {
    try {
      return window.localStorage.getItem(LLAVE);
    } catch (e) {
      return null;
    }
  }

  function guardar(idioma) {
    try {
      window.localStorage.setItem(LLAVE, idioma);
    } catch (e) {
      /* Modo privado o almacenamiento bloqueado: el sitio sigue funcionando,
         sólo no recuerda la preferencia. */
    }
  }

  function aplicarIdioma(idioma) {
    var otro = idioma === "es" ? "en" : "es";

    // Texto plano
    var nodos = document.querySelectorAll("[data-" + idioma + "]");
    for (var i = 0; i < nodos.length; i++) {
      nodos[i].textContent = nodos[i].getAttribute("data-" + idioma);
    }

    // Atributos y HTML enriquecido
    for (var m = 0; m < MAPA_ATRIBUTOS.length; m++) {
      var regla = MAPA_ATRIBUTOS[m];
      var clave = "data-" + idioma + "-" + regla.sufijo;
      var conAttr = document.querySelectorAll("[" + clave + "]");
      for (var j = 0; j < conAttr.length; j++) {
        regla.aplicar(conAttr[j], conAttr[j].getAttribute(clave));
      }
    }

    // Título y meta descripción
    var t = document.documentElement.getAttribute("data-titulo-" + idioma);
    if (t) document.title = t;
    var meta = document.querySelector('meta[name="description"]');
    var d = document.documentElement.getAttribute("data-desc-" + idioma);
    if (meta && d) meta.setAttribute("content", d);

    document.documentElement.setAttribute("lang", idioma);

    // Estado de los botones
    var botones = document.querySelectorAll("[data-idioma]");
    for (var k = 0; k < botones.length; k++) {
      var activo = botones[k].getAttribute("data-idioma") === idioma;
      botones[k].setAttribute("aria-pressed", activo ? "true" : "false");
    }

    // Los enlaces internos no cambian, pero el ancla de "saltar" sí describe
    // el idioma activo para lectores de pantalla.
    void otro;
  }

  function iniciarIdioma() {
    var guardado = leerGuardado();
    var inicial = guardado === "en" || guardado === "es" ? guardado : IDIOMA_DEFECTO;
    aplicarIdioma(inicial);

    var botones = document.querySelectorAll("[data-idioma]");
    for (var i = 0; i < botones.length; i++) {
      botones[i].addEventListener("click", function () {
        var elegido = this.getAttribute("data-idioma");
        aplicarIdioma(elegido);
        guardar(elegido);
        // El alto de la página cambia con el texto: los rieles se redibujan.
        dibujarRieles();
      });
    }
  }

  /* ---------------------------------------------------------------------
     2. Los rieles convergentes
     Dos hairlines que recorren la página y se tocan exactamente en el
     bloque de contacto. En teléfono el contenido colapsa a una columna
     pero los rieles siguen en los márgenes: la metáfora no depende del
     ancho, sólo del recorrido.
     --------------------------------------------------------------------- */

  var svg, izq, der, union, remateIzq, remateDer;

  function nodoSVG(nombre) {
    return document.createElementNS("http://www.w3.org/2000/svg", nombre);
  }

  function montarRieles() {
    var host = document.querySelector(".rieles");
    if (!host) return false;

    svg = nodoSVG("svg");
    svg.setAttribute("aria-hidden", "true");
    svg.setAttribute("focusable", "false");
    svg.setAttribute("preserveAspectRatio", "none");

    izq = nodoSVG("path");
    der = nodoSVG("path");
    izq.setAttribute("class", "riel-linea");
    der.setAttribute("class", "riel-linea");

    // El último tramo de cada riel, en Azul Rey: es el que se enciende
    // cuando el contacto entra en pantalla.
    remateIzq = nodoSVG("path");
    remateDer = nodoSVG("path");
    remateIzq.setAttribute("class", "riel-linea riel-remate");
    remateDer.setAttribute("class", "riel-linea riel-remate");

    union = nodoSVG("circle");
    union.setAttribute("class", "riel-union");
    union.setAttribute("r", "5");

    svg.appendChild(izq);
    svg.appendChild(der);
    svg.appendChild(remateIzq);
    svg.appendChild(remateDer);
    svg.appendChild(union);
    host.appendChild(svg);
    return true;
  }

  function dibujarRieles() {
    if (!svg) return;

    var pagina = document.querySelector(".pagina");
    var destino = document.querySelector("[data-union]");
    if (!pagina || !destino) return;

    var W = pagina.offsetWidth;
    var H = pagina.offsetHeight;
    if (!W || !H) return;

    svg.setAttribute("viewBox", "0 0 " + W + " " + H);

    // Los rieles se alinean al borde exterior del área legible, no a la
    // ventana: así respetan la misma retícula que el contenido.
    var envoltura = document.querySelector(".envoltura");
    var margen = 16;
    if (envoltura) {
      var r = envoltura.getBoundingClientRect();
      margen = Math.max(8, r.left - 22);
    }
    var x0 = margen;
    var x1 = W - margen;
    var xm = W / 2;

    // Punto de unión: en la banda vacía justo encima del titular del
    // contacto. Los dos rieles cierran ahí y el bloque entero cuelga del
    // vértice. Cerrar más abajo obligaría a las diagonales a cruzar el
    // titular y los botones, porque el bloque está centrado.
    var pagCaja = pagina.getBoundingClientRect();
    var caja = destino.getBoundingClientRect();
    var yUnion = caja.top - pagCaja.top + 44;
    yUnion = Math.max(120, Math.min(yUnion, H - 24));

    // Los rieles se mantienen en los márgenes casi todo el recorrido y
    // cierran en diagonal en el último tramo. Si convergen antes, la
    // diagonal cruza el titular del contacto como un tachado.
    var cierre = Math.min(300, yUnion * 0.16);
    var q1 = yUnion - cierre * 2.6;
    var q2 = yUnion - cierre;

    var dIzq =
      "M " + x0 + " 0 C " + x0 + " " + q1 + " " + x0 + " " + q2 + " " + xm + " " + yUnion;
    var dDer =
      "M " + x1 + " 0 C " + x1 + " " + q1 + " " + x1 + " " + q2 + " " + xm + " " + yUnion;

    izq.setAttribute("d", dIzq);
    der.setAttribute("d", dDer);

    // El remate recorre exactamente el mismo trazo que su riel: no es una
    // curva aparte, es el último tramo del mismo camino, encendido en azul.
    remateIzq.setAttribute("d", dIzq);
    remateDer.setAttribute("d", dDer);

    union.setAttribute("cx", xm);
    union.setAttribute("cy", yUnion);

    prepararRemate();
  }

  function prepararRemate() {
    [remateIzq, remateDer].forEach(function (p) {
      if (!p.getTotalLength) return;
      var largo = p.getTotalLength();
      // Se ilumina sólo el tramo final, el que ya viene convergiendo.
      var tramo = Math.min(largo * 0.2, 460);
      p.style.strokeDasharray = tramo + " " + largo;
      // Fuera del camino = invisible; al final del camino = tramo completo.
      p.style.strokeDashoffset = p.classList.contains("encendido")
        ? -(largo - tramo)
        : -largo;
    });
  }

  function encenderUnion() {
    [remateIzq, remateDer].forEach(function (p) {
      p.classList.add("encendido");
      if (!p.getTotalLength) return;
      var largo = p.getTotalLength();
      var tramo = Math.min(largo * 0.2, 460);
      p.style.strokeDashoffset = -(largo - tramo);
    });
    union.classList.add("encendido");
  }

  function observarUnion() {
    var destino = document.querySelector("[data-union]");
    if (!destino) return;

    var reducido =
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reducido || !("IntersectionObserver" in window)) {
      encenderUnion();
      return;
    }

    var obs = new IntersectionObserver(
      function (entradas) {
        entradas.forEach(function (e) {
          if (e.isIntersecting) {
            encenderUnion();
            obs.disconnect();
          }
        });
      },
      { threshold: 0.35 }
    );
    obs.observe(destino);
  }

  /* ---------------------------------------------------------------------
     3. Arranque
     --------------------------------------------------------------------- */

  function redibujarConRetraso() {
    var t;
    return function () {
      clearTimeout(t);
      t = setTimeout(dibujarRieles, 120);
    };
  }

  function iniciar() {
    iniciarIdioma();

    if (montarRieles()) {
      dibujarRieles();
      observarUnion();
      window.addEventListener("resize", redibujarConRetraso());
      // Las fuentes cambian el alto del documento al cargar.
      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(dibujarRieles);
      }
      window.addEventListener("load", dibujarRieles);

      // Las imágenes diferidas y el cambio de idioma también mueven el alto.
      // El observador es lo que garantiza que la unión caiga siempre sobre
      // el bloque de contacto, no donde estaba cuando cargó la página.
      if ("ResizeObserver" in window) {
        var pagina = document.querySelector(".pagina");
        if (pagina) new ResizeObserver(dibujarRieles).observe(pagina);
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
