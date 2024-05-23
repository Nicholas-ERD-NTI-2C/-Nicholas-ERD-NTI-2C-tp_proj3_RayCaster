// data
let data = {
  screen: { // variables for the screen
    width: 640,
    height: 480,
    halfWidth: null,
    halfHeight: null,
    scale: 4 // the higher the better the definition (1 is best)
  },
  projection: {
    width: null,
    height: null,
    halfWidth: null,
    halfHeight: null,
  },
  render: { // settings for rendering
    delay: 30, // delay time for render iteration in milliseconds
    wall_Height: null
  },
  rayCasting: { // settings for teh raycasting
    incrementAngle: null, // the value to increment each ray in realtion to screen width
    precision: 64, // the amount of each ray position to check the wall (higher the value more iterations) for each ray
    rays: [] // all hte heights of the screen
  },
  player: { // player variables
    fov: 60,
    halfFov: null,
    x: 2, // 2
    y: 2, // 2
    angle: 0,
    bob: 0,
    boobcheck: false,  // ( ͡° ͜ʖ ͡°)
    shooting: false,
    shootTimer: 0,
    radius: 4,
    health: 100,
    doorReach: 3,
    distance: null,
    speed: {
      movement: 0.1,
      rotation: 3.5
    },
    keyR: false,
    keyY: false,
    keyB: false,
    keyG: false
  },
  /*
  //this is wrong now just look in asset folder
    0 = empty
    1 = wall
    2 = door left
    3 = door right
    4 = toilet wall
    5 = huke
    6 = skybox
    7 = red door
    8 = yellow door
    9 = blue door
    10 = green door
    11 = whiteboard left
    12 = whiteboard middle
    13 = whiteboard right
    14 = 
  */
  map: [
  // 1  2  3  4  5  6  7  8  9  10 11 12 13 14 15 16 17 18 19 20
    [1, 1, 1, 1, 1, 1, 4, 4, 4, 4, 4, 4, 4, 1, 1, 1, 1, 1, 1, 1],  // 1
    [1, 0, 0, 0, 0, 0, 4, 0, 4, 0, 4, 0, 4, 0, 1, 0, 0, 0, 0, 1],  // 2
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1],  // 3
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1],  // 4
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],  // 5
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],  // 6
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  // 7
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 7, 7, 1],  // 8
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 14],  // 9
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 0, 0, 0, 15],  // 10
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 7, 7, 0, 0, 16],  // 11
    [1, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 17],  // 12
    [1, 0, 0, 0, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 0, 0, 18],  // 13
    [1, 0, 0, 0, 0, 4, 4, 0, 0, 0, 7, 0, 0, 0, 0, 0, 7, 7, 7, 1],  // 14
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  // 15
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  // 16
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],  // 17
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],  // 18
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],  // 19
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],  // 20
  ]

  ,

  // keyboard shit
  key: {
    up: {
      code: "KeyW",
      active: false
    },
    down: {
      code: "KeyS",
      active: false
    },
    left: {
      code: "KeyA",
      active: false
    },
    right: {
      code: "KeyD",
      active: false
    },
    e: {
      code: "KeyE",
      active: false
    },
    q: {
      code: "KeyQ",
      active: false
    },
    f: {
      code: "KeyF",
      active: false,
      onePress: false
    },
    space: {
      code: "Space",
      active: false,
      onePress: false
    }
  },

  spriteKeys: [],
  // define all sprites and their characteristics
  sprites: [
    { // teacher room 1                 0
      state: 0, // 0==alive 
      type: 1, // 1 == enemy 0 is object
      timer: 0,
      screenX: null,
      scale: null,
      health: 3,
      map: 4,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // teacher room 2                 1
      state: 0, // 0==alive 
      type: 1, // 1 == enemy 0 is object
      timer: 0,
      screenX: null,
      scale: null,
      health: 3,
      map: 4,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // teacher room 3                 2
      state: 0, // 0==alive 
      type: 1, // 1 == enemy 0 is object
      timer: 0,
      screenX: null,
      scale: null,
      health: 3,
      map: 4,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // Janitor                        3
      state: 0, // 0==alive 
      type: 1, // 1 == enemy 0 is object
      timer: 0,
      screenX: null,
      scale: null,
      health: 3,
      map: 4,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // cafeteria 1                    4
      state: 0, // 0==alive 
      type: 1, // 1 == enemy 0 is object
      timer: 0,
      screenX: null,
      scale: null,
      health: 3,
      map: 4,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // 5
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 6
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 7
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // yellow key                    8
      state: 0, // 0==alive 
      type: 2, // 1 == enemy 0 is object 2 is key
      key: 2,
      screenX: null,
      scale: null,
      map: 14,
      x: null,
      y: null,
      z: null,
      d: null
    },

    { // 9
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 10
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 11
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 12
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 13
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 14
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },

    { // 15
      state: 0,
      type: 0,
      map: 5,
      x: null,
      y: null,
      h: null,
      d: null
    },
  ]
}

