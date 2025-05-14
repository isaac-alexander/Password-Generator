// function to generate a random password
const generatePassword = () => {
    // get the value from the length input
    const length = document.getElementById('length').value;

    // check which character types are selected using checkboxes
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeLowercase = document.getElementById('lowercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    // Define the character sets
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+{}[]<>?,./|';

    // initialize an empty string to hold all selected characters
    let allCharacters = '';

    // concatenate character sets based on user selection
    if (includeUppercase) allCharacters += upper;
    if (includeLowercase) allCharacters += lower;
    if (includeNumbers) allCharacters += numbers;
    if (includeSymbols) allCharacters += symbols;

    // If no character type is selected, show an alert and stop the function
    if (allCharacters === '') {
        alert("Please select at least one character type.");
        return;
    }

    // initialize an empty string for the final password
    let password = '';

    // loop through the desired password length
    for (let i = 0; i < length; i++) {
        // Generate a random index based on the available characters
        const randomIndex = Math.floor(Math.random() * allCharacters.length);

        // assigns the randomly selected character to the password string
        password += allCharacters.charAt(randomIndex);
    }

    // set the generated password into the input field
    document.getElementById('passwordOutput').value = password;
}

// adds a click event to the "Generate Password" button
document.getElementById('generateBtn').addEventListener('click', generatePassword);

const copyPassword = () => {
    //gets the input id and assigns it to the copyText variable
    const copyText = document.getElementById('passwordOutput');

    // Select the text field
    copyText.select();

    //selects from the first character(0) to the last character (99999)
    copyText.setSelectionRange(0, 99999); // For mobile devices

    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);

    // Alert the copied text
    alert("Password copied to clipboard!");
}