class Car{
    constructor(x,y,width,height) { //constructor for Car object
        this.x = x; //x-coordinate
        this.y = y; //y-coordinate
        this.width = width; //car width coordinate
        this.height = height; //car height coordinate
        
        this.velocity = 0; //car speed
        this.acceleration = 0.2; //car acceleration
        this.maxVelocity = 3; //car max speed
        this.friction=0.05; //friction

        this.controls = new Controls(); //car controls
    }

    update() {
        if(this.controls.forward){
            this.velocity +=this.acceleration;
        }
        if (this.controls.reverse){
            this.velocity -=this.acceleration;
        }

        if(this.velocity > this.maxVelocity) {
            this.velocity = this.maxVelocity;
        }

        if (this.velocity < -this.maxVelocity/2) {
            this.velocity = -this.maxVelocity/2;
        }

        if(this.velocity > 0) {
            this.velocity -=this.friction;
        }
        if(this.velocity < 0) {
            this.velocity += this.friction;
        }

        if (Math.abs(this.velocity)<this.friction) {
            this.velocity = 0;
        }

        if (this.controls.left) {
            this.x-=2;
        }

        if (this.controls.right) {
            this.x+=2;
        }

        this.y-=this.velocity;
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