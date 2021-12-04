// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passwordLength = window.prompt ("Enter number of characters");
var confirmLc = window.confirm ("Use lowercase letters?");
var confirmUc = window.confirm ("Use uppercase letters?");
var confirmNum = window.confirm ("Use numbers?");
var confirmSym = window.confirm ("Use symbols?");

console.log(passwordLength);
console.log(confirmLc);
console.log(confirmUc);
console.log(confirmNum);
console.log(confirmSym);


function generatePassword() {
  // run if characters is >8
  if (passwordLength > 8) {
  }
  else {
    window.alert('Password should be between 8-128 characters.');
  }
}
   // if less than 8 or more than 128 dont generate a password
    //if all are chosen false dont generate a password
  //run if at least one true



generatePassword();
console.log(generatePassword);

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }


// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);