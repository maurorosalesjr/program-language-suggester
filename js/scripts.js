$("form#pls").submit(function(event) {
  event.preventDefault();
  /*const exp = $("input#exp").val();
  const today = $("#today").val();
  const color = $("#color").val();
  const space = $("#input:radio[name=space]:checked").val();
  const fightInput = $("input#fightInput").val();
  const google = $("input#google").val();
  /*const result = add(exp, favoriteColor, space, google);
    $("#output").text(result);*/
  const number1 = parseInt($("#exp").val());
  /*const number4 = parseInt($("#color").val());*/
  const number2 = parseInt($("#space").val());
  const number3 = parseInt($("#google").val());
  const result = add(number1, number2, number3,);
  $("#output").text(result);
  

  /*function color(color) {
    if(color === "red") {
      value = 2
    } else if (color === "blue") {
      value = 3
    } else if (color === "green") {
      value = 4
    } else {
      value = 1
    }
  }*/
  
  function add(number1, number2, number3) {
    return number1, number2, number3
  }


  $("#result").show();
console.log(add)
  /*$(document).ready(function() {
    $("form#add").submit(function(event) {
      event.preventDefault();
        
    });
  });*/


  /*if("") {
    $("#experienced").alert("Maybe you're too advanced for this quiz and should probably learn something harder then Java Script, C# or Python")
  }*/
  
});
