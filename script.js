var lastScrollTop = 0;
var navBer = document.querySelector("#navber");

window.addEventListener('scroll',function(){
  var scrollTOp = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTOp>lastScrollTop){
    navBer.style.top = "-1000px";
  }else{
    navBer.style.top = "0";
  }
  lastScrollTop = scrollTOp;
});