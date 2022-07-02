class AnimatedSprite{
    constructor(_spritesheetsNames, _spritesheetsSizes, speed, size, showSize){
        this.spritesheets = new Array(_spritesheetsNames.length);
        this.spritesheetsSizes = _spritesheetsSizes;
        this.speed = speed;
        for(var i = 0; i < _spritesheetsNames.length; i++){
            this.spritesheets[i] = loadImage(_spritesheetsNames[i]);
        }

        this.id = 0;
        this.frames = 1;
        this.frame = 0;
        this.size = size;
        this.showSize = showSize;
        this.img = null;
        this.startTime = 0;
    } 
    setAnimation(spritesheetId){
        this.frames = this.spritesheetsSizes[spritesheetId];
        if(this.id != spritesheetId){
            this.frame = 0;
            this.startTime = millis();
        }
        this.id = spritesheetId;
    }
    setPosition(x, y){
        this.x = x;
        this.y = y;
    }
    showAnimation(){
        let timer = (millis()-this.startTime)%1000;
        if(timer > 1000/this.speed*this.frame){
            this.frame = (this.frame+1)%this.frames;
        }
        this.img = this.spritesheets[this.id].get(this.frame*this.size, 0, this.size, this.size);
        image(this.img, this.x-this.showSize/2, this.y-this.showSize/2, this.showSize, this.showSize);
    }
}