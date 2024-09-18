// Get form element by id
const registerForm = document.querySelector("#register");
// Handle form submit event
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Collect from data
  const formData = new FormData(registerForm);
  // console.log(formData.get('username'), formData.get('email'), formData.get('password'));
  // Send data to backend (will do that tomorrow)
  // Display success message to user (u have to create h1 in the form section and use id selector "message") NB;The space between the h1 created in html is called 'inner html'
  const messageH1 = document.querySelector("#message");
  messageH1.textContent = "Account registered successfully!!";
  
});
// declare variable age
let myAge = 32;
// Define squareAge function
function squareAge(age) {
  return age ** 2;
}

const squaredAge = squareAge(32);
console.log(squaredAge);
