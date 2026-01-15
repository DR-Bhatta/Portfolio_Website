// Dark mode toggle
const toggle = document.getElementById('darkToggle');

toggle.onclick = () => {
  document.body.classList.toggle('dark');
  toggle.textContent =
    document.body.classList.contains('dark') ? '☀️ Light' : '🌙 Dark';
};

// WhatsApp form
function sendToWhatsApp(e) {
  e.preventDefault();
  const name = e.target[0].value;
  const email = e.target[1].value;
  const message = e.target[2].value;

  const text = `Hello, I am ${name}%0AEmail: ${email}%0AMessage: ${message}`;
  window.open(`https://wa.me/977XXXXXXXXXX?text=${text}`, '_blank');
}

// Fade-in animation
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
});

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Typing animation
const text = "Dilli Raj Bhatta";
let index = 0;
const typedEl = document.getElementById('typed-name');

function typeEffect() {
  if (index < text.length) {
    typedEl.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 120);
  }
}

typeEffect();
