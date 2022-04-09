$("form#pls").submit(function(event) {
  event.preventDefault();
  /*const exp = $("input#exp").val();
  const today = $("#today").val();
  const color = $("#color").val();
  const space = $("#input:radio[name=space]:checked").val();
  const fightInput = $("input#fightInput").val();
  const google = $("input#google").val();*/
  const number1 = parseInt($("#exp").val());
  const number2 = parseInt($("#space").val());
  const number3 = parseInt($("#google").val());
  const result = add(number1, number2, number3,);
  
  function add(number1, number2, number3) {
    return number1 + number2 + number3
  }

  if (result < 3) {
    ("#javaScript").show();
    ("#c#").hide();
    ("#python").hide();
  } else if (result > 6) {
    ("#javaScript").hide();
    ("#c#").hide();
    ("#python").show();
  } else {
    ("#javaScript").hide();
    ("#c#").show();
    ("#python").hide();
  }

  $("#result").text(result);
  $("#result").show();




  /*if("") {
    $("#experienced").alert("Maybe you're too advanced for this quiz and should probably learn something harder then Java Script, C# or Python")
  }*/
  
});
