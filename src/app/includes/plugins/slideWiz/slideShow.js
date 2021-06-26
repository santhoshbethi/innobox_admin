//animation list: card, fade, box3D, glide

function myTest(id) {
 
  $(".slideWiz").slideWiz({
    auto: true,
    speed: 5000,
    type: "glide",
    row: 9,
    file: id
  });

  $("#logoParade").smoothDivScroll({ 
    autoScrollingMode: "always", 
    autoScrollingDirection: "endlessLoopRight", 
    autoScrollingStep: 1, 
    autoScrollingInterval: 25
});

// Logo parade event handlers
$("#logoParade").bind("mouseover", function() {
    $(this).smoothDivScroll("stopAutoScrolling");
}).bind("mouseout", function() {
    $(this).smoothDivScroll("startAutoScrolling");
});

(function ($) {

  "use strict";
  // Auto-scroll
  $("#customerCarousel").carousel({
    interval: 3000,
  });

  // Control buttons
  $(".next").click(function () {
    $(".carousel1").carousel("next");
    return false;
  });
  $(".prev").click(function () {
    $(".carousel1").carousel("prev");
    return false;
  });

  // On carousel scroll

})(jQuery);




$('.fig-number').each(function () {
 
  $(this).prop('Counter',0).animate({
      Counter: $(this).text()
  }, {
      duration: 2000,
     
      step: function (now) {
          $(this).text(Math.ceil(now));
      }
  });
});
}

