$(()=> {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      $.ajax("/burgers/update/" + id, {// Send the PUT request.
        type: "PUT",
        data: id
      }).then(()=> {
            location.reload();//Reload the page to get the updated list
          }
        );
    });

    $(".create-form").on("submit",(event)=> {// Make sure to preventDefault on a submit event.
        event.preventDefault();
        var newBurger = {
          burger_name: $("#burgercreate").val().trim()
        };
        $.ajax("/burgers/create", {// Send the POST request.
          type: "POST",
          data: newBurger
        }).then(()=> {
            location.reload();//Reload the page to get the updated list
          }
        );
    });

});