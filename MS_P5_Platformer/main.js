var TileEditorOrGame = false;
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
        createCanvas(800, 600);
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

function mousePressed() {
    if (TileEditorOrGame) {
        TileEditor_mousePressed();
    } else {
        Game_mousePressed();
    }
}

function keyPressed() {
    if (TileEditorOrGame) {
        TileEditor_keyPressed();
    } else {
        Game_keyPressed();
    }
}

function keyReleased() {
    if (TileEditorOrGame) {

    } else {
        Game_keyReleased();
    }
}