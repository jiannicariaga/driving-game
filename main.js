var $vehicle = document.querySelector('.vehicle');
var direction = {
  north: 'vehicle direction-north',
  south: 'vehicle direction-south',
  east: 'vehicle direction-east',
  west: 'vehicle direction-west'
};

document.addEventListener('keydown', function (event) {
  if (event.key === 'w' || event.keyCode === 38) {
    $vehicle.className = direction.north;
  } else if (event.key === 's' || event.keyCode === 40) {
    $vehicle.className = direction.south;
  } else if (event.key === 'd' || event.keyCode === 39) {
    $vehicle.className = direction.east;
  } else if (event.key === 'a' || event.keyCode === 37) {
    $vehicle.className = direction.west;
  }
});