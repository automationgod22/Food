/**
 * TRUE SMILE DENTAL CLINIC - CLIENT SCRIPT
 * Mutholy & Valavoor, Pala, Kerala
 * Interactivity:
 * - Real-time Scroll Progress Bar
 * - Theme Switcher (Dark / Light with LocalStorage & Drawer Sync)
 * - Scroll Reveal System (IntersectionObserver)
 * - Animated Number Counters with Easing
 * - Interactive Before/After Smile Transformation Touch Slider
 * - Dynamic Treatments Grid & Category Filtering
 * - FAQ Accordion with Micro-Bounce
 * - Fullscreen Mobile Navigation Drawer
 * - Multi-Step Modal Booking Flow (iOS Bottom Sheet on Mobile)
 */

document.addEventListener('DOMContentLoaded', () => {
  initScrollProgressBar();
  initTheme();
  initScrollReveal();
  initStatCounters();
  initBeforeAfterSlider();
  renderTreatments();
  initTreatmentFilters();
  initFaqAccordion();
  initBookingModal();
  initMobileNav();
});

/* ==========================================================================
   0. REAL-TIME SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgressBar() {
  const progressBar = document.getElementById('siteScrollProgress');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    progressBar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  }, { passive: true });
}

/* ==========================================================================
   1. DARK / LIGHT THEME TOGGLE (HEADER + MOBILE DRAWER)
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const mobileThemeToggle = document.getElementById('mobileThemeToggle');
  const savedTheme = localStorage.getItem('truesmile-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const target = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', target);
    localStorage.setItem('truesmile-theme', target);
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  if (mobileThemeToggle) mobileThemeToggle.addEventListener('click', toggleTheme);
}

/* ==========================================================================
   2. SCROLL REVEAL SYSTEM (INTERSECTION OBSERVER)
   ========================================================================== */
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');
  if (!revealElements.length) return;

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -30px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    revealElements.forEach(el => el.classList.add('active'));
  }
}

/* ==========================================================================
   3. STAT COUNTERS ANIMATION
   ========================================================================== */
function initStatCounters() {
  const statCounts = document.querySelectorAll('.stat-count[data-target]');
  if (!statCounts.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        let current = 0;
        const duration = 1200;
        const stepTime = Math.max(16, duration / target);

        const timer = setInterval(() => {
          current += 1;
          el.textContent = current;
          if (current >= target) {
            el.textContent = target;
            clearInterval(timer);
          }
        }, stepTime);

        obs.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  statCounts.forEach(el => observer.observe(el));
}

/* ==========================================================================
   4. INTERACTIVE BEFORE / AFTER SMILE TRANSFORMATION TOUCH SLIDER
   ========================================================================== */
function initBeforeAfterSlider() {
  const stage = document.getElementById('compareStage');
  const beforeWrapper = document.getElementById('compareBeforeWrapper');
  const handle = document.getElementById('compareHandle');
  if (!stage || !beforeWrapper || !handle) return;

  let isDragging = false;

  function updatePosition(clientX) {
    const rect = stage.getBoundingClientRect();
    let x = clientX - rect.left;
    x = Math.max(0, Math.min(rect.width, x));
    const percentage = (x / rect.width) * 100;

    beforeWrapper.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
    handle.style.left = `${percentage}%`;
  }

  function startDrag(e) {
    isDragging = true;
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    if (clientX !== undefined) updatePosition(clientX);
  }

  function onMove(e) {
    if (!isDragging) return;
    const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
    if (clientX !== undefined) updatePosition(clientX);
  }

  function endDrag() {
    isDragging = false;
  }

  // Pointer Events (Mouse, Touch, Stylus)
  stage.addEventListener('pointerdown', startDrag);
  window.addEventListener('pointermove', onMove);
  window.addEventListener('pointerup', endDrag);
  window.addEventListener('pointercancel', endDrag);

  // Touch Events Fallback
  stage.addEventListener('touchstart', startDrag, { passive: true });
  window.addEventListener('touchmove', onMove, { passive: true });
  window.addEventListener('touchend', endDrag);

  // Gentle peek oscillation when card first enters view
  let hasPeeked = false;
  if ('IntersectionObserver' in window) {
    const peekObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !hasPeeked) {
          hasPeeked = true;
          let startTime = null;
          const duration = 1400;

          function animatePeek(time) {
            if (!startTime) startTime = time;
            const elapsed = time - startTime;

            if (elapsed < duration && !isDragging) {
              const progress = elapsed / duration;
              const offset = Math.sin(progress * Math.PI * 2) * 9;
              const p = 50 + offset;
              beforeWrapper.style.clipPath = `polygon(0 0, ${p}% 0, ${p}% 100%, 0 100%)`;
              handle.style.left = `${p}%`;
              requestAnimationFrame(animatePeek);
            } else if (!isDragging) {
              beforeWrapper.style.clipPath = `polygon(0 0, 50% 0, 50% 100%, 0 100%)`;
              handle.style.left = `50%`;
            }
          }

          requestAnimationFrame(animatePeek);
          peekObserver.unobserve(stage);
        }
      });
    }, { threshold: 0.25 });

    peekObserver.observe(stage);
  }
}