// Calculated data
data.screen.halfWidth = data.screen.width / 2;
data.screen.halfHeight = data.screen.height / 2;
data.rayCasting.incrementAngle = data.player.fov / data.screen.width;
data.player.halfFov = data.player.fov / 2;

data.projection.width = data.screen.width / data.screen.scale;
data.projection.height = data.screen.height / data.screen.scale;
data.projection.halfWidth = data.projection.width / 2;
data.projection.halfHeight = data.projection.height / 2;
data.rayCasting.incrementAngle = data.player.fov / data.projection.width;
data.sprites.length;

// function for initiating the sprites
function defineSprite(z, map, x, y, h) {
  data.sprites[z].map = map; data.sprites[z].x = x; data.sprites[z].y = y; data.sprites[z].h = h;
}

// initiate all sprites
defineSprite(0, 4, 18.5, 1.5, 80); // moving enemy
defineSprite(1, 4, 18.5, 4.5, 80); // stationary enemy
defineSprite(2, 4, 18.5, 4, 80); // stationary enemy
defineSprite(3, 4, 18.5, 3.5, 80); // stationary enemy

defineSprite(4, 6, 2, 19, 80); // locker
defineSprite(5, 15, 3, 18.5, 80); // random sprite 
defineSprite(6, 16, 4, 18.5, 80); // random sprite
defineSprite(7, 17, 5, 18.5, 80); // random sprite

defineSprite(8, 12, 18, 6.5, 80);   // yellow key

defineSprite(9, 9, 5.2, 1.5, 70); // janitor table
defineSprite(10, 9, 5.6, 1.5, 70); // janitor table
defineSprite(11, 10, 5.35, 1.5, 70); // janitor gun

defineSprite(12, 7, 7.5, 1.5, 80);  // toilet 1
defineSprite(13, 7, 9.5, 1.5, 80);  // toilet 2
defineSprite(14, 7, 11.5, 1.5, 80);  // toilet 3
defineSprite(15, 8, 9.5, 1.51, 80);   // poop

// Canvas
const screen = document.createElement('canvas');
screen.width = data.screen.width;
screen.height = data.screen.height;
//screen.style.border = "1px solid black";
document.body.appendChild(screen);

// Canvas context
const screenContext = screen.getContext("2d");
screenContext.scale(data.screen.scale, data.screen.scale);
//screenContext.translate(0.5, 0.5); // jag vet inte varför jag skrev detta men
screenContext.imageSmoothingEnabled = false;

// graphics
const WALLS = [];

// load wall textures
// to reference the walls or sprites you just reference the array and the index is the name of the file so WALLS[6] is the 6.png img.
for (var filename = 0; filename <= 18; filename++) {
  var image = document.createElement('img');
  image.src = 'assets/walls/' + filename + '.png';
  WALLS.push(image);
}

const SPRITES = [];

// load sprite textures
for (var filename = 0; filename <= 18; filename++) {
  var image = document.createElement('img');
  image.src = 'assets/sprites/' + filename + '.png';
  SPRITES.push(image);
}

// AUDIO
var gunSound = new Audio('assets/sounds/gun.mp3');
gunSound.volume = 0.8;

