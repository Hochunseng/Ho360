function appendPost() {
    var content = localStorage.getItem("postQuestionText");
    var recommendation = localStorage.getItem("postRecommendationText");
    var questionHashtags = JSON.parse(localStorage.getItem("questionHashtags"));
    var recommendationHashtags = JSON.parse(localStorage.getItem("recommendationHashtags"));
    var allHashtagsQuestion = "";
    var allHashtagsRecommendation = "";
    var hashtagQuestionLink = "";
    var hashtagRecommendationLink = "";

    for(i = 0; i < questionHashtags.length; i++) {
        if(questionHashtags[i]) {
            hashtagQuestionLink = questionHashtags[i];
            hashtagQuestionLink = hashtagQuestionLink.substring(1, hashtagQuestionLink.length);
            break;
        }
    }

    if(recommendationHashtags) {
        for(i = 0; i < recommendationHashtags.length; i++) {
            if(recommendationHashtags[i]) {
                hashtagRecommendationLink = recommendationHashtags[i];
                hashtagRecommendationLink = hashtagRecommendationLink.substring(1, hashtagRecommendationLink.length);
                break;
            }
        }
    }


    for(i = 0; i < questionHashtags.length; i++) {
        if(questionHashtags[i]) {
            allHashtagsQuestion += questionHashtags[i];
        }
    }

    if(recommendationHashtags) {
        for(i = 0 ; i < recommendationHashtags.length; i++) {
            if(recommendationHashtags[i]) {
                allHashtagsRecommendation += recommendationHashtags[i];
            }
        }
    }


    var currTime;

    if(content) {
        currTime = localStorage.getItem("questionTime");
        var div = document.getElementsByClassName("question")[2];
        document.getElementById("hashtag").setAttribute("href", hashtagRecommendationLink + ".html");
        var divClone = div.cloneNode(true);

        console.log(divClone);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = content;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var likeCount = divClone.querySelector('.heart');
        likeCount.setAttribute("onclick", "changeImage(this, 3)");

        var changeHashtag = divClone.querySelector('#hashtag');
        
        changeHashtag.innerHTML = allHashtagsQuestion;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#q-nocomment2");

        var changeCollapse = divClone.querySelector('.collapse');
        changeCollapse.setAttribute("id", "q-nocomment2");

        localStorage.setItem("questionClone", divClone);

        var questionTab = document.getElementById("questionTab");

        var postLocation = document.getElementById("post");
        postLocation.insertAdjacentElement('beforebegin', divClone);
        divClone.insertAdjacentElement('afterend', document.createElement("br"));

        document.getElementsByClassName("heart")[0].setAttribute("onclick", "changeImage(this,0)");
    }

    if(recommendation) {
        currTime = localStorage.getItem("recommendationTime");
        var div = document.getElementsByClassName("question")[3];
        document.getElementById("hashtag").setAttribute("href", hashtagQuestionLink + ".html");
        var divClone = div.cloneNode(true);

        console.log(divClone);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = recommendation;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var changeLikeCount = divClone.querySelector('.heartCount');
        changeLikeCount.innerHTML = "0 Likes";

        var changeHashtag = divClone.querySelector('#hashtag');

        changeHashtag.innerHTML = allHashtagsRecommendation;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#q-nocomment3");

        var changeCollapse = divClone.querySelector('.collapse');
        changeCollapse.setAttribute("id", "q-nocomment3");


        var questionTab = document.getElementById("recommendationTab");
        console.log(questionTab);

        var recommendationLoc = questionTab.querySelector("#post");
        recommendationLoc.insertAdjacentElement('beforebegin', divClone);
        divClone.insertAdjacentElement('afterend', document.createElement("br"));

        document.getElementsByClassName("heart")[4].setAttribute("onclick", "changeImage(this,4)");
    }

}

appendPost();
