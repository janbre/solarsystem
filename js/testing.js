var CANVAS_SIZE = 1080;
var SPEED = 1;
var x = CANVAS_SIZE / 2;
var y = CANVAS_SIZE / 2;
var ctx;

// Mercury
var mercury = new Image();
var mercuryAngle = 0;
var mercuryRadiusOrbit = 8;
var mercuryYear = 0.24;
var mercuryOrbit;
var mercuryRadiusPlanet;
var mercuryX;
var mercuryY;
var MERCURY = {}
MERCURY["orbitRadius"] = mercuryRadiusOrbit;
MERCURY["angle"] = mercuryAngle;
MERCURY["startingAngle"] = 0;

// Venus
var venus = new Image();
var venusRadiusOrbit = 11;
var venusAngle = 10;
var venusYear = 0.62;
var venusRadiusPlanet;
var venusOrbit;
var venusX;
var venusY;
var VENUS = {}
VENUS["orbitRadius"] = venusRadiusOrbit;
VENUS["angle"] = venusAngle;
VENUS["startingAngle"] = 10;

// Earth
var earth = new Image();
var earthRadiusOrbit = 16.5;
var earthAngle = 60;
var earthYear = 1;
var earthRadiusPlanet;
var earthOrbit;
var earthX;
var earthY;
var EARTH = {}
EARTH["orbitRadius"] = earthRadiusOrbit;
EARTH["angle"] = earthAngle;
EARTH["startingAngle"] = 60;

// Mars
var mars = new Image();
var marsRadiusOrbit = 24;
var marsAngle = 245;
var marsYear = 1.9;
var marsRadiusPlanet;
var marsOrbit;
var marsX;
var marsY;

var MARS = {}
MARS["orbitRadius"] = marsRadiusOrbit;
MARS["angle"] = marsAngle;
MARS["startingAngle"] = 245;

// Jupiter
var jupiter = new Image();
var jupiterRadiusOrbit = 82;
var jupiterAngle = 245;
var jupiterYear = 12;
var jupiterRadiusPlanet;
var jupiterOrbit;
var jupiterX;
var jupiterY;

var JUPITER = {};
JUPITER["orbitRadius"] = jupiterRadiusOrbit;
JUPITER["angle"] = jupiterAngle;
JUPITER["startingAngle"] = 245;

// Saturn
var saturn = new Image();
var saturnRadiusOrbit = 144;
var saturnAngle = 245;
var saturnYear = 29.45;
var saturnRadiusPlanet;
var saturnOrbit;
var saturnX;
var saturnY;
var SATURN = {};
SATURN["orbitRadius"] = saturnRadiusOrbit;
SATURN["angle"] = saturnAngle;

// Uranus
var uranus = new Image();
var uranusRadiusOrbit = 333;
var uranusAngle = 0;
var uranusYear = 84;
var uranusRadiusPlanet;
var uranusOrbit;
var uranusX;
var uranusY;
var URANUS = {}
URANUS["orbitRadius"] = uranusRadiusOrbit;
URANUS["angle"] = uranusAngle;

// Neptune
var neptune = new Image();
var neptuneRadiusOrbit = 500;
var neptuneAngle = 0;
var neptuneYear = 164.8;
var neptuneRadiusPlanet;
var neptuneOrbit;
var neptuneX;
var neptuneY;
var NEPTUNE = {}
NEPTUNE["orbitRadius"] = neptuneRadiusOrbit;
NEPTUNE["angle"] = neptuneAngle;

var background = new Image();

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
  mercury.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  venus.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
  earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
  mars.src = 'img/mars.png';
  jupiter.src = 'img/jupiter.png';
  saturn.src = 'img/saturn.png';
  uranus.src = 'img/uranus.png';
  neptune.src = 'img/neptune.png';
  background.src = 'img/stars.jpg';
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
  //ctx.stroke(earthOrbit);
  //ctx.stroke(mercuryOrbit);
  //ctx.stroke(venusOrbit);
  //ctx.stroke(marsOrbit);
  //ctx.stroke(jupiterOrbit);
  //ctx.stroke(saturnOrbit);
  //ctx.stroke(uranusOrbit);
  //ctx.stroke(neptuneOrbit);
  animateMercury();
  animateVenus();
  animateEarth();
  animateMars();
  animateJupiter();
  animateSaturn();
  animateUranus();
  animateNeptune();
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

function animateOrbit(planet) {
  // Do not draw partial orbit to begin with. Let planet draw orbit until 120 degrees and then keep a trail of that many degrees
  if (planet["startingAngle"]) {
    if ((planet["angle"] - planet["startingAngle"]) > 120) {
      var orbit = createOrbit(ctx, x, y, planet["orbitRadius"], ((planet["angle"]-120)*Math.PI)/180, (planet["angle"]*Math.PI)/180);
    } else {
      var orbit = createOrbit(ctx, x, y, planet["orbitRadius"], ((planet["startingAngle"])*Math.PI)/180, (planet["angle"]*Math.PI)/180);
    }
    ctx.stroke(orbit);
  } else {
    // the orbiting planet trails an outline of the orbit that fades away
    var orbit = createOrbit(ctx, x, y, planet["orbitRadius"], ((planet["angle"]-120)*Math.PI)/180, (planet["angle"]*Math.PI)/180);
    ctx.stroke(orbit);
  }
  return null;
}

