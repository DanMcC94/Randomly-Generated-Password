var choosingLength = prompt("Between 8 to 128, select a length for your password.");
var choosingLower = prompt("Would you like lower case letter? y/n");
var choosingUpper = prompt("Would you like uppercase letters? y/n");
var choosingNumbers = prompt("Would you like numbers? y/n");
var choosingSpecialCharacters = prompt("Would you like special characters included? y/n")
 

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


function generatePassword() {
    var length = choosingLength;
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+<>?:\"\}\{\~\`.,",
        retVal = "";
    for (var i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
