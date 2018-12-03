function appendPostProfile() {
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


    var currTime;

    if(content) {
        currTime = localStorage.getItem("questionTime");
        var div = document.getElementsByClassName("question")[0];
        console.log(div);
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
        likeCount.setAttribute("onclick", "changeImage(this, 0)");

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 0; i < questionHashtags.length; i++) {
            if(questionHashtags[i]) {
                allHashtagsQuestion += questionHashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsQuestion;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#q-firstcomment2");
        console.log(changeComment);

        var changeCollapse = divClone.querySelector('.collapse');
        console.log(divClone);
        changeCollapse.setAttribute("id", "q-firstcomment2");

        console.log(divClone);

        var postLocation = document.getElementById("post");
        postLocation.insertAdjacentElement('beforebegin', divClone);
        divClone.insertAdjacentElement('afterend', document.createElement("br"));


        //document.getElementsByClassName("heart")[0].setAttribute("onclick", "changeImage(this,0)");
        for(i = 0; i < document.getElementsByClassName("heart").length;i++) {
            document.getElementsByClassName("heart")[i].setAttribute("onclick", "changeImage(this," + i + ")");
        }


    }

    if(recommendation) {
        currTime = localStorage.getItem("recommendationTime");
        var div = document.getElementsByClassName("question")[1];
        console.log(div);
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

        var likeCount = divClone.querySelector('.heart');
        likeCount.setAttribute("onclick", "changeImage(this, 2)");

        var changeHashtag = divClone.querySelector('#hashtag');
        for(i = 0; i < recommendationHashtags.length; i++) {
            if(recommendationHashtags[i]) {
                allHashtagsRecommendation += recommendationHashtags[i];
            }
        }
        changeHashtag.innerHTML = allHashtagsRecommendation;

        var changeComment = divClone.querySelector(".btn");
        changeComment.setAttribute("data-target", "#r-nocomment2");

        var changeCollapse = divClone.querySelector('.collapse');
        changeCollapse.setAttribute("id", "r-nocomment2");

        console.log(divClone);

        var recommendationTab = document.getElementsByClassName("recommendation")[0];
        recommendationTab.insertAdjacentElement('beforebegin', divClone);
        divClone.insertAdjacentElement('afterend', document.createElement("br"));


        //document.getElementsByClassName("heart")[0].setAttribute("onclick", "changeImage(this,2)");   
        for(i = 0; i < document.getElementsByClassName("heart").length;i++) {
            document.getElementsByClassName("heart")[i].setAttribute("onclick", "changeImage(this," + i + ")");
        }
    }


}

appendPostProfile();