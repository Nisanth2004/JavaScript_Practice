


function openfridge(...foods)
{
    // rest parameter
    console.log(...foods);
}
const food1="pizza";
const food2="pizza";
const food3="pizza";
const food4="pizza";
const food5="pizza";

openfridge(food1,food2,food3,food4,food5);


const numbers=[1,2,3,4,5];
const squares=numbers.map(square);
const cubes=numbers.map(cube);

console.log(squares);
console.log(cubes)
function square(element)
{
    return Math.pow(element,2)
}

function cube(element)
{
    return Math.pow(element,3)
}