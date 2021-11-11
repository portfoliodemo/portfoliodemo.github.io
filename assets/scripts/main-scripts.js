

// Get the button:
// const MYBUTTON = document.getElementById("scrollToTopBtn");
let mybutton = document.getElementById("scrollToTopBtn");
// let formButton = document.getElementById("btn-tattoo-review").addEventListener("click", displayForm);

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// function displayForm() {
//   document.getElementById("book-tattoo-form").textContent = "Test Text";
// }

//const navigation = document.getElementById('nav-menu-icon');

// function toggleMenu() {

    // if (navigation.style.display === "block") {
    //     navigation.style.display = "none";
    // } else {
    //     navigation.style.display = "block";
    // }
// }