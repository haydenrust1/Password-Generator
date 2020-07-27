// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  // var questions = [
  //   {q:'choose length of password between 8 and 128 characters.', a:}
  // ];

  var length = prompt('choose length of password between 8 and 128 characters.');
  var lowerCase = confirm('Does your password need lowercase?');
  var upperCase = confirm('Does your password need uppercase?');
  var number = confirm('Does your password need numbers?');
  var special = confirm('Does your password need special characters?');

  
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
