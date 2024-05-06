window.onload = function() {   
    var game = new Phaser.Game(window.innerWidth * 1, window.innerHeight * 1, Phaser.CANVAS);

    var bird;
    var birdGravity = 800;
    var birdSpeed = 125;
    var birdFlapPower = 300;
    var pipeInterval = 2000;
    var pipeHole = 200;
    var pipeGroup;
    var score = 0;
    var scoreText;
    var topScore;
    var backgroundMusic;

    var play = function(game) {}

    play.prototype = {
        preload: function() {
            game.load.image("bird", "game/bird.png"); 
            game.load.image("pipe", "game/pipe.png");    
            game.load.audio("background", "game/jona.mp3"); // Load the music file
       
        },
        create: function() {
            pipeGroup = game.add.group();
            score = 0;
            topScore = localStorage.getItem("topFlappyScore") == null ? 0 : localStorage.getItem("topFlappyScore");
            scoreText = game.add.text(10, 10, "-", { font: "bold 16px Arial" });
            updateScore();
            game.stage.backgroundColor = "#87CEEB";
            game.stage.disableVisibilityChange = true;
            game.physics.startSystem(Phaser.Physics.ARCADE);
            bird = game.add.sprite(80, 240, "bird");
            bird.anchor.set(0.5);
            game.physics.arcade.enable(bird);
            bird.body.gravity.y = birdGravity;
            game.input.onDown.add(flap, this);
            addPipe();

            // Start background music if not already playing
            if (!backgroundMusic || !backgroundMusic.isPlaying) {
                backgroundMusic = game.add.audio("background");
                backgroundMusic.loop = true; // Set the music to loop
                backgroundMusic.play(); // Start playing the music
            }
        },
        update: function() {
            game.physics.arcade.collide(bird, pipeGroup, die);
            if (bird.y > game.height) {
                die();
            }   
        }
    }

    game.state.add("Play", play);
    game.state.start("Play");

    function updateScore() {
        scoreText.text = "Score: " + score + "\nBest: " + topScore;    
    }

    function flap() {
        bird.body.velocity.y = -birdFlapPower;    
    }

    function addPipe() {
        var pipeHolePosition = game.rnd.between(50, 430 - pipeHole);
        var upperPipe = new Pipe(game, 320, pipeHolePosition - 480, -birdSpeed);
        game.add.existing(upperPipe);
        pipeGroup.add(upperPipe);
        var lowerPipe = new Pipe(game, 320, pipeHolePosition + pipeHole, -birdSpeed);
        game.add.existing(lowerPipe);
        pipeGroup.add(lowerPipe);

        // Increase difficulty gradually
        pipeInterval = Math.max(pipeInterval - 100, 1000); // Decrease pipe interval by 100ms, with a minimum of 1000ms
        birdGravity += 50; // Increase bird gravity by 50
        birdSpeed += 10; // Increase bird speed by 10
        birdFlapPower += 10; // Increase bird flap power by 10

        game.time.events.add(pipeInterval, addPipe, this); // Schedule the next pipe to be added
    }

    function die() {
        topScore = Math.max(score, topScore);
        localStorage.setItem("topFlappyScore", topScore);    
        game.state.start("GameOver");    
    }

    Pipe = function(game, x, y, speed) {
        Phaser.Sprite.call(this, game, x, y, "pipe");
        game.physics.enable(this, Phaser.Physics.ARCADE);
        this.body.velocity.x = speed;
        this.giveScore = true;    
    };

    Pipe.prototype = Object.create(Phaser.Sprite.prototype);
    Pipe.prototype.constructor = Pipe;

    Pipe.prototype.update = function() {
        if (this.x + this.width < bird.x && this.giveScore) {
            score += 0.5;
            updateScore();
            this.giveScore = false;
        }
        if (this.x < -this.width) {
            this.destroy();
        }
    };

    var gameOver = function(game) {}

    gameOver.prototype = {
        preload: function() {
            game.stage.backgroundColor = "#87CEEB";
            var gameOverLabel = game.add.text(game.world.centerX, game.world.centerY - 100, "Game Over", { font: "bold 32px Arial", fill: "#fff" });
            gameOverLabel.anchor.setTo(0.5, 0.5);
            var scoreLabel = game.add.text(game.world.centerX, game.world.centerY - 50, "Score: " + score, { font: "bold 24px Arial", fill: "#fff" });
            scoreLabel.anchor.setTo(0.5, 0.5);
            var topScoreLabel = game.add.text(game.world.centerX, game.world.centerY, "Best Score: " + topScore, { font: "bold 24px Arial", fill: "#fff" });
            topScoreLabel.anchor.setTo(0.5, 0.5);
            var startLabel = game.add.text(game.world.centerX, game.world.centerY + 100, "Tap to restart", { font: "bold 24px Arial", fill: "#fff" });
            startLabel.anchor.setTo(0.5, 0.5);
            game.input.onDown.addOnce(restartGame, this);
        }
    }

    game.state.add("GameOver", gameOver);

    function restartGame() {
        game.state.start("Play");
    }
    var style = document.createElement('style');
    style.innerHTML = `
        canvas {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
        }
    `;
    document.head.appendChild(style);
}
