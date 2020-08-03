var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
var lowercase ="abcdefghijklmnopqrstuvwxyz".split("")
var numeric = "0123456789".split("")
var specialChar = "!@#$%^&*".split("")
// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(){
  var newPassword = ""
  var userChoicePassword = ""
  var passwordLength = prompt("How long will your password be?")
  passwordLength = parseInt(passwordLength)
  if (passwordLength >= 8 && passwordLength <= 128){

    var isUppercase = confirm("Do you want uppercase characters?")
    var isLowercase = confirm("Do you want lowercase characters?")
    var isNumbers = confirm("Do you want numbers?")
    var isSpecChar = confirm("Do you want special characters '!@#$%^&*' included?")


    if (isUppercase){
      var uppercaseIndex = Math.floor(Math.random()*uppercase.length)
      newPassword = newPassword + uppercase[uppercaseIndex]
      userChoicePassword = userChoicePassword + uppercase.join("")
    }  
    
    if (isLowercase){
      var lowercaseIndex = Math.floor(Math.random()*lowercase.length)
      newPassword = newPassword + lowercase[lowercaseIndex]
      userChoicePassword = userChoicePassword + lowercase.join("")
    }
    
    if (isNumbers){
      var numericIndex = Math.floor(Math.random()*numeric.length)
      newPassword = newPassword + numeric[numericIndex]
      userChoicePassword = userChoicePassword + numeric.join("")
    }
    if (isSpecChar){
      var specCharIndex = Math.floor(Math.random()*specialChar.length)
      newPassword = newPassword + specialChar[specCharIndex]
      userChoicePassword = userChoicePassword + specialChar.join("")
    }

    var leftoverSize = passwordLength - newPassword.length
    userChoicePassword = userChoicePassword.split("")
    for(var i = 0;i < leftoverSize; i++){

        newPassword = newPassword + userChoicePassword[i]
    }


  }else{
    alert("Password cannot exceed 128 characters and mus be at least 8 characters long.")

  }

  return newPassword
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
