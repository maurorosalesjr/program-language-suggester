$("form#pls").submit(function(event) {
  event.preventDefault();
  const exp = parseInt($("input#exp").val());
  const today = $("#today").val();
  const color = $("#color").val();
  const space = parseInt($("#input:radio[name=space]:checked").val());
  const fightInput = $("input#fightInput").val();
  const google = parseInt($("input#google").val());
  const result = add(exp, space, google);
  
  function add(exp, space, google) {
    return exp + space + google;
  }
  console.log(exp);
  

  if (result <= 3) {
    ("#jS").show();
    ("#c-Sharp").hide();
    ("#python").hide();
  } else if (result > 6) {
    ("#jS").hide();
    ("#c-Sharp").hide();
    ("#python").show();
  } else {
    ("#jS").hide();
    ("#c-Sharp").show();
    ("#python").hide();
  }

  $("#result").text(result);
  $("result").show();
});
