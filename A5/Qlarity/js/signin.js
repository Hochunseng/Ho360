$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

function store(){
    console.log("Storing Username")
    var inputUsername = document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);
}