// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function generatePassword() {
  var userPassword = [];

  //Password Criteria
  var passCrit = {
    length: parseInt(
      prompt('Please choose a password length between 8 and 128 characters')
    ),
    lowerCase: confirm('Does your password need lowercase characters?'),
    upperCase: confirm('Does your password need uppercase characters?'),
    number: confirm('Does your password need numbers?'),
    special: confirm('Does your password need special characters?'),
    letters: 'abcdefghijklmnopqrstuvwxyz', //ABCDEFGHIJKLMNOPQRSTUVWXYZ
    numbers: '0123456789',
    specialChar: `\`!\\"#$%&'()*+,-./:;<=>?@[]^_{}|~`,
  };

  //validation of character length and lowerCase letters
  if (passCrit.length > 7 && passCrit.length < 129 && lowerCase) {
    //loop through users desired length
    for (var i = 0; i < passCrit.length; i++) {
      //pushing letters to password
      var randomChar = passCrit.letters.charAt(
        Math.floor(Math.random() * passCrit.length)
      );
      userPassword.push(randomChar);
    }
  } else {
    alert('Please choose a password length between 8 and 128 characters!!!');
  }

  //determing if lower case characters are needed
  if (passCrit.lowerCase) {
    // userPassword = userPassword.substr(0, passCrit.length);
  }

  console.log(userPassword);
  console.log(passCrit.length);
  console.log(passCrit.specialChar);

  return userPassword.join('');

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
