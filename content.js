// Снегопад на DeepSeek
(function () {
  // Создаём canvas
  const canvas = document.createElement("canvas");
  canvas.style.position = "fixed";
  canvas.style.top = "0";
  canvas.style.left = "0";
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  canvas.style.pointerEvents = "none";
  canvas.style.zIndex = "999999";
  document.body.appendChild(canvas);

  let width = window.innerWidth;
  let height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;

  // Снежинки
  const flakes = [];
  const flakeCount = 120;

  for (let i = 0; i < flakeCount; i++) {
    flakes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 4 + 1,
      speedY: Math.random() * 2 + 0.5,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.3,
    });
  }

  function draw() {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, width, height);

    for (let f of flakes) {
      f.y += f.speedY;
      f.x += f.speedX;

      if (f.y > height) {
        f.y = 0;
        f.x = Math.random() * width;
      }
      if (f.x < 0) f.x = width;
      if (f.x > width) f.x = 0;

      ctx.beginPath();
      ctx.arc(f.x, f.y, f.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${f.opacity})`;
      ctx.fill();
    }

    requestAnimationFrame(draw);
  }

  function resizeCanvas() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
  }

  window.addEventListener("resize", resizeCanvas);
  draw();
})();
