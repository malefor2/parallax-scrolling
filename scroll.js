//parallax scrolling effect
var topMargin = 90;
// window.addEventListener('scroll', function() {
//   var bg = document.getElementById('bg');
//   bg.style.transform = "translate(0, " + -pageYOffset/5 + "px" + ");
//   var bar = document.getElementById('bar');
//     if(document.documentElement.clientWidth < 600){
//       if(document.body.scrollTop > topMargin
//         || document.documentElement.scrollTop > topMargin){//toggleclass
//         bar.classList.remove("bar-static");
//         bar.classList.add("bar-moving");
//       }
//       else{//toggle class
//         bar.classList.add("bar-static");
//         bar.classList.remove("bar-moving");
//       }
//     }
//     else{
//       bar.classList.add("bar-moving");
//       bar.classList.remove("bar-static");
//     }
//   });
function moveScroll(scrollPos){
  $('html, body').animate({
    scrollTop: $("#p"+scrollPos).offset().top -50
  }, 500);
}
$(document).ready(function(){
  $(window).scroll(function(){
    $('#bg').css('transform', 'translate(0,'+ -pageYOffset/5 + 'px)');
    if($(window).width() < 600){
      if($(window).scrollTop() > topMargin){
        $('#bar').removeClass("bar-static").addClass("bar-moving");
      }else{
        $('#bar').removeClass("bar-moving").addClass("bar-static");
      }
    }else{
      $('#bar').removeClass("bar-static").addClass("bar-moving");
    }
  });
});
