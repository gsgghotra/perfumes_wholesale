//Function for slides on home page
//Validation by Gurjeet Singh
var slideIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) {slideIndex = 1}
    x[slideIndex-1].style.display = "block";
    setTimeout(carousel, 4000);
}
//
// Get the modal

//There are multiple variables for multiple models
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
var modal4 = document.getElementById('myModal4');
var modal5 = document.getElementById('myModal5');
var modal6 = document.getElementById('myModal6');
var modal7 = document.getElementById('myModal7');
var modal8 = document.getElementById('myModal8');

// Get the button that opens the modal
//There are multiple variables for multiple models
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("myBtn2");
var btn3 = document.getElementById("myBtn3");
var btn4 = document.getElementById("myBtn4");
var btn5 = document.getElementById("myBtn5");
var btn6 = document.getElementById("myBtn6");
var btn7 = document.getElementById("myBtn7");
var btn8 = document.getElementById("myBtn8");

// Get the <span> element that closes the modal
//There are multiple variables for multiple models
var span = document.getElementsByClassName("close")[0];
var span2 = document.getElementsByClassName("close")[1];
var span3= document.getElementsByClassName("close")[2];
var span4 = document.getElementsByClassName("close")[3];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
  modal2.style.display = "block";
}
btn3.onclick = function() {
  modal3.style.display = "block";
}
btn4.onclick = function() {
  modal4.style.display = "block";
}



// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}
span2.onclick = function() {
  modal2.style.display = "none";
}
span3.onclick = function() {
  modal3.style.display = "none";
}
span4.onclick = function() {
  modal4.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal)  {
    modal.style.display = "none";
  } else if (event.target == modal2)  {
    modal2.style.display = "none";
  } else if (event.target == modal3)  {
    modal3.style.display = "none";
  } else if (event.target == modal4)  {
    modal4.style.display = "none";
  }
}

// Show and hide divs on mobiles pages for different network deals.
function showmobile1(target){
document.getElementById("calvin1n_1").style.display = 'none';
document.getElementById("calvin1n_2").style.display = 'none';
document.getElementById("calvin1n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}
function showmobile2(target){
document.getElementById("calvin2n_1").style.display = 'none';
document.getElementById("calvin2n_2").style.display = 'none';
document.getElementById("calvin2n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}
function showmobile3(target){
document.getElementById("calvin3n_1").style.display = 'none';
document.getElementById("calvin3n_2").style.display = 'none';
document.getElementById("calvin3n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}
function showmobile4(target){
document.getElementById("calvin4n_1").style.display = 'none';
document.getElementById("calvin4n_2").style.display = 'none';
document.getElementById("calvin4n_3").style.display = 'none';
document.getElementById(target).style.display = 'block';
}