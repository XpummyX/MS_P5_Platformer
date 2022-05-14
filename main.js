var TileEditorOrGame = true;
/*
   TileEditor = true;
   Game = false;
*/

function setup() {
    if (TileEditorOrGame) {
        console.log("Hello world");
        createCanvas(800, 600);
        createGrid();
    } else {
        Game_setup();
    }
}

function draw() {
    if (TileEditorOrGame) {
        background(0);
        displayGrid();
    } else {
        Game_draw();
    }
}