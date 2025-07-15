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

  // Update circle's transform based on Kinet animation
  kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0)
      rotateX(${instances.y.velocity / 2}deg)
      rotateY(${instances.x.velocity / 2}deg)`;
  });

  // Animate to the current mouse position
  document.addEventListener('mousemove', function (event) {
    const mouseX = Math.max(20, Math.min(window.innerWidth - 20, event.clientX - 20));
    const mouseY = Math.max(20, Math.min(window.innerHeight - 20, event.clientY - 20));
    kinet.animate('x', mouseX);
    kinet.animate('y', mouseY);
  });
});
