const firstName = document.querySelector("#firstName");
const firstNameError = document.querySelector("#firstNameError");
const firstNameValue = firstName.value;

firstName.addEventListener("keyup", logLength);

function logLength(event){
  if(firstName.value >= 2) {
  firstNameError.style.display = "none";
} else{
  firstNameError.style.display = "block";
}
}
