//CHAPTER 1//****DATA TYPES

//strings represent words//
const firstName = "Emily"
const lastName = "Lemmon"

//numbers//
const applesInTheBasket = 16 //Integers, stored as whole numbers//

const pi = 3.14159 //Floats, fraction represented as decimal//

//booleans//
const accountIsActive = true //booleans are logical values of 'true' and 'false'//

//notes: what kind of data would Leonid need to store about his toys?
    //name of toys would be stored as strings
    //stock of toys would be stored as integers
    //price of toys would be stored as floats
    //status of toys in stock would be stored as booleans


//CHAPTER 2//****DATA STRUCTURES

// ARRAYS are used to store a list or collection of things or values//

const toyList = ["Army Man", "Bouncy Ball", "YoYo", "Soccer Ball"]

// OBJECT is a collection of values that have keys assigned to them//
    //A key is used on an object to refer to values about the object. 
    //For example, you want to store all of the properties of a patient visiting a doctor's office. 
    //You would create an object to store all of those properties in a single data structure instead of in separate variables.

    //NOTE: the values paired to a key can be various data-types
        //the 'id' property is a 'unique identifier', stored as an integer.
        //this organizes your objects

   /* const megan = {
        id: 1,
        age: 31,
        firstName: "Megan",
        lastName: "Debity"
    }
    
    const jack = {
        id: 2,
        age: 28,
        firstName: "Jack",
        lastName: "Parsons"
    }

    const iPhone = {
        id: 3,
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    }
    
    const galaxy = {
        id: 4,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    } */


//CHAPTER 3//****TOY OBJECTS    

//PRACTICE//    
//Define three toys of your choosing. 
//Assign each one to a different variable name. 
//Make your key names as descriptive as possible. 
//Do not abbreviate or use shortcuts. 
//For example, if you chose manufacturer as a property of a toy, do not shorten it to mfr.

const armyMan = {
    id: 1, //integer
    name: "Army Man", //string
    maker: "BryGuy's Toy Co.", //string
    price: 7.50, //float
    color: "green", //string
    inStock: true, //boolean

}

const bouncyBall = {
    id: 2, 
    name: "Magic Bouncy Ball",
    maker: "BryGuy's Toy Co.",
    price: 2.00,
    color: ["green", "red", "blue"], //to print a value within an array: console.log(object.key[arrayPosition])
    inStock: false,

}

const yoYo = {
    id: 3,
    name: "Super YoYo",
    maker: "BryGuy,s Toy Co.",
    price: 9.95,
    color: "yellow",
    inStock: true,

}

//console.log(bouncyBall.color[2]) //should print 'blue'


//CHAPTER 4//****TOY COLLECTION 

    //Objects In Arrays//
    //toys from toy-objects.js stored as a single array//

const toys = [
    {
        id: 1, 
        name: "Army Man", 
        maker: "BryGuy's Toy Co.", 
        price: 7.50, 
        color: "green", 
        inStock: true, 
    
    },
    
    {
        id: 2, 
        name: "Magic Bouncy Ball",
        maker: "BryGuy's Toy Co.",
        price: 2.00,
        color: ["green", "red", "blue"], 
        inStock: false,
    
    },
    
    {
        id: 3,
        name: "Super YoYo",
        maker: "BryGuy,s Toy Co.",
        price: 9.95,
        color: "yellow",
        inStock: true,
    }
    ]

//console.log(toys);//


//CHAPTER 5//****DISPLAYING TOY PROPERTIES

    //To access a property of an object, you use a dot (.). 
    //You start with the variable name whose value is the object, type a dot, then type the name of the property you want to see. 
    //Let's use our phones as an example again.

    /*const iPhone = {
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    } */

    //If you want to see just the price of the iPhone, and nothing else, here's how you would display it with console.log().

    /* const iPhone = {
        name: "iPhone",
        maker: "Apple",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    } */

// console.log(iPhone.price)

//Display All Prices with Iteration
    //You want to see the price of all phones that are stored in an array, like the one from the previous chapter.

const phones = [
    {
        id: 1,
        name: "iPhone",
        maker: "Apple, Inc.",
        operatingSystem: "iOS",
        price: 900,
        weight: 1.2
    },
    {
        id: 2,
        name: "Galaxy",
        maker: "Samsung",
        operatingSystem: "Android",
        price: 600,
        weight: 1.4
    }
]

    //Since those objects in the array aren't assigned to their own variables, then you have to iterate the array with a for..of loop. Here's how you do it.

/* for (const phone of phones) {
     console.log(phone)
}

//to display prices of each individual phone within the array:

for (const phone of phones) {
    console.log(phone.price)
}

//you can also use string interpolation to put a dolar sign in front of the prices when they are output.

for (const phone of phones) {
    console.log('Price is ${phone.price}')
} */

/*for (const toy of toys) {
    console.log(toy.price)
} */


// CHAPTER 6//****NEW TOYS - ADDING NEW OBJECTS TO ARRAYS

/*In this chapter you will learn about the push() method that is available on every array which allows you to add things to the array.
    Add a New Phone:
        Ok, so far, your phone business is pretty limited. You're only selling the iPhone and the Samsung Galaxy. You want to add the Google Pixel to your catalog. The first step is to define the new phone.

        Make sure that each object you create has an id property value that is 1 greater than the last one.
*/

// Define a new phone:
const pixel = {
    id: 3,
    name: 'Pixel',
    maker: 'Google',
    operatingSystem: 'Android',
    price: 750,
    weight: 1.3,
}

phones.push(pixel)

/*for (const phone of phones) {
    console.log(phone.price)
}*/


// CHAPTER 7//****TOY CATALOG

    /*String Interpolation
A quick reminder about string interpolation if you saw it in the pre-work. Otherwise, this is an introduction to string interpolation.

String interpolation is available in most high level languages like JavaScript, Python and C#. It allows you to easily build a long string with the value of variables injected into specific locations.

Here's a simple example first.*/

const age = 27
const name1 = "Melissa Bell"

const interpolatedString = `${name1} is ${age} years old`
console.log(interpolatedString)