window.addEventListener('scroll', function() {
  var bg = document.getElementById('bg');
  bg.style.transform = "translate(0, " + -pageYOffset/5 + "px" + ")";
});
