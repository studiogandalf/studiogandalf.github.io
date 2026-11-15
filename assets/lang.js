// Idioma: ?lang=es|en|pt, luego el del navegador, luego inglés.
(function () {
  var pick = new URLSearchParams(location.search).get("lang");
  var nav = (navigator.language || "en").slice(0, 2);
  var lang = ["es", "en", "pt"].indexOf(pick) >= 0 ? pick : (nav === "es" || nav === "pt" ? nav : "en");
  function set(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-lang]").forEach(function (e) { e.classList.toggle("on", e.getAttribute("data-lang") === l); });
    document.querySelectorAll(".langs button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.set === l); });
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".langs button").forEach(function (b) { b.onclick = function () { set(b.dataset.set); }; });
    set(lang);
  });
})();
