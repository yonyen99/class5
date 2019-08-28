import Car from "./Car.js";

export class RR extends Car{
    setPrice(price){
        this.mPrice =price;
    }
    getPrice(){
        console.log(this.mPrice);
    }
}