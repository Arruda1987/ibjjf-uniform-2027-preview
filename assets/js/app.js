(function () {
  "use strict";

  var BELTS = {
    white: {
      label: "White belt",
      img: "assets/img/nogi/en_white.jpg?v=20261117-1215",
      colors: [
        { name: "White (more than 50%)", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black (secondary only)", hex: "#232020" }
      ],
      rule:
        "White belts: predominantly white (more than 50% of the surface); the only secondary color allowed is black."
    },
    grey: {
      label: "Grey belt",
      img: "assets/img/nogi/en_grey.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Grey (at least 10%, or 100%)", hex: "#7b7979" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    yellow: {
      label: "Yellow belt",
      img: "assets/img/nogi/en_yellow.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Yellow (at least 10%, or 100%)", hex: "#fabc09" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    orange: {
      label: "Orange belt",
      img: "assets/img/nogi/en_orange.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Orange (at least 10%, or 100%)", hex: "#f25c19" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    green: {
      label: "Green belt",
      img: "assets/img/nogi/en_green.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Green (at least 10%, or 100%)", hex: "#2a9949" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    blue: {
      label: "Blue belt",
      img: "assets/img/nogi/en_blue.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Royal Blue (at least 10%, or 100%)", hex: "#2056AE" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    purple: {
      label: "Purple belt",
      img: "assets/img/nogi/en_purple.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Purple (at least 10%, or 100%)", hex: "#7f389f" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    brown: {
      label: "Brown belt",
      img: "assets/img/nogi/en_brown.jpg?v=20261117-1215",
      colors: [
        { name: "Black", hex: "#232020" },
        { name: "White", hex: "#f4f4f4", border: "#ccc" },
        { name: "Black and white", hex: "linear-gradient(90deg,#232020 50%,#f4f4f4 50%)" },
        { name: "Brown (at least 10%, or 100%)", hex: "#775024" }
      ],
      rule:
        "For colored belts (grey, yellow, orange, green, blue, purple and brown): shirts are colored black, white, or black and white, with at least 10% of the rank color (belt) to which the athlete belongs. The rank color must be placed so that the athlete’s rank (belt) can be clearly identified whether the athlete is seen from the front or from the back. Shirts 100% the color of the athlete’s rank (belt) are also permitted."
    },
    black: {
      label: "Black belt",
      img: "assets/img/nogi/en_black.jpg?v=20261117-1215",
      colors: [
        { name: "Black (more than 50%)", hex: "#232020" },
        { name: "White (secondary only)", hex: "#f4f4f4", border: "#ccc" },
        { name: "Small red area tolerated", hex: "#b01111" }
      ],
      rule:
        "Black belts: predominantly black (more than 50% of the surface); the only secondary color allowed is white. Note: For black belts a small red area will be tolerated, but must not de-characterize the athlete’s rank color."
    }
  };

  var MEASURES = {
    wrist: {
      title: "Sleeves at the wrist",
      text: "The sleeves should come to no more than 2 cm from the athlete’s wrist when the arm is extended straight parallel to the ground."
    },
    ankle: {
      title: "Pants at the ankle",
      text: "GI pants should reach no more than 2 cm above the tibial malleolus (ankle bone)."
    },
    length: {
      title: "Jacket length",
      text: "The GI top should reach the athlete’s thigh and the sleeves should come to no more than 2 cm from the athlete’s wrist when the arm is extended straight parallel to the ground."
    },
    sleeve: {
      title: "Sleeve opening",
      text: "The inspection will verify whether the official measurement is met: opening of sleeve at full extension (7 cm)."
    },
    collar: {
      title: "Collar and lapel",
      text: "The inspection will verify whether the following official measurements are met: GI lapel thickness (1.3 cm), width of GI collar (5 cm)."
    },
    belt: {
      title: "Belt",
      text: "Athletes should use a durable, 4 to 5 cm wide belt colored according to the athlete’s rank, with a black tip – except for black belts, where the tip should be white or red. The belt should be worn over the top, wrap around the waist twice, and be tied using a double knot tight enough to hold the GI top closed. Once tied in a double knot, each end of the belt should hang 20 to 30 cm in length."
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
    if (titleEl) titleEl.textContent = b.label + " — No-Gi rash guard";
    if (photo) {
      photo.src = b.img;
      photo.setAttribute("data-zoom", b.img);
      photo.alt = "Example No-Gi rash guard colors for a " + b.label.toLowerCase();
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

  /* Gi color explorer — official patch-area drawing, fabric only */
  var giImg = document.getElementById("gi-color-img");
  var giLabel = document.getElementById("gi-color-label");
  var giNote = document.getElementById("gi-color-note");
  var GI_ART = {
    white: "assets/img/site/gi-patches-white.png?v=20261117-1215",
    royal: "assets/img/site/gi-patches-royal.png?v=20261117-1215",
    black: "assets/img/site/gi-patches-black.png?v=20261117-1215",
    navy: "assets/img/site/gi-patches-navy.png?v=20261117-1215"
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
        giImg.alt = "GI drawing in " + name + ".";
      }
      if (giLabel) giLabel.textContent = name;
      if (giNote) {
        giNote.textContent = allowed
          ? btn.getAttribute("data-note")
          : "Navy blue is not allowed. Official blue is Royal Blue — PMS 2172 C.";
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

  /* Language link keeps the current section (#gi, #nogi, ...) */
  function syncLang() {
    var a = document.getElementById("lang-pt");
    if (a) a.setAttribute("href", "pt/" + (location.hash || ""));
  }
  syncLang();
  window.addEventListener("hashchange", syncLang);
  tabs.forEach(function (t) { t.addEventListener("click", function () { setTimeout(syncLang, 0); }); });
})();
