// Trigger CSS Active Classes On Scroll

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar").addClass("active");
    } else {
      $(".navbar").removeClass("active");
    }
  });
});

// Change Navbar Icon On scroll

$(function () {
  var nav_collapse = $(".navbar-dark");
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      nav_collapse.removeClass("navbar-dark").addClass("navbar-light");
    } else {
      nav_collapse.removeClass("navbar-light").addClass("navbar-dark");
    }
  });
});

// Change Logo On Scroll

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 10) {
      $(".navbar .navbar-brand img").attr(
        "src",
        require("../images/logo/b_roma.png")
      );
    } else {
      $(".navbar .navbar-brand img").attr(
        "src",
        require("../images/logo/w_roma.png")
      );
    }
  });
});
