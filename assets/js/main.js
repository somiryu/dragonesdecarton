/*
 * Dragones de Cartón · render del contenido
 * Lee window.DC (assets/js/data.js) y llena los elementos marcados con data-*.
 * Sin dependencias ni build: funciona abriendo el HTML directo o en Netlify.
 */
(function () {
  "use strict";
  var DC = window.DC;
  if (!DC) return;

  /* Reemplaza {clave} por el valor de DC.evento */
  function fill(text) {
    return String(text).replace(/\{(\w+)\}/g, function (m, k) {
      return DC.evento[k] != null ? DC.evento[k] : m;
    });
  }

  function get(path) {
    return path.split(".").reduce(function (o, k) { return o ? o[k] : undefined; }, DC);
  }

  function el(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }

  function isPending(v) {
    return typeof v === "string" && /\[.*\]/.test(v);
  }

  /* 1. Valores sueltos: <span data-dc="evento.horaSorteo"> */
  document.querySelectorAll("[data-dc]").forEach(function (n) {
    var v = get(n.getAttribute("data-dc"));
    if (v == null) return;
    n.textContent = v;
    if (isPending(v)) n.classList.add("pending");
  });

  /* 2. Mecánica activa en la página pública */
  var activa = DC.mecanicas[DC.mecanicaActiva];

  function objetivosList(m) {
    var frag = document.createDocumentFragment();
    m.objetivos.forEach(function (o) {
      var li = el("li");
      var head = el("div", "objetivo__head");
      head.appendChild(el("strong", null, o.nombre));
      head.appendChild(el("span", "objetivo__premio", fill(o.premio)));
      li.appendChild(head);
      li.appendChild(el("span", "objetivo__detalle", fill(o.detalle)));
      frag.appendChild(li);
    });
    return frag;
  }

  if (activa) {
    document.querySelectorAll("[data-mecanica]").forEach(function (n) {
      var key = n.getAttribute("data-mecanica");
      if (key === "objetivos") n.appendChild(objetivosList(activa));
      else if (key === "extras") (activa.extras || []).forEach(function (x) { n.appendChild(el("li", null, fill(x))); });
      else n.textContent = activa[key];
    });
  }

  /* 3. Todas las mecánicas (guía para aliados) */
  document.querySelectorAll("[data-mecanicas]").forEach(function (wrap) {
    Object.keys(DC.mecanicas).forEach(function (id) {
      var m = DC.mecanicas[id];
      var card = el("article", "mecanica" + (id === DC.mecanicaActiva ? " is-active" : ""));
      var top = el("div", "mecanica__top");
      top.appendChild(el("span", "mecanica__id", id));
      if (id === DC.mecanicaActiva) top.appendChild(el("span", "badge", "Activa"));
      card.appendChild(top);
      card.appendChild(el("h3", null, m.nombre));
      card.appendChild(el("p", "muted", m.resumen));
      var ul = el("ul", "objetivos objetivos--compact");
      ul.appendChild(objetivosList(m));
      card.appendChild(ul);
      if (m.extras && m.extras.length) {
        var ex = el("ul", "extras");
        m.extras.forEach(function (x) { ex.appendChild(el("li", null, fill(x))); });
        card.appendChild(ex);
      }
      wrap.appendChild(card);
    });
  });

  /* 4. Cuadrícula del cartón */
  document.querySelectorAll("[data-carton]").forEach(function (grid) {
    DC.carton.forEach(function (row) {
      row.forEach(function (p) {
        var c = el("span", p ? "casilla" : "casilla casilla--vacia");
        if (p) {
          c.style.setProperty("--c", DC.pabellones[p].color);
          c.title = DC.pabellones[p].nombre;
          c.textContent = p;
        }
        grid.appendChild(c);
      });
    });
  });

  /* 5. Leyenda de pabellones con número de casillas */
  document.querySelectorAll("[data-legend]").forEach(function (ul) {
    var count = {};
    DC.carton.forEach(function (r) { r.forEach(function (p) { if (p) count[p] = (count[p] || 0) + 1; }); });
    Object.keys(DC.pabellones).forEach(function (k) {
      var li = el("li");
      var dot = el("span", "dot");
      dot.style.setProperty("--c", DC.pabellones[k].color);
      li.appendChild(dot);
      li.appendChild(document.createTextNode(k + " · " + (count[k] || 0) + " casillas"));
      ul.appendChild(li);
    });
  });

  /* 6. Participantes */
  document.querySelectorAll("[data-participantes]").forEach(function (ul) {
    DC.participantes.forEach(function (p) {
      var li = el("li", "participante");
      var code = el("span", "participante__code", p.codigo);
      if (p.pabellon && DC.pabellones[p.pabellon]) code.style.setProperty("--c", DC.pabellones[p.pabellon].color);
      li.appendChild(code);
      var body = el("div");
      body.appendChild(el("strong", null, p.nombre));
      body.appendChild(el("span", "participante__meta" + (p.pabellon ? "" : " pending"), p.pabellon ? DC.pabellones[p.pabellon].nombre : "Pabellón por confirmar"));
      if (p.actividad) body.appendChild(el("span", "participante__act", p.actividad));
      li.appendChild(body);
      ul.appendChild(li);
    });
  });

  /* 7. Preguntas frecuentes */
  document.querySelectorAll("[data-faq]").forEach(function (dl) {
    DC.faq.forEach(function (f) {
      dl.appendChild(el("dt", null, f.p));
      dl.appendChild(el("dd", null, fill(f.r)));
    });
  });
})();
