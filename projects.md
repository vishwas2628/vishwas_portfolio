---
layout: page
title: "Featured Projects & Case Studies"
subtitle: "A curated collection of systems, telephony workflows, full-stack applications, and data science models"
permalink: /projects/
---

<div class="projects-filter-bar">
  <button class="filter-btn active" data-filter="all">All Projects</button>
  <button class="filter-btn" data-filter="systems-networking">Systems & Networking</button>
  <button class="filter-btn" data-filter="telephony-backend">Telephony & Backend</button>
  <button class="filter-btn" data-filter="web-applications">Web Applications</button>
  <button class="filter-btn" data-filter="data-science-ai">Data Science & AI</button>
  <button class="filter-btn" data-filter="algorithms-systems">Algorithms & Logic</button>
</div>

<div class="projects-gallery-grid" id="projects-gallery">
  {% assign sorted_projects = site.projects | sort: "order" %}
  {% for project in sorted_projects %}
    {% include project-card.html project=project %}
  {% endfor %}
</div>

<div class="github-repos-callout">
  <div class="callout-card">
    <div class="callout-icon">📂</div>
    <div class="callout-content">
      <h3>Looking for more code?</h3>
      <p>I have built over <strong>35+ open-source projects</strong> including utility scripts, mini-games, algorithmic solvers, and frontend experiments on GitHub.</p>
      <a href="https://github.com/vishwas2628?tab=repositories" target="_blank" rel="noopener" class="btn btn-primary">
        <span>Explore All 35+ Repos on GitHub</span>
        <span class="btn-icon">↗</span>
      </a>
    </div>
  </div>
</div>
