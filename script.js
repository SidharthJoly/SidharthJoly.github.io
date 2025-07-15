document.addEventListener('DOMContentLoaded', function () {
  const circle = document.getElementById('circle');
  if (!circle) {
    console.error('Element with ID "circle" not found.');
    return;
  }

  const kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ['x', 'y'],
  });

  // Update circle's position on every animation frame
  kinet.on('tick', function (instances) {
    circle.style.transform = `
      translate3d(${instances.x.current}px, ${instances.y.current}px, 0)
      rotateX(${instances.y.velocity / 2}deg)
      rotateY(${instances.x.velocity / 2}deg)
    `;
  });

  // Animate toward mouse on move
  document.addEventListener('mousemove', function (event) {
    const mouseX = event.clientX - 20; // Center the circle (40px width)
    const mouseY = event.clientY - 20;
    kinet.animate('x', mouseX);
    kinet.animate('y', mouseY);
  });

  // Start at center
  const startX = window.innerWidth / 2 - 20;
  const startY = window.innerHeight / 2 - 20;
  kinet.set('x', startX);
  kinet.set('y', startY);
});
