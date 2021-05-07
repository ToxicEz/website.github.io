$(document).ready(function() {
    $(".hamburgur").on("click", function() {
        $(".nav-grid").toggleClass("open")
    });
});

function myFunction(x) {
    x.classList.toggle("change");
}