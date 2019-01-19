$(document).ready(function(){
  $("#quiz").submit(function(event){
    // gathers form information and sets them as useable variables for our functions
    event.preventDefault();
    var name= $("input#nameInput").val();
    var a1 = parseInt($("input:radio[name= q1]:checked").val());
    var a2 = parseInt($("input:radio[name= q2]:checked").val());
    var a3 = parseInt($("input:radio[name= q3]:checked").val());
    var a4 = parseInt($("input:radio[name= q4]:checked").val());
    var a5 = parseInt($("input:radio[name= q5]:checked").val());
    // this adds together the answer values to our quiz, so we can use that to determine the quizzes answer
    var result = a1 + a2 + a3 + a4 + a5;
    $(".nameConfirm").text(name);
    //this is the part that determines and reveals the quiz answer
    if(isNaN(result)){
      $("#result5").show()
      $("#result1").hide()
      $("#result2").hide()
      $("#result3").hide()
      $("#result4").hide()
    } else if (result <= 25) {
      $("#result1").show()
      $("#result2").hide()
      $("#result3").hide()
      $("#result4").hide()
      $("#result5").hide()

    } else if (result <= 50) {
      $("#result2").show()
      $("#result1").hide()
      $("#result3").hide()
      $("#result4").hide()
      $("#result5").hide()

    } else if (result <= 75) {
      $("#result3").show()
      $("#result1").hide()
      $("#result2").hide()
      $("#result4").hide()
      $("#result5").hide()
    } else {
      $("#result4").show()
      $("#result1").hide()
      $("#result2").hide()
      $("#result3").hide()
      $("#result5").hide()
    }
  });
});
