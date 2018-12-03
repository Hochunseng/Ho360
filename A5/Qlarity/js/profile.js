$( document ).ready(function() {
    console.log( "ready!" );
    var username = localStorage.getItem("username");
    console.log(username);
    x = document.getElementsByClassName("profileName");
    for(i = 0; i < x.length; i++) {
        x[i].innerHTML = username;
    }
});
