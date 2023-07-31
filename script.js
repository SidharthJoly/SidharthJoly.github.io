var kinet = new Kinet({
  acceleration: 0.06,
  friction: 0.20,
  names: ["x", "y"],
});
var circle = document.getElementById('circle');
kinet.on('tick', function(instances) {
  circle.style.transform = `translate3d(${ (instances.x.current) }px, ${ (instances.y.current) }px, 0) rotateX(${ (instances.x.velocity/2) }deg) rotateY(${ (instances.y.velocity/2) }deg)`;
});
document.addEventListener('mousemove', function (event) {
  var mouseX = event.pageX - window.innerWidth/2;
  var mouseY = event.pageY - window.innerHeight/2 + window.scrollY;
  kinet.animate('x', mouseX);
  kinet.animate('y', mouseY);
});
kinet.on('start', function() {
  console.log('start');
});
kinet.on('end', function() {
  console.log('end');
});