function animateMercury() {
  animateOrbit(MERCURY);
  mercuryX = (CANVAS_SIZE / 2) + (mercuryRadiusOrbit * Math.cos(mercuryAngle * Math.PI / 180));
  mercuryY = (CANVAS_SIZE / 2) + (mercuryRadiusOrbit * Math.sin(mercuryAngle * Math.PI / 180));
  ctx.drawImage(mercury, (mercuryX - mercury.width/4), mercuryY - mercury.width/4, mercury.width*0.5, mercury.height*0.5);
  mercuryAngle += (1/mercuryYear)*SPEED;
  MERCURY["angle"] = mercuryAngle;
  if (mercuryAngle >= 360) {
    mercuryAngle = 0;
  }
}

function animateVenus() {
  animateOrbit(VENUS);
  venusX = (CANVAS_SIZE / 2) + (venusRadiusOrbit * Math.cos(venusAngle * Math.PI / 180));
  venusY = (CANVAS_SIZE / 2) + (venusRadiusOrbit * Math.sin(venusAngle * Math.PI / 180));
  ctx.drawImage(venus, (venusX - venus.width/2), venusY - venus.width/2, venus.width*1, venus.height*1);
  venusAngle += (1/venusYear)*SPEED;
  VENUS["angle"] = venusAngle;
  if (venusAngle >= 360) {
    venusAngle = 0;
  }
}

function animateEarth() {
  animateOrbit(EARTH);
  earthX = (CANVAS_SIZE / 2) + (earthRadiusOrbit * Math.cos(earthAngle * Math.PI / 180));
  earthY = (CANVAS_SIZE / 2) + (earthRadiusOrbit * Math.sin(earthAngle * Math.PI / 180));
  ctx.drawImage(earth, (earthX - earth.width/4), earthY - earth.width/4, earth.width*0.5, earth.height*0.5);
  earthAngle += (1/earthYear)*SPEED;
  EARTH["angle"] = earthAngle;
  if (earthAngle >= 360) {
    earthAngle = 0;
  }
}

function animateMars() {
  marsX = (CANVAS_SIZE / 2) + (marsRadiusOrbit * Math.cos(marsAngle * Math.PI / 180));
  marsY = (CANVAS_SIZE / 2) + (marsRadiusOrbit * Math.sin(marsAngle * Math.PI / 180));
  ctx.drawImage(mars, (marsX-mars.width/18), marsY-mars.width/18, mars.width*0.111, mars.height*0.111);
  marsAngle += (1/marsYear)*SPEED;
  MARS["angle"] = marsAngle;
  if (marsAngle >= 3600) {
    marsAngle = 0;
  }
  animateOrbit(MARS);
}

function animateJupiter() {
  animateOrbit(JUPITER);
  jupiterX = (CANVAS_SIZE / 2) + (jupiterRadiusOrbit * Math.cos(jupiterAngle * Math.PI / 180));
  jupiterY = (CANVAS_SIZE / 2) + (jupiterRadiusOrbit * Math.sin(jupiterAngle * Math.PI / 180));
  ctx.drawImage(jupiter, (jupiterX-jupiter.width/4), jupiterY-jupiter.width/4, jupiter.width*0.5, jupiter.height*0.5);
  jupiterAngle += (1/jupiterYear)*SPEED;
  JUPITER["angle"] = jupiterAngle;
  if (jupiterAngle >= 360) {
    jupiterAngle = 0;
  }
  //animateOrbit(jupiterOrbit);
}

function animateSaturn() {
  saturnX = (CANVAS_SIZE / 2) + (saturnRadiusOrbit * Math.cos(saturnAngle * Math.PI / 180));
  saturnY = (CANVAS_SIZE / 2) + (saturnRadiusOrbit * Math.sin(saturnAngle * Math.PI / 180));
  ctx.drawImage(saturn, (saturnX-saturn.width/5), saturnY-saturn.width/12.2, saturn.width*0.4, saturn.height*0.4);
  saturnAngle += (1/saturnYear)*SPEED;
  SATURN["angle"] = saturnAngle;
  if (saturnAngle >= 3600) {
    saturnAngle = 0;
  }
  animateOrbit(SATURN);
}

function animateUranus() {
  animateOrbit(URANUS);
  uranusX = (CANVAS_SIZE / 2) + (uranusRadiusOrbit * Math.cos(uranusAngle * Math.PI / 180));
  uranusY = (CANVAS_SIZE / 2) + (uranusRadiusOrbit * Math.sin(uranusAngle * Math.PI / 180));
  ctx.drawImage(uranus, (uranusX-uranus.width/6), uranusY-uranus.width/6, uranus.width*0.33, uranus.height*0.33);
  uranusAngle += (1/uranusYear)*SPEED;
  URANUS["angle"] = uranusAngle;
  if (uranusAngle >= 3600) {
    uranusAngle = 0;
  }
}

function animateNeptune() {
  animateOrbit(NEPTUNE);
  neptuneX = (CANVAS_SIZE / 2) + (neptuneRadiusOrbit * Math.cos(neptuneAngle * Math.PI / 180));
  neptuneY = (CANVAS_SIZE / 2) + (neptuneRadiusOrbit * Math.sin(neptuneAngle * Math.PI / 180));
  ctx.drawImage(neptune, (neptuneX-neptune.width/6), neptuneY-neptune.width/6, neptune.width*0.33, neptune.height*0.33);
  neptuneAngle += (1/neptuneYear)*SPEED;
  NEPTUNE["angle"] = neptuneAngle;
  if (neptuneAngle >= 3600) {
    neptuneAngle = 0;
  }
}