// no music it sucks
//var music = new Audio('assets/sounds/music.mp3');
//music.volume = 0.2;

var hurtSound = new Audio('assets/sounds/hurtSound.mp3');
hurtSound.volume = 0.5;

var keySound = new Audio('assets/sounds/keyPick.mp3');
hurtSound.volume = 0.5;

function degreeToRadians(degree) { // self explanatory
  let pi = Math.PI;
  return degree * pi / 180;
}

function lerp(a, b, t) { // lerp function lerp position a towards position b with t as time
  return a + (b - a) * t;
}

function moveSprite(x, s) { // function for the enemies to lerp towards the player
  if (data.sprites[x].map != 5) {
    if (data.sprites[x].timer == 0) {
      data.sprites[x].x = lerp(data.sprites[x].x, data.player.x, s);
      data.sprites[x].y = lerp(data.sprites[x].y, data.player.y, s);
      data.sprites[x].map = 4;
    } else if (data.sprites[x].timer < 0) {
      data.sprites[x].timer == 0;
    } else {
      data.sprites[x].timer -= 1;
      if (data.sprites[x].map != 2) {
        data.sprites[x].map = 3;
      }
    }

    if (data.sprites[x].d <= 0.7 && data.sprites[x].timer == 0) {
      data.sprites[x].map = 2;
      data.sprites[x].timer = 50;
      hurtSound.load();
      hurtSound.play();
      data.player.health -= 10;
    }
  }
}

function keyPickup() { // function for picking upp the keys 
  let keys = data.spriteKeys.reverse();

  for (x = 0; x < data.spriteKeys.length; x++) {
    if (data.sprites[keys[parseInt(x)]].state != 1 && data.sprites[keys[parseInt(x)]].type == 2 && data.sprites[keys[parseInt(x)]].d <= 0.5) {

      let screenX = data.sprites[keys[parseInt(x)]].screenX;
      let scale = data.sprites[keys[parseInt(x)]].scale;

      if (data.sprites[keys[parseInt(x)]].key == 1) {
        data.player.keyR = true;
      } else if (data.sprites[keys[parseInt(x)]].key == 2) {
        data.player.keyY = true;
      } else if (data.sprites[keys[parseInt(x)]].key == 3) {
        data.player.keyB = true;
      } else if (data.sprites[keys[parseInt(x)]].key == 4) {
        data.player.keyG = true;
      }

      keySound.load();
      keySound.play();
      data.sprites[keys[parseInt(x)]].state = 1;

    }
  }
}

function drawLine(x1, y1, x2, y2, cssColor) { // draw line on screen function
  screenContext.strokeStyle = cssColor;
  screenContext.beginPath();
  screenContext.moveTo(x1, y1);
  screenContext.lineTo(x2, y2);
  screenContext.stroke();
}

/**
 * Raycasting logic
 */
