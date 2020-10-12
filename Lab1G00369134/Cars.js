class Vehicle{ 

    constructor(make, model, year){ //Parent class constructor 
        this.make = make;           //Assinging variables
        this.model = model;
        this.year = year;
    }

    Information(){
        console.log(`Make: ${this.make}.`); //Method to output using console.log
        console.log(`Model: ${this.model}.`);
        console.log(`Year: ${this.year}.`);
    }

}

class Car extends Vehicle { //Child class with more specific parameters

    constructor(make, model, year, doors){ //New constructor for door parameter 
        super(make, model, year); //Calling the Vehicle super class assignments
        this.doors = doors; //Assigning more specific parameter 
    }

    Information(){ //New method for calling "doors"
        super.Information();//Calling the Vehicle class method
        console.log(`Doors: ${this.doors}`); //Adding new parameter to the Vehicle class
    }
}

let myCar = new Car('VW,', 'Golf', 2010, 5); //Creates an object using the combined Vehicle + car information method
myCar.Information(); //outputting above objects information