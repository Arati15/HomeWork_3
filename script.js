//create an array of special Characters
let specialCharacters = ['@', '%', '+', '\\', '/', "'", '!', '#','$', '^', '?', ':', ',', ')', '(', '}','{', ']', '[', '~', '-', '_', '.'];

//create an array of lowerCased Characters
let lowerCasedLetters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

//create an array of numaric characters Characters
let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

//create an array of uppercased characters Characters
let upperCasedLetters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X', 'Y','Z'];

//create a fuction to prompt user for password option
function PasswordRequirements() {

  //variable to store password length which is from user input  
  let length = parseInt(
        
        prompt("What would you like the length of your password to be?") );

        //condition to check if length is number if not prompt end
        if (isNaN(length) === true) {

            alert('Please type in a number as your password length.');
            return;
        }

        //condition to check if length is less than 8 if not prompt end
        if (length < 8) {

            alert("Sorry, your password length must be between 8 and 129 characrers.");
        }


        //condition to check if length must be less than 129 if not prompt end
        if (length > 129) {

            alert('Sorry, your password length must be between 8 and 129 characters.');

            return;
        }

        // Variable to store boolean regarding the inclusion of numeric characters
        let containsNumbers = confirm("click OK to add numbers.");

        // Variable to store boolean regarding the inclusion of special  characters
        let containsSpecialCharacters = confirm("Click OK to add special characters.");

       // Variable to store boolean regarding the inclusion of lowercased characters
        let containsLowercasedLetters = confirm("Click OK to add lowercased letters.");

        // Variable to store boolean regarding the inclusion of uppercased characters
        let containsUppercasedLetters = confirm("Click OK to add Uppercased Letter.");

        //check if user input does not include any of character type
        if (
            containsSpecialCharacters === false && containsNumbers === false &&

            containsUppercasedLetters === false &&containsLowercasedLetters === false
          )
           {
              alert('Please select at least one character type');
              return;
            }

            //create an object to store user input
            
        let pwordOptions = {
          length: length,

          containsSpecialCharacters: containsSpecialCharacters,

          containsNumbers: containsNumbers,

          containsUppercasedLetters: containsUppercasedLetters,

          containsLowercasedLetters: containsLowercasedLetters
       };
        
          return pwordOptions;
} 

//function to get random element from an array
function getRandomElement(arr) {
    let randomValue = Math.floor(Math.random() * arr.length);
    let randomElement = arr[randomValue];
  
    return randomElement;
  }

//function to generate password with user input
  function generatePword() {

    // 1. fuction call PassWordRequirements()----------------------------------
    let options = PasswordRequirements();

    //variable to store password as it's being concatenate
    let result = [];

    //array to store character to include in password
    let mixedCharacters = [];

    // Array to contain one of each type of chosen character to ensure each will be used
    let chosenCharacters = [];

    // Conditional statement that adds array of specialcharacters into array of possible characters based on user input
    // Push new random numeric character to chosenCharacters
    if (options.containsSpecialCharacters) {
        mixedCharacters = mixedCharacters.concat(specialCharacters);
        chosenCharacters.push(getRandomElement(specialCharacters));
    }

    // Conditional statement that adds array of lowerCased characters into array of possible characters based on user input
    // Push new random numeric character to chosenCharacters
    if (options.containsLowercasedLetters) {
        mixedCharacters = mixedCharacters.concat(lowerCasedLetters);
        chosenCharacters.push(getRandomElement(lowerCasedLetters));
    }

    // Conditional statement that adds array of upperCased characters into array of possible characters based on user input
    // Push new random numeric character to chosenCharacters
    if (options.containsUppercasedLetters) {
        mixedCharacters = mixedCharacters.concat(upperCasedLetters);
        chosenCharacters.push(getRandomElement(upperCasedLetters));
    }

    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random numeric character to chosenCharacters
    if (options.containsNumbers) {
        mixedCharacters = mixedCharacters.concat(numbers);
        chosenCharacters.push(getRandomElement(numbers));
    }

    // For loop to iterate over the password length from the options object, 
    //selecting random indices from the array of possible characters 
    //and concatenating those characters into the result variable
    for (let i = 0; i < options.length; i++) {
        let usedCharacter = getRandomElement(mixedCharacters);

        result.push(usedCharacter);
    }

   // Mix in at least one of each chosen character in the result
    for (let i = 0; i < chosenCharacters.length; i++) {
        result[i] = chosenCharacters[i];
    }
    //trasnform the result into a string and pass into writePassword
    return result.join('');
}


//get reference to the #generate element
let generateBtn = document.querySelector('#generate');

// Call back fuction to Write password to the #password input
function writePassword() {
    // 2. function call generatePword()
    let password = generatePword();

    //take #password html tag
    let passwordText = document.querySelector('#password');

    //update value of the tag
    passwordText.value = password;
}

// Add enent listener to generate button
generateBtn.addEventListener('click', writePassword);