function rayCasting() {

  let bgX1 = data.player.angle * data.player.speed.rotation;

  // the skybox
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale) 
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 + 315, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 + 630, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 + 945, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 + 1260, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  // NEGATIVA
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 - 315, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 - 630, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)  
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 - 945, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)
  screenContext.drawImage(WALLS[6],
    0, 0,   // Start at 10 pixels from the left and the top of the image (crop),
    315, 60,   // "Get" a `80 * 30` (w * h) area from the source image (crop),
    -bgX1 - 1260, 0,     // Place the result at 0, 0 in the canvas,
    315, 60); // With as width / height: 160 * 60 (scale)

  // raycasting logic
  let rayAngle = data.player.angle - data.player.halfFov;
  for (let rayCount = 0; rayCount < data.projection.width; rayCount++) {

    // Ray data
    let ray = {
      x: data.player.x,
      y: data.player.y
    }

    // Ray path incrementers
    let rayCos = Math.cos(degreeToRadians(rayAngle)) / data.rayCasting.precision;
    let raySin = Math.sin(degreeToRadians(rayAngle)) / data.rayCasting.precision;

    // Wall finder
    let wall = 0;
    while (wall == 0) {
      ray.x += rayCos;
      ray.y += raySin;
      wall = data.map[Math.floor(ray.y)][Math.floor(ray.x)];
    }

    // Pythagoras theorem
    let distance = Math.sqrt(Math.pow(data.player.x - ray.x, 2) + Math.pow(data.player.y - ray.y, 2));

    distance = distance * Math.cos(degreeToRadians(rayAngle - data.player.angle));


    // Wall height
    let wallHeight = Math.floor(data.projection.halfHeight / distance);
    data.render.wall_Height = wallHeight;

    data.rayCasting.rays[rayCount] = distance;

    // Calculate texture poosition
    let texturePositionX = Math.floor((32 * (ray.x + ray.y)) % 32);
    let heightOff = 1; // make sure there is no gap between wall and floor

    drawWall(rayCount, wallHeight, texturePositionX, wall); // draw the wall in the right height and shit

    drawLine(rayCount, data.projection.halfHeight + wallHeight + data.player.bob - heightOff, rayCount, data.projection.height, "rgb(95, 87, 79)"); // draw a floor line from the end of the wall to the bottom of the screen 

    //drawLine(rayCount, data.projection.halfHeight - wallHeight - data.player.bob + heightOff, rayCount, 0, "rgb(211, 211, 211)"); // roof lines

    // Increment
    rayAngle += data.rayCasting.incrementAngle;
  }
}

function drawTexture(x, wallHeight, texturePositionX, texture) { // draw texture function
  let yIncrementer = (wallHeight * 2) / texture.height;
  let y = data.projection.halfHeight - wallHeight;

  for (let i = 0; i < texture.height; i++) {
    screenContext.strokeStyle = texture.colors[texture.bitmap[i][texturePositionX]];
    screenContext.beginPath();
    screenContext.moveTo(x, y - texture.heightOff);
    screenContext.lineTo(x, y + (yIncrementer + 0.5));
    screenContext.stroke();
    y += yIncrementer;
  }
}

function drawWall(x, wallHeight, texturePositionX, texture) { // drawwall function (i wrote this with no internet so its pretty cool)
  let mapOffsetX = data.projection.width / 2 - data.projection.halfWidth;
  let yIncrementer = (wallHeight * 2) / texture.height;
  let y = data.projection.halfHeight - wallHeight;

  screenContext.drawImage(WALLS[texture],
    texturePositionX,
    0,
    1,
    32,
    mapOffsetX + x,
    y + data.player.bob,
    1,
    wallHeight * 2);
}

/**
 * Clear screen
 */
function clearScreen() {
  screenContext.clearRect(0, -1, data.projection.width, data.projection.height);
}

/**
 * Key down check
 */
document.addEventListener('keydown', (event) => {
  let keyCode = event.code;

  //music.play();

  if (keyCode === data.key.up.code) {
    data.key.up.active = true;
  }
  if (keyCode === data.key.down.code) {
    data.key.down.active = true;
  }
  if (keyCode === data.key.left.code) {
    data.key.left.active = true;
  }
  if (keyCode === data.key.right.code) {
    data.key.right.active = true;
  }
  if (keyCode === data.key.e.code) {
    data.key.e.active = true;
  }
  if (keyCode === data.key.q.code) {
    data.key.q.active = true;
  }
  if (keyCode === data.key.f.code) {
    data.key.f.active = true;
  }
  if (keyCode === data.key.space.code) {
    data.key.space.active = true;
  }
});

/**
 * Key up check
 */
document.addEventListener('keyup', (event) => {
  let keyCode = event.code;

  if (keyCode === data.key.up.code) {
    data.key.up.active = false;
  }
  if (keyCode === data.key.down.code) {
    data.key.down.active = false;
  }
  if (keyCode === data.key.left.code) {
    data.key.left.active = false;
  }
  if (keyCode === data.key.right.code) {
    data.key.right.active = false;
  }
  if (keyCode === data.key.e.code) {
    data.key.e.active = false;
  }
  if (keyCode === data.key.q.code) {
    data.key.q.active = false;
  }
  if (keyCode === data.key.f.code) {
    data.key.f.active = false;
    data.key.f.onePress = false;
  }
  if (keyCode === data.key.space.code) {
    data.key.space.active = false;
    data.key.space.onePress = false;
  }
});

