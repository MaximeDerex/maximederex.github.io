---
layout: page
permalink: /publications/
title: publications
description: 
nav: true
nav_order: 2
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

{% bibliography %}

</div>
