---
layout: page
title: "Technical Writing & Insights"
subtitle: "Architecture notes, low-level deep dives, and full-stack software development articles"
permalink: /blog/
---

<div class="blog-index-container">
  <div class="blog-list">
    {% for post in site.posts %}
      <article class="blog-entry-card">
        <div class="blog-entry-meta">
          <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: "%B %d, %Y" }}</time>
          <span class="bullet">•</span>
          <span>{{ post.read_time | default: "5 min read" }}</span>
          {% if post.categories.size > 0 %}
            <span class="bullet">•</span>
            <span class="blog-category">{{ post.categories | join: ", " }}</span>
          {% endif %}
        </div>
        <h2 class="blog-entry-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h2>
        <p class="blog-entry-excerpt">{{ post.excerpt | strip_html }}</p>
        <div class="blog-entry-footer">
          <div class="blog-tags">
            {% for tag in post.tags %}
              <span class="tag-pill">#{{ tag }}</span>
            {% endfor %}
          </div>
          <a href="{{ post.url | relative_url }}" class="read-more-btn">Read Article →</a>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
