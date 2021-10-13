// JavaScript Document
$( function() {
   $("map area").click( function(){

      if ($(this).attr("id") == "Texas") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Texas is the second one");
      }

      if ($(this).attr("id") == "California") {
         $("#feedback").css("color","green");
         $("#feedback").html("Yes, California has the largest population: 1,343,239,923");
      }

      if ($(this).attr("id") == "Florida") {
         $("#feedback").css("color","red");
         $("#feedback").html("No, Florida is the third one");
      }

  $("#feedback").css("backgroundColor","yellow");
$('#myModal').modal("show");
   });
}); //end main jQuery function