//s Call out "a href"
// $("a")

// // Calls out all <li> that have <a> within them
// $("li a")

// // Calls out the "special" CSS class
// $(".special")

$(document).ready(function() {
  
  $("#the-button").click(function(){
    // Add or remove a class, depending on whether it is currently present
    $("p").toggleClass("special");

    // Check whether the class exists
    if ($("p").hasClass("special")){
      alert("The paragraph is special!");
    }
    else {
      alert("The paragraph is not special.");
    }

    $("ul").append($("<li>").text("Try it again."))
  });
  
});
