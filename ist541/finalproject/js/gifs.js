// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "fivesecs") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is where you first click on your Animate Timeline to then be able to right click in the same spot and insert a keyframe!");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function