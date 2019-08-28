import Car from './Car.js';

 export class Toyota extends Car{
    //setter
    setColor(color){
        this.mColor = color;
    }
    //getter
    getColor(){
        console.log(this.mC);
    }


    stop(){
        console.log("Stopping");
    }
}

