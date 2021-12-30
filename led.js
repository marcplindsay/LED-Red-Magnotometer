var avr = Puck.mag();
var magDiff;
Puck.on('mag', function(xyz) {
  // work out difference in field
  var dx = xyz.x-avr.x;
  var dy = xyz.y-avr.y;
  var dz = xyz.z-avr.z;
  magDiff = Math.sqrt(dx*dx+dy*dy+dz*dz);
  // update average
  avr.x += dx/2;
  avr.y += dy/2;
  avr.z += dz/2;  
  LED.write(magDiff > 50);
});
Puck.magOn();
