const menuButton = document.querySelector('.menu-button');
const navigation = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    navigation.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(element => observer.observe(element));

document.getElementById('year').textContent = new Date().getFullYear();

document.getElementById('newsletter-form')?.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  const message = form.querySelector('.form-message');
  message.textContent = 'Merci ! Le formulaire est une démonstration visuelle. Il faudra le relier à votre outil d’e-mailing.';
  form.reset();
});
