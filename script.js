
// Assignment code here

var numbers = "0123456789";
var lowerc = "abcdefghijklmnopqrstuvwxyz";
var upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

var passwordLength = "";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {

  var passwordLengthPrompt = window.prompt ("Enter number of characters");
  var confirmLc = window.confirm ("Use lowercase letters?");
  var confirmUc = window.confirm ("Use uppercase letters?");
  var confirmNum = window.confirm ("Use numbers?");
  var confirmSym = window.confirm ("Use symbols?");

  var compiledPassword = "";

//failsafe selection prompts
  const checkConfirm = [confirmLc, confirmUc, confirmNum, confirmSym].filter(Boolean);
  if (checkConfirm < 1) {
    return ("Not enough parameters selected to run generator");
  }
  if (passwordLengthPrompt < 8) {
    return ("Password must be between 8-128 characters.");
  }
  if (passwordLengthPrompt > 128) {
    return ("Password must be between 8-128 characters.");
  }
//password length restriction
  if (passwordLengthPrompt >= 8 && passwordLengthPrompt <= 128) {
   
}

//generating password
if (confirmLc === true) {
  compiledPassword += lowerc;
}
if (confirmUc === true) {
  compiledPassword += upperc;
}
if (confirmNum === true) {
  compiledPassword += numbers;
}
if (confirmSym === true) {
  compiledPassword += symbols;
}

  return compiledPassword;
  
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
































// function generatePassword() {
//   // run if characters is >8
//   if (passwordLength > 8) {
//   }
//   else {
//     window.alert('Password should be between 8-128 characters.');
//   }
// }
//    // if less than 8 or more than 128 dont generate a password
//     //if all are chosen false dont generate a password
//   //run if at least one true



// generatePassword();
// console.log(generatePassword);

// // // Write password to the #password input
// // function writePassword() {
// //   var password = generatePassword();
// //   var passwordText = document.querySelector("#password");

// //   passwordText.value = password;

// // }


// // // Add event listener to generate button
// // generateBtn.addEventListener("click", writePassword);