const targets = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); } }), { threshold: .14 });
targets.forEach(el => observer.observe(el));

const heroArt = document.querySelector('.hero-art');
const setHeroExplosion = () => heroArt.classList.toggle('explode', window.scrollY > window.innerHeight * .13);
addEventListener('scroll', setHeroExplosion, { passive: true });
setHeroExplosion();

document.querySelector('.contact-button').href = 'mailto:sumtimes100@gmail.com';
document.querySelector('.profile-card img').src = 'profile.png';
