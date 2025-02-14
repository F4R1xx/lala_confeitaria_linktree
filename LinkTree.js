// Aguarda o DOM carregar completamente
document.addEventListener('DOMContentLoaded', () => {
  // Seleciona o container de partículas
  const particulasContainer = document.querySelector('.particulas');

  // Função para criar e animar uma partícula
  const createParticle = (x, y) => {
    const particula = document.createElement('div');
    particula.className = 'particula';
    particula.style.left = `${x}px`;
    particula.style.top = `${y}px`;
    particulasContainer.appendChild(particula);

    // Remove a partícula após 1 segundo
    setTimeout(() => particula.remove(), 1000);
  };

  // Função que trata os eventos de clique e toque
  const handleParticleEvent = (event) => {
    // Previne o comportamento padrão para eventos de toque
    event.preventDefault();
    const x = event.clientX || (event.touches && event.touches[0].clientX);
    const y = event.clientY || (event.touches && event.touches[0].clientY);
    createParticle(x, y);
  };

  // Suporte para desktop e dispositivos móveis
  document.addEventListener('click', handleParticleEvent);
  document.addEventListener('touchstart', handleParticleEvent);

  // Animação de entrada do container com GSAP
  gsap.from(".container", {
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: "elastic.out(1, 0.5)"
  });

  // Animação da imagem de perfil
  gsap.from(".profile-img", {
    duration: 1,
    scale: 0,
    rotation: 360,
    ease: "back.out(1.7)"
  });

  // Animação dos links, com efeito de encadeamento (stagger)
  gsap.from(".link", {
    duration: 1,
    x: -100,
    opacity: 0,
    stagger: 0.1,
    ease: "power4.out"
  });
});


console.log(process.env.TestandoKeyName);
console.log(process.env.TestandoKeyFloat);

let teste = parseFloat(process.env.TestandoKeyFloat);
let num = teste + 10;
console.log(num);
