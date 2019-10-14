// click event for devouring the burger

$(document).ready (function() {
  $(".change-devour").on("click", function(event) {
    var id = $(this).data("id");
    var newDevour = $(this).data("newdevour");

    var newDevourState = {
      devour: newDevour
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(
      function() {
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  // click event for adding a new burger
  $(document).on("click", "#add_burger", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val().trim(),

    };
    console.log ("new burger : " + newBurger);

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
