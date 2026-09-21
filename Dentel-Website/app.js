/**
 * TRUE SMILE DENTAL CLINIC - CLIENT SCRIPT
 * Mutholy & Valavoor, Pala, Kerala
 * Interactivity:
 * - Dynamic Treatments Grid
 * - Branch & Concern Interactive Modal Booking Flow
 * - Mobile Navigation Toggle
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  renderTreatments();
  initBookingModal();
  initMobileNav();
});

/* ==========================================================================
   0. DARK / LIGHT THEME TOGGLE
   ========================================================================== */
function initTheme() {
  const themeToggle = document.getElementById('themeToggle');
  const savedTheme = localStorage.getItem('truesmile-theme');
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  
  if (savedTheme === 'dark' || (!savedTheme && systemDark)) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      const target = current === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', target);
      localStorage.setItem('truesmile-theme', target);
    });
  }
}

/* ==========================================================================
   1. REAL TREATMENTS DATA & RENDERING
   ========================================================================== */
const treatmentsList = [
  {
    title: 'Biomimetic Tooth Restoration',
    desc: 'Advanced cavity and tooth decay restoration using layered biological composites that bond directly with natural enamel and dentin, avoiding aggressive drill grinding.',
    highlight: 'Tooth-Preserving Technique',
    duration: 'Single Visit (30–45 Mins)',
    doctors: 'Dr. Noel & Dr. Mereena'
  },
  {
    title: '1-Week Aesthetic Smile Correction',
    desc: 'Gap closures, fractured tooth shaping, and composite veneer restorations planned to give you a symmetrical, natural smile within just 7 days.',
    highlight: 'Fast 1-Week Turnaround',
    duration: '1–2 Sessions',
    doctors: 'Dr. Mereena Joshy'
  },
  {
    title: 'Gentle Root Canal Treatment',
    desc: 'Painless endodontic therapy for infected root canals. Relieves persistent toothaches and eliminates deep infections while keeping your natural tooth rooted.',
    highlight: 'Painless & Gentle Care',
    duration: '1–2 Visits',
    doctors: 'Dr. Noel (Dr. Noyal)'
  },
  {
    title: 'Teeth Bridging & Permanent Implants',
    desc: 'State-of-the-art tooth replacement using ceramic bridges and titanium dental implants for long-term chewing strength and effortless speech.',
    highlight: 'Permanent Replacement',
    duration: 'Custom Treatment Plan',
    doctors: 'Dr. Sebin Jose & Dr. Noel'
  },
  {
    title: 'Clear Invisible Aligners & Braces',
    desc: 'Discreet orthodontic correction for crowded, misaligned, or spaced teeth. Continuous support and progress reviews throughout your smile journey.',
    highlight: 'Removable & Transparent',
    duration: '4–12 Months',
    doctors: 'Dr. Sebin Jose'
  },
  {
    title: 'Child-Friendly Pediatric Dentistry',
    desc: 'Warm, patient care for children. Our doctors treat every child with boundless patience, turning dental visits into a playful, fear-free experience.',
    highlight: 'Zero Dental Fear',
    duration: 'Gentle 30-Min Visit',
    doctors: 'Dr. Collin & Dr. Mereena'
  }
];

function renderTreatments() {
  const grid = document.getElementById('treatmentGrid');
  if (!grid) return;

  grid.innerHTML = treatmentsList.map(item => `
    <div class="treatment-card">
      <div class="card-icon-wrap" style="background-color: var(--color-coral-soft); color: var(--color-coral);">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        </svg>
      </div>
      <h3 class="treatment-title" style="font-size: 1.35rem; color: var(--color-slate-900);">${item.title}</h3>
      <p class="treatment-desc" style="color: var(--color-slate-muted); font-size: 0.925rem; margin-bottom: 1.25rem;">${item.desc}</p>
      
      <div class="treatment-specs" style="border-top: 1px solid rgba(18,27,31,0.06); padding-top: 1rem; margin-bottom: 1.25rem; display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem;">
        <div>
          <div class="spec-title" style="font-size: 0.75rem; color: var(--color-slate-muted); text-transform: uppercase;">Duration</div>
          <div class="spec-value" style="font-weight: 600; font-size: 0.9rem;">${item.duration}</div>
        </div>
        <div>
          <div class="spec-title" style="font-size: 0.75rem; color: var(--color-slate-muted); text-transform: uppercase;">Doctor Lead</div>
          <div class="spec-value" style="font-weight: 600; font-size: 0.9rem; color: var(--color-coral);">${item.doctors}</div>
        </div>
      </div>

      <button class="btn btn-secondary btn-open-booking" data-concern="${item.title}" style="width: 100%;">
        Book This Treatment
      </button>
    </div>
  `).join('');

  grid.querySelectorAll('.btn-open-booking').forEach(btn => {
    btn.addEventListener('click', () => {
      openBookingModal(btn.dataset.concern);
    });
  });
}

/* ==========================================================================
   2. MULTI-STEP BOOKING MODAL
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
      openBookingModal();
    });
  });

  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
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
                Thank you! Saranya from True Smile reception will call / WhatsApp you shortly to confirm your doctor and slot.
              </p>
              <div style="background: var(--color-alabaster); border: 1px solid var(--color-travertine-border); border-radius: var(--radius-sm); padding: 1rem; margin-bottom: 1.5rem; font-size: 0.9rem;">
                <strong>Emergency Helpline:</strong><br>
                Mutholy: <a href="tel:+919645051122" style="color: var(--color-coral);">+91 9645 05 11 22</a><br>
                Valavoor: <a href="tel:+918921746947" style="color: var(--color-coral);">+91 8921 74 69 47</a>
              </div>
              <button class="btn btn-primary" onclick="location.reload()">
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
   3. MOBILE NAVIGATION TOGGLE
   ========================================================================== */
function initMobileNav() {
  const toggle = document.querySelector('.mobile-nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (!toggle || !navLinks) return;

  toggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    navLinks.style.display = isOpen ? 'none' : 'flex';
    if (!isOpen) {
      navLinks.style.flexDirection = 'column';
      navLinks.style.position = 'absolute';
      navLinks.style.top = '100%';
      navLinks.style.left = '0';
      navLinks.style.right = '0';
      navLinks.style.backgroundColor = '#ffffff';
      navLinks.style.padding = '1.5rem';
      navLinks.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
      navLinks.style.borderBottom = '1px solid #ded8cb';
      navLinks.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => {
          navLinks.style.display = 'none';
        });
      });
    }
  });
}
