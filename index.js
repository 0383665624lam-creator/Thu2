// ===== CLICK EFFECT + PARTICLES =====
document.addEventListener("click", (e) => {
  createRipple(e);
  createParticles(e);
});

// Ripple effect
function createRipple(e) {
  const ripple = document.createElement("span");
  ripple.className = "ripple";

  const size = 20;
  ripple.style.width = size + "px";
  ripple.style.height = size + "px";
  ripple.style.left = e.clientX - size / 2 + "px";
  ripple.style.top = e.clientY - size / 2 + "px";

  document.body.appendChild(ripple);

  setTimeout(() => {
    ripple.remove();
  }, 600);
}

// Particle effect
function createParticles(e) {
  const count = 12;

  for (let i = 0; i < count; i++) {
    const particle = document.createElement("span");
    particle.className = "particle";

    particle.style.left = e.clientX + "px";
    particle.style.top = e.clientY + "px";

    const angle = Math.random() * Math.PI * 2;
    const distance = Math.random() * 80 + 20;

    const x = Math.cos(angle) * distance + "px";
    const y = Math.sin(angle) * distance + "px";

    particle.style.setProperty("--x", x);
    particle.style.setProperty("--y", y);

    document.body.appendChild(particle);

    setTimeout(() => {
      particle.remove();
    }, 800);
  }
}
