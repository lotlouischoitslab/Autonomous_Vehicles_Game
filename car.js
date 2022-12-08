class Car{
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    draw(context) {
        context.beginPath();
        context.rect(
            this.x -this.width/2, //center of the car 
            this.y-this.height/2, //height of the car
            this.width,
            this.height
        );
        context.fill();
    }
}