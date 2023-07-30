// let submitButton= document.getElementById("submit");
// submitButton.addEventListener("click",formSubmit);
// function formSubmit(){
//      alert("Your form is submitted..!")
// }

// let resetButton= document.getElementById("reset");
// resetButton.addEventListener("click",formReset);
// function formReset(){
//      alert("Your form is cleared..!")
// }

let form=document.getElementById("form");
form.addEventListener("submit",submitEvent);
function submitEvent(){
     alert("Your form is submitted..!");
}

form.addEventListener("reset",resetEvent);
function resetEvent(){
    alert("Your form is cleared..!");
}