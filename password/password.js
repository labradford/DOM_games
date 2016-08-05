
  function yourId() {
    //get user id from text box
    var userId = document.getElementById("userId").value;
    console.log(userId);
    //get user password from text box
    var password = document.getElementById("password").value;
    console.log(password);
    //check to make sure user id is different from password and it is more than 6 characters long and it doesn't includes a !, # or $
    var Identification = (userId != password  && userId.length >= 6 && (!userId.includes("!") && !userId.includes("#") && !userId.includes("$")));
    //check to make sure password is not equal to the string "password", and that it does include either !, # or $
    var pass = (password != "password")
      && (password.includes("!") || password.includes("#") || password.includes("$"))
      //and also checks to make sure it includes a number
      && (password.includes("0") || password.includes("1") || password.includes("2") || password.includes("3") || password.includes("4") || password.includes("5") || password.includes("6") || password.includes("7") || password.includes("8") || password.includes("9"))
      //and checks to make sure there is at least one uppercase and one lowercase letter
      && (password != password.toUpperCase() && password != password.toLowerCase());

      //checks to see if Identification is false, give user feedback that it is not valid
    if (Identification === false) {
      document.getElementById("userId").value = "";
      document.getElementById("userIdError").innerHTML = "User id not valid. Please try again";
    }

    //checks to see if pass is false, give user feedback that it is not valid
    if (pass === false) {
      document.getElementById("password").value = "";
      document.getElementById("passwordError").innerHTML = "Password not valid. Please try again";
    }

    //clear the error message if Identification is true but pass is false
    if (Identification === true && pass === false) {
      document.getElementById("userIdError").innerHTML = "";
    }
    //clear the error message if pass is true but Identification is false
    if (pass === true && Identification === false) {
      document.getElementById("passwordError").innerHTML = "";
    }
      //gives user feedback that their user id and password are valid
    if (Identification === true && pass === true) {
        document.getElementById("feedback").innerHTML = "Your credentials are valid";
        document.getElementById("password").value = "";
        document.getElementById("userId").value = "";
        document.getElementById("passwordError").innerHTML = "";
        document.getElementById("userIdError").innerHTML = "";
    }
  }
