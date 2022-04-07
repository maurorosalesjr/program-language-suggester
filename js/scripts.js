$("form#pls").submit(function(event) {
  event.preventDefault();
  const exp = $("input#exp").val();
  const today = $("#today").val();
  const favoriteColor = $("#color").val();
  const space = $("#input:radio[name=space]:checked").val();
  const fightInput = $("input#fightInput").val();
  const google = $("input#google").val();
  const result = add(exp, favoriteColor, space, google);
    $("#output").text(result);
  
  

  function colorValue(color) {
    if(color === "red") {
      value = 2
    } else if (color === "blue") {
      value = 3
    } else if (color === "green") {
      value = 4
    } else {
      value = 1
    }
  }
  function add(exp, colorValue, space, google) {
    return exp + colorValue + space + google
  }


  /*if("") {
    $("#experienced").alert("Maybe you're too advanced for this quiz and should probably learn something harder then Java Script, C# or Python")
  }*/
  
});
