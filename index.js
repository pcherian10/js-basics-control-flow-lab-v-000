// Write your code in this file!
function scuberGreetingForFeet(someValue) {

  let result;

    if (someValue <= 400) {
      result = "This one is on me!";
    }
    else if (someValue > 2000 && someValue <= 2500) {
      result = "I will gladly take your thirty bucks.";
    }
    else {
      result = "No can do.";
    }

  return result
}

function ternaryCheckCity(someCity) {

    let result;

    someCity == "NYC"  ? (result = "Ok, sounds good."):(result = "No go.");

    return result;

}



function switchOnCharmFromTip(someValue) {

    let result;

    if (someValue == "generous") {
        result = "Thank you so much.";
    }
    else if (someValue == "not as generous") {
        result = "Thank you.";
    }
    else {
        result = "Bye."
    }

    return result;
}
