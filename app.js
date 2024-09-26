
const scrollDown = document.getElementById('scrolldown');

scrolldown.addEventListener('click', function() {
    window.scrollBy(0, .7*window.innerHeight); // Scroll down by one viewport height
});

// $(window).bind('scroll', function() {
//   if ($(window).scrollTop() > 10) {
//       $('#scrolldown').hide();
//   }
//   else {
//       $('#scrolldown').show();
//   }
// });