var $vehicle = document.querySelector('.vehicle');
var vehicle = {
  direction: {
    north: 'vehicle direction-north',
    south: 'vehicle direction-south',
    east: 'vehicle direction-east',
    west: 'vehicle direction-west'
  },
  coordinates: {
    x: 0,
    y: 0
  },
  engine: {
    on: false
  }
};
var intervalId = null;

document.addEventListener('keydown', function (event) {
  if (event.key === 'w' || event.keyCode === 38) {
    $vehicle.className = vehicle.direction.north;
  } else if (event.key === 's' || event.keyCode === 40) {
    $vehicle.className = vehicle.direction.south;
  } else if (event.key === 'd' || event.keyCode === 39) {
    $vehicle.className = vehicle.direction.east;
  } else if (event.key === 'a' || event.keyCode === 37) {
    $vehicle.className = vehicle.direction.west;
  }

  if (event.key === ' ') {
    vehicle.engine.on = !vehicle.engine.on;

    if (vehicle.engine.on) {
      intervalId = setInterval(startEngine, 16);
    } else {
      clearInterval(intervalId);
    }
  }
});

function startEngine() {
  vehicle.coordinates.x += 10;
  $vehicle.style.left = vehicle.coordinates.x + 'px';
}
