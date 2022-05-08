let tileSize = 50;
let tilesX, tilesY;
let tiles = [];
let typeSelected = 0;
let tileMap;
let tileMapTileSize = 4;

function createGrid(){
    tileMap = loadImage("./assets/tileMap.png");
    tilesX = width/tileSize;
    tilesY = height/tileSize;
    for(let i = 0; i < tilesX; i++){
        tiles[i] = [];
        for(let j = 0; j < tilesY; j++){
            tiles[i][j] = new Tile(i, j, -1);
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
                tiles[i][j].setType(typeSelected);
            }
        }
    }
}
function mousePressed(){
   setTileType(mouseX, mouseY);
}
function keyPressed(){
    if(key == 1){
        typeSelected = 0;
    }else if(key == 2){
        typeSelected = 1;
    }
}