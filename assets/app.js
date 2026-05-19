/**
 * Portfolio Interactivity
 * Handles mobile menu, scroll effects, and other polish
 */

// ===================================
// MOBILE MENU TOGGLE
// ===================================

function initMobileMenu() {
  const mobileMenuButton = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-nav-menu');
  const mobileMenuLinks = mobileMenu?.querySelectorAll('a');

  if (!mobileMenuButton || !mobileMenu) return;

  mobileMenuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('max-h-48');
    
    if (isOpen) {
      mobileMenu.classList.remove('max-h-48', 'opacity-100');
      mobileMenu.classList.add('max-h-0', 'opacity-0');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    } else {
      mobileMenu.classList.remove('max-h-0', 'opacity-0');
      mobileMenu.classList.add('max-h-48', 'opacity-100');
      mobileMenuButton.setAttribute('aria-expanded', 'true');
    }
  });

  // Close menu on link click
  mobileMenuLinks?.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('max-h-48', 'opacity-100');
      mobileMenu.classList.add('max-h-0', 'opacity-0');
      mobileMenuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

// ===================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ===================================

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Skip if href is just "#"
      if (href === '#') return;
      
      const target = document.querySelector(href);
      
      if (target) {
        e.preventDefault();
        
        const headerHeight = document.querySelector('header')?.offsetHeight || 80;
        const targetPosition = target.offsetTop - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

// ===================================
// SCROLL PROGRESS INDICATOR
// ===================================

function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress');
  
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;
    const progress = (scrolled / windowHeight) * 100;
    
    progressBar.style.width = progress + '%';
  });
}

// ===================================
// ACTIVE NAV LINK HIGHLIGHTING
// ===================================

function initActiveNavLink() {
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  
  if (navLinks.length === 0) return;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + 120;
    
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === '#') return;
      
      const section = document.querySelector(href);
      
      if (section) {
        const { offsetTop, offsetHeight } = section;
        
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          navLinks.forEach(l => l.classList.remove('text-white'));
          link.classList.add('text-white');
        } else {
          link.classList.remove('text-white');
        }
      }
    });
  });
}

// ===================================
// INTERSECTION OBSERVER FOR LAZY LOADING
// ===================================

function initLazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.style.animation = 'fadeInUp 0.6s ease-out forwards';
          imageObserver.unobserve(img);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });

    document.querySelectorAll('img[loading="lazy"]').forEach(img => {
      imageObserver.observe(img);
    });
  }
}

// ===================================
// KEYBOARD NAVIGATION
// ===================================

function initKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    // Escape key to close mobile menu
    if (e.key === 'Escape') {
      const mobileMenu = document.getElementById('mobile-nav-menu');
      const mobileMenuButton = document.getElementById('mobile-menu-toggle');
      
      if (mobileMenu?.classList.contains('max-h-48')) {
        mobileMenu.classList.remove('max-h-48', 'opacity-100');
        mobileMenu.classList.add('max-h-0', 'opacity-0');
        mobileMenuButton?.setAttribute('aria-expanded', 'false');
      }
    }
    
    // Command/Ctrl + K to focus search (if search exists)
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      // Add search functionality if needed
    }
  });
}

// ===================================
// ACCESSIBILITY: FOCUS VISIBLE
// ===================================

function initFocusVisible() {
  document.addEventListener('keydown', () => {
    document.body.classList.add('keyboard-nav');
  });

  document.addEventListener('mousedown', () => {
    document.body.classList.remove('keyboard-nav');
  });
}

// ===================================
// INITIALIZATION
// ===================================

function initPortfolio() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  function init() {
    initMobileMenu();
    initSmoothScroll();
    initScrollProgress();
    initActiveNavLink();
    initLazyLoadImages();
    initKeyboardNavigation();
    initFocusVisible();
  }
}

// Start the app
initPortfolio();

// ===================================
// EXPORT FOR DEBUGGING
// ===================================

if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
  window.__portfolio__ = {
    initMobileMenu,
    initSmoothScroll,
    initScrollProgress,
    initActiveNavLink,
    initLazyLoadImages,
    initKeyboardNavigation,
    initFocusVisible
  };
}