/**
 * Movement
 */
function movePlayer() {
  if (data.key.up.active) {
    let playerCos = Math.cos(degreeToRadians(data.player.angle)) * data.player.speed.movement;
    let playerSin = Math.sin(degreeToRadians(data.player.angle)) * data.player.speed.movement;
    let newX = data.player.x + playerCos;
    let newY = data.player.y + playerSin;
    let checkX = Math.floor(newX + playerCos * data.player.radius);
    let checkY = Math.floor(newY + playerSin * data.player.radius);

    // Collision detection
    if (data.map[checkY][Math.floor(data.player.x)] == 0) {
      data.player.y = newY;
    }
    if (data.map[Math.floor(data.player.y)][checkX] == 0) {
      data.player.x = newX;
    }

    // unused view bobbing code, works but makes me sick
    /*
    // view boobing ( ͡° ͜ʖ ͡°)
    if (!data.player.boobcheck) {
      data.player.bob+=1;
      if (data.player.bob > 0) {
        data.player.boobcheck=true;
      }
    } else {
      data.player.bob-=1;
      if (data.player.bob < -4) {
        data.player.boobcheck=false;
      }
    }
    console.log(data.player.bob);
  } else {
    if(data.player.bob<0) {
      data.player.bob+=2;
      if (data.player.bob>0) {
        data.player.bob=0;
      }
    }*/
  }

  if (data.key.down.active) {
    let playerCos = Math.cos(degreeToRadians(data.player.angle)) * data.player.speed.movement;
    let playerSin = Math.sin(degreeToRadians(data.player.angle)) * data.player.speed.movement;
    let newX = data.player.x - playerCos;
    let newY = data.player.y - playerSin;
    let checkX = Math.floor(newX - playerCos * data.player.radius);
    let checkY = Math.floor(newY - playerSin * data.player.radius);

    // Collision detection
    if (data.map[checkY][Math.floor(data.player.x)] == 0) {
      data.player.y = newY;
    }
    if (data.map[Math.floor(data.player.y)][checkX] == 0) {
      data.player.x = newX;
    }
  }

  // strafe right
  if (data.key.e.active) {
    let playerCos = Math.cos(degreeToRadians(data.player.angle - 90)) * (data.player.speed.movement / 3) * 2;
    let playerSin = Math.sin(degreeToRadians(data.player.angle - 90)) * (data.player.speed.movement / 3) * 2;
    let newX = data.player.x - playerCos;
    let newY = data.player.y - playerSin;
    let checkX = Math.floor(newX - playerCos * data.player.radius);
    let checkY = Math.floor(newY - playerSin * data.player.radius);

    // Collision detection
    if (data.map[checkY][Math.floor(data.player.x)] == 0) {
      data.player.y = newY;
    }
    if (data.map[Math.floor(data.player.y)][checkX] == 0) {
      data.player.x = newX;
    }
  }

  // strafe left
  if (data.key.q.active) {
    let playerCos = Math.cos(degreeToRadians(data.player.angle + 90)) * (data.player.speed.movement / 3) * 2;
    let playerSin = Math.sin(degreeToRadians(data.player.angle + 90)) * (data.player.speed.movement / 3) * 2;
    let newX = data.player.x - playerCos;
    let newY = data.player.y - playerSin;
    let checkX = Math.floor(newX - playerCos * data.player.radius);
    let checkY = Math.floor(newY - playerSin * data.player.radius);

    // Collision detection
    if (data.map[checkY][Math.floor(data.player.x)] == 0) {
      data.player.y = newY;
    }
    if (data.map[Math.floor(data.player.y)][checkX] == 0) {
      data.player.x = newX;
    }
  }

  // rotate player
  if (data.key.left.active) {
    data.player.angle -= data.player.speed.rotation;
    data.player.angle %= 360;
  }
  if (data.key.right.active) {
    data.player.angle += data.player.speed.rotation;
    data.player.angle %= 360;
  }

  // shooting and opening doors
  if (data.key.f.active) {
    // open doors
    let playerCos = Math.cos(degreeToRadians(data.player.angle)) * data.player.speed.movement;
    let playerSin = Math.sin(degreeToRadians(data.player.angle)) * data.player.speed.movement;

    let tileX = Math.floor(data.player.y + playerSin + playerSin * (data.player.radius * data.player.doorReach));

    let tileY = Math.floor(data.player.x + playerCos + playerCos * (data.player.radius * data.player.doorReach));

    if (data.map[tileX][tileY] == 2 || data.map[tileX][tileY] == 3) {
      data.map[tileX][tileY] = 0;

      if (data.map[tileX + 1][tileY] == 2 || data.map[tileX + 1][tileY] == 3) {
        data.map[tileX + 1][tileY] = 0;
      } else if (data.map[tileX - 1][tileY] == 2 || data.map[tileX - 1][tileY] == 3) {
        data.map[tileX - 1][tileY] = 0;
      }

      if (data.map[tileX][tileY + 1] == 2 || data.map[tileX][tileY + 1] == 3) {
        data.map[tileX][tileY + 1] = 0;
      } else if (data.map[tileX][tileY - 1] == 2 || data.map[tileX][tileY - 1] == 3) {
        data.map[tileX][tileY - 1] = 0;
      }
    } else if (data.map[tileX][tileY] == 7 && data.player.keyR || data.map[tileX][tileY] == 5 && data.player.keyY || data.map[tileX][tileY] == 9 && data.player.keyB || data.map[tileX][tileY] == 10 && data.player.keyG) {
      data.map[tileX][tileY] = 2;
    }
  }

  if (data.key.space.active && data.key.space.onePress == false && data.player.shootTimer == 0) {
    //shooting code
    //let keys = data.spriteKeys.reverse();
    let keys = data.spriteKeys;

    for (x = 0; x < data.spriteKeys.length; x++) {
      if ((data.sprites[keys[parseInt(x)]].type == 1 || data.sprites[keys[parseInt(x)]].type == 3) && data.sprites[keys[parseInt(x)]].map != 5) {

        let screenX = data.sprites[keys[parseInt(x)]].screenX;
        let scale = data.sprites[keys[parseInt(x)]].scale;

        if (screenX > 80 - (scale / 2) && screenX < 80 + (scale / 2) && data.sprites[keys[parseInt(x)]].map != 2) {

          data.sprites[keys[parseInt(x)]].health -= 1;
          if (data.sprites[keys[parseInt(x)]].health <= 0) {
            //data.sprites[data.spriteKeys[parseInt(x)]].state=1;
            data.sprites[keys[parseInt(x)]].map = 5;
          }
          data.sprites[keys[parseInt(x)]].timer = 20;
          break;
        }
      }
    }

    //////////////// gunsound.reload(); look ins9ide the documentations for what bit was called // dont do this cause it fixed now
    gunSound.load();
    gunSound.play();
    data.player.shooting = true;
    data.player.shootTimer = 10;
    data.key.space.onePress = true;
  } else {
    if (data.player.shootTimer > 0) {
      data.player.shootTimer -= 1;
    }
    data.player.shooting = false;
  }
}

