---
layout: page
title: "Curriculum Vitae / Resume"
subtitle: "Vishwas Chourasiya — Associate Software Developer | Full-Stack & Telephony Engineer"
permalink: /resume/
---

<div class="resume-container">
  <!-- Action Controls -->
  <div class="resume-toolbar">
    <div class="toolbar-left">
      <a href="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" download="Vishwas_Chourasiya_Resume.pdf" class="btn btn-primary">
        <span>📥 Download Resume (PDF)</span>
      </a>
      <a href="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">
        <span>↗ Open in New Tab</span>
      </a>
    </div>
    <div class="toolbar-right">
      <a href="mailto:vishwaschourasiya@gmail.com" class="btn btn-ghost">
        <span>✉️ Contact Vishwas</span>
      </a>
    </div>
  </div>

  <!-- PDF Viewer Container -->
  <div class="pdf-viewer-card">
    <object data="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" type="application/pdf" class="pdf-object" id="pdf-viewer">
      <iframe src="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" class="pdf-iframe" title="Vishwas Chourasiya Resume PDF">
        <!-- Fallback if PDF cannot be rendered inline -->
        <div class="pdf-fallback-box">
          <div class="fallback-icon">📄</div>
          <h3>Your browser does not support inline PDF viewing</h3>
          <p>You can preview or download Vishwas Chourasiya's resume using the button below:</p>
          <a href="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" download="Vishwas_Chourasiya_Resume.pdf" class="btn btn-primary">
            <span>📥 Download Resume PDF</span>
          </a>
        </div>
      </iframe>
    </object>
  </div>

  <!-- Direct Download Card for Mobile -->
  <div class="mobile-pdf-notice">
    <p>Viewing on mobile or having trouble with the embed?</p>
    <a href="{{ '/assets/docs/Resume-30-07-26.pdf' | relative_url }}" download="Vishwas_Chourasiya_Resume.pdf" class="btn btn-secondary btn-sm">
      <span>📥 Direct PDF Download</span>
    </a>
  </div>
</div>

