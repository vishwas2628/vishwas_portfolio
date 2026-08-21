/**
 * Vishwas Chourasiya Portfolio - Main Script
 * Handles Theme Toggling, Mobile Nav, Project & Blog Filtering, Interactive Contact Form, and Clipboard Utilities
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle
  const themeToggleBtn = document.getElementById('theme-toggle');
  
  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(newTheme);
    });
  }

  // 2. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const siteNav = document.getElementById('site-nav');

  if (mobileMenuBtn && siteNav) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      siteNav.classList.toggle('open');
    });

    // Close menu when clicking nav link
    siteNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        siteNav.classList.remove('open');
      });
    });
  }

  // 3. Project Filter on projects.md
  const filterBtns = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0 && projectCards.length > 0) {
    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filterVal = btn.getAttribute('data-filter');

        projectCards.forEach(card => {
          const cardCat = card.getAttribute('data-category');
          if (filterVal === 'all' || cardCat === filterVal) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // 4. Interactive Contact Form & Utilities
  const contactForm = document.getElementById('interactive-contact-form');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const charCounter = document.getElementById('char-counter');
  const submitBtn = document.getElementById('submit-form-btn');
  const copyDraftBtn = document.getElementById('copy-draft-btn');
  const feedbackBox = document.getElementById('form-feedback');
  const feedbackMailtoBtn = document.getElementById('feedback-mailto-btn');
  const feedbackCopyBtn = document.getElementById('feedback-copy-btn');
  const feedbackResetBtn = document.getElementById('feedback-reset-btn');

  // Character counter for contact message
  if (messageInput && charCounter) {
    messageInput.addEventListener('input', () => {
      const len = messageInput.value.length;
      charCounter.textContent = `${len} / 1000`;
      if (len > 900) {
        charCounter.classList.add('warning');
      } else {
        charCounter.classList.remove('warning');
      }
    });
  }

  // Form Validation helper
  function validateForm() {
    let isValid = true;
    
    // Name validation
    if (nameInput) {
      const err = document.getElementById('name-error');
      if (!nameInput.value.trim()) {
        nameInput.classList.add('has-error');
        if (err) err.style.display = 'block';
        isValid = false;
      } else {
        nameInput.classList.remove('has-error');
        if (err) err.style.display = 'none';
      }
    }

    // Email validation
    if (emailInput) {
      const err = document.getElementById('email-error');
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(emailInput.value.trim())) {
        emailInput.classList.add('has-error');
        if (err) err.style.display = 'block';
        isValid = false;
      } else {
        emailInput.classList.remove('has-error');
        if (err) err.style.display = 'none';
      }
    }

    // Subject validation
    if (subjectInput) {
      const err = document.getElementById('subject-error');
      if (!subjectInput.value.trim()) {
        subjectInput.classList.add('has-error');
        if (err) err.style.display = 'block';
        isValid = false;
      } else {
        subjectInput.classList.remove('has-error');
        if (err) err.style.display = 'none';
      }
    }

    // Message validation
    if (messageInput) {
      const err = document.getElementById('message-error');
      if (!messageInput.value.trim()) {
        messageInput.classList.add('has-error');
        if (err) err.style.display = 'block';
        isValid = false;
      } else {
        messageInput.classList.remove('has-error');
        if (err) err.style.display = 'none';
      }
    }

    return isValid;
  }

  // Clear errors on input
  [nameInput, emailInput, subjectInput, messageInput].forEach(field => {
    if (field) {
      field.addEventListener('input', () => {
        field.classList.remove('has-error');
        const err = document.getElementById(`${field.id.replace('contact-', '')}-error`);
        if (err) err.style.display = 'none';
      });
    }
  });

  function getFormattedMessage() {
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : '';
    const message = messageInput ? messageInput.value.trim() : '';

    return `From: ${name} <${email}>\nSubject: ${subject}\n\n${message}`;
  }

  function getMailtoUrl() {
    const name = nameInput ? nameInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';
    const subject = subjectInput ? subjectInput.value.trim() : 'Portfolio Contact Message';
    const message = messageInput ? messageInput.value.trim() : '';

    const bodyContent = `Hi Vishwas,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`;
    return `mailto:vishwaschourasiya@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyContent)}`;
  }

  // Handle Contact Form Submit
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!validateForm()) return;

      const spinner = document.getElementById('btn-spinner');
      if (spinner) spinner.style.display = 'inline-block';
      if (submitBtn) submitBtn.disabled = true;

      const mailtoUrl = getMailtoUrl();

      setTimeout(() => {
        if (spinner) spinner.style.display = 'none';
        if (submitBtn) submitBtn.disabled = false;

        // Show feedback card
        if (feedbackBox) {
          feedbackBox.style.display = 'flex';
          if (feedbackMailtoBtn) feedbackMailtoBtn.href = mailtoUrl;
          feedbackBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }

        // Trigger default mail client
        window.location.href = mailtoUrl;
      }, 500);
    });
  }

  // Handle Copy Message Draft button
  if (copyDraftBtn) {
    copyDraftBtn.addEventListener('click', async () => {
      if (!validateForm()) return;

      const text = getFormattedMessage();
      try {
        await navigator.clipboard.writeText(text);
        const originalText = copyDraftBtn.innerHTML;
        copyDraftBtn.innerHTML = '<span>Copied to Clipboard!</span>';
        copyDraftBtn.classList.add('btn-copied');
        setTimeout(() => {
          copyDraftBtn.innerHTML = originalText;
          copyDraftBtn.classList.remove('btn-copied');
        }, 2500);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  }

  // Handle Feedback Alert Copy button
  if (feedbackCopyBtn) {
    feedbackCopyBtn.addEventListener('click', async () => {
      const text = getFormattedMessage();
      try {
        await navigator.clipboard.writeText(text);
        feedbackCopyBtn.textContent = 'Copied!';
        setTimeout(() => {
          feedbackCopyBtn.textContent = 'Copy Draft Text';
        }, 2000);
      } catch (err) {
        console.error('Failed to copy: ', err);
      }
    });
  }

  // Handle Reset button
  if (feedbackResetBtn && contactForm) {
    feedbackResetBtn.addEventListener('click', () => {
      contactForm.reset();
      if (charCounter) charCounter.textContent = '0 / 1000';
      if (feedbackBox) feedbackBox.style.display = 'none';
    });
  }

  // Channel direct copy buttons (.channel-copy-btn)
  document.querySelectorAll('.channel-copy-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      e.preventDefault();
      const val = btn.getAttribute('data-copy');
      if (val) {
        try {
          await navigator.clipboard.writeText(val);
          btn.classList.add('copied');
          setTimeout(() => btn.classList.remove('copied'), 2000);
        } catch (err) {
          console.error('Failed to copy channel value: ', err);
        }
      }
    });
  });

  // 6. Smooth Scrolling for back to top
  const backToTop = document.getElementById('back-to-top');
  if (backToTop) {
    backToTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 7. Code block copy buttons
  document.querySelectorAll('pre.highlight, div.highlighter-rouge pre').forEach(block => {
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    block.parentNode.insertBefore(wrapper, block);
    wrapper.appendChild(block);

    const copyBtn = document.createElement('button');
    copyBtn.className = 'copy-code-btn';
    copyBtn.textContent = 'Copy';
    copyBtn.setAttribute('aria-label', 'Copy code snippet');

    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(block.innerText);
        copyBtn.textContent = 'Copied!';
        copyBtn.classList.add('copied');
        setTimeout(() => {
          copyBtn.textContent = 'Copy';
          copyBtn.classList.remove('copied');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy code: ', err);
      }
    });

    wrapper.appendChild(copyBtn);
  });
});
