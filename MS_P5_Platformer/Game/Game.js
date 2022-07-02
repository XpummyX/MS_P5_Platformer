let fileLoaded = false;
let tiles_;
let player;

function Game_setup() {
    player = new PlayerSprite(10, 10);

    let tilesX_ = width / tileSize;
    let tilesY_ = height / tileSize;
    tiles_ = [];
    for (let i = 0; i < tilesX_; i++) {
        tiles_[i] = [];
        for (let j = 0; j < tilesY_; j++) {
            tiles_[i][j] = new Tile(i, j, -1);
        }
    }
    tileMap = loadImage("./assets/tileMap.png");
    let textArray = decodeURIComponent(file1).split('\n');
    //console.log(textArray[192]);
    for (let i = 0; i < textArray.length - 1; i++) {
        let internalArray = textArray[i].substring(1, textArray[i].length - 1);
        internalArray = internalArray.split(',');
        let x_v = parseInt(internalArray[0]);
        let y_v = parseInt(internalArray[1]);
        let type_v = parseInt(internalArray[2]);
        //console.log("data: " + x_v + "," + y_v + "," + type_v + "," + i);
        tiles_[x_v][y_v] = new Tile(x_v, y_v, type_v);
        //console.log(v);
    }

    // let element = document.createElement('input');
    // element.setAttribute('id', 'file-input');
    // element.setAttribute('type', 'file');
    // element.setAttribute('name', 'name');
    // element.addEventListener('change', fileLoad, false);
    // //element.style.display = 'none';

    // document.body.appendChild(element);
    //element.onchange = fileLoad;

    //element.click();

    //document.body.removeChild(element);
}

function Game_draw() {
    background(0);
    for (let i = 0; i < tiles_.length; i++) {
        for (let j = 0; j < tiles_[i].length; j++) {
            if (tiles_[i][j] != undefined) {
                tiles_[i][j].show();
            }
        }
    }
    player.drawPlayer();
    player.updatePhysics();
}

function Game_mousePressed() {

}

function Game_keyPressed() {
    player.keyPressed(key);
}

function Game_keyReleased() {
    player.keyReleased(key);
}

// function fileLoad(evt) {
//     console.log("file load " + evt.target.files[0]);

//     let files = evt.target.files;

//     var reader = new FileReader();
//     reader.onload = (function(theFile) {
//         return function(e) {
//             var content = e.target.result;
//             retTextArray = content.split('\n');
//             console.log("retTextArray: " + retTextArray[0]);
//             //console.log("content: " + content);
//         }
//     })(files[0]);

//     reader.readAsText(files[0]);
//     fileLoaded = true;


//     let tilesX_ = width / tileSize;
//     let tilesY_ = height / tileSize;
//     tiles_ = new Array(tilesX_);
//     for (let i = 0; i < tilesX_; i++) {
//         tiles_[i] = [];
//         for (let j = 0; j < tilesY_; j++) {
//             tiles_[i][j] = new Tile(i, j, -1);
//         }
//     }
//     //if (retTextArray != null) {
//     console.log(retTextArray);
//     //}
//     // for (let i = 0; i < retTextArray.length; i++) {
//     //     let arr = retTextArray[i].substring(1, retTextArray[i].length() - 1);
//     //     console.log(arr);
//     // }
// }