// Assignment code here



 function generatePassword() {
  var lcletters = randomLetterLC();
  var ucletters = randomLetterUC();
  var numbers = randomNumber();
  var symbols = randomSymbol();
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
  
function randomLetterLC() {
  const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  
}

function randomLetterUC() {

}

function randomNumber() {

}

function randomSymbol() {

}