var score = 0;
document.getElementById('score').innerHTML = score;

// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x; // should we initialize it to 1 or what ?
    this.y = y;
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // implement collision.
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.x += dt * this.speed;
    if (this.x >= 500) {
        this.x = -100;
    }
    if (player.x < this.x + 70 &&
        player.x > this.x - 70 &&
        player.y < this.y + 75 &&
        player.y > this.y - 75) { //if the player collide with an enemy
        player.x = player.ini_x;
        player.y = player.ini_y;
        this.score -= 1;
        if (score <= 0) {
            score = 0;
        } else {
            score = score - 1;
        }

        //document.getElementById('playerScore').innerHTML = score;

    }
    //x=100
    //y=150


};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function() {
    this.sprite = 'images/char-boy.png';
    this.speed = 50;
    this.ini_x = 200; // init:200
    //this.ini_x=400;
    this.ini_y = 390; //init:390//235 - 155 = ? 80
    this.x = this.ini_x; // should we initialize it to 1 or what ?
    this.y = this.ini_y;
    //this.score=0;
    if (score <= 0) {
        score = 0;
    } else {
        score = score - 1;
    }
    document.getElementById('score').innerHTML = score;
    //document.getElementById('score').innerHTML = 'gggg';
};

Player.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //this.x = dt * this.x;
    if (this.x >= 410) {
        this.x = 410;
    }
    if (this.x <= 0) {
        this.x = 0;
    }
    if (this.y >= 390) {
        this.y = 390;
    }
    if (this.y < 70) { //if the player wins
        this.y = this.ini_y;
        this.x = this.ini_x;
        //this.score+=1;
        score = score + 1;

    }


    document.getElementById('score').innerHTML = score; //sets the score to the screen

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function(key) {
    //Handle the following : 1-off screen   2-when reaching the water
    if (key == 'up') {
        this.y -= 80;
    } else if (key == 'down') {
        this.y += 80;
    } else if (key == 'left') {
        this.x -= 105;
    } else if (key == 'right') {
        this.x += 105;
    }

};

Player.prototype.reset = function() {
    this.x = this.ini_y;
    this.y = this.ini_x;
    this.render();

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


var player = new Player();
var enemy1 = new Enemy(-300, 60, 257);
var enemy2 = new Enemy(-200, 145, 303);
var enemy3 = new Enemy(-3, 230, 429); // 230

// var enemy1 = new Enemy(60,0);
// var enemy2 = new Enemy(145,0);
// var enemy3 = new Enemy(230,0); // 230

var allEnemies = [enemy1, enemy2, enemy3];