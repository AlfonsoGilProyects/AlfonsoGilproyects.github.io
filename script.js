// Simple scroll animation for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Header scroll effect
window.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.style.padding = '15px 0';
    header.style.boxShadow = '0 5px 20px rgba(0, 0, 0, 0.1)';
  } else {
    header.style.padding = '20px 0';
    header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.05)';
  }
});
