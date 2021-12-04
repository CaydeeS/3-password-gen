// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
// var ;

function generatePassword() {
  window.confirm("Use lowercase letters?");
  //if yes run genLcl and store in a variable, then run next window confirm, if no, then run next window confirm
  // if 
  //  function genLcl() {
  //  }
  // window.confirm("Use uppercase letters?");
  //  function genUcl() {
  //  }
  // window.confirm("Use numbers?");
  //  function genNum() {
  //  }
  // window.confirm("Use symbols?");
  //  function genSym() { 
  //  }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", generatePassword)



// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);