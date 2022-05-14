// Primitive data type
    // String	    represents sequence of characters e.g. "hello"
    // Number	    represents numeric values e.g. 100
    // Boolean	    represents boolean value either false or true
    // Undefined	represents undefined value
    // Null	        represents null i.e. no value at all

var myString = "this a string data type"
console.log(myString)

var myNumber = 100
console.log(myNumber)

var myBoolean = true
console.log(myBoolean)

var myUndefined
console.log(myUndefined)

var myNull = null
console.log(myNull)

// Non-primitive (reference) data type
    // Object	represents instance through which we can access members
    // Array	represents group of similar values
    // RegExp	represents regular expression
    // function represents a block of code designed to perform a particular task

// By object literal
console.log("==============By object literal=============");
var methodName = "setprops"    
let myObj = {
     name: "Toyoto", 
     model: 500, 
     weight: 850,
     details: function()
     {
         //console.log(`name = ${this.name}, model = ${this.model}, weight = ${this.weight}`)
         const { name, model, weight } = this
         console.log(`name = ${name}, model = ${model}, weight = ${weight}`)
     },

     [ methodName ]: function(color, height)
     {
        this.color = color
        this.height = height
     }
}
console.log(myObj)
console.log(myObj.name)
myObj.details()
myObj.setprops("red", 56)
console.log(myObj);

// By creating instance of Object
console.log("=============By creating instance of Object==============");
var myInstance = new Object()
myInstance.id = 054003
myInstance.name = "Jakir"
myInstance.salary = 50000
console.log(myInstance);

// By using an Object constructor
console.log("============By using an Object constructor==========");
function myConstrutor(first, last, age) {
    this.firstName = first
    this.lastName = last
    this.age = age
}
// create a object
var myConstrutor1 = new myConstrutor("Jakir", "Ahmed", 35)
console.log(myConstrutor1)

myConstrutor1.name = function(){
    return this.firstName + " " + this.lastName
}
console.log(myConstrutor1.name());
