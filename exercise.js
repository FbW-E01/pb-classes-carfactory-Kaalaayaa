// Car factory
// Create a constructor function that can be used to create objects.

// The objects your factory creates should all have a "type" property that always has the value "car".

// The factory should take in three parameters and save them to the created objects:

// make
// model
// year
// Use your function to create 10 different cars. Store all of them inside a "garage" array.

// robot: Nothing to see down here
function Car(make, model, year){
    this.type = "car"
    this.make = make;
    this.model = model;
    this.year = year;
}

const car1 = new Car ("Toyota", "Camry", "1994");
const car2 = new Car ("Toyota", "Camry", "1994");
const car3 = new Car ("Toyota", "Camry", "1994");
const car4 = new Car ("Toyota", "Camry", "1994");
const car5 = new Car ("Toyota", "Camry", "1994");
const car6 = new Car ("Toyota", "Camry", "1994");
const car7 = new Car ("Toyota", "Camry", "1994");
const car8 = new Car ("Toyota", "Camry", "1994");
const car9 = new Car ("Toyota", "Camry", "1994");
const car10 = new Car ("Toyota", "Camry", "1994");

const garage = [];
garage.push(car1,
car2,
car3,
car4,
car5,
car6,
car7,
car8,
car9,
car10);

console.log(garage);