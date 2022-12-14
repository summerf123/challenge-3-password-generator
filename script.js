// assign variable generateBtn and make it equal to return the first element with id of generate, whic is out button
var generateBtn = document.querySelector("#generate");
console.log(generateBtn);
// passwordOptions contains all necessary string data needed to generate the password for user
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "%",
  "&",
  ",",
  "*",
  "+",
  "-",
  ".",
  "/",
  "<",
  ">",
  "?",
  "~",
];
var lowercase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var uppercase = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

//create a function that will execute and run the code like a for loop
function initializePassword() {
  //use a prompt to ask user how many characters they want the password to be
  let preferredLengthConfirm = prompt(
    "how many characters do you want password to be? choose at least 8 characters and no more than 128"
  );

  console.log("length want password to be: " + preferredLengthConfirm);

  //need to run this sequence each time input is too short or too long by executing the function initializePassword all over again if input does not satisfy criteria
  if (!preferredLengthConfirm) {
    alert("you cancelled the password generator");
    return;
  } else if (preferredLengthConfirm < 8) {
    alert("your input is too short");
    initializePassword();
  } else if (preferredLengthConfirm > 128) {
    alert("your password is too long!");
    initializePassword();
  } else if (!/^[0-9]+$/.test(preferredLengthConfirm)) {
    alert("You did not enter a number.Please enter the desired length");
    initializePassword();
  } else if (!preferredLengthConfirm) {
    alert("you cancelled the password generator");
    return;
  } else
    alert(
      `okay, your password will be ${preferredLengthConfirm} characters long`
    );

  return preferredLengthConfirm;
  //User input for the preferredLengthConfirm is the desired length. This value is called in the function below in the passwordLength parameter and is inserted there to run the function.
}

function validatePassword(passwordLength) {
  //run confirm boxes to see what type of characters user wants to include in password
  let specialCharConfirm = confirm(
    "Click 'OK' if you want to include special characters?"
  );

  console.log("want special characters? " + specialCharConfirm);

  let uppercaseConfirm = confirm(
    "Click 'OK' if you want to include uppercase characters?"
  );
  {
    console.log("want uppercase? " + uppercaseConfirm);

    let lowercaseConfirm = confirm(
      'Click "OK" if you want to include lowercase characters'
    );
    console.log("want lowercase? " + lowercaseConfirm);

    let numConfirm = confirm('Click "OK" if you want to include numbers');
    console.log("want numbers? " + numConfirm);
    // Loop to beginning of generatePW function if user never selects any speical characters
    if (
      specialCharConfirm === false &&
      uppercaseConfirm === false &&
      lowercaseConfirm === false &&
      numConfirm === false
    ) {
      alert("You must choose at least one special character parameter");
      return false;
    } else {
      return {
        specialCharConfirm: specialCharConfirm,
        uppercaseConfirm: uppercaseConfirm,
        lowercaseConfirm: lowercaseConfirm,
        numConfirm: numConfirm,
      };
    }
  }
}
function generatePassword(validatedPassword, passwordLength) {
  uppercaseConfirm = validatedPassword.uppercaseConfirm;
  lowercaseConfirm = validatedPassword.lowercaseConfirm;
  specialCharConfirm = validatedPassword.specialCharConfirm;
  numConfirm = validatedPassword.numConfirm;

  //create empty array called newArray that uses a spread operator to spread the array of each declared array from the top of code
  let newArray = [];
  if (uppercaseConfirm) {
    newArray = [...newArray, ...uppercase];
    console.log("uppercase" + newArray);
  }
  if (lowercaseConfirm) {
    newArray = [...newArray, ...lowercase];
    console.log("lowercase" + newArray);
  }
  if (specialCharConfirm) {
    newArray = [...newArray, ...specialChar];
    console.log("specialChar" + newArray);
  }
  if (numConfirm) {
    newArray = [...newArray, ...numbers];
    console.log("numconfirm" + newArray);
  }
  console.log("pw length:" + passwordLength);
  let randomPassword = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * newArray.length);
    //this will log each index of the randomly selected characters that passes the amount of times the user selected the length for
    console.log(randomIndex);
    randomPassword += newArray[randomIndex];
  }
  console.log(randomPassword);
  document.getElementById("password").innerHTML = randomPassword;
}
//when user clicks on generate button, execute main function
generateBtn.addEventListener("click", main);

function main() {
  preferredLengthConfirm = initializePassword(); //returns # of characters user input

  let validatedPassword = false;

  while (validatedPassword == false) {
    validatedPassword = validatePassword(preferredLengthConfirm);
  }

  generatePassword(validatedPassword, preferredLengthConfirm);
}
