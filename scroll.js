//parallax scrolling effect
window.addEventListener('scroll', function() {
  var bg = document.getElementById('bg');
  bg.style.transform = "translate(0, " + -pageYOffset/5 + "px" + ")";
  var bar = document.getElementById('bar')
  if(document.body.scrollTop > 120 || document.documentElement.scrollTop > 120){
    bar.classList.remove("bar-static");
    bar.classList.add("bar-moving");
  }
  else{
    bar.classList.add("bar-static");
    bar.classList.remove("bar-moving");
  }
});
function moveScroll(scrollPos){
  document.getElementById("p"+scrollPos).scrollIntoView({behavior: 'smooth', block: 'start'});
}
