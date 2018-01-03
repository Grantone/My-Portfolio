$(document).ready(function() {
  $(".button-khalid").click(function(event) {
    event.preventDefault()
    var foodObj = foods[1];
    $(".thumbnail p.food").text(foodObj.food);
    $(".thumbnail p.instructions").text(foodObj.instructions);




  });


});

$(document).ready(function() {
  $(".button-nelly").click(function(event) {
    event.preventDefault()
    var foodObj = foods[0];
    $(".thumbnail p.foods").text(foodObj.food);
    $(".thumbnail p.instruction").text(foodObj.instructions);

  });



});

$(document).ready(function() {
  $(".button-esther").click(function(event) {
    event.preventDefault()
    var foodObj = foods[2];
    $(".thumbnail p.snack").text(foodObj.food);
    $(".thumbnail p.lunch").text(foodObj.instructions);
  });



});


$(document).ready(function() {
  $(".button-grantone").click(function(event) {
    event.preventDefault()
    var foodObj = foods[3];
    $(".thumbnail p.dinner").text(foodObj.food);
    $(".thumbnail p.junk").text(foodObj.instructions);
  });
});


$(document).ready(function() {
  $("form#subscribe_form").submit(function(event) {
    event.preventDefault();
    var emailAddress = $("#subscribe_form_input").val();
    var notification = emailAddress + " has been successfully added to our email list. Thank you!";
    $("#email-output").text(notification)
  });

});

$(document).ready(function() {
  $("form#subscribe_form").submit(function(event) {
    event.preventDefault();
    var emailAddress = $("#subscribe_form_input").val();
    var notification = emailAddress + " has been successfully added to our email list. Thank you!";
    $("#email-output").text(notification)
  });

});