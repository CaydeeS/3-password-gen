
// Assignment code here

const numbers = "0123456789";
const lowerc = "abcdefghijklmnopqrstuvwxyz";
const upperc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const symbols = "!#$%&'()*+,-./:;<=>?@[^_`{|}~"

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

    passwordCriteria = "";
    compiledPassword = "";

  var passwordLength = window.prompt ("Enter number of characters");
  var confirmLc = window.confirm ("Use lowercase letters?");
  var confirmUc = window.confirm ("Use uppercase letters?");
  var confirmNum = window.confirm ("Use numbers?");
  var confirmSym = window.confirm ("Use symbols?");
    

//failsafe selection prompts & password length restriction
  const checkConfirm = [confirmLc, confirmUc, confirmNum, confirmSym].filter(Boolean);
  if (checkConfirm < 1) {
    return ("Not enough parameters selected to run generator");
  }
  if (passwordLength < 8 || passwordLength > 128) {
    return ("Password must be between 8-128 characters.");
  }
  else {password.length = passwordLength};
  // if (passwordLength > 128) {
  //   return ("Password must be between 8-128 characters.");
  // }
  
//   if (passwordLength >= 8 && passwordLength <= 128) {
//     password.length = passwordLength;
   
// }

//generating password
  if (confirmLc === true) {
  passwordCriteria += lowerc;
}
  if (confirmUc === true) {
  passwordCriteria += upperc;
}
  if (confirmNum === true) {
  passwordCriteria += numbers;
}
  if (confirmSym === true) {
  passwordCriteria += symbols;
}
  for (var i = 0; i < passwordLength; i++) {
    compiledPassword += passwordCriteria [Math.floor(Math.random() * passwordCriteria.length)];
    console.log(compiledPassword);
  }

  return compiledPassword;
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

