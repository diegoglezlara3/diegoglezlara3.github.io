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
      });
    }
  }

  /* ---------------------------------------------------------------------
     2. Modales de ficha
     Cada tarjeta del portafolio abre un <dialog> nativo con el detalle
     completo. El navegador ya resuelve el centrado, el foco y la tecla
     Esc; sólo hace falta cablear el clic de apertura, el botón de cierre
     y el clic sobre el fondo (el <dialog> nativo no lo cierra solo).
     --------------------------------------------------------------------- */

  function iniciarModales() {
    var botones = document.querySelectorAll("[data-modal]");
    for (var i = 0; i < botones.length; i++) {
      (function (boton) {
        boton.addEventListener("click", function () {
          var dialogo = document.getElementById(boton.getAttribute("data-modal"));
          if (dialogo) dialogo.showModal();
        });
      })(botones[i]);
    }

    var dialogos = document.querySelectorAll(".ficha-modal");
    for (var j = 0; j < dialogos.length; j++) {
      (function (dialogo) {
        var cerrar = dialogo.querySelector(".ficha-modal-cerrar");
        if (cerrar) {
          cerrar.addEventListener("click", function () {
            dialogo.close();
          });
        }
        // Clic en el fondo: sólo cuenta si el objetivo es el <dialog>
        // mismo, no algo dentro de .ficha-modal-cuerpo.
        dialogo.addEventListener("click", function (e) {
          if (e.target === dialogo) dialogo.close();
        });
      })(dialogos[j]);
    }
  }

  /* ---------------------------------------------------------------------
     3. Arranque
     --------------------------------------------------------------------- */

  function iniciar() {
    iniciarIdioma();
    iniciarModales();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", iniciar);
  } else {
    iniciar();
  }
})();
