$(document).ready(function(){
    $("h3").click(function(){
      $(".p").toggle();
    });
    $("h4").click(function(){
        $(".q").toggle();
    });
    $("h5").click(function(){
        $(".r").toggle();
    });

    $("#image1").mouseenter(function(){
      $(".image1-heading").filter('#image1-title').show("slow");
    }).mouseleave(function(){
      $("#image1-title").hide("slow");
    });
  });
  $(document).ready(function(){
    $("form").submit(function(event){
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      event.preventDefault();
      if ( name && email != '')
      {
        alert("Thank you " + name +  "your is message is well receive");
      }
    });
  });
