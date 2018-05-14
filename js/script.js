'use strict';

$(function () {
$('.js-add-form').click(function(){
  $(".modal").addClass("active").hide().fadeIn(300);
})

$(".modal__close").click(function() {
    $(".modal").fadeOut(300, function() {
      $(".modal").removeClass("active");
    });
  });

  $(document).mouseup(function(e) {
    // событие клика по веб-документу
    var div = $(".modal__inner"); // тут указываем элемента
    if (
      !div.is(e.target) &&
      div.has(e.target).length === 0 &&
      div.is(":visible")
    ) {
      // и не по его дочерним элементам
      $(".modal").fadeOut(300, function() {
        $(".modal").removeClass("active");
      });
    }
  });

});