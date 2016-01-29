var CANVAS_SIZE = 1080;
var x = CANVAS_SIZE / 2;
var y = CANVAS_SIZE / 2;

var mercuryRadiusOrbit = 8;
var venusRadiusOrbit = 11;
var earthRadiusOrbit = 16.5;
var marsRadiusOrbit = 24;
var jupiterRadiusOrbit = 82;
var saturnRadiusOrbit = 144;
var uranusRadiusOrbit = 333;
var neptuneRadiusOrbit = 500;
var mercuryRadiusPlanet;
var venusRadiusPlanet;
var earthRadiusPlanet;
var marsRadiusPlanet;
var jupiterRadiusPlanet;
var saturnRadiusPlanet;
var uranusRadiusPlanet;
var neptuneRadiusPlanet;
var mercuryOrbit;
var venusOrbit;
var earthOrbit;
var marsOrbit;
var jupiterOrbit;
var saturnOrbit;
var uranusOrbit;
var neptuneOrbit;

var mercury = new Image();
var venus = new Image();
var earth = new Image();
var mars = new Image();
var jupiter = new Image();
var saturn = new Image();
var uranus = new Image();
var neptune = new Image();
var background = new Image();

var ctx;

var mercuryAngle = 0;
var mercuryX;
var mercuryY;
var venusAngle = 0;
var venusX;
var venusY;
var earthAngle = 0;
var earthX;
var earthY;
var marsAngle = 0;
var marsX;
var marsY;
var jupiterAngle = 0;
var jupiterX;
var jupiterY;
var saturnAngle = 0;
var saturnX;
var saturnY;
var uranusAngle = 0;
var uranusX;
var uranusY;
var neptuneAngle = 0;
var neptuneX;
var neptuneY;


function init() {
  var canvas = document.getElementById('tutorial');
  ctx = canvas.getContext('2d');
  mercuryOrbit = createOrbit(ctx, x, y, mercuryRadiusOrbit, 0, 360);
  venusOrbit = createOrbit(ctx, x, y, venusRadiusOrbit, 0, 360);
  earthOrbit = createOrbit(ctx, x, y, earthRadiusOrbit, 0, 360);
  marsOrbit = createOrbit(ctx, x, y, marsRadiusOrbit, 0, 360);
  jupiterOrbit = createOrbit(ctx, x, y, jupiterRadiusOrbit, 0, 360);
  saturnOrbit = createOrbit(ctx, x, y, saturnRadiusOrbit, 0, 360);
  uranusOrbit = createOrbit(ctx, x, y, uranusRadiusOrbit, 0, 360);
  neptuneOrbit = createOrbit(ctx, x, y, neptuneRadiusOrbit, 0, 360);
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  mercury.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  jupiter.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
  background.src = 'img/stars.jpg';
  //draw();
  window.requestAnimationFrame(draw);
}


function draw2() {
  ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
  var new_x = jupiterRadiusOrbit + jupiterRadius * Math.cos(angle * Math.PI / 180);
  var new_y = jupiterRadiusOrbit + jupiterRadius * Math.sin(angle * Math.PI / 180);
  angle++;
  if (angle >= 360) {
    angle = 0;
  }
  ctx.drawImage(earth, new_x, new_y);
  window.requestAnimationFrame(draw2);
}

function draw() {
  ctx.clearRect(0,0,CANVAS_SIZE, CANVAS_SIZE);
  ctx.drawImage(background, 0, 0);
  ctx.strokeStyle = 'rgba(0,152,255,0.4)';
  ctx.stroke(earthOrbit);
  ctx.stroke(mercuryOrbit);
  ctx.stroke(venusOrbit);
  ctx.stroke(marsOrbit);
  ctx.stroke(jupiterOrbit);
  ctx.stroke(saturnOrbit);
  ctx.stroke(uranusOrbit);
  ctx.stroke(neptuneOrbit);
  animateEarth();
  window.requestAnimationFrame(draw);
}

function createOrbit(ctx, centerX, centerY, radius, startAngle, endAngle) {
  var orbit = new Path2D();
  orbit.arc(centerX, centerY, radius, startAngle, endAngle);
  return orbit;
}


function drawBackgroud() {
  // TODO: draw a starry background. Place pixels at random locations, some bigger than others
  // perhaps also some blur on some of them
  return null;
}

function animateOrbit(orbit) {
  // TODO: the orbiting planet trails an outline of the orbit that fades away
  return null;
}

function animateMercury() {
  // TODO: use parameters for Mercury
  mercuryX = (CANVAS_SIZE / 2) - (mercuryRadiusOrbit * Math.cos(mercuryAngle * Math.PI / 180));
  mercuryY = (CANVAS_SIZE / 2) - (mercuryRadiusOrbit * Math.sin(mercuryAngle * Math.PI / 180));
  ctx.drawImage(mercury, (earthX - earth.width/2), earthY - earth.width/2);
  var time = new Date();
  mercuryAngle++;
  if (mercuryAngle >= 360) {
    mercuryAngle = 0;
  }
}

function animateVenus() {
  // TODO:
}

function animateEarth() {
  earthX = (CANVAS_SIZE / 2) - (jupiterRadiusOrbit * Math.cos(earthAngle * Math.PI / 180));
  earthY = (CANVAS_SIZE / 2) - (jupiterRadiusOrbit * Math.sin(earthAngle * Math.PI / 180));
  ctx.drawImage(earth, (earthX - earth.width/2), earthY - earth.width/2);
  var time = new Date();
  //angle = (((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds())
  earthAngle++;
  if (earthAngle >= 360) {
    earthAngle = 0;
  }
}

function animateMars() {
  // TODO:
}

function animateJupiter() {
  // TODO:
}

function animateSaturn() {
  // TODO:
}

function animateUranus() {
  // TODO:
}

function animateNeptune() {
  // TODO:
}
