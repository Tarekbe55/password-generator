// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  // Variables for all the characters, symbols and numbers
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  // conditions for password length
  var charLength = parseInt(prompt("Choose length of password between 8 and 128"));

  if (charLength < 8) {
    alert("Invalid number! Password must be above 8 characters");
    return;
  }

  if (charLength > 128) {
    alert("invalid number! Password must be below 128 char");
    return;
  }


  if (isNaN(charLength) === true) {
    alert("The password length must be provided as a number.");
    return;
  }
  var numbers = confirm("Do you want numbers in your password?");
  var upperCase = confirm("Do you want Uppercase letters in your password?");
  var lowerCase = confirm("Do you want lowercase letters in your password?");
  var characters = confirm("Do you want special characters in your password?");


  //Condition for password validation
  if (upperCase === false && lowerCase === false && numbers === false && characters === false) {
    alert("You must select at least one type of character."); return;
  }

  console.log(charLength)


  //Empty arrays to randomize the characters and to display it

  var resultArray = [];




  //conditions of Array. If any of the questions are true, it will add the to the result array
  if (numbers) {
    resultArray = resultArray.concat(numArray);

  }

  if (upperCase) {
    resultArray = resultArray.concat(uppercaseArray);

  }

  if (lowerCase) {
    resultArray = resultArray.concat(lowercaseArray);

  }

  if (characters) {
    resultArray = resultArray.concat(characterArray);

  }

  console.log(resultArray)


  // Array that will contain the generated password
  var displayedArray = [];


  // for loop to randomize the password from the result array

  for (var i = 0; i < charLength; i++) {

    displayedArray.push(resultArray[Math.floor(Math.random() * resultArray.length)]);
  }

  return displayedArray.join("");


}

// function to display generated password on the screen
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
