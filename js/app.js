// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var myBtn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
myBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/*// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
let myBtn = document.getElementById("myBtn");

// Get the offset position of the navbar
var sticky = myBtn.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    myBtn.classList.add("sticky");
  } else {
    myBtn.classList.remove("sticky");
  }
}*/
const intro1 = document.getElementById("intro");
const bestfeatures = document.getElementById("best-features");
const examples = document.getElementById("examples");
const logo = document.getElementById("logo");

window.onload = function() {myFunction1()};
function myFunction1(){
    intro1.classList.add("slideRight");
    myBtn.classList.add("slideDown");
    logo.classList.add("slideUp");
}



window.onscroll = function() {myFunction(), myFunction2()};

setTimeout(function myFunction() {
       //bestfeatures.classList.remove("hide");
       //bestfeatures.classList.add("show");
          bestfeatures.classList.add("slideUp");
         
}, 500);

setTimeout(function myFunction2() {

    examples.classList.add("slideRight");
 
 
}, 2000);
