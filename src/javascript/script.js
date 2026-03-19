$(document).ready(function () {
  $("#mobile-btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");

    let icon = $(this).find("i");
    icon.toggleClass("fa-bars fa-x");
  });
});