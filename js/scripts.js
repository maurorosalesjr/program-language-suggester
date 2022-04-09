
$(document).ready(function() {
  $("form#pls").submit(function(event) {
    event.preventDefault();
    const exp = parseInt($("#exp").val());
    const today = $("#today").val();
    const color = $("#color").val();
    const space = parseInt($("input:radio[name=space]:checked").val());
    const fightInput = $("input#fightInput").val();
    const google = parseInt($("input:radio[name=google]:checked").val());
    const result = add(exp, space, google);
    function add(exp, space, google) {
      return exp + space + google;
    }

    $("#jS").hide();
    $("#c-Sharp").hide();
    $("#python").hide();
    

    if (result <= 3) {
      $("#jS").show();
    } else if (result > 6) {
      $("#python").show();
    } else {
      $("#c-Sharp").show();
    }

    $("#result").show();
  });
});

