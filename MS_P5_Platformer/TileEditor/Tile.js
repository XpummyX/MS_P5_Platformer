class Tile {
    constructor(x, y, type) {
        this.x = x;
        this.y = y;
        this.type = type; // 0 - nothing; 1 - wall/ground; 2 - spikes
        this.upperLeftImgIndex = 0;
        this.upperRightImgIndex = 0;
        this.lowerLeftImgIndex = 0;
        this.lowerRightImgIndex = 0;
    }
    show() {
        if (this.type >= 0) {
            let img;
            noFill();
            stroke(255);
            img = this.getImgByCorner(0, this.type);
            if (img != null) {
                image(img, this.x * tileSize, this.y * tileSize, tileSize / 2, tileSize / 2);
            }
            img = this.getImgByCorner(1, this.type);
            if (img != null) {
                image(img, this.x * tileSize + tileSize / 2, this.y * tileSize, tileSize / 2, tileSize / 2);
            }
            img = this.getImgByCorner(2, this.type);
            if (img != null) {
                image(img, this.x * tileSize, this.y * tileSize + tileSize / 2, tileSize / 2, tileSize / 2);
            }
            img = this.getImgByCorner(3, this.type);
            if (img != null) {
                image(img, this.x * tileSize + tileSize / 2, this.y * tileSize + tileSize / 2, tileSize / 2, tileSize / 2);
            }
            rect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
        }
    }
    setType(type) {
        this.type = type;
    }
    getImgByCorner(corner, type) {
        let diagEmpty = true,
            verEmpty = true,
            horEmpty = true;
        let img = -1;
        let cornerCoords = createVector(0, 0);
        if (corner == 0) {
            cornerCoords = createVector(-1, -1);
        } else if (corner == 1) {
            cornerCoords = createVector(1, -1);
        } else if (corner == 2) {
            cornerCoords = createVector(-1, 1);
        } else if (corner == 3) {
            cornerCoords = createVector(1, 1);
        }
        try {
            if ( /*this.x+cornerCoords.x < 0 || this.x+cornerCoords.x > tilesX || this.y+cornerCoords.y < 0 || this.y+cornerCoords.y > tilesY || */ tiles[this.x + cornerCoords.x][this.y + cornerCoords.y].type == 0) {
                diagEmpty = false;
            }
            if ( /*this.y+cornerCoords.y < 0 || this.y+cornerCoords.y > tilesY || */ tiles[this.x][this.y + cornerCoords.y].type == 0) {
                horEmpty = false;
            }
            if ( /*this.y+cornerCoords.x < 0 || this.x+cornerCoords.x > tilesX || */ tiles[this.x + cornerCoords.x][this.y].type == 0) {
                verEmpty = false;
            }
        } catch (err) {
            //console.log("Mouse Cursor Out of Bounds");
        }
        if (type == 0) {
            if (diagEmpty && verEmpty && horEmpty) {
                img = 0;
            } else if (!diagEmpty & verEmpty && horEmpty) {
                img = 0;
            } else if (diagEmpty && !verEmpty && !horEmpty) {
                img = 2;
            } else if (!verEmpty && horEmpty) {
                img = 1;
                if (corner == 0) {
                    corner = 1;
                } else if (corner == 3) {
                    corner = 2;
                }
            } else if (verEmpty && !horEmpty) {
                img = 1;
                if (corner == 1) {
                    corner = 3;
                } else if (corner == 2) {
                    corner = 0;
                }
            }
        } else if (type == 1) {
            if (!verEmpty && !horEmpty) {
                img = 3;
            } else if (!verEmpty && horEmpty) {
                img = 4;
                if (corner == 1) {
                    corner = 3;
                } else if (corner == 2) {
                    corner = 0;
                }
            } else if (verEmpty && !horEmpty) {
                img = 4;
                if (corner == 0) {
                    corner = 1;
                } else if (corner == 3) {
                    corner = 2;
                }
            }
        }
        if (img != -1) {
            return tileMap.get(corner * tileMapTileSize, img * tileMapTileSize, tileMapTileSize, tileMapTileSize);
        } else {
            return null;
        }
    }
}