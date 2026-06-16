---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 2
hide_title: true
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

#### In press

<div class="publications">
  {% bibliography --query @*[status=inpress] %}
</div>

#### Published

<div class="publications">
  {% bibliography --query @*[status!=inpress] %}
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".author").forEach(function (authorDiv) {
    var hiddenSpan = authorDiv.querySelector("span[id$='-hidden']");
    if (!hiddenSpan) return;

    hiddenSpan.querySelectorAll("em").forEach(function (em) {
      if (em.textContent.trim() === "Maxime Derex") {
        var visible = document.createElement("span");
        visible.innerHTML = ", <em><u>Maxime Derex</u></em>";

        var toggleBtn = authorDiv.querySelector("a.more-authors");
        if (toggleBtn) {
          authorDiv.insertBefore(visible, toggleBtn);
        }

        // Remove from hidden list to avoid showing twice when expanded
        var parentLi = em.closest("li");
        if (parentLi) parentLi.remove();
        else em.parentNode.removeChild(em);
      }
    });
  });
});
</script>
