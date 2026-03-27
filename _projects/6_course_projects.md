---
layout: page
title: Course Projects
description: A collection of course projects from UCSD.
img: assets/img/clash_royal.png
importance: 6
category: Course Projects
selected: false
---

<div class="projects">
  <div class="row row-cols-1 row-cols-md-3">
    {% assign dsc106 = site.projects | where_exp: "p", "p.path contains '6_dsc106'" | first %}
    {% if dsc106 %}
      <div class="col">
        <a href="{{ dsc106.url | relative_url }}">
          <div class="card h-100 hoverable">
            {%
              include figure.liquid
              loading="eager"
              path="assets/img/CourseProject.png"
              sizes="250px"
              alt="project thumbnail"
              class="card-img-top"
            %}
            <div class="card-body">
              <h2 class="card-title">{{ dsc106.title }}</h2>
              <p class="card-text">{{ dsc106.description }}</p>
            </div>
          </div>
        </a>
      </div>
    {% endif %}
  </div>
</div>