/* ==========================================================================
   5. REAL TREATMENTS DATA & RENDERING
   ========================================================================== */
const treatmentsList = [
  {
    category: 'aesthetics',
    title: 'Biomimetic Tooth Restoration',
    badge: 'Tooth-Preserving Biology',
    desc: 'Advanced cavity and tooth decay restoration using layered biological composites that bond directly with natural enamel and dentin, avoiding aggressive drill grinding.',
    duration: 'Single Visit (30–45 Mins)',
    doctors: 'Dr. Noel & Dr. Mereena',
    waMsg: 'Hello True Smile, I would like to consult regarding Biomimetic Tooth Restoration.'
  },
  {
    category: 'aesthetics',
    title: '1-Week Aesthetic Smile Correction',
    badge: 'Fast 7-Day Turnaround',
    desc: 'Gap closures, fractured tooth shaping, and composite veneer restorations planned to give you a symmetrical, natural smile within just 7 days.',
    duration: '1–2 Sessions',
    doctors: 'Dr. Mereena Joshy',
    waMsg: 'Hello True Smile, I would like to consult with Dr. Mereena for 1-Week Aesthetic Smile Correction.'
  },
  {
    category: 'pain',
    title: 'Gentle Root Canal Treatment',
    badge: 'Apex Locator • Painless',
    desc: 'Painless endodontic therapy for infected root canals. Relieves persistent toothaches and eliminates deep infections while keeping your natural tooth rooted.',
    duration: '1–2 Visits',
    doctors: 'Dr. Noel (Dr. Noyal)',
    waMsg: 'Hello True Smile, I am having severe toothache and need an urgent Root Canal consultation.'
  },
  {
    category: 'implants',
    title: 'Teeth Bridging & Permanent Implants',
    badge: 'Titanium & Zirconia',
    desc: 'State-of-the-art tooth replacement using ceramic bridges and titanium dental implants for long-term chewing strength and effortless speech.',
    duration: 'Custom Treatment Plan',
    doctors: 'Dr. Sebin Jose & Dr. Noel',
    waMsg: 'Hello True Smile, I am inquiring about Dental Implants and Ceramic Teeth Bridging.'
  },
  {
    category: 'aligners',
    title: 'Clear Invisible Aligners & Braces',
    badge: 'Virtually Invisible • Comfortable',
    desc: 'Discreet orthodontic correction for crowded, misaligned, or spaced teeth. Continuous support and progress reviews throughout your smile journey.',
    duration: '4–12 Months',
    doctors: 'Dr. Sebin Jose',
    waMsg: 'Hello True Smile, I would like to book a 3D scan consultation for Clear Aligners.'
  },
  {
    category: 'pediatric',
    title: 'Child-Friendly Pediatric Dentistry',
    badge: 'Zero Dental Fear',
    desc: 'Warm, patient care for children. Our doctors treat every child with boundless patience, turning dental visits into a playful, fear-free experience.',
    duration: 'Gentle 30-Min Visit',
    doctors: 'Dr. Collin & Dr. Mereena',
    waMsg: 'Hello True Smile, I would like to book a pediatric dental checkup for my child.'
  }
];

