window.addEventListener("load", () => {
  const music = document.getElementById("bgMusic");
  music.muted = false;

  const tryPlay = () => {
    music.play().catch(() => {});
  };

  tryPlay();
  document.addEventListener("click", tryPlay, { once: true });
});
