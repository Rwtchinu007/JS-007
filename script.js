// Arrays and Objects in JavaScript
// arrays are used to store multiple values in a single variable.


let arr = [1, 2, 3, 4, 5];
console.log(`Array: ${arr}`);
// creating array using Array constructor
let arr2 = new Array(6, 7, 8, 9, 10);
console.log(`Array 2: ${arr2}`);



// accessing array elements
console.log(`First element: ${arr[0]}`);
console.log(`Third element: ${arr[2]}`);
console.log(`Third element: ${arr[4]}`);



// functions on arrays
// push() - adds an element at the end of the array
let arr3 = [1,2,3];
arr3.push(4); // adds 4 at the end
console.log(`After push: ${arr3}`);


// pop() - removes the last element of the array
arr3.pop(); // removes 4
console.log(`After pop: ${arr3}`);


// shift() - removes the first element of the array
arr3.shift(); // removes 1
console.log(`After shift: ${arr3}`);


// unshift() - adds an element at the beginning of the array
arr3.unshift(0); // adds 0 at the beginning
console.log(`After unshift: ${arr3}`);


// indexOf() - returns the index of the first occurrence of an element
let index = arr3.indexOf(2);
console.log(`Index of 2: ${index}`);


// array destructuring
// array destructuring allows us to unpack values from arrays into distinct variables
let[a, ,c] = arr3; // skips the second element
console.log(`Destructured values: a=${a}, c=${c}`);


// filtering an array
// filter() - filter krta h array ke elements ko based on a condition....
let arr4 = [1, 2, 3, 4, 5, 6];
let even = arr4.filter(num => num % 2 === 0);
console.log(`Even numbers: ${even}`);


// spread operator
let arr5 = [7, 8, 9];
let combined = [...arr4, ...arr5];
console.log(`Combined array: ${combined}`);



// iterating over arrays


// using for loop
let arr6 = ['a', 'b', 'c', 'd'];
for (let i= 0 ; i<4 ; i++){
    console.log(arr6[i]);
}


// using forEach
arr6.forEach(function(val){
    console.log(val);
})



// Objects in JavaScript
// objects are used to store key-value pairs.
// 
let obj = {
    name:"Chinu",
    age: 21,
    city: "Meerut"
};
console.log(obj);

// method 2 - using Object constructor
let obj2 = new Object();

// accessing object properties
console.log(`Name: ${obj.name}`);  //using dot notation
console.log(`Age: ${obj['age']}`); // using bracket notation

// deleting a property
delete obj.city;
console.log(obj);

// adding a new property
obj.country = "India";
console.log(obj);

// nested objects
let student = {
    name : "Diku",
    marks: {
        math: 90,
        science: 85,
        english: 88
    }
};
console.log(`Math marks: ${student.marks.math}`);
console.log(student.name);
