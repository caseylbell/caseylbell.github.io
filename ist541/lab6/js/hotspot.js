// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Texas") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Texas is the second one");
      }

      if ($(this).attr("id") == "California") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, California has the largest population");
      }

      if ($(this).attr("id") == "Florida") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Florida is the third one");
      }
	   
	  if ($(this).attr("id") == "New York") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, New York is the fourth one");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function