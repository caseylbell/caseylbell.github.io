// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "fivesecs") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, this is where you right click and insert a keyframe!");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function