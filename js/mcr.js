$(".albums").click(function () {
  $albums = $(this);
  $content = $header.next();
  $content.slideToggle(500, function () {
    $albums.text(function () {
      return $content.is(":visible") ? "Collapse" : "Expand";
    });
  });
});