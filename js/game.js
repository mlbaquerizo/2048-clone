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
	var rowIndices = [0,1,2,3];
	var tileIndices = [0,1,2,3];

	var rowIndex1 = _.sample(rowIndices);
	var rowIndex2 = _.sample(rowIndices);
	var tileIndex1 = _.sample(tileIndices);
	var	tileIndex2 = _.sample(tileIndices);

	this.tiles[rowIndex1][tileIndex1].randomizeTile();
	this.tiles[rowIndex2][tileIndex2].randomizeTile();
}

Game.prototype.toString = function(){
	var flattened = _.flatten(this.tiles);
	var flattenedValues = _.map(flattened, function(tile){return tile.value});
	return joined = flattenedValues.join('');
}

Game.prototype.toStringOfRows = function(){
	var joined = this.toString();
	console.log(joined.slice(0, 4))
	console.log(joined.slice(4, 8))
	console.log(joined.slice(8, 12))
	console.log(joined.slice(12, 16))	
}

var game = new Game
var tiles = game.tiles
game.start();
console.log(tiles)
console.log(game.toString())
game.toStringOfRows()

Game.prototype.addTiles = function(innerTile, outerTile){
	innerTile.value = innerTile.value + outerTile.value;
}


Game.prototype.move = function(direction){
	if(direction === 'right'){

	}
	if(direction === 'left'){

	}
	if(direction === 'up'){

	}
	if(direction === 'down'){

	}
}