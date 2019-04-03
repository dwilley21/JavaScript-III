// /* The for principles of "this";
// * in your own words. explain the four principle for the "this" keyword below.
// *
// * 1. Window binding --> when the 'this' keyword refers to the global object
// * 2. Implicit binding --> 'left of the dot binding' whenever the this function refers to the object before the dot such as a parent object
// * 3. New Binding --> refering to the the specific instance of the object being made from the constructor
// * 4. Explicit binding --> directly binding key values with this such as .call .apply and .bind. .bind needs a fucntion to invoke it
// *
// * write out a code example of each explanation above
// */

// // Principle 1

// // code example for Window Binding
//  function windowBind(bind){
//      console.log(this);
//      return bind
//  }

//  windowBind();
// // Principle 2

// // code example for Implicit Binding
// const implicitObj = {
//     name: 'Juwan',
//     Whaddup: function(name){
//         console.log(`${this.name}, Whaddup`)
//     console.log(this);
//     }
// }

// implicitObj.Whaddup('Juwan');
// // Principle 3

// // code example for New Binding
// function User(name, id, location){
//     this.userName = name
//     this.id = id
//     this.location = location
// }

// const userOne = new User('Dalton', 12, 'Kansas City'); 
// console.log(userOne);
// // Principle 4

// // code example for Explicit Binding
// const dalton = {
//     name: 'dalton'
// }
// const skills = ['HTML', 'JS', 'CSS']

// function introduce (...skills){
//     console.log(`Hello this is ${this.name} and these are my skills ${skills[0]}` )
// }
// introduce(...skills)