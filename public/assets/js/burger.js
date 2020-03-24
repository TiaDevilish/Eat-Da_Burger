//  $(function () {
//     $(".change-devoured").on("click", function (event) {
//         var id = $(this).data("id");
//         var devoured = $(this).data("devoured");

//         var newDevouredState = {
//             devoured: devoured
//         };
//         // PUT request:
//         $.ajax("/api/burgers/" + id, {
//             type: "PUT",
//             data: newDevouredState
//         }).then(
//             function () {
//                 console.log("changed devoured to", devoured);
//                 location.reload();
//             }
//         );
//     });
//     $(".create-form").on("submit", function (event) {
//         event.preventDefault();
//         var newBurger = {
//             burger_name: $("#ca").val().trim(),
//             devoured: false
//         };
//         console.log(newBurger.burger_name)
//         $.ajax("/api/burgers", {
//             type: "POST",
//             data: newBurger
//         }).then(
//             function () {
//                 location.reload();
//             }
//         );
//     });
// });