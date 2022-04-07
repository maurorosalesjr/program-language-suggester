$("form#pls").submit(function(event) {
  event.preventDefault();
  const exp = $("input#exp").val();
  const today = $("#today").val();
  const favoriteColor = $("#color").val();
  const space = $("#input:radio[name=space]:checked").val()
  
  
  
  
  if("#experienced") {
    $("#experienced").alert("Maybe you're too advanced for this quiz and should probably learn something harder then Java Script, C# or Python")
  }

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
  
});
