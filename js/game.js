function Tile(args) {
	args = args ? args : {};
	this.value = args.value || 0
}

Tile.prototype.randomizeTile = function(){
	var random = _.sample([2, 4])
	this.value = random
}

function Game(tiles) {
	this.tiles = [
	[new Tile, new Tile, new Tile, new Tile],
	[new Tile, new Tile, new Tile, new Tile],
	[new Tile, new Tile, new Tile, new Tile],
	[new Tile, new Tile, new Tile, new Tile]
	]
}

Game.prototype.start = function(){
	var Indices = [0,1,2,3];

	var rowIndex1 = _.sample(Indices);
	var rowIndex2 = _.sample(Indices);
	var tileIndex1 = _.sample(Indices);
	var	tileIndex2 = _.sample(Indices);
	while(tileIndex2 === tileIndex1){
		tileIndex2 = _.sample(Indices);
	}

	this.tiles[rowIndex1][tileIndex1].randomizeTile();
	this.tiles[rowIndex2][tileIndex2].randomizeTile();
}

Game.prototype.toString = function(){
	_.each(this.tiles, function(row){
		console.log(row[0].value + '|' + row[1].value + '|' + row[2].value + '|' + row[3].value);
	})
	console.log('---------------')
}

Game.prototype.zipRight = function(){
	_.each(this.tiles, function(row){
		_.each(row, function(tile, i){
			if(tile.value === 0){
				row.splice(i, 1);
				while(row.length < 4){
					row.unshift(new Tile);
				}
			}
		})
	})
}

Game.prototype.addRight = function(){
	var game = this
	_.each(this.tiles, function(row){
		for(var i = row.length - 1; i >= 0; i --){
			if(i > 0 && row[i].value != 0 && row[i].value === row[i - 1].value){
				var combined = row[i].value + row[i - 1].value;
				row[i].value = combined;
				row[i - 1].value = 0;
				game.zipRight();
			}
		}
	})
}

Game.prototype.canZipRight = function(){
	var tileJson = JSON.stringify(this.tiles)
	var clone = JSON.parse(JSON.stringify(this.tiles));
	_.each(clone, function(row){
		_.each(row, function(tile, i){
			if(tile.value === 0){
				row.splice(i, 1);
				while(row.length < 4){
					row.unshift(new Tile);
				}
			}
		})
	})
	_.each(clone, function(row){
		for(var i = row.length - 1; i >= 0; i --){
			if(i > 0 && row[i].value != 0 && row[i].value === row[i - 1].value){
				var combined = row[i].value + row[i - 1].value;
				row[i].value = combined;
				row[i - 1].value = 0;
				_.each(clone, function(row){
					_.each(row, function(tile, i){
						if(tile.value === 0){
							row.splice(i, 1);
							while(row.length < 4){
							row.unshift(new Tile);
						}
					}
				})
			})
			}
		}
	})
	return !(tileJson == JSON.stringify(clone));
}

Game.prototype.insertRandom = function(){
	var Indices = [0,1,2,3];

	var rowIndex = _.sample(Indices);
	var tileIndex = _.sample(Indices);

	while(this.tiles[rowIndex][tileIndex].value != 0){
		rowIndex = _.sample(Indices);
		tileIndex = _.sample(Indices);
	}
		this.tiles[rowIndex][tileIndex].randomizeTile();
}

Game.prototype.moveRight = function(){
	if(this.canZipRight() === true){
			this.zipRight();
			this.addRight();
			this.insertRandom();
		};
}

Game.prototype.move = function(direction){
	if(direction === 'right'){
		this.moveRight();
		this.toString();
	}
	if(direction === 'left'){
		_.each(this.tiles, function(row){
			row.reverse();
		});
		this.moveRight();
		_.each(this.tiles, function(row){
			row.reverse();
		})
		this.toString();
	}
	if(direction === 'up'){
		this.tiles = _.zip.apply(_, this.tiles)
		_.each(this.tiles, function(row){
			row.reverse();
		});
		this.moveRight();
		_.each(this.tiles, function(row){
			row.reverse();
		});
		this.tiles = _.zip.apply(_, this.tiles)
		this.toString();
	}
	if(direction === 'down'){
		this.tiles = _.zip.apply(_, this.tiles)
		this.moveRight();
		this.tiles = _.zip.apply(_, this.tiles)
		this.toString();
	}
}

Game.prototype.bindDir = function(dir){
	Mousetrap.bind(dir, function(){
		this.move(dir)
	}.bind(this))
}

Game.prototype.bindAll = function(){
	this.bindDir('right');
	this.bindDir('left');
	this.bindDir('up');
	this.bindDir('down');
}