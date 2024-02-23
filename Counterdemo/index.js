const decreaseBtn=document.getElementById("decreaseBtn");
const increaseBtn=document.getElementById("increaseBtn");
const resetBtn=document.getElementById("resetBtn");
const countLabel=document.getElementById("countlabel");
let count=0;

increaseBtn.onclick=function()
{
    count++;
    countLabel.textContent=count;
}
decreaseBtn.onclick=function()
{
    count--;
    countLabel.textContent=count;
}

resetBtn.onclick=function()
{
    count=0;
    countLabel.textContent=count;
}

let x=3.21;
let y=3;
let z;
z=Math.round(x);
console.log(z);

let randomNum=Math.random();

console.log(randomNum);