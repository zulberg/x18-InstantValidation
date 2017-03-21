function register(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;
  alert("Username is "+ userEntered + " "+"Password is "+ passEntered);
}
function validateUserName(){
  var userEntered = document.getElementById("user").value;
  var strlen = userEntered.length;
  var pos = userEntered.indexOf(" ");
  if (strlen >= 6 && pos == -1) {
    document.getElementById("usernameGroup").classList.add("has-success");
    document.getElementById("usernameGroup").classList.remove("has-error");
    } else {
    document.getElementById("usernameGroup").classList.add("has-error");
    document.getElementById("usernameGroup").classList.remove("has-success");
    document.getElementById("usernameError").innerHTML="Username must be at least 6 characters and cannot contain spaces.";
    //Show message that there is an error with the username...
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
  }
}
function validatePassword() {
  var passEntered = document.getElementById("pass").value;
  var passlen = passEntered.length;
  if (passEntered == "password" || passlen < 6 || passlen > 32) {
      //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="You cannot choose that.  Try another password.";
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
    document.getElementById("passwordGroup").classList.remove("has-success");
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    } else {
        //Turn password items green
    document.getElementById("passwordError").innerHTML="Password is now acceptable.";
    document.getElementById("passwordGroup").classList.add("has-success");
    document.getElementById("passwordGroup").classList.remove("has-error");
  }
}
