$(document).ready(function() {
	var game = new Game;
	game.start();
	game.toString();
	game.bindAll();
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

	$(this).keyup(function(e){
		if(e.keyCode == 37 || e.keyCode == 38 || e.keyCode == 39 || e.keyCode == 40){
		game.bindAll();
		var tileCount = 0
		// debugger;
			_.each(game.tiles, function(row, i){
				_.each(row, function(tile){
					tileCount += 1
					if(i === 0){
						$('#row1 #tile'+ tileCount).html(tile.value);
					} else if(i === 1){
						$('#row2 #tile'+ tileCount).html(tile.value);
					} else if(i === 2){
						$('#row3 #tile'+ tileCount).html(tile.value);
					} else {
						$('#row4 #tile'+ tileCount).html(tile.value)
					}
				})
			});
		}
	})

});
