// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {
  //empty array to push user responses to
  var array = [];

  //questions for user
  var questions = [
      {charAmount: prompt('choose length of password between 8 and 128 characters.')}, 
      {lowerCase: confirm('Does your password need lowercase?')}, 
      {upperCase: confirm('Does your password need uppercase?')}, 
      {number: confirm('Does your password need numbers?')}, 
      {special: confirm('Does your password need special characters?')}
  ];
  
  for (var i = 0; i < questions.length; i++){
     array.push(questions.charAmount);
  }
  
  console.log(questions.charAmount);
  console.log(array);
  

  /* Should I keep this? */
  // var length = prompt('choose length of password between 8 and 128 characters.');
  // var lowerCase = confirm('Does your password need lowercase?');
  // var upperCase = confirm('Does your password need uppercase?');
  // var number = confirm('Does your password need numbers?');
  // var special = confirm('Does your password need special characters?');

  
};

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
