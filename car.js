class Car{
    constructor(x,y,width,height) { //constructor for Car object
        this.x = x; //x-coordinate
        this.y = y; //y-coordinate
        this.width = width; //car width coordinate
        this.height = height; //car height coordinate
        this.controls = new Controls(); //car controls
    }

    update() {
        if(this.controls.forward){
            this.y -=2;
        }
        if (this.controls.reverse){
            this.y+=2;
        }
    }

    draw(context) { //draw function
        context.beginPath(); //call the begin path function
        context.rect( //we are going to draw a rectangle
            this.x -this.width/2, //center of the car 
            this.y-this.height/2, //height of the car
            this.width, //width 
            this.height //height
        );
        context.fill(); //draw the car
    }
}