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
  
    

    