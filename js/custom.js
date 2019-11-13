
/*window.onscroll = function() {
    var nystories = document.querySelector("p").offsetTop;
  if (window.pageYOffset > 0) {
 var opac = (window.pageYOffset);
    console.log(opac);
    opac = 0;
  document.body.style.background = "linear-gradient(rgba(255, 255, 255, " + opac + "), rgba(255, 255, 255, " + opac + ")), url(/img/background.jpg) no-repeat";
  }
}

$('.nav a').on('click', function(){
  $('.btn-navbar').click(); //bootstrap 2.x
  $('.navbar-toggle').click(); //bootstrap 3.x by Richard
  $('.navbar-toggler').click(); //bootstrap 4.x
});*/

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});