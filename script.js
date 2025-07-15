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

  kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
  });

  function getMousePosition(event) {
    // Calculate mouse position relative to the center of the window
    const mouseX = event.clientX - window.innerWidth / 2;
    const mouseY = event.clientY - window.innerHeight / 2;
    return { x: mouseX, y: mouseY };
  }

  document.addEventListener('mousemove', function (event) {
    const mousePosition = getMousePosition(event);
    kinet.animate('x', mousePosition.x);
    kinet.animate('y', mousePosition.y);
  });

  kinet.on('start', function () {
    console.log('start');
  });

  kinet.on('end', function () {
    console.log('end');
  });
});
