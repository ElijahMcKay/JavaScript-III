/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global - just displays the windows console object within javascript itself because you're not specifying which object you would like this to point to 
* 2. Implicit - whenever a function is called by a preceding dot, the object before that dot is this
* 3. New - when you use a constructor function, this refers to the specific object that you create with the constructor
* 4. explicit binding - when you use .call or .apply to change what 'this' is referring to 
*
* write out a code example of each explanation above
*/

// Principle 1
console.log(this); 
// code example for Window Binding

// Principle 2
const anObj = {
    name: 'My Object',
    sayObjName: function() {
        console.log(`${this.name} is the name of my object`); 
        console.table(this); 
    }
}

anObj.sayObjName(); 
// code example for Implicit Binding

// Principle 3
function newCar(model) {
    this.year = 2000; 
    this.make = 'Honda'; 
    this.model = model; 
    this.sayCar = function() {
        console.log(`My new car is a ${this.year} ${this.make} ${this.model}.`)
    }
}

const jerry = new newCar('Pilot'); 
const fred = new newCar('Civic'); 
jerry.sayCar(); 
// code example for New Binding

// Principle 4
jerry.sayCar.apply(fred); 
// code example for Explicit Binding