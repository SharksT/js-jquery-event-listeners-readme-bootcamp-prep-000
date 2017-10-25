//define functions here

$(document).ready(function(){

// call functions here
function getIt() {

$("p").on("click",function(){
  alert("Hey!");
});

}

function frameIt() {

$('document').on('load',function(){
  $('img').addClass("tasty");
});

}
});

function pressIt() {

$('imput').on('keydown',function(e) {
if(e.which === 71)
});

}
