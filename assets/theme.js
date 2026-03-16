// Theme JavaScript - Handmade Crochet Brand

document.addEventListener('DOMContentLoaded', function() {
  // Skip to content link focus
  const skipToContentLink = document.querySelector('.skip-to-content-link');
  if (skipToContentLink) {
    skipToContentLink.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.setAttribute('tabindex', '-1');
        targetElement.focus();
        setTimeout(() => {
          targetElement.removeAttribute('tabindex');
        }, 1000);
      }
    });
  }
  
  // Mobile menu toggle (if exists)
  const mobileMenuToggle = document.querySelector('.header__mobile-toggle');
  const mobileMenu = document.querySelector('.header__mobile-menu');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', function() {
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('is-open');
      document.body.classList.toggle('menu-open');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (!mobileMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        mobileMenuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.classList.remove('is-open');
        document.body.classList.remove('menu-open');
      }
    });
  }
  
  // Form validation helper
  const forms = document.querySelectorAll('form[data-validate]');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      const requiredFields = this.querySelectorAll('[required]');
      let isValid = true;
      
      requiredFields.forEach(field => {
        if (!field.value.trim()) {
          field.classList.add('is-invalid');
          isValid = false;
        } else {
          field.classList.remove('is-invalid');
        }
      });
      
      if (!isValid) {
        e.preventDefault();
        
        // Show error message
        let errorContainer = this.querySelector('.form-errors');
        if (!errorContainer) {
          errorContainer = document.createElement('div');
          errorContainer.className = 'form-errors';
          errorContainer.style.cssText = `
            background-color: #fee;
            border: 1px solid #f99;
            border-radius: 4px;
            padding: 1rem;
            margin-bottom: 1rem;
            color: #c00;
          `;
          errorContainer.textContent = 'Please fill in all required fields.';
          this.insertBefore(errorContainer, this.firstChild);
        }
        
        // Scroll to first error
        const firstInvalid = this.querySelector('.is-invalid');
        if (firstInvalid) {
          firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
          firstInvalid.focus();
        }
      }
    });
    
    // Clear error on input
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      input.addEventListener('input', function() {
        this.classList.remove('is-invalid');
        const errorContainer = form.querySelector('.form-errors');
        if (errorContainer) {
          errorContainer.remove();
        }
      });
    });
  });
  
  // Image lazy loading
  if ('IntersectionObserver' in window) {
    const lazyImages = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          if (img.dataset.srcset) {
            img.srcset = img.dataset.srcset;
          }
          img.removeAttribute('data-src');
          img.removeAttribute('data-srcset');
          imageObserver.unobserve(img);
        }
      });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
  }
  
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      if (href === '#') return;
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        // Update URL without scrolling
        history.pushState(null, null, href);
      }
    });
  });
  
  // Add loading state to buttons on form submission
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
      const submitButton = this.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.classList.add('is-loading');
        submitButton.disabled = true;
        submitButton.innerHTML = '<span class="spinner"></span> ' + (submitButton.dataset.loadingText || 'Processing...');
      }
    });
  });
  
  // Initialize any components that need it
  initializeComponents();
});

function initializeComponents() {
  // Accordion functionality
  document.querySelectorAll('.accordion__trigger').forEach(trigger => {
    trigger.addEventListener('click', function() {
      const accordion = this.closest('.accordion');
      const content = this.nextElementSibling;
      const isExpanded = this.getAttribute('aria-expanded') === 'true';
      
      this.setAttribute('aria-expanded', !isExpanded);
      content.classList.toggle('is-open');
      
      // Close other accordions in the same group
      if (accordion.dataset.accordionGroup) {
        const group = accordion.dataset.accordionGroup;
        document.querySelectorAll(`[data-accordion-group="${group}"]`).forEach(otherAccordion => {
          if (otherAccordion !== accordion) {
            const otherTrigger = otherAccordion.querySelector('.accordion__trigger');
            const otherContent = otherTrigger.nextElementSibling;
            otherTrigger.setAttribute('aria-expanded', 'false');
            otherContent.classList.remove('is-open');
          }
        });
      }
    });
  });
  
  // Tab functionality
  document.querySelectorAll('.tabs__trigger').forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabs = this.closest('.tabs');
      const tabId = this.dataset.tab;
      const tabContent = document.querySelector(`#${tabId}`);
      
      if (!tabContent) return;
      
      // Update active tab
      tabs.querySelectorAll('.tabs__trigger').forEach(t => t.classList.remove('is-active'));
      this.classList.add('is-active');
      
      // Show active content
      tabs.querySelectorAll('.tabs__content').forEach(content => content.classList.remove('is-active'));
      tabContent.classList.add('is-active');
    });
  });
}

// Utility function to debounce rapid events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Utility function for AJAX requests
function fetchJSON(url, options = {}) {
  return fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers
    },
    ...options
  }).then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}

// Export for use in other scripts
window.Theme = {
  debounce,
  fetchJSON,
  initializeComponents
};