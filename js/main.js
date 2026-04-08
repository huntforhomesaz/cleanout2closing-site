/* ============================================================
   CLEANOUT2CLOSING — MAIN JAVASCRIPT
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. DOM READY HELPER
  ---------------------------------------------------------- */
  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  /* ----------------------------------------------------------
     2. NAVIGATION — SCROLL BEHAVIOR
  ---------------------------------------------------------- */
  function initNav() {
    var nav = document.querySelector('.site-nav');
    var stickyBar = document.querySelector('.sticky-bar');
    if (!nav) return;

    function onScroll() {
      if (window.scrollY > 40) {
        nav.classList.add('scrolled');
        if (stickyBar) stickyBar.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
        if (stickyBar) stickyBar.classList.remove('scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ----------------------------------------------------------
     3. HAMBURGER MENU
  ---------------------------------------------------------- */
  function initHamburger() {
    var hamburger = document.querySelector('.hamburger');
    var mobileMenu = document.querySelector('.mobile-menu');
    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when a link is clicked
    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (
        mobileMenu.classList.contains('open') &&
        !mobileMenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  /* ----------------------------------------------------------
     4. ACTIVE NAV LINK
  ---------------------------------------------------------- */
  function initActiveNav() {
    var links = document.querySelectorAll('.nav-links a, .mobile-menu a');
    var currentPath = window.location.pathname;

    links.forEach(function (link) {
      var href = link.getAttribute('href');
      if (!href) return;
      // Normalize
      var normalizedHref = href.replace(/\/index\.html$/, '/');
      var normalizedPath = currentPath.replace(/\/index\.html$/, '/');
      if (normalizedPath === normalizedHref || (normalizedHref !== '/' && normalizedPath.startsWith(normalizedHref))) {
        link.classList.add('active');
      }
    });
  }

  /* ----------------------------------------------------------
     5. FAQ ACCORDION
  ---------------------------------------------------------- */
  function initFAQ() {
    var faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    faqItems.forEach(function (item) {
      var question = item.querySelector('.faq-question');
      var answer = item.querySelector('.faq-answer');
      if (!question || !answer) return;

      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');

        // Close all others
        faqItems.forEach(function (other) {
          if (other !== item) {
            other.classList.remove('open');
            var otherQ = other.querySelector('.faq-question');
            if (otherQ) otherQ.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current
        item.classList.toggle('open', !isOpen);
        question.setAttribute('aria-expanded', !isOpen ? 'true' : 'false');
      });

      // Set initial ARIA
      question.setAttribute('aria-expanded', 'false');
    });

    // Open first item by default
    if (faqItems[0]) {
      faqItems[0].classList.add('open');
      var firstQ = faqItems[0].querySelector('.faq-question');
      if (firstQ) firstQ.setAttribute('aria-expanded', 'true');
    }
  }

  /* ----------------------------------------------------------
     6. RESOURCE LIBRARY FILTER
  ---------------------------------------------------------- */
  function initResourceFilter() {
    var filterBtns = document.querySelectorAll('.filter-btn');
    var categories = document.querySelectorAll('.resource-category');
    if (!filterBtns.length || !categories.length) return;

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var filter = btn.getAttribute('data-filter');

        // Update active state
        filterBtns.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');

        // Show/hide categories
        categories.forEach(function (cat) {
          if (filter === 'all') {
            cat.style.display = '';
          } else {
            var catKey = cat.getAttribute('data-category');
            cat.style.display = (catKey === filter) ? '' : 'none';
          }
        });
      });
    });
  }

  /* ----------------------------------------------------------
     7. SMOOTH SCROLL FOR ANCHOR LINKS
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
      anchor.addEventListener('click', function (e) {
        var targetId = anchor.getAttribute('href');
        if (targetId === '#') return;
        var target = document.querySelector(targetId);
        if (!target) return;
        e.preventDefault();
        var navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height') || '88');
        var top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
        window.scrollTo({ top: top, behavior: 'smooth' });
      });
    });
  }

  /* ----------------------------------------------------------
     8. ANIMATION ON SCROLL (simple IntersectionObserver)
  ---------------------------------------------------------- */
  function initScrollAnimations() {
    if (!('IntersectionObserver' in window)) return;

    var style = document.createElement('style');
    style.textContent = [
      '.anim-fade { opacity: 0; transform: translateY(20px); transition: opacity 0.6s ease, transform 0.6s ease; }',
      '.anim-fade.visible { opacity: 1; transform: none; }'
    ].join('');
    document.head.appendChild(style);

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    var targets = document.querySelectorAll('.card, .service-card, .timeline-step, .resource-card, .faq-item');
    targets.forEach(function (el) {
      el.classList.add('anim-fade');
      observer.observe(el);
    });
  }

  /* ----------------------------------------------------------
     9. CONTACT FORM — BASIC VALIDATION FEEDBACK
  ---------------------------------------------------------- */
  function initContactForm() {
    var form = document.querySelector('form[netlify], form[data-netlify]');
    if (!form) return;

    form.addEventListener('submit', function (e) {
      var valid = true;
      var requiredFields = form.querySelectorAll('[required]');
      requiredFields.forEach(function (field) {
        if (!field.value.trim()) {
          field.style.borderColor = '#ee6921';
          valid = false;
        } else {
          field.style.borderColor = '';
        }
      });
      if (!valid) {
        e.preventDefault();
        var firstInvalid = form.querySelector('[required]:invalid, [required][style*="ee6921"]');
        if (firstInvalid) firstInvalid.focus();
      }
    });
  }

  /* ----------------------------------------------------------
     10. INIT ALL
  ---------------------------------------------------------- */
  ready(function () {
    initNav();
    initHamburger();
    initActiveNav();
    initFAQ();
    initResourceFilter();
    initSmoothScroll();
    initScrollAnimations();
    initContactForm();
  });

})();
