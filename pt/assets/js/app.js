(function () {
  "use strict";

  var BELTS = {
    white: {
      label: "Faixa branca",
      img: "assets/img/nogi/pt_white.jpg?v=20261117-1425",
      colors: [
        { name: "Branco (mais de 50%)", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto (apenas secundária)", hex: "#232020" }
      ],
      rule:
        "Faixas brancas: predominantemente branca (mais de 50% da superfície); a única cor secundária permitida é a preta."
    },
    grey: {
      label: "Faixa cinza",
      img: "assets/img/nogi/pt_grey.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Cinza (pelo menos 10%, ou 100%)", hex: "#7b7979" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    yellow: {
      label: "Faixa amarela",
      img: "assets/img/nogi/pt_yellow.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Amarelo (pelo menos 10%, ou 100%)", hex: "#fabc09" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    orange: {
      label: "Faixa laranja",
      img: "assets/img/nogi/pt_orange.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Laranja (pelo menos 10%, ou 100%)", hex: "#f25c19" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    green: {
      label: "Faixa verde",
      img: "assets/img/nogi/pt_green.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Verde (pelo menos 10%, ou 100%)", hex: "#2a9949" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    blue: {
      label: "Faixa azul",
      img: "assets/img/nogi/pt_blue.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Azul Royal (pelo menos 10%, ou 100%)", hex: "#2056AE" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    purple: {
      label: "Faixa roxa",
      img: "assets/img/nogi/pt_purple.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Roxo (pelo menos 10%, ou 100%)", hex: "#7f389f" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    brown: {
      label: "Faixa marrom",
      img: "assets/img/nogi/pt_brown.jpg?v=20261117-1425",
      colors: [
        { name: "Preto", hex: "#232020" },
        { name: "Branco", hex: "#f4f4f4", border: "#ccc" },
        { name: "Preto e branco", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Marrom (pelo menos 10%, ou 100%)", hex: "#775024" }
      ],
      rule:
        "Para faixas coloridas (cinza, amarela, laranja, verde, azul, roxa e marrom): camisas de cor preta, branca ou preta e branca, com pelo menos 10% na cor referente à graduação (faixa) a que o atleta pertence. A cor da graduação deve estar posicionada de forma que a graduação (faixa) do atleta possa ser claramente identificada, seja o atleta visto de frente ou de costas. Camisas 100% na cor da graduação (faixa) a que o atleta pertence também são aceitas."
    },
    black: {
      label: "Faixa preta",
      img: "assets/img/nogi/pt_black.jpg?v=20261117-1425",
      colors: [
        { name: "Preto (mais de 50%)", hex: "#232020" },
        { name: "Branco (apenas secundária)", hex: "#f4f4f4", border: "#ccc" },
        { name: "Pequena área vermelha tolerada", hex: "#b01111" }
      ],
      rule:
        "Faixas pretas: predominantemente preta (mais de 50% da superfície); a única cor secundária permitida é a branca. Obs.: para as categorias de faixa preta será tolerada uma pequena área na cor vermelha, mas sem descaracterizar a cor da graduação do atleta."
    }
  };

  var MEASURES = {
    wrist: {
      title: "Mangas no punho",
      text: "O comprimento mínimo das mangas deve alcançar até 2 cm da articulação dos pulsos dos atletas quando os braços estiverem esticados para frente paralelo ao solo."
    },
    ankle: {
      title: "Calça no tornozelo",
      text: "A calça do kimono deve ter comprimento mínimo de 2 cm acima do maléolo tibial (osso do tornozelo)."
    },
    length: {
      title: "Comprimento do paletó",
      text: "O paletó deve ir até as coxas do atleta e o comprimento mínimo das mangas deve alcançar até 2 cm da articulação dos pulsos dos atletas quando os braços estiverem esticados para frente paralelo ao solo."
    },
    sleeve: {
      title: "Folga da manga",
      text: "A checagem vai verificar se a medida oficial é respeitada: folga da manga do kimono em toda a sua extensão (7 cm)."
    },
    collar: {
      title: "Gola",
      text: "A checagem vai verificar se as seguintes medidas oficiais são respeitadas: espessura da gola do kimono (1,3 cm) e largura da gola do kimono (5 cm)."
    },
    belt: {
      title: "Faixa",
      text: "O atleta deve utilizar uma faixa resistente de 4 a 5 cm de largura, cuja cor corresponda à graduação, com a ponta preta, exceto faixas pretas, que terão a ponta branca ou vermelha. Essa deve ser usada sobre o paletó, dando duas voltas na altura da cintura e sendo amarrada com um nó duplo, suficientemente apertada para impedir que o paletó se solte. Após o nó duplo, cada ponta da faixa deve ter entre 20 cm e 30 cm de comprimento."
    }
  };

  var tabs = Array.prototype.slice.call(document.querySelectorAll(".tab"));
  var panels = Array.prototype.slice.call(document.querySelectorAll(".panel"));

  function showTab(id, push) {
    tabs.forEach(function (t) {
      var on = t.getAttribute("data-tab") === id;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) {
      p.classList.toggle("is-active", p.id === "panel-" + id);
    });
    if (push !== false) {
      if (history.replaceState) history.replaceState(null, "", "#" + id);
      else location.hash = id;
    }
  }

  tabs.forEach(function (t) {
    t.addEventListener("click", function () {
      showTab(t.getAttribute("data-tab"));
    });
  });

  var initial = (location.hash || "#gi").replace("#", "");
  if (!document.getElementById("panel-" + initial)) initial = "gi";
  showTab(initial, false);

  window.addEventListener("hashchange", function () {
    var id = (location.hash || "#gi").replace("#", "");
    if (document.getElementById("panel-" + id)) showTab(id, false);
  });


  /* Belt selector */
  var beltBtns = Array.prototype.slice.call(document.querySelectorAll("[data-belt]"));
  var photo = document.getElementById("belt-photo");
  var ruleEl = document.getElementById("belt-rule");
  var chipsEl = document.getElementById("belt-chips");
  var titleEl = document.getElementById("belt-title");

  function renderBelt(key) {
    var b = BELTS[key];
    if (!b) return;
    beltBtns.forEach(function (btn) {
      btn.setAttribute("aria-pressed", btn.getAttribute("data-belt") === key ? "true" : "false");
    });
    if (titleEl) titleEl.textContent = b.label + " — rash guard No-Gi";
    if (photo) {
      photo.src = b.img;
      photo.setAttribute("data-zoom", b.img);
      photo.alt = "Exemplo de cores da rash guard No-Gi para a " + b.label.toLowerCase();
    }
    if (ruleEl) ruleEl.textContent = b.rule;
    if (chipsEl) {
      chipsEl.innerHTML = b.colors
        .map(function (c) {
          var style = c.hex.indexOf("gradient") === -1
            ? "background:" + c.hex + (c.border ? ";border-color:" + c.border : "")
            : "background:" + c.hex;
          return '<span class="color-chip"><i style="' + style + '"></i>' + c.name + "</span>";
        })
        .join("");
    }
  }

  beltBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      renderBelt(btn.getAttribute("data-belt"));
    });
  });
  renderBelt("blue");

  /* Explorador de cores do kimono — desenho oficial das áreas de patch, só o tecido muda */
  var giImg = document.getElementById("gi-color-img");
  var giLabel = document.getElementById("gi-color-label");
  var giNote = document.getElementById("gi-color-note");
  var GI_ART = {
    white: "assets/img/site/gi-patches-white.png?v=20261117-1425",
    royal: "assets/img/site/gi-patches-royal.png?v=20261117-1425",
    black: "assets/img/site/gi-patches-black.png?v=20261117-1425",
    navy: "assets/img/site/gi-patches-navy.png?v=20261117-1425"
  };
  document.querySelectorAll("[data-gi-color]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("[data-gi-color]").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      btn.setAttribute("aria-pressed", "true");
      var allowed = btn.getAttribute("data-allowed") !== "false";
      var key = btn.getAttribute("data-art");
      var name = btn.getAttribute("data-name");
      if (giImg && GI_ART[key]) {
        giImg.src = GI_ART[key];
        giImg.setAttribute("data-zoom", GI_ART[key]);
        giImg.alt = "Desenho do kimono na cor " + name.toLowerCase() + ".";
      }
      if (giLabel) giLabel.textContent = name;
      if (giNote) {
        giNote.textContent = allowed
          ? btn.getAttribute("data-note")
          : "O azul marinho não é permitido. O azul oficial é o Azul Royal — PMS 2172 C.";
      }
      var preview = document.getElementById("gi-preview");
      if (preview) preview.classList.toggle("denied", !allowed);
    });
  });

  /* Measurement hotspots */
  var detailTitle = document.getElementById("measure-title");
  var detailText = document.getElementById("measure-text");
  document.querySelectorAll("[data-measure]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      document.querySelectorAll("[data-measure]").forEach(function (b) {
        b.setAttribute("aria-pressed", "false");
      });
      btn.setAttribute("aria-pressed", "true");
      var m = MEASURES[btn.getAttribute("data-measure")];
      if (m && detailTitle && detailText) {
        detailTitle.textContent = m.title;
        detailText.textContent = m.text;
      }
    });
  });

  /* Lightbox */
  var lb = document.getElementById("lightbox");
  var lbImg = document.getElementById("lightbox-img");
  var lbClose = document.getElementById("lightbox-close");

  function openLb(src, alt) {
    if (!lb || !lbImg) return;
    lbImg.src = src;
    lbImg.alt = alt || "";
    lb.classList.add("is-open");
    if (lbClose) lbClose.focus();
  }
  function closeLb() {
    if (!lb) return;
    lb.classList.remove("is-open");
    if (lbImg) lbImg.removeAttribute("src");
  }
  document.querySelectorAll("[data-zoom]").forEach(function (el) {
    el.addEventListener("click", function () {
      var src = (el.tagName === "IMG" && el.getAttribute("src")) || el.getAttribute("data-zoom") || el.getAttribute("src");
      var alt = el.getAttribute("alt") || "";
      if (src) openLb(src, alt);
    });
    el.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        el.click();
      }
    });
  });
  if (lbClose) lbClose.addEventListener("click", closeLb);
  if (lb) {
    lb.addEventListener("click", function (e) {
      if (e.target === lb) closeLb();
    });
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLb();
  });

  /* Mobile menu */
  var navToggle = document.getElementById("nav-toggle");
  var mainNav = document.getElementById("main-nav");
  if (navToggle && mainNav) {
    navToggle.addEventListener("click", function () {
      var open = mainNav.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  /* Language links keep the current section (#gi, #nogi, ...) */
  function syncLang() {
    var h = location.hash || "";
    ["lang-en", "lang-en-foot"].forEach(function (id) {
      var a = document.getElementById(id);
      if (a) a.setAttribute("href", "../" + h);
    });
  }
  syncLang();
  window.addEventListener("hashchange", syncLang);
  tabs.forEach(function (t) { t.addEventListener("click", function () { setTimeout(syncLang, 0); }); });
})();
