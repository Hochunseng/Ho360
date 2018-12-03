/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

/* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function change ()
{
  var url = window.location.pathname;
  var filename = url.substring(url.lastIndexOf('/')+1);
  var elem = document.getElementById("follow")
  var newFollow = document.createElement('a');
  newFollow.setAttribute('href',filename);
  newFollow.innerHTML = document.title;
  if (elem.innerHTML=="Follow") {
    elem.innerHTML = "Following";
    elem.style.backgroundColor = "#4CAF50";
    document.getElementById("following").appendChild(newFollow);
  }

  else {
    elem.innerHTML = "Follow";
    elem.style.backgroundColor = "#008CBA";
    //document.getElementById("sideBarLinks").removeChild(document.getElementById("sideBarLinks").lastChild)
    //document.getElementById("following").removeChild(document.getElementById("following").lastChild);
    document.getElementById("following").innerHTML = "Following";
  }

}
