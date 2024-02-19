 let username;
// username=window.prompt("What is your name:");

// document.write(username);

document.getElementById("mySubmit").onclick=function()
{
    username=document.getElementById("myText").value;
    document.getElementById("myH1").textContent=`Hello ${username}`;
}


const pi=3.1459;
let radius;
let circumference;

document.getElementById("click").onclick=function()
{
   radius= document.getElementById("radius").value;
   radius=Number(radius);
   circumference=2 * pi *radius;
   document.getElementById("h1").textContent=`Circumference is ${circumference} cm`;
}
