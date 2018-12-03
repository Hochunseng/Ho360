function store(){
    console.log("Storing Username")
    var inputUsername = document.getElementById("username");
    localStorage.setItem("username", inputUsername.value);
}