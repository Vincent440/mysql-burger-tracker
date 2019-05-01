/* eslint-disable no-console */
/* eslint-disable no-undef */
// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(()=> {
    $(".change-devoured").on("click", (event)=> {
        var id = $(this).data("id");
        // Send the PUT request.
        $.ajax("/burgers/update/" + id, {
          type: "PUT",
          data: id
        }).then(()=> {
            console.log("set Devoured to true");
            location.reload();// Reload the page to get the updated list
          }
        );
    });

    $(".create-form").on("submit",(event)=> {// Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
          burger_name: $("#burgercreate").val().trim(),
          devoured: false
        };
        console.log(newBurger);

        // Send the POST request.
        $.ajax("/burgers/create", {
          type: "POST",
          data: newBurger
        }).then(()=> {
            console.log("created new Burger");
            location.reload();// Reload the page to get the updated list
          }
        );
    });

});