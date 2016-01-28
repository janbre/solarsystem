function draw() {
  var canvas = document.getElementById('tutorial');
  if (canvas.getContext) {
    var ctx = canvas.getContext('2d');
    var CANVAS_SIZE = 1080;

    var x = CANVAS_SIZE / 2;
    var y = CANVAS_SIZE / 2;
    var mercuryRadius = 8;
    var venusRadius = 11;
    var earthRadius = 16.5;
    var marsRadius = 24;
    var jupiterRadius = 82;
    var saturnRadius = 144;
    var uranusRadius = 333;
    var neptuneRadius = 500;

    var mercuryOrbit = createOrbit(ctx, x, y, mercuryRadius, 0, 360);
    var venusOrbit = createOrbit(ctx, x, y, venusRadius, 0, 360);
    var earthOrbit = createOrbit(ctx, x, y, earthRadius, 0, 360);
    var marsOrbit = createOrbit(ctx, x, y, marsRadius, 0, 360);
    var jupiterOrbit = createOrbit(ctx, x, y, jupiterRadius, 0, 360);
    var saturnOrbit = createOrbit(ctx, x, y, saturnRadius, 0, 360);
    var uranusOrbit = createOrbit(ctx, x, y, uranusRadius, 0, 360);
    var neptuneOrbit = createOrbit(ctx, x, y, neptuneRadius, 0, 360);
    ctx.stroke(earthOrbit);
    ctx.stroke(mercuryOrbit);
    ctx.stroke(venusOrbit);
    ctx.stroke(marsOrbit);
    ctx.stroke(jupiterOrbit);
    ctx.stroke(saturnOrbit);
    ctx.stroke(uranusOrbit);
    ctx.stroke(neptuneOrbit);
  }
}

function createOrbit(ctx, centerX, centerY, radius, startAngle, endAngle) {
  var orbit = new Path2D();
  orbit.arc(centerX, centerY, radius, startAngle, endAngle);
  return orbit;
}
