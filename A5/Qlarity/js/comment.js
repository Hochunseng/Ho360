function postComment(i) {
    console.log("Storing Text Box");
    var texts = document.getElementsByClassName("replyBox");
    var commentText = texts[i];
    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    currTime = new Date().toLocaleDateString() + " " + currTime;
    localStorage.setItem("commentText", commentText.value);
    localStorage.setItem("index", i);
    localStorage.setItem("currentTime", currTime);
    location.reload(true);
}