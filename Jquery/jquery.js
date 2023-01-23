$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();

  $("#container").hide();
  $("#alert").hide();
  setInterval(function () {
    $("#container").show("slow");
    $("#spinner").hide("slow");
  }, 1500);

  $("form").submit(function (event) {
    $("#alert").show("slow");
    $("#firstName").val("");
    $("#lastName").val("");
    $("#email").val("");
    $("#Subject").val("");
    $("#Message").val("");
    event.preventDefault();
    setInterval(function () {
      $("#alert").hide("slow");
    }, 3500);
  });

  $("html").mousemove(function (e) {
    xpos = e.pageX;
    ypos = e.pageY;

    var position = {
      left: xpos,
      top: ypos,
    };

    $(".pulse").css(position);
  });
});
