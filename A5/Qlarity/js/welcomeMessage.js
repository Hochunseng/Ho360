function getUsername() {
    console.log("Getting Username");    
    var username = localStorage.getItem("username");
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + username + "!";
}

$( document ).ready(function() {
    console.log( "ready!" );
    var username = localStorage.getItem("username");
    document.getElementById("welcomeMessage").innerHTML = "Welcome, " + username + "!";
});