function renderTreatments() {
  const grid = document.getElementById('treatmentGrid');
  if (!grid) return;

  grid.innerHTML = treatmentsList.map(item => `
    <div class="treatment-card reveal" data-category="${item.category}">
      <span class="treatment-badge-tag">${item.badge}</span>
      <div class="card-icon-wrap" style="background-color: var(--color-coral-soft); color: var(--color-coral);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <h3 class="treatment-title" style="font-size: 1.35rem; color: var(--color-slate-900);">${item.title}</h3>
      <p class="treatment-desc" style="color: var(--color-slate-muted); font-size: 0.925rem; margin-bottom: 1.25rem;">${item.desc}</p>
      
      <div class="treatment-specs" style="border-top: 1px solid var(--color-card-border); padding-top: 1rem; margin-bottom: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <div>
          <div class="spec-title" style="font-size: 0.75rem; color: var(--color-slate-muted); text-transform: uppercase;">Duration</div>
          <div class="spec-value" style="font-weight: 600; font-size: 0.9rem;">${item.duration}</div>
        </div>
        <div>
          <div class="spec-title" style="font-size: 0.75rem; color: var(--color-slate-muted); text-transform: uppercase;">Doctor Lead</div>
          <div class="spec-value" style="font-weight: 600; font-size: 0.9rem; color: var(--color-coral);">${item.doctors}</div>
        </div>
      </div>

      <div style="display: flex; gap: 0.65rem; margin-top: auto;">
        <button class="btn btn-secondary btn-open-booking" data-concern="${item.title}" style="flex: 1.3; font-size: 0.85rem;">
          Book Consultation
        </button>
        <a href="https://wa.me/919645051122?text=${encodeURIComponent(item.waMsg)}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 0.8; font-size: 0.825rem; padding: 0.65rem 0.5rem; text-align: center;" title="Ask on WhatsApp">
          💬 Ask Doctor
        </a>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.btn-open-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      openBookingModal(btn.dataset.concern);
    });
  });

  initScrollReveal();
}

/* ==========================================================================
   6. TREATMENT CATEGORY FILTERING
   ========================================================================== */
function initTreatmentFilters() {
  const filterBtns = document.querySelectorAll('.treatment-filter-btn');
  if (!filterBtns.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const selectedCategory = btn.dataset.category;
      const cards = document.querySelectorAll('.treatment-card');

      cards.forEach(card => {
        const cardCat = card.dataset.category;
        if (selectedCategory === 'all' || cardCat === selectedCategory) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* ==========================================================================
   7. FAQ ACCORDION WITH ANIMATED CHEVRON
   ========================================================================== */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    if (!questionBtn) return;

    questionBtn.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   8. MULTI-STEP BOOKING MODAL (BOTTOM SHEET ON MOBILE)
   ========================================================================== */
function initBookingModal() {
  const overlay = document.getElementById('bookingModal');
  const closeBtn = document.getElementById('closeBooking');
  const openers = document.querySelectorAll('.btn-open-booking');
  const nextBtn = document.getElementById('modalNextBtn');
  const prevBtn = document.getElementById('modalPrevBtn');
  
  if (!overlay) return;

  let currentStep = 1;
  const totalSteps = 3;

  function updateSteps() {
    document.querySelectorAll('.step-content').forEach(s => (s.style.display = 'none'));
    const activeStepEl = document.getElementById(`step${currentStep}`);
    if (activeStepEl) activeStepEl.style.display = 'block';

    document.querySelectorAll('.step-bar').forEach((bar, idx) => {
      if (idx < currentStep) bar.classList.add('active');
      else bar.classList.remove('active');
    });

    if (prevBtn) prevBtn.style.display = currentStep > 1 ? 'inline-flex' : 'none';
    if (nextBtn) {
      nextBtn.textContent = currentStep === totalSteps ? 'Confirm Appointment Request' : 'Continue';
    }
  }

  window.openBookingModal = function(concern) {
    currentStep = 1;
    updateSteps();
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileNavToggle = document.getElementById('mobileNavToggle');
    if (mobileDrawer) mobileDrawer.classList.remove('open');
    if (mobileNavToggle) mobileNavToggle.classList.remove('open');

    if (concern) {
      document.querySelectorAll('#step1 .choice-box').forEach(box => {
        if (box.textContent.trim().toLowerCase().includes(concern.toLowerCase().slice(0, 7))) {
          box.classList.add('selected');
        }
      });
    }
  };

  function closeModal() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }

  openers.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openBookingModal(btn.dataset.concern);
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // Selectable choice boxes
  document.querySelectorAll('.choice-box').forEach(box => {
    box.addEventListener('click', () => {
      const parent = box.closest('.selection-grid');
      if (parent) {
        parent.querySelectorAll('.choice-box').forEach(b => b.classList.remove('selected'));
      }
      box.classList.add('selected');
    });
  });

  // Next / Prev actions
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      if (currentStep < totalSteps) {
        currentStep++;
        updateSteps();
      } else {
        // Confirmation Screen
        const step3 = document.getElementById('step3');
        if (step3) {
          step3.innerHTML = `
            <div style="text-align: center; padding: 2rem 1rem;">
              <div style="width: 64px; height: 64px; border-radius: 50%; background: var(--color-coral-soft); color: var(--color-coral); display: inline-flex; align-items: center; justify-content: center; margin-bottom: 1.5rem;">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
              </div>
              <h3 style="font-family: var(--font-display); font-size: 1.85rem; margin-bottom: 0.75rem;">Appointment Request Received</h3>
              <p style="color: var(--color-slate-muted); max-width: 40ch; margin: 0 auto 1.5rem; font-size: 0.95rem;">
                Thank you! Saranya from True Smile reception will call / WhatsApp you shortly to confirm your doctor and time slot.
              </p>
              <div style="background: var(--color-alabaster); border: 1px solid var(--color-travertine-border); border-radius: var(--radius-sm); padding: 1.25rem; margin-bottom: 1.5rem; font-size: 0.9rem; text-align: left;">
                <div style="font-weight: 600; margin-bottom: 0.5rem; color: var(--color-slate-900);">Direct Clinic Helplines:</div>
                <div style="margin-bottom: 0.35rem;">📍 Mutholy Clinic: <a href="tel:+919645051122" style="color: var(--color-coral); font-weight: 600;">+91 9645 05 11 22</a></div>
                <div>📍 Valavoor Clinic: <a href="tel:+918921746947" style="color: var(--color-coral); font-weight: 600;">+91 8921 74 69 47</a></div>
              </div>
              <button class="btn btn-primary btn-shimmer" onclick="location.reload()">
                Back to Website
              </button>
            </div>
          `;
          if (nextBtn) nextBtn.style.display = 'none';
          if (prevBtn) prevBtn.style.display = 'none';
        }
      }
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateSteps();
      }
    });
  }
}

/* ==========================================================================
   9. FULLSCREEN MOBILE DRAWER NAVIGATION
   ========================================================================== */
function initMobileNav() {
  const toggle = document.getElementById('mobileNavToggle');
  const drawer = document.getElementById('mobileDrawer');
  if (!toggle || !drawer) return;

  function toggleDrawer() {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    } else {
      drawer.classList.add('open');
      toggle.classList.add('open');
      document.body.style.overflow = 'hidden';
    }
  }

  toggle.addEventListener('click', toggleDrawer);

  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // Close on Escape key
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('open')) {
      drawer.classList.remove('open');
      toggle.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
}
