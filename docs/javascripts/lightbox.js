/*
 * Lightweight lightbox for case-study diagrams (and the EY certificate).
 *
 * Clicking a diagram opens it large in a full-screen overlay with a visible
 * close (×) button; clicking the backdrop or pressing Escape also closes it.
 * Without JS, the links still open the asset directly (progressive enhancement).
 *
 * `document$` (Material for MkDocs) re-fires on every instant-navigation load,
 * so we build the overlay once and (re)bind triggers on each page.
 */
document$.subscribe(function () {
  var OVERLAY_ID = "diagram-lightbox";
  var overlay = document.getElementById(OVERLAY_ID);

  if (!overlay) {
    overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    overlay.className = "lightbox-overlay";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.innerHTML =
      '<button class="lightbox-close" type="button" aria-label="Close">&times;</button>' +
      '<img class="lightbox-img" alt="">';
    document.body.appendChild(overlay);

    var imgEl = overlay.querySelector(".lightbox-img");

    var close = function () {
      overlay.classList.remove("is-open");
      document.body.classList.remove("lightbox-open");
      imgEl.removeAttribute("src");
    };

    overlay.addEventListener("click", function (e) {
      // Close when clicking the backdrop or the × — but not the image itself.
      if (e.target === overlay || e.target.classList.contains("lightbox-close")) {
        close();
      }
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) {
        close();
      }
    });
  }

  var imgEl = overlay.querySelector(".lightbox-img");
  var triggers = document.querySelectorAll("figure.diagram a, a.cert-note__img");

  triggers.forEach(function (link) {
    if (link.dataset.lightboxBound) return;
    link.dataset.lightboxBound = "1";

    link.addEventListener("click", function (e) {
      var thumb = link.querySelector("img");
      if (!thumb) return; // no image inside — let the link behave normally
      e.preventDefault();
      imgEl.setAttribute("src", thumb.getAttribute("src"));
      imgEl.setAttribute("alt", thumb.getAttribute("alt") || "");
      overlay.classList.add("is-open");
      document.body.classList.add("lightbox-open");
    });
  });
});
