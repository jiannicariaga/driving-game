var $vehicle = document.querySelector('.vehicle');
var direction = {
  up: 'vehicle turn-up',
  right: 'vehicle turn-right',
  down: 'vehicle turn-down',
  left: 'vehicle turn-left'
};

document.addEventListener('keydown', function (event) {
  if (event.key === 'w' || event.keyCode === 38) {
    $vehicle.className = direction.up;
  } else if (event.key === 'd' || event.keyCode === 39) {
    $vehicle.className = direction.right;
  } else if (event.key === 's' || event.keyCode === 40) {
    $vehicle.className = direction.down;
  } else if (event.key === 'a' || event.keyCode === 37) {
    $vehicle.className = direction.left;
  }
});
