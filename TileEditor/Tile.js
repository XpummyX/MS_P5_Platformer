class Tile{
    constructor(x, y, type){
        this.x = x;
        this.y = y;
        this.type = type;
    }
    show(){
        fill(this.type*100);
        rect(this.x*tileSize, this.y*tileSize, tileSize, tileSize)
    }
    setType(type){
        this.type = type;
    }
}