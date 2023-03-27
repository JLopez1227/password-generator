// Assignment code here
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'x', 'z']
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8,9,]
var specialCharacters = ['!', '"', '#', '#', '%', '&', "'", '(', ')', '*', '-', '.', '/', '\\', ';', '<', '>', '=', '+', '?', '@', '{', '}', '/', '^', '_', '`', '[', ']', '|', '~']
var passwordLength = 12;
var password = ""
var choices = []

function getPasswordOp(){
  choices = []
 passwordLength = window.prompt("How many characters long would you like your password to be (between 8-128)?");
  var includeUpper = window.confirm("Would you like your password to include upper cased letters?")
  if (includeUpper) {
    choices= choices.concat(uppercase)
  }
  var includeLower = window.confirm ("Would you like your password to include lower cased letters?")
  if (includeLower) {
    choices= choices.concat(lowercase)
  }
  var includeNumbers = window.confirm ("Would you like for your password to include numbers?")
  if (includeNumbers) {
    choices= choices.concat(numeric)
  }
  var includeSpecial = window.confirm("Would you like your password to include special characters?")
  if (includeSpecial) {
    choices= choices.concat(specialCharacters)
  }
}  

function generatePassword(){
  password = ""
  getPasswordOp()
  var passArray = []


  for (var i = 0; i <passwordLength; i++){
    var randomNumber = Math.floor(Math.random()* choices.length);
    passArray.push(choices[randomNumber]);
  }
  password = passArray.join('');
  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
