function 
meetCelebrity(){
  var password=
      document.getElementById("passwordBox2");
  /*add. toUpperCase() String function so that eeven if the user types in the password in lower-case, it will check against uppercase password text*/
  var passwordText = password.value.toUpperCase(); if(passwordText == "ELLEN" ) { return true;
   }
  alert("This is incorrect, try again!"); return false;
}