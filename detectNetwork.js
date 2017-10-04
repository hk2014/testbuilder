// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var firstDigit = parseInt(cardNumber.slice(0, 1));

  var firstTwoDigits = parseInt(cardNumber.slice(0, 2));
  
  var threeDigits = parseInt(cardNumber.slice(0, 3));
  
  var fourDigits = parseInt(cardNumber.slice(0, 4));
  
  var sixDigits = parseInt(cardNumber.slice(0, 6));
  
  var cardLength = cardNumber.length;


  if ( (firstTwoDigits === 38 || firstTwoDigits === 39) && cardLength === 14) {
    return 'Diner\'s Club';
  } else if ((firstTwoDigits === 34 || firstTwoDigits === 37) && cardLength === 15) {
    return 'American Express';
  } else if ( (firstTwoDigits >= 51 && firstTwoDigits <= 55) && (cardLength === 16) ) {
    return 'MasterCard';
  } else if ( (fourDigits === 6011 || (threeDigits >= 644 && threeDigits <= 649) || firstTwoDigits === 65) && (cardLength === 16 || cardLength === 19) ) {
    return 'Discover'
  } else if ( (fourDigits === 5018 || fourDigits === 5020 || fourDigits === 5038 || fourDigits === 6304) && (cardLength >= 12 && cardLength <= 19) ) {
    return 'Maestro';
  } else if ( ( (sixDigits >= 622126 && sixDigits <= 622925) || (threeDigits >= 624 && threeDigits <= 626) || (fourDigits >= 6282 && fourDigits <= 6288) ) && (cardLength >= 16 && cardLength <= 19) ) {
    return 'China UnionPay';
  } else if ( (fourDigits === 4903 || fourDigits === 4905 || fourDigits === 4911 || fourDigits === 4936 || sixDigits === 564182 || sixDigits === 633110 || fourDigits === 6333 || fourDigits === 6759) && (cardLength === 16 || cardLength === 18 || cardLength === 19) ) {
    return 'Switch';
  } else if ( (firstDigit === 4) && ( cardLength === 13 || cardLength === 16 || cardLength === 19) ) {
    return 'Visa';
  }
};






