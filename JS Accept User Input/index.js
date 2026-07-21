// How to accept user input 
// 1. Easy Way = window prompt 
// 2. Professional Way = HTML textbox

//1. Easy Way
//let username;

//username = window.prompt("What your username");

//console.log (username);

//2. Professional Way

let username;
document.getElementById("mySummit").onclick = function(){
    username = document.getElementById("myText").value;
    //console.log (username);
    document.getElementById("myH1").textContent = `Hello ${username}`
}
