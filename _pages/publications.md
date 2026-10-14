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

{% comment %}
#### In press

<div class="publications">
  {% bibliography --query @*[status=inpress] %}
</div>
{% endcomment %}

#### Published

<div class="publications">
  {% bibliography --query @*[status!=inpress] %}
</div>
