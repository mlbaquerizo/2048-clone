$(document).ready(function() {
	var game = new Game
	startNewGame(game);
	setUpReset(game);
	setUpCurrentScore(game);
	
	$(this).keydown(function(e){
		if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
			game.bindAll();
			renderBoard(game);
			colorizeTiles();
			setUpCurrentScore(game);
			if(game.canMove() === false){
				$('#game_over_div').delay(350).fadeIn(300);
			}
		}
	});

});
