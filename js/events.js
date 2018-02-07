//define functions herefunction getIt()
function getIt(){
$(document).ready(function(){
// call functions here
alert("Hey!");
  return;
});
}


function submitIt(){
  $("form").on("submit", function() {
  if ($( "input:first" ).val() === "correct") {
    alert('your form is going to be submitted now');
    return;
  }
  alert("you entered the wrong value");
  return;
});
}
