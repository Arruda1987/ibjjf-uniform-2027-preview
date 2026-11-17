/* Header behaviour for the replica of the site navigation (dropdowns, mobile menu, scroll-to-top). */
(function () {
  var rc = document.querySelectorAll(".rc");
  function closeDropdowns(except) {
    document.querySelectorAll(".rc .dropdown.show").forEach(function (d) {
      if (d === except) return;
      d.classList.remove("show");
      var m = d.querySelector(".dropdown-menu"); if (m) m.classList.remove("show");
      var t = d.querySelector("[data-toggle='dropdown']"); if (t) t.setAttribute("aria-expanded", "false");
    });
  }
  document.querySelectorAll(".rc [data-toggle='dropdown']").forEach(function (t) {
    t.addEventListener("click", function (e) {
      e.preventDefault(); e.stopPropagation();
      var d = t.parentElement, m = d.querySelector(".dropdown-menu");
      var open = !d.classList.contains("show");
      closeDropdowns(open ? d : null);
      d.classList.toggle("show", open); if (m) m.classList.toggle("show", open);
      t.setAttribute("aria-expanded", open ? "true" : "false");
    });
  });
  document.addEventListener("click", function () { closeDropdowns(null); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") closeDropdowns(null); });

  var toggles = document.querySelectorAll(".rc [data-toggle='collapse']");
  toggles.forEach(function (t) {
    t.addEventListener("click", function () {
      var target = document.querySelector(t.getAttribute("data-target"));
      if (!target) return;
      var open = !target.classList.contains("show");
      toggles.forEach(function (o) {
        var x = document.querySelector(o.getAttribute("data-target"));
        if (x) x.classList.remove("show");
        o.classList.add("collapsed"); o.setAttribute("aria-expanded", "false");
      });
      if (open) { target.classList.add("show"); t.classList.remove("collapsed"); t.setAttribute("aria-expanded", "true"); }
    });
  });

  var up = document.querySelector(".rc .scroll-to-top, .scroll-to-top");
  if (up) {
    window.addEventListener("scroll", function () { up.classList.toggle("show", window.scrollY > 1000); });
    up.addEventListener("click", function (e) { e.preventDefault(); window.scroll({ behavior: "smooth", top: 0 }); });
  }
  document.querySelectorAll("[data-action='cookie-settings']").forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
  if (/[?&]clean\b/.test(location.search)) document.documentElement.classList.add("clean");
})();
