document.addEventListener("mousemove", (e) => {
  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const girl = document.getElementById("girl");
  const girlRect = girl.getBoundingClientRect();
  const girlX = girlRect.left + girlRect.width / 2;
  const girlY = girlRect.top + girlRect.height / 2;

  const angleDeg = angle(mouseX, mouseY, girlX, girlY);

  const eyeRight = document.getElementById("eyeRight");
  eyeRight.style.transform = `rotate(${190 + angleDeg}deg)`;

  const eyeLeft = document.getElementById("eyeLeft");
  eyeLeft.style.transform = `rotate(${190 + angleDeg}deg)`;
});

function angle(cx, cy, ex, ey) {
  const dy = ey - cy;
  const dx = ex - cx;
  const rad = Math.atan2(dy, dx);
  const deg = (rad * 180) / Math.PI;
  return deg;
}
