let tileSize = 25;
let tilesX, tilesY;
let tiles = [];
let typeSelected = 1;
function createGrid(){
    tilesX = width/tileSize;
    tilesY = height/tileSize;
    for(let i = 0; i < tilesX; i++){
        tiles[i] = [];
        for(let j = 0; j < tilesY; j++){
            tiles[i][j] = new Tile(i, j, 0);
        }
    }
}
function displayGrid(){
    for(let i = 0; i < tilesX; i++){
        for(let j = 0; j < tilesY; j++){
            tiles[i][j].show();
        }
    }
}
function setTileType(x, y){
    for(let i = 0; i < tilesX; i++){
        for(let j = 0; j < tilesY; j++){
            if(x > tiles[i][j].x*tileSize && x < tiles[i][j].x*tileSize+tileSize && y > tiles[i][j].y*tileSize && y < tiles[i][j].y*tileSize+tileSize){
                tiles[i][j].setType(typeSelected)
            }
        }
    }
}