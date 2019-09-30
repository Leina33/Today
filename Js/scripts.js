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
   /* $(".work1").hover(function(){
      $(".work1").fadeOut();
    });
    $(".work2").mouseleave(function(){
      $(".work2").fadeTo();
    });*/
    $(".image").hover(function(){
      $(this).animate({opacity: "0.4"});
    });
  });

