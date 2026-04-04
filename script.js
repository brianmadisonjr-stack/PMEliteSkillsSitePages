const rings = document.querySelectorAll('.ring');

const animateRing = (ring) => {
  const circle = ring.querySelector('circle.meter');
  const progress = Number(ring.dataset.progress || 0);
  const circumference = 2 * Math.PI * 52;
  const offset = circumference - (progress / 100) * circumference;
  circle.style.strokeDashoffset = offset;
};

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateRing(entry.target);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.4 }
  );

  rings.forEach((ring) => observer.observe(ring));
} else {
  rings.forEach(animateRing);
}
