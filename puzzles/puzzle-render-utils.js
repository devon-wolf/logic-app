// create a grid of nine squares on which the tiles will move
export function generateThreeByThree() {
    const tileMap = document.getElementById('tile-map');
    tileMap.classList.add('tile-map');
	
    const pos1 = document.createElement('div');
    const pos2 = document.createElement('div');
    const pos3 = document.createElement('div');
    const pos4 = document.createElement('div');
    const pos5 = document.createElement('div');
    const pos6 = document.createElement('div');
    const pos7 = document.createElement('div');
    const pos8 = document.createElement('div');
    const pos9 = document.createElement('div');

    const spaces = [
        pos1,
        pos2,
        pos3,
        pos4,
        pos5,
        pos6,
        pos7,
        pos8,
        pos9
    ];

    for (let i = 0; i < spaces.length; i++) {
        spaces[i].classList.add('space');
        spaces[i].id = `pos-${i + 1}`;
        tileMap.append(spaces[i]);
    }

    return tileMap;
}

// get 8 tiles with individual IDs; returns an array of tiles
export function generateEightTiles() {
    const tile1 = document.createElement('div');
    const tile2 = document.createElement('div');
    const tile3 = document.createElement('div');
    const tile4 = document.createElement('div');
    const tile5 = document.createElement('div');
    const tile6 = document.createElement('div');
    const tile7 = document.createElement('div');
    const tile8 = document.createElement('div');
	
    const tiles = [
        tile1,
        tile2,
        tile3,
        tile4,
        tile5,
        tile6,
        tile7,
        tile8
    ];

    for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.add('tiles');
        tiles[i].id = `tile-${i + 1}`;
    }
	
    return tiles;
}