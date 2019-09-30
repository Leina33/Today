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

    $(".image").hover(function(){
      $(this).animate({opacity: "0.4"});
    });
  });

  $(document).ready(function(){
    $("#contacts").submit(function(event){
      var name = document.getElementById(".name").val;
      var email = document.getElementById(".email").val();
      if (name && email != ''){
        alert("Thank you " +  name  +  " your message is well receive");
      }
      else{
        alert("invalid inputs!!");
      }
      event.preventDefault();
    });
  });

