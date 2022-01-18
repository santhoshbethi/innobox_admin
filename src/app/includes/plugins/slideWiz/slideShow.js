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


$(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i,el){
      function visPx(){
        var H = $(this).height(),
            r = el.getBoundingClientRect(), t=r.top, b=r.bottom;
        return cb.call(el, Math.max(0, t>0? H-t : (b<H?b:H)));  
      } visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));


$(document).on('onload','.fig-number', function (e) {
 // Make use of the `px` argument!!!
  // if element entered V.port ( px>0 ) and
  // if prop initNumAnim flag is not yet set
  //  = Animate numbers
  if(px>0 && !this.initNumAnim) { 
    this.initNumAnim = true; // Set flag to true to prevent re-running the same animation
    $(this).prop('Counter',0).animate({
      Counter: $(this).text()
    }, {
      duration: 2000,
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });         
  }
});

}

