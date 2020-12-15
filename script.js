// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword() {

  // Variables for all the characters, symbols and numbers
  var uppercaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
  var lowercaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  var numArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
  var characterArray = ["@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+"];


  // password criteria
  var charLength = prompt("Choose length of password between 8 and 128");
  var numbers = confirm("Do you want numbers in your password?");
  var uppercase = confirm("Do you want Uppercase letters in your password?");
  var lowercase = confirm("Do you want lowercase letters in your password?");
  var characters = confirm("Do you want special characters in your password?");




  //Empty arrays to randomize the characters and to display it

  var resultArray = [];




  //conditions of Array
  if (numbers) {
    resultArray = resultArray.concat(numArray);

  }

  if (uppercase) {
    resultArray = resultArray.concat(uppercaseArray);

  }

  if (lowercase) {
    resultArray = resultArray.concat(lowercaseArray);

  }

  if (characters) {
    resultArray = resultArray.concat(characterArray);

  }

  console.log(resultArray)


  // Array that will contain the generated password
  var displayedArray = [];





}


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
