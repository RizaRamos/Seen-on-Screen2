var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}


function myFunction() {
  var x = document.getElementById("navMain");
  if (x.className.indexOf("riza-show") == -1) {
    x.className += " riza-show";
  } else {
    x.className = x.className.replace(" riza-show", "");
  }
}


var modal = document.getElementById('ticketModal');
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
