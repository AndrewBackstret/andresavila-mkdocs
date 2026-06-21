/*
 * Blog posts: move the Table of Contents (Material's secondary sidebar) into the
 * post metadata sidebar, so it stacks directly below the author/metadata block in
 * the left column. The two live in different parents, so this can't be done in CSS.
 *
 * `document$` is provided by Material for MkDocs and fires on every (instant) page
 * load, so the relocation survives client-side navigation.
 */
document$.subscribe(function () {
  var postInner = document.querySelector(".md-sidebar--post .md-sidebar__inner.md-post");
  var toc = document.querySelector(".md-sidebar--secondary .md-nav--secondary");

  if (postInner && toc && !postInner.contains(toc)) {
    postInner.appendChild(toc);
  }
});
