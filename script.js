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

  //function for selecting a random letter
  function randomChar() {
    return passCrit.letters.charAt(Math.floor(Math.random() * passCrit.length));
  }

  //validation of character length and lowerCase letters
  if (passCrit.length > 7 && passCrit.length < 129 && passCrit.lowerCase) {
    //loop through users desired length
    for (var i = 0; i < passCrit.length; i++) {
      //pushing letters to password
      userPassword.push(randomChar());
    }
  } else {
    alert('Please choose a password length between 8 and 128 characters!!!');
  }

  //selects random placement in password
  // var randomPassChar =
  //   userPassword[Math.floor(Math.random() * passCrit.length)];

  // determing if upper case characters are needed and replacing if so
  if (passCrit.upperCase) {
    userPassword = userPassword
      .join('')
      .replace(userPassword[3], randomChar().toUpperCase());
  }

  // determing if numbers are needed and replacing if so
  if (
    passCrit.number &&
    userPassword != userPassword.includes(passCrit.numbers)
  ) {
    userPassword = userPassword.replace(
      userPassword[0],
      passCrit.numbers.charAt(Math.floor(Math.random() * passCrit.length))
    );
  }

  //determing if special characters are needed and replacing if so
  if (
    passCrit.special &&
    userPassword !== userPassword.includes(passCrit.specialChar)
  ) {
    userPassword = userPassword.replace(
      userPassword[7],
      passCrit.specialChar.charAt(Math.floor(Math.random() * passCrit.length))
    );
  }

  console.log(userPassword);
  console.log(passCrit.length);

  return userPassword;
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
