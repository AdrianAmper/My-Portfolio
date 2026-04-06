const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));

    // Nav active state on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      navLinks.forEach(a => {
        a.style.color = a.getAttribute('href') === '#' + current ? '#f5f5f0' : '';
      });
    });

    // Form submit feedback
    function handleSubmit(btn) {
      btn.textContent = 'Sending…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = 'Message Sent ✓';
        btn.style.background = '#2e7d52';
        setTimeout(() => {
          btn.textContent = 'Send Message →';
          btn.style.background = '';
          btn.disabled = false;
        }, 3000);
      }, 1200);
    }

    // ── PARTICLE TRAIL CURSOR ──
const trailColors = [
  'rgba(232,150,122,0.9)',
  'rgba(245,201,184,0.8)',
  'rgba(248,200,170,0.75)',
  'rgba(232,150,122,0.6)',
  'rgba(255,220,200,0.5)',
];

let cursorX = 0, cursorY = 0;

document.addEventListener('mousemove', e => {
  cursorX = e.clientX;
  cursorY = e.clientY;
});

setInterval(() => {
  const t = document.createElement('div');
  t.className = 'cursor-trail';

  const color = trailColors[Math.floor(Math.random() * trailColors.length)];
  const size  = 4 + Math.random() * 7;

  t.style.cssText = `
    left: ${cursorX}px;
    top: ${cursorY}px;
    width: ${size}px;
    height: ${size}px;
    background: ${color};
    box-shadow: 0 0 ${size * 2}px ${color};
    opacity: 1;
  `;

  document.body.appendChild(t);

  // Trigger fade + shrink
  requestAnimationFrame(() => {
    t.style.opacity = '0';
    t.style.transform = 'translate(-50%, -50%) scale(0.1)';
  });

  // Clean up from DOM
  setTimeout(() => t.remove(), 520);

}, 30);

// ── CUSTOM CURSOR ──
// Add the two cursor elements to the DOM
const cursorRing = document.createElement('div');
const cursorDot  = document.createElement('div');
cursorRing.className = 'cursor-ring';
cursorDot.className  = 'cursor-dot';
document.body.appendChild(cursorRing);
document.body.appendChild(cursorDot);
 
// Smooth ring position (lerped), instant dot
let ringX = 0, ringY = 0;
// cursorX / cursorY already declared in your existing script
 
function animateCursor() {
  // Lerp the ring toward the mouse (adjust 0.12 for more/less lag)
  ringX += (cursorX - ringX) * 0.12;
  ringY += (cursorY - ringY) * 0.12;
 
  cursorRing.style.left = ringX + 'px';
  cursorRing.style.top  = ringY + 'px';
 
  // Dot snaps instantly
  cursorDot.style.left = cursorX + 'px';
  cursorDot.style.top  = cursorY + 'px';
 
  requestAnimationFrame(animateCursor);
}
animateCursor();
 
// Hover effect — triggers on any interactive element
const hoverTargets = 'a, button, [role="button"], input, textarea, label, .project-card, .skill-pill, .contact-link-item';
 
document.querySelectorAll(hoverTargets).forEach(el => {
  el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
  el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
});
 
// Also handle dynamically — event delegation fallback
document.addEventListener('mouseover', e => {
  if (e.target.closest(hoverTargets)) {
    document.body.classList.add('cursor-hover');
  }
});
document.addEventListener('mouseout', e => {
  if (e.target.closest(hoverTargets)) {
    document.body.classList.remove('cursor-hover');
  }
});
 
// Click pulse
document.addEventListener('mousedown', () => document.body.classList.add('cursor-click'));
document.addEventListener('mouseup',   () => document.body.classList.remove('cursor-click'));
 
// Hide when leaving the window
document.addEventListener('mouseleave', () => document.body.classList.add('cursor-out'));
document.addEventListener('mouseenter', () => document.body.classList.remove('cursor-out'));
    

    