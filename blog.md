---
layout: page
title: "Technical Writing & Architecture Notes"
subtitle: "Deep dives on telephony systems, distributed architectures, backend engineering, and performance"
permalink: /blog/
---

<div class="blog-grid-container">
  <div class="blog-cards-grid">
    {% for post in site.posts %}
      {% assign post_img = post.image | default: "/assets/images/posts/default-blog.svg" %}
      <article class="blog-card">
        <a href="{{ post.url | relative_url }}" class="blog-card-media" aria-label="{{ post.title }}">
          <img src="{{ post_img | relative_url }}" alt="{{ post.title }}" class="blog-card-img" loading="lazy" />
        </a>

        <div class="blog-card-body">
          <div class="blog-card-meta">
            <time datetime="{{ post.date | date_to_xmlschema }}" class="meta-date">
              {{ post.date | date: "%b %d, %Y" }}
            </time>
            <span class="meta-bullet">•</span>
            <span class="meta-readtime">{{ post.read_time | default: "5 min read" }}</span>
          </div>

          <h3 class="blog-card-title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>

          <p class="blog-card-excerpt">
            {{ post.excerpt | strip_html }}
          </p>

          <div class="blog-card-footer">
            <div class="blog-card-tags">
              {% for tag in post.tags %}
                <span class="tag-pill">#{{ tag }}</span>
              {% endfor %}
            </div>
            <a href="{{ post.url | relative_url }}" class="blog-read-link" aria-label="Read {{ post.title }}">
              <span>Read article</span>
              <span class="arrow">→</span>
            </a>
          </div>
        </div>
      </article>
    {% endfor %}
  </div>
</div>
