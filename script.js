
let form=document.getElementById("form");
form.addEventListener("submit",submitEvent);
function submitEvent(){
     alert("Your form is submitted..!");
}

form.addEventListener("reset",resetEvent);
function resetEvent(){
    alert("Your form is cleared..!");
}