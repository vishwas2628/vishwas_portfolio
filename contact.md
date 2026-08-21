---
layout: page
title: "Get in Touch"
subtitle: "Let's discuss full-stack engineering roles, Asterisk telephony architectures, and system design"
permalink: /contact/
---

<div class="contact-page-layout">
  <!-- Left/Top: Direct Channels with Clean Vector Icons -->
  <aside class="contact-channels-column">
    <div class="channel-card-list">
      <div class="contact-channel-card">
        <div class="channel-icon-box">
          {% include social-icons.html name='email' %}
        </div>
        <div class="channel-info">
          <h3>Email Directly</h3>
          <p>Best for job inquiries, consulting &amp; architecture discussions.</p>
          <div class="channel-actions">
            <a href="mailto:vishwaschourasiya@gmail.com" class="channel-link">vishwaschourasiya@gmail.com</a>
            <button type="button" class="channel-copy-btn" data-copy="vishwaschourasiya@gmail.com" title="Copy Email" aria-label="Copy Email">
              {% include social-icons.html name='copy' %}
            </button>
          </div>
        </div>
      </div>

      <div class="contact-channel-card">
        <div class="channel-icon-box">
          {% include social-icons.html name='linkedin' %}
        </div>
        <div class="channel-info">
          <h3>LinkedIn</h3>
          <p>Connect professionally for career opportunities &amp; network.</p>
          <a href="https://linkedin.com/in/vishwaschourasiya37" target="_blank" rel="noopener noreferrer" class="channel-link">
            linkedin.com/in/vishwaschourasiya37 <span class="ext-arrow">↗</span>
          </a>
        </div>
      </div>

      <div class="contact-channel-card">
        <div class="channel-icon-box">
          {% include social-icons.html name='github' %}
        </div>
        <div class="channel-info">
          <h3>GitHub</h3>
          <p>Browse 35+ open-source repositories and code projects.</p>
          <a href="https://github.com/vishwas2628" target="_blank" rel="noopener noreferrer" class="channel-link">
            github.com/vishwas2628 <span class="ext-arrow">↗</span>
          </a>
        </div>
      </div>

      <div class="contact-channel-card">
        <div class="channel-icon-box">
          {% include social-icons.html name='reddit' %}
        </div>
        <div class="channel-info">
          <h3>Reddit</h3>
          <p>Community tech discussions &amp; algorithmic logic solving.</p>
          <a href="https://www.reddit.com/u/Odd_Neck5739/s/J39oNq9nhK" target="_blank" rel="noopener noreferrer" class="channel-link">
            u/Odd_Neck5739 <span class="ext-arrow">↗</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Status / Availability Badge Box -->
    <div class="availability-status-box">
      <div class="status-indicator">
        <span class="status-pulse-dot"></span>
        <span class="status-heading">Status: Available</span>
      </div>
      <p class="status-desc">Currently open for Associate Software Developer roles, backend engineering, and telephony/IVR consulting.</p>
    </div>
  </aside>

  <!-- Right/Main: Interactive Message Form -->
  <section class="contact-form-column">
    <div class="interactive-form-card">
      <div class="form-header">
        <span class="form-badge">Interactive Quick Dispatch</span>
        <h2 class="form-title">Send a Quick Message</h2>
        <p class="form-subtitle">Fill out the fields below to initiate communication or generate a prefilled email.</p>
      </div>

      <!-- Live Success Alert (Hidden by default) -->
      <div class="form-feedback-alert" id="form-feedback" style="display: none;" role="alert">
        <div class="feedback-icon">✓</div>
        <div class="feedback-text">
          <strong id="feedback-title">Message Drafted Successfully!</strong>
          <p id="feedback-desc">Your message is ready. Click below to launch your email client or copy the message.</p>
          <div class="feedback-actions">
            <a href="#" id="feedback-mailto-btn" class="btn btn-sm btn-primary">Open in Mail App</a>
            <button type="button" id="feedback-copy-btn" class="btn btn-sm btn-secondary">Copy Draft Text</button>
            <button type="button" id="feedback-reset-btn" class="btn btn-sm btn-ghost">Send Another</button>
          </div>
        </div>
      </div>

      <form class="interactive-contact-form" id="interactive-contact-form" novalidate>
        <div class="form-row-2col">
          <div class="form-field-group">
            <label for="contact-name">Your Name <span class="required">*</span></label>
            <input type="text" id="contact-name" name="name" class="form-input" placeholder="e.g. Alex Smith" required autocomplete="name" />
            <span class="field-error-msg" id="name-error">Please enter your name</span>
          </div>

          <div class="form-field-group">
            <label for="contact-email">Your Email <span class="required">*</span></label>
            <input type="email" id="contact-email" name="email" class="form-input" placeholder="e.g. alex@company.com" required autocomplete="email" />
            <span class="field-error-msg" id="email-error">Please enter a valid email address</span>
          </div>
        </div>

        <div class="form-field-group">
          <label for="contact-subject">Topic / Subject <span class="required">*</span></label>
          <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="e.g. Software Engineering Opportunity / Asterisk Consulting" required />
          <span class="field-error-msg" id="subject-error">Please enter a subject</span>
        </div>

        <div class="form-field-group">
          <div class="label-with-counter">
            <label for="contact-message">Message <span class="required">*</span></label>
            <span class="char-counter" id="char-counter">0 / 1000</span>
          </div>
          <textarea id="contact-message" name="message" class="form-textarea" rows="5" maxlength="1000" placeholder="Hi Vishwas, I would love to connect regarding..." required></textarea>
          <span class="field-error-msg" id="message-error">Please write a brief message</span>
        </div>

        <div class="form-actions-row">
          <button type="submit" class="btn btn-primary btn-submit" id="submit-form-btn">
            <span class="btn-spinner" id="btn-spinner" style="display: none;"></span>
            <span class="btn-text">Send Message</span>
            <span class="btn-icon">
              {% include social-icons.html name='send' %}
            </span>
          </button>

          <button type="button" class="btn btn-secondary" id="copy-draft-btn">
            <span>Copy Message Draft</span>
            <span class="btn-icon">
              {% include social-icons.html name='copy' %}
            </span>
          </button>
        </div>
      </form>
    </div>
  </section>
</div>
