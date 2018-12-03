function storeQuestion(i){
    console.log("Storing Text Box");
    var texts = document.getElementsByClassName("textBox");
    var postText = texts[i];
    localStorage.setItem("postQuestionText", postText.value);
    var test = localStorage.getItem("postQuestionText");
    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    currTime = new Date().toLocaleDateString() + " " + currTime;
    localStorage.setItem("questionTime", currTime);
    console.log(test);

    var checks = document.getElementsByClassName("check");
    var hashtags = [];
    for(index = 0; index < checks.length; index++) {
      if(checks[index].checked) {
        hashtags[index] = checks[index].value;
        console.log(checks[index].value);
      }
    }
    localStorage.setItem("questionHashtags", JSON.stringify(hashtags));

    alert("Your question has been submitted");
}
function storeRecommendation(i) {
    console.log("Storing Text Box");
    var texts = document.getElementsByClassName("textBox");
    var postText = texts[i];
    localStorage.setItem("postRecommendationText", postText.value);
    var test = localStorage.getItem("postRecommendationText");
    var currTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    currTime = new Date().toLocaleDateString() + " " + currTime;
    localStorage.setItem("recommendationTime", currTime);
    console.log(test);

    var checks = document.getElementsByClassName("check");
      var hashtags = [];
      for(index = 0; index < checks.length; index++) {
        if(checks[index].checked) {
          hashtags[index] = checks[index].value;
          console.log(checks[index].value);
        }
      }
      localStorage.setItem("recommendationHashtags", JSON.stringify(hashtags));
    
      alert("Your recommendation has been submitted");
}
