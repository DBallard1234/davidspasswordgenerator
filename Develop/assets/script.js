// Assignment code here
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]; 
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var special = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "'", "{", "}", "|", "~"];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

//Function to ask user questions about the criteria the generator needs to follow
function questions() { 
  var isValid = false;
  do{
    var length = prompt("Choose a password length. Length must be between 8 and 128 characters."); 
    var LowerCaseQuestion = confirm("Do you want the password to contain lower case letters?");
    var UpperCaseQuestion = confirm("Do you want the password to contain upper case letters?");
    var NumbersQuestion = confirm("Do you want your password to contain numerical values?"); 
    var SpecialCharactersQuestion = confirm("Do you want your paswoord to contain special characters? Example: @, &, *");
    var responses = {
      length: length,
      LowerCaseQuestion: LowerCaseQuestion, 
      UpperCaseQuestion: UpperCaseQuestion, 
      NumbersQuestion: NumbersQuestion,
      SpecialCharactersQuestion: SpecialCharactersQuestion
    } 
    if ((length < 8)||(length > 128))
    alert("Choose number between 8 and 128");
    else if((!LowerCaseQuestion)&&(!UpperCaseQuestion)(!NumbersQuestion)(!SpecialCharactersQuestion)) 
    alert("Choose at least one"); 
    else 
    isValid = true;
  } while(!isValid);
  return responses;
} 

// Function to geneerate password following the criteria set 
function generatePassword(){
  var passwordCriteria = questions();
  var potentialOutcomes = [];
  var finalOutput = "";

  if (passwordCriteria.LowerCaseQuestion) {
    for (var i of numbers)
    potentialOutcomes.push(i);
  } 
  if (passwordCriteria.UpperCaseQuestion) {
    for (var i of numbers)
    potentialOutcomes.push(i);
  } 
  if (passwordCriteria.NumbersQuestion) {
    for (var i of numbers)
    potentialOutcomes.push(i);
  } 
  if (passwordCriteria.SpecialCharactersQuestion) {
    for (var i of numbers)
    potentialOutcomes.push(i);
  } 

  console.log(potentialOutcomes);

  for (var i = 0; i < potentialOutcomes.length; i++) {
    finalOutput += potentialOutcomes[Math.floor(Math.random() * potentialOutcomes.length)];
  } 
  console.log(finalOutput);

  return finalOutput
} 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
