function writeComment() {
    var commentText = localStorage.getItem("commentText");
    var currTime = localStorage.getItem("currentTime");

    if(commentText) {
        var div = document.getElementsByClassName("next-comment")[0];
        console.log(div);
        var divClone = div.cloneNode(true);

        var line = document.getElementById("breakline");
        divClone.prepend(line);

        var postBody = divClone.querySelector('#postBody');
        postBody.innerHTML = commentText;

        var name = localStorage.getItem("username");
        var changeName = divClone.querySelector('#name');
        changeName.innerHTML = name;

        var changeTime = divClone.querySelector('#time');
        changeTime.innerHTML = currTime;

        var index = localStorage.getItem("index");
        var buttons = document.getElementsByClassName("btn");
        var comment = buttons[index];
        console.log(comment);
        var commentString = (String)(comment.innerHTML);
        console.log(commentString);
        var numOfComments = 0;
        var numberPosition;
        for(i = 0; i < commentString.length; i++) {
            if(parseInt(commentString.charAt(i))) {
                numOfComments = parseInt(commentString.charAt(i));
                numberPosition = i;
            }
        }

        console.log(numOfComments);

        var newCommentCount;
        var changedNumber;

        var collapse = document.getElementsByClassName("collapse")[index];
        var locationOfPost = collapse.querySelector("#postBody");
        if(numOfComments == 1) {
            console.log(index);
            locationOfPost.insertAdjacentElement('afterend', divClone);
            newCommentCount = numOfComments + 1;
            changedNumber = commentString.substr(0, numberPosition) + newCommentCount + commentString.substr(numberPosition + 1, commentString.length);
            console.log(changedNumber);
            comment.innerHTML = changedNumber;
        }
        if(numOfComments == 2) {
            locationOfPost = collapse.getElementsByClassName("next-comment")[0];
            console.log(locationOfPost);
            locationOfPost.insertAdjacentElement('afterend', divClone);
            newCommentCount = numOfComments + 1;
            changedNumber = commentString.substr(0, numberPosition) + newCommentCount + commentString.substr(numberPosition + 1, commentString.length);
            console.log(changedNumber);
            comment.innerHTML = changedNumber;
        }
        if(numOfComments == 0) {
            locationOfPost = collapse.getElementsByClassName("reply")[0];
            console.log(locationOfPost);
            locationOfPost.insertAdjacentElement('beforebegin', divClone);
            newCommentCount = numOfComments + 1;
            changedNumber = commentString.substr(0, numberPosition) + newCommentCount + commentString.substr(numberPosition + 1, commentString.length);
            console.log(changedNumber);
            comment.innerHTML = changedNumber;
        }
        console.log(collapse.innerHTML);

    }
}

writeComment();
