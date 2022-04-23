//classes
//we could create a function and add methods on the function object using the prototype

//in js function are objects - inherit the behaviour of object
// whenever you create an object, the prorotype object is also created behind the scene

/*function Hoilday(destination, days){
    this.destination = destination;
    this.days = days;
}

Hoilday.prototype.info = function(){
    console.log(this.destination+ ' | ' +this.days+ ' days ');
}

var india = new Hoilday("India", 35)
console.log(india.info());
*/

//super class

class Hoilday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }
    info(){
        console.log(`${this.destination} will take ${this.days} days.`)
    }
}



//sub class

class Expedition extends Hoilday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }
    info(){
        super.info();
        console.log(`Bring your ${this.gear.join("and your")}`)
    }
}

const tripWithGear = new Expedition("Everest",30,["Sunglass","FLags","Camera"]);
tripWithGear.info();