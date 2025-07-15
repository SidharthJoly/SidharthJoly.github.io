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
    // Calculate mouse position relative to viewport, adjusted for circle's size
    const mouseX = Math.max(20, Math.min(window.innerWidth - 20, event.clientX - 20));
    const mouseY = Math.max(20, Math.min(window.innerHeight - 20, event.clientY - 20));
    console.log(`Mouse: (${event.clientX}, ${event.clientY}), Circle: (${mouseX}, ${mouseY})`);
    return { x: mouseX, y: mouseY };
  }

 document.addEventListener('mousemove', function (event) {
    const mousePosition = getMousePosition(event);
    circle.style.transform = `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0)`;
  });

  kinet.on('start', function () {
    console.log('start');
  });

  kinet.on('end', function () {
    console.log('end');
  });
});