// sprites

spriteOrder = {};
function sortSprite() {
  for (x = 0; x < (data.sprites.length); x++) {
    spriteOrder["" + x] = data.sprites[x].d;
  }

  // Step - 1
  // Create the array of key-value pairs
  var items = Object.keys(spriteOrder).map(
    (key) => { return [key, spriteOrder[key]] });

  // Step - 2
  // Sort the array based on the second element (i.e. the value)
  items.sort(
    (first, second) => { return first[1] - second[1] }
  );

  // Step - 3
  // Obtain the list of keys in sorted order of the values.
  var spriteKeys = items.map(
    (e) => { return e[0] });

  data.spriteKeys = spriteKeys;
  spriteKeys.reverse();

  for (x = 0; x < spriteKeys.length; x++) {
    if (data.sprites[spriteKeys[parseInt(x)]].state == 0)
      drawSprite(spriteKeys[parseInt(x)]);
  }

  if (data.player.shootTimer != 0) {
    screenContext.drawImage(SPRITES[1],
      0, 0,   // Start at 
      32, 32,   // "Get" a (w * h) area from the image
      64, 75 + data.player.bob,     // Place the result at x,y
      32, 32); // w,h (scale)
  }

  screenContext.drawImage(SPRITES[0],
    0, 0,   // Start at 
    34, 36,   // "Get" a (w * h) area from the image
    61, 88 - data.player.bob,     // Place the result at x,y
    32, 32); // w,h (scale)

  screenContext.font = "15px Arial";
  screenContext.fillText(data.player.health + "%", 0, 118);

}

