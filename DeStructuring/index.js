// swap the two values
let a=1;
let b=9;

[a,b]=[b,a];
console.log(a);
console.log(b);

// swap two elemens in array
const colors=["red","green","blue","black","white"];

[colors[0],colors[4]]=[colors[4],[colors[0]]];
console.log(colors);

// assign array elements to variables
const colors1=["red","green","blue","black","white"];
const[firstColor,secondColor,thirdColor,...extraColors]=colors;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);


// extract values from objects
const person1={
    firstname:"Nisanth",
    lastname:"Selvaraj",
    age:19,
    job:"student"
}

const person2={
    firstname:"Sujith",
    lastname:"Selvaraj",
    age:20
    
}
const{firstname,lastname,age,job}=person2;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);

