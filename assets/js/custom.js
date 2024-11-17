// 1
let name = "john";
let age = 25;

console.log("My name's", name, "and I am", age, "years old.");

// 2

let number = 5;

if(number % 2 == 0) {
    console.log("The number is even.");
} else{
    console.log("The number is odd.");
    
}

// 3

let mynum = [1, 2, 3, 4, 5, 6]
mynum.forEach(function(num) {
    if(num <= 5) {
        console.log(num);
        
    }
})


// 4
function addNumber(num, num2) {
    return num + num2;
}

let result  = addNumber(3, 7)

console.log(result);




// 5

let myArr = ["apple", "banana", "cherry"]
myArr.push("orange");

console.log('first fruits of array', myArr[0],);
console.log('total number of array:', myArr.length);


// 6
let arrNumber = [1,2,3,4,5,]

arrNumber.forEach(function(multi) {
    console.log(multi * 2);
    
})

// 7

let button = document.getElementById('changeText');

button.addEventListener('click', function() {
    button.textContent = 'You clicked the button';
});

// 8

let text = "hello world";

console.log(text.toUpperCase());


// 9
let person = {
    name: "Alice",
    age: 30,

    greet: function() {
        return "Hello, my name is " + this.name + ".";
    }
};
console.log(person.greet());


