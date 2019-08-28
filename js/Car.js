export default class Car {
    //setter
    setName(name){
        this.mName =name;
    }
    setBrand(brand){
        this.mBrand =brand;
    }
    getName(){
        console.log(this.mName);
    }
    getBrand(){
        console.log(this.mBrand);
    }
    speed(){
        console.log("Low speed!");
    }
    back(){
        console.log("Car back!");
    }
}
