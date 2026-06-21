/*
 * Click-to-load facade for the home-page demo video.
 *
 * Renders as a lightweight thumbnail + play button; on click it swaps in the
 * YouTube (privacy-nocookie) iframe with autoplay. Keeps the home light — the
 * heavy embed (and YouTube's cookies) only load once the visitor wants to watch.
 *
 * `document$` (Material for MkDocs) re-fires on every instant-navigation load,
 * so we (re)bind facades on each page and guard against double-binding.
 */
document$.subscribe(function () {
  document.querySelectorAll(".video-facade").forEach(function (facade) {
    if (facade.dataset.videoBound) return;
    facade.dataset.videoBound = "1";

    facade.addEventListener("click", function () {
      var id = facade.getAttribute("data-video");
      if (!id) return;

      var wrap = document.createElement("div");
      wrap.className = "video-embed";

      var iframe = document.createElement("iframe");
      iframe.src =
        "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      iframe.title = "biopanel.io — Product Demo";
      iframe.allow =
        "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
      iframe.referrerPolicy = "strict-origin-when-cross-origin";
      iframe.allowFullscreen = true;

      wrap.appendChild(iframe);
      facade.replaceWith(wrap);
    });
  });
});
