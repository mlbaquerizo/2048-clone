$(document).ready(function() {
	var game = new Game;
	startNewGame(game);
	setUpReset(game);
	
	$(this).keydown(function(event){
		if(event.keyCode == 37 || event.keyCode == 38 || event.keyCode == 39 || event.keyCode == 40){
			game.bindAll();
			renderBoard(game);
			colorizeTiles();
			console.log(game.canMove());
			if(game.canMove() === false){
				$('#game_over_div').delay(400).fadeIn(300);
			}
		}
	});

});

function setUpReset(game) {
	$('#reset_game').on('submit', function(event){
		event.preventDefault();
		startNewGame(game);
		$('#game_over_div').hide();
	});
}

function startNewGame(game) {
	game.start();
	game.toString();
	game.bindAll();
	renderBoard(game);
	colorizeTiles();
}

function renderBoard(game) {
	var tileCount = 0
	_.each(game.tiles, function(row, i){
		_.each(row, function(tile){
			tileCount += 1
			if(i === 0){
				$('#row1 #tile'+ tileCount).html(tile.value);
			} else if(i === 1){
				$('#row2 #tile'+ tileCount).html(tile.value);
			} else if(i === 2){
				$('#row3 #tile'+ tileCount).html(tile.value);
			} else{
				$('#row4 #tile'+ tileCount).html(tile.value)
			}
		})
	})
}

function colorizeTiles() {
	var $zeroTiles = $('.tile:contains(0)');
	// $zeroTiles.html("");
	$zeroTiles.css('background-color', '#c6cecb');
	$zeroTiles.css('color', '#c6cecb');
	var $twoTiles = $('.tile:contains(2)');
	$twoTiles.css('background-color', '#bfdad0');
	$twoTiles.css('color', '#405b50');
	var $fourTiles = $('.tile:contains(4)');
	$fourTiles.css('background-color', '#a6cbbd');
	$fourTiles.css('color', '#405b50');
	var $eightTiles = $('.tile:contains(8)');
	$eightTiles.css('background-color', '#49b88d');
	$eightTiles.css('color', 'white');
	var $sixteenTiles = $('.tile:contains(16)');
	$sixteenTiles.css('background-color', '#41a57e');
	$sixteenTiles.css('color', 'white');
	var $threeTwoTiles = $('.tile:contains(32)');
	$threeTwoTiles.css('background-color', '#338062');
	$threeTwoTiles.css('color', 'white');
	var $sixFourTiles = $('.tile:contains(64)');
	$sixFourTiles.css('background-color', '#245c46');
	$sixFourTiles.css('color', 'white');
	var $oneTwoEightTiles = $('.tile:contains(128)');
	$oneTwoEightTiles.css('background-color', '#bf5b81');
	$oneTwoEightTiles.css('color', 'white');
	var $twoFiveSixTiles = $('.tile:contains(256)');
	$twoFiveSixTiles.css('background-color', '#a54167');
	$twoFiveSixTiles.css('color', 'white');
	var $fiveTwelveTiles = $('.tile:contains(512)');
	$fiveTwelveTiles.css('background-color', '#933a5c');
	$fiveTwelveTiles.css('color', 'white');
	var $tenTwentyFourTiles = $('.tile:contains(1024)');
	$tenTwentyFourTiles.css('background-color', '#843452');
	$tenTwentyFourTiles.css('color', 'white');
	var $twentyFourEightTiles = $('.tile:contains(2048)');
	$twentyFourEightTiles.css('background-color', '#3a5c93');
	$twentyFourEightTiles.css('color', 'white');
}