// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function generatePassword() {
  var password = '#';

  //Password Criteria
  var passCrit = {
    length: prompt(
      'Please choose a password length between 8 and 128 characters'
    ),
    lowerCase: confirm('Does your password need lowercase characters?'),
    upperCase: confirm('Does your password need uppercase characters?'),
    number: confirm('Does your password need numbers?'),
    special: confirm('Does your password need special characters?'),
  };

  //creating length of password
  if (passCrit.length > 7 && passCrit.length < 129) {
    password = parseInt(passCrit.length);
  } else {
    alert('Please choose a password length between 8 and 128 characters!!!');
  }

  //determing if lower case characters are needed
  if (passCrit.lowerCase) {
    password = password.substr(0, passCrit.length);
  }

  console.log(password);
  console.log(passCrit.length);
  console.log(passCrit.lowerCase);
  console.log(passCrit.upperCase);
  console.log(passCrit.number);
  console.log(passCrit.special);

  // var length = prompt(
  //   'Please choose a password length between 8 and 128 characters'
  // );
  // var lowerCase = confirm('Does your password need lowercase?');
  // var upperCase = confirm('Does your password need uppercase?');
  // var number = confirm('Does your password need numbers?');
  // var special = confirm('Does your password need special characters?');
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
