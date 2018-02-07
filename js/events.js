//define functions herefunction getIt()
function getIt(){
$(document).ready(function(){
// call functions here
alert("Hey!");
  return;
});
}

function frameIt(){
  $('img').on('load', function(){
}

function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert("Your form is going to be submitted now.");
    return;
  }
});
}
