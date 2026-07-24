// const = a veriable that can't be changed

//let pi = 3.14159;
//let pi = 33.21159;
const PI = 3.14159;
let radius;
let circumference;

//console.log(circumference);
document.getElementById("mySubmit").onclick = function(){
    radius = document.getElementById("myText").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = circumference + "cm";
}

