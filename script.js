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
console.log(`Fifth element: ${arr[4]}`);


// modifying array elements
arr[2]= 33; // changing 3rd element to 33
console.log(`Modified Array: ${arr}`); 



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


// splice() - adds/removes elements at a specific index
arr3.splice(2,2); // removes 2 elements starting from index 2
console.log(`After splice: ${arr3}`);


// slice() - returns a shallow copy of a portion of an array into a new array object
let newArr1 = arr3.slice(0,3); // copies elements from index 0 to 2
console.log(`Sliced Array: ${newArr1}`);


// reverse() - reverses the array
arr.reverse();
console.log(`Reversed Array: ${arr}`);


// sort() - sorts the array
let srt = [3,1,4,5,2];
let sr = srt.sort(function(a,b){
    return a-b; // ascending order
    // return b-a; // descending order
})
console.log(sr);


// forEach() - executes a provided function once for each array element
srt.forEach(function(val){
    console.log(val);
})

// map() - tab use krna h jb apko naya array chahiye based on some operation on original array
let map_1 = srt.map(function(val){
    return val * 2;
});
console.log(map_1);


// filter() - creates a new array with all elements that pass the test implemented by the provided function
let filt = [1,2,3,4,5,6];
let filtered = filt.filter(function(val){
    if (val % 2 === 0){
        return true;
    }
})
console.log(filtered);


// reduce() - result is a single value which is the accumulated result of the function
let red = [1,2,3,4,5,6];
let sum10 = red.reduce(function(accumulator, currentValue){
    return accumulator + currentValue;
}, 0);
console.log(sum10);


// find() - returns the value of the first element that satisfies the provided testing function
let found = red.find(function(val){
    return val > 3;
});
console.log(`First element greater than 3: ${found}`); 



// indexOf() - returns the index of the first occurrence of an element
let index = arr3.indexOf(2);
console.log(`Index of 2: ${index}`);


// array destructuring
// array destructuring allows us to unpack values from arrays into distinct variables
let[a, ,c] = arr3; // skips the second element
console.log(`Destructured values: a=${a}, c=${c}`);


// spread operator - allows an iterable such as an array to be expanded in places where zero or more arguments or elements are expected
// copying an array
let arr56 = [10, 20, 30, 40,50,60,70];
let arr29 = [...arr56]; // creates a shallow copy of arr56
console.log(`Copied array using spread operator: ${arr2}`);


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

// Q. Use map function to create a new array with the square of each element from the given array.
let arr78 =[1,2,3,4,5];
let newArr = arr78.map(function(val){
    return val * val;
});
console.log(newArr); // [1,4,9,16,25]


// Q. Use filter function to create a new array with only the even numbers from the given array.
let arr35 = [1,2,5,8,10,12,15];
let fil_arr = arr35.filter(function(val){
    return val % 2 == 0;
});
console.log(fil_arr); // [2,8,10,12]


// Q. Use reduce function to calculate the sum of all elements in the given array.
let arr90 = [1000,2000,3000,4000];
let sum9=arr90.reduce(function(acc, val){
    return acc + val;
}, 0);
console.log(sum9); // 10000


// Q. Use some and every functions to check conditions on the elements of the given array.
let characters = ["aviator", "batman", "catwoman", "daredevil","cat", "antman"
];
let some = characters.some(function(val){
    return val.length > 7;
});
console.log(some); // true (aviator, batman, catwoman, daredevil have length > 7)
let every = characters.every(function(val){
    return val.length > 5;
});
console.log(every); // false (cat and antman have length <= 5)


// Q. use object.freeze to make an object immutable.
let person = {
    name: "John",
    age: 30};
Object.freeze(person);
person.age = 35; // this will not change the age property
console.log(person.age); // 30

// using seal to prevent adding or removing properties from an object
let vehicle = {
    type: "car",
    brand: "Toyota" };
Object.seal(vehicle);
vehicle.color = "red"; // this will not add a new property
delete vehicle.brand; // this will not delete the brand property
vehicle.type = "truck"; // this will change the type property
console.log(vehicle); // {type: "truck", brand: "Toyota"}

