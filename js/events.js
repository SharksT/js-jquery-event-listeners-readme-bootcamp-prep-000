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


function pressIt() {

$('imput').on('keydown',function(e) {
  alert("You pressed the G key!");
  console.log("Teste");
  if((e.which || e.detail ) === 71)
  {
    alert("You pressed the G key!");
  }
});
}

function submitIt() {
$('form').on('submit',function () {
  alert("Your form is going to be submitted now.");
})
}


});
