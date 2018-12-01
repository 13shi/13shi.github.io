$(function() {
 
  $(".modal").fancybox({
    'onComplete': function() {
      vidplay();
    }
  });
 
  function vidplay() {
    var video = document.getElementById("player");
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  }
 
});