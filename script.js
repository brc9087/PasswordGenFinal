var specialCharacters = [
    '!',
    '@',
    '#',
    '$',
    '%',
    '^',
    '&',
    '*',
    '(',
    ')',
    '-',
    '+',
    '+'
];

var numChar = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
]

var lowerCaseChar = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

var upperCaseChars = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];

// Function to prompt user for password options
function getPassWordOptions() {
    var length = parseInt(
        prompt('How many characters do you want in your password?')
    );

    // Conditional statement to check if password length is a number. Prompts end if this evaluates false
    if (isNaN(length) === true) {
        alert('Please input a number');
        return;
    }

    // Conditional statement to check if password length is at least 8 characters long. Prompts end if this evaluates false
    if (length < 8) {
        alert('Password must be at least 8 characters!');
        return;
    };

    // Conditional statement to check if password length is less than 128 characters long. Prompts end if this evaluates false
    if (length > 128) {
        alert('Password must be less than 128 characters long!');
        return;
    };

    // Variable to store boolean regarding the inclusion of special characters
    var hasSpecialCharacters = confirm(
        'Click ok if you want to include special characters'
    );

    // Variable to store boolean regarding the inclusion of numeric characters
    var hasNumericCharacters = confirm(
        'Click ok if you want to include numeric characters'
    );

    // Variable to store boolean regarding the inclusion of lowercase characters
    var hasLowerCasedCharacters = confirm(
        'Click ok for LowerCase characters'
    );

    // Variable to store boolean regarding the inclusion of uppercase characters
    var hasUpperCasedCharacters = confirm(
        'Click ok for UpperCase characters'
    );

    // Conditional statement to check if user does not include any types of characters. Password generator ends if all four variables evaluate to false
    if (
        hasSpecialCharacters === false &&
        hasNumericCharacters === false &&
        hasLowerCasedCharacters === false &&
        hasUpperCasedCharacters === false
    ) {
        alert('Please select at least one character type!');
        return;
    };

    // Object to store user input
    var passwordOptions = {
        length: length,
        hasNumericCharacters: hasNumericCharacters,
        hasSpecialCharacters: hasSpecialCharacters,
        hasLowerCasedCharacters: hasLowerCasedCharacters,
        hasUpperCasedCharacters: hasUpperCasedCharacters
    };
    return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
    var randIndex = Math.floor(Math.random() * arr.length);
    var randElement = arr[randIndex];
    return randElement;
}

// Function to generate password with user input
function generatePassword() {
    var options = getPassWordOptions();
    // Variable to store password as it's being concatenated
    var result = [];

    // Array to store types of characters to include in password
    var possibleCharacters = [];

    // Array to contain one of each type of chosen character to ensure each will be used
    var guaranteedCharacters = [];

    // Conditional statement that adds array of special characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasSpecialCharacters) {
        possibleCharacters = possibleCharacters.concat(specialCharacters);
        guaranteedCharacters.push(getRandom(specialCharacters));
    };

    // Conditional statement that adds array of numeric characters into array of possible characters based on user input
    // Push new random special character to guaranteedCharacters
    if (options.hasNumericCharacters) {
        possibleCharacters = possibleCharacters.concat(hasNumericCharacters);
        guaranteedCharacters.push(getRandom(numericCharacters));
    };

    // Conditional statement that adds array of lowercase characters into array of possible characters based on user input
    // Push new random lower-cased character to guaranteedCharacters
    if (options.hasLowerCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(hasLowerCasedCharacters);
        guaranteedCharacters.push(getRandom(lowerCasedCharacters));
    };

    // Conditional statement that adds array of uppercase characters into array of possible characters based on user input
    // Push new random upper-cased character to guaranteedCharacters
    if (options.hasUpperCasedCharacters) {
        possibleCharacters = possibleCharacters.concat(hasUpperCasedCharacters);
        guaranteedCharacters.push(getRandom(hasUpperCasedCharacters));
    };

    // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
    for (var i = 0; i < options.length; i++) {
        var possibleCharacter = getRandom(possibleCharacters);
        result.push(possibleCharacter)
    };

    // Mix in at least one of each guaranteed character in the result
    for (var i = 0; i < guaranteedCharacters.length; i++) {
        result[i] = guaranteedCharacters[i];
    };

    // Transform the result into a string and pass into writePassword
    return result.join('');






}

