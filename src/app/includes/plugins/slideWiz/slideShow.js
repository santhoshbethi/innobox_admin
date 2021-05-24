//animation list: card, fade, box3D, glide

$(document).ready(function () {
  $(".slideWiz").slideWiz({
    auto: true,
    speed: 5000,
    type: "glide",
    row: 9,
    file: [
      {
        src: {
          main: "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
          cover:
            "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
        },
        title: "Intelligent",
        desc: "Connected Devices for <br>" + "next-gen Networking ",
        button: {
          text: "Know More",
          url: "5g.html",
          class: "btn btn-medium btn-primary mainhead-btnknowmore",
          color: "#ffffff",
        },
      },
      {
        src: {
          main: "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
          cover:
            "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
        },
        title: "We Deliver",
        desc: "Tech that Redefines how your IT works ",
        button: {
          text: "Know More",
          url: "gryphion.html",
          class: "btn btn-medium btn-primary mainhead-btnknowmore",
          color: "#ffffff",
        },
      },
      {
        src: {
          main: "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
          cover:
            "https://www.gettyimages.in/gi-resources/images/500px/983794168.jpg",
        },
        title: "Road Traffic",
        desc: "Intelligence Delivered <br>" + "with Accuracy ",
        button: {
          text: "Know More",
          url: "greyn.html",
          class: "btn btn-medium btn-primary mainhead-btnknowmore",
          color: "#ffffff",
        },
      },
    ],
  });
});
