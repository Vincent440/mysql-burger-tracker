$(() => {
  $(".change-devoured").on("click", function(event) {
    var id = $(this).data("id");
    $.ajax("/burgers/update/" + id, {
      // Send the PUT request.
      type: "PUT",
      data: id
    }).then(() => {
      location.reload(); //Reload the page to get the updated list
    });
  });
  $(".create-form").on("submit", event => {
    event.preventDefault();// Make sure to preventDefault on a submit event.
    let burger = $("#burgercreate").val().trim();

    let letterRe = /[A-z\s]/gi;//RegExp to make sure only letters with burger in the name are allowed to be stored
    let burgerRe = /(?:burger)/i;
    let notWord = /\d|[^a-z\s]/gi

    if (letterRe.test(burger) && !burgerRe.test(burger) && !notWord.test(burger)) {
      $("#valMessage").html("Burger must be somewhere in the name!");
    } 
    else if (letterRe.test(burger) && burgerRe.test(burger) && !notWord.test(burger)) {

        var newBurger = {
          burger_name: burger
        };

        $.ajax("/burgers/create", {// Send the POST request.
          type: "POST",
          data: newBurger
        }).then(() => {
          location.reload(); //Reload the page to get the updated list
        });

      }
      else {
        $("#valMessage").html("Valid input format(A-z with spaces must have burger in name)!");
      }
  });
});