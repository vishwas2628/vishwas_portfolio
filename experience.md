---
layout: page
title: "Experience & Timeline"
subtitle: "Professional career history, academic background, and competitive milestones"
permalink: /experience/
---

<div class="experience-page-container">
  <section class="experience-block">
    <h2 class="block-title">💼 Career Experience</h2>
    <div class="timeline">
      {% for exp in site.data.experience %}
        <div class="timeline-item">
          <div class="timeline-marker"></div>
          <div class="timeline-card">
            <div class="timeline-header">
              <div>
                <h3 class="timeline-role">{{ exp.role }}</h3>
                <h4 class="timeline-company">{{ exp.company }} &bull; <span class="badge-type">{{ exp.type }}</span></h4>
              </div>
              <div class="timeline-meta">
                <span class="timeline-period">{{ exp.period }}</span>
                <span class="timeline-location">📍 {{ exp.location }}</span>
              </div>
            </div>
            <p class="timeline-summary">{{ exp.summary }}</p>
            <ul class="timeline-bullets">
              {% for bullet in exp.highlights %}
                <li>{{ bullet }}</li>
              {% endfor %}
            </ul>
            <div class="timeline-tech">
              {% for t in exp.tech %}
                <span class="tech-pill-sm">{{ t }}</span>
              {% endfor %}
            </div>
          </div>
        </div>
      {% endfor %}
    </div>
  </section>

  <section class="achievements-block">
    <h2 class="block-title">🏆 Competitions & Honors</h2>
    <div class="achievements-grid">
      {% for ach in site.data.achievements %}
        <div class="achievement-card">
          <div class="achievement-header">
            <span class="achievement-badge">{{ ach.badge }}</span>
            <span class="achievement-date">{{ ach.date }}</span>
          </div>
          <h3 class="achievement-title">{{ ach.title }}</h3>
          <h4 class="achievement-issuer">{{ ach.issuer }}</h4>
          <p class="achievement-desc">{{ ach.description }}</p>
        </div>
      {% endfor %}
    </div>
  </section>
</div>
