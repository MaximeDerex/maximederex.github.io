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
  document.querySelectorAll("span.more-authors").forEach(function (span) {
    var onclick = span.getAttribute("onclick") || "";

    // Extract the full hidden author string from onclick
    var match = onclick.match(/more_authors_text=element\.text\(\) == '.*?' \? '(.*?)' : '/);
    if (!match) return;

    var hiddenText = match[1]; // e.g. "Haneul Jang, Maxime Derex"
    if (!hiddenText.includes("Maxime Derex")) return;

    var hiddenNames = hiddenText.split(", ").map(function(n){ return n.trim(); });
    var myIndex = hiddenNames.indexOf("Maxime Derex");

    // Names that come before Maxime Derex in the hidden list
    var before = hiddenNames.slice(0, myIndex);
    // Names that come after Maxime Derex in the hidden list
    var after = hiddenNames.slice(myIndex + 1);

    // Insert the names that appear before you in the hidden list as plain text
    if (before.length > 0) {
      var beforeSpan = document.createElement("span");
      beforeSpan.innerHTML = ", " + before.map(function(n){ return "<em>" + n + "</em>"; }).join(", ");
      span.parentNode.insertBefore(beforeSpan, span);
    }

    // Insert your name, underlined, at the correct position
    var badge = document.createElement("span");
    badge.innerHTML = ", <em><u>Maxime Derex</u></em>";
    span.parentNode.insertBefore(badge, span);

    // Update the toggle to only show the remaining names after you
    if (after.length === 0) {
      span.parentNode.removeChild(span);
    } else {
      var count = after.length;
      var label = count + (count === 1 ? " more author" : " more authors");
      span.textContent = label;
      var remaining = after.join(", ");
      var newOnclick = "var element=$(this); element.attr('title', ''); var more_authors_text=element.text() == '"
        + label + "' ? '" + remaining + "' : '" + label + "';"
        + " var cursorPosition=0; var textAdder=setInterval(function(){ element.html(more_authors_text.substring(0, cursorPosition + 1)); if (++cursorPosition == more_authors_text.length){ clearInterval(textAdder); } }, '10');";
      span.setAttribute("onclick", newOnclick);
    }
  });
});
</script>
