// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function () {
  var kinet = new Kinet({
    acceleration: 0.06,
    friction: 0.20,
    names: ["x", "y"],
  });

  var circle = document.getElementById('circle');
  kinet.on('tick', function (instances) {
    circle.style.transform = `translate3d(${instances.x.current}px, ${instances.y.current}px, 0) rotateX(${instances.x.velocity / 2}deg) rotateY(${instances.y.velocity / 2}deg)`;
  });

  function getMousePosition(event) {
    var mouseX = event.pageX - window.innerWidth / 2;
    var mouseY = event.pageY - window.innerHeight / 2 + window.scrollY;
    return { x: mouseX, y: mouseY };
  }

  document.addEventListener('mousemove', function (event) {
    var mousePosition = getMousePosition(event);
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
