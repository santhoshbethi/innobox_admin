//animation list: card, fade, box3D, glide

function myTest(id) {
 
  $(".slideWiz").slideWiz({
    auto: true,
    speed: 5000,
    type: "glide",
    row: 9,
    file: id
  });

  
}