function drawSprite(x) {

  let hx = data.sprites[x].x - data.player.x;
  let hy = data.sprites[x].y - data.player.y;
  let playerAngle = data.player.angle;
  let h = data.sprites[x].h;

  if (playerAngle < 0) {
    playerAngle += 360;
  }

  let p = Math.atan2(hy, hx);  // Find angle between player and sprite
  p *= 180 / Math.PI;  // Convert to degrees
  if (p < 0) p += 360;  // Make sure its in proper range

  // Wrap things around if needed
  let q = playerAngle + 30 - p;  // Theta + 30 = angle of ray that generates leftmost collum of the screen
  if (p > 270 && playerAngle < 90) {
    q = playerAngle + 30 - p + 360;
  }

  // works 
  if (playerAngle > 270 && p < 90) {
    q = playerAngle + 30 - p - 360;
  }

  // Compute the screen x coordinate
  let screenX = q * 160 / 60.0;
  let d = (hx ** 2 + hy ** 2) ** 0.5; // distance between player and sprite
  data.sprites[x].d = d;

  let scale = h / d;
  let offset = (120 - h) / d;
  screenContext.fillStyle = "#FF0000";
  screenX = (160 - screenX) - scale / 2;
  let screenY = (60 - scale / 2) + offset / 2;

  let ray_count = Math.round(screenX + (scale / 2))

  if (screenX + scale > 0 && screenX - scale < 160) {
    if (data.rayCasting.rays[ray_count] > d - 0.5) {
      screenContext.drawImage(SPRITES[data.sprites[x].map],
        0, 0,   // Start at 
        32, 32,   // "Get" a (w * h) area from the image
        screenX, screenY + data.player.bob,     // Place the result at x,y
        scale, scale); // w,h (scale)
    }
  }

  if (data.sprites[x].type == 1) {
    data.sprites[x].screenX = screenX + (scale / 2);
    data.sprites[x].scale = scale;
  }
}

/**
 * Window focus lost event
 */
window.addEventListener('blur', function (event) {
  if (mainLoop != null) {
    clearInterval(mainLoop);
    mainLoop = null;
    renderFocusLost();
  }
});

/**
 * Window focus
 */
screen.onclick = function () {
  //music.play();
  if (!mainLoop) {
    main();
  }
}

/**
 * Render focus lost
 */
function renderFocusLost() {
  //music.pause();
  screenContext.fillStyle = 'rgba(0,0,0,0.5)';
  screenContext.fillRect(0, 0, data.projection.width, data.projection.height);
  screenContext.fillStyle = 'white';
  screenContext.font = '10px Lucida Console';
  screenContext.fillText('CLICK TO FOCUS', 37, data.projection.halfHeight);
}

// Main loop
let mainLoop = null;

/**
 * Main loop
 */
function main() {
  mainLoop = setInterval(function () {
    clearScreen();
    movePlayer();
    rayCasting();
    sortSprite();

    if (data.map[2][14] != 2) {
      moveSprite(0, 0.02);
      moveSprite(1, 0.00);
      moveSprite(2, 0.00);
      moveSprite(3, 0.00);
    }

    keyPickup();
  }, data.render.delay);
}

// Start
main();