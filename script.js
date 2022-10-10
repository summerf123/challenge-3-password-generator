// Assignment Code
var generateBtn = document.querySelector("#generate");
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
  //ask user how many characters they want the password to be
  let preferredLengthConfirm = prompt(
    "how many characters do you want password to be? choose at least 8 characters and no more than 128"
  );

  console.log("length want password to be: " + preferredLengthConfirm);

  //need to run this sequence each time input is too short or too long but executing the function initializePassword all over again

  if (preferredLengthConfirm < 8) {
    alert("your input is too short");
    initializePassword();
  } else if (preferredLengthConfirm > 128) {
    alert("your password is too long!");
    initializePassword();
  } else {
    alert(
      `okay, your password will be ${preferredLengthConfirm} characters long`
    );
    generatePassword(preferredLengthConfirm);
    //User input for the preferredLengthConfirm is the desired length. This value is called in the function below in the passwordLength parameter and is inserted there to run the function.
  }
}
function generatePassword(passwordLength) {
  //run confirm boxes to see what type of characters user wants to include in password
  let specialCharConfirm = confirm(
    "Click 'OK' if you want to include special characters?"
  );
  {
    console.log("want special characters? " + specialCharConfirm);
  }

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
    console.log("want numbers? " + lowercaseConfirm);

    let newArray = [];
    if (uppercaseConfirm) {
      newArray = [...newArray, ...uppercase];
      console.log(newArray);
    }
    if (lowercaseConfirm) {
      newArray = [...newArray, ...lowercase];
      console.log(newArray);
    }
    if (specialCharConfirm) {
      newArray = [...newArray, ...specialChar];
      console.log(newArray);
    }
    if (numConfirm) {
      newArray = [...newArray, ...numbers];
      console.log(newArray);
    }
    // console.log(newArray);

    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
      let randomIndex = Math.floor(Math.random() * newArray.length);
      randomPassword += newArray[randomIndex];
    }
    console.log(randomPassword);
    document.getElementById("password").innerHTML = randomPassword;

    //   if (uppercaseConfirm === true) {
    //     alert("OK your password will contain special characters");
    //   } else if (uppercaseConfirm === false) {
    //     alert("You do not want to include special characters");
    //   }
    //   //STORE the data to include/not include uppercase characters based on user input***********
  }
}
generateBtn.addEventListener("click", initializePassword);
// ===========original code given===============
// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }

// // Add event listener to generate button, once user clicks on button# generate, will call function createPassword (call back function is triggered)
