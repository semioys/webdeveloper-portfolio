$(document).ready(function() {
  $(".hamburger__icon").click(function(e) {
    $(".menu--mobile").toggleClass("active--mobile");
    $(".header__topbar").toggleClass("active");
    $(".header__topbar").toggleClass("active--toWhite");
    e.preventDefault();
  });

  $(".menu__item--mobile").click(function(e) {
    if ($(e.target).hasClass("menu__link")) {
      $(".menu--mobile").toggleClass("active--mobile");
      $(".header__topbar").toggleClass("active");
    }
    e.preventDefault();
  });

  (function() {
    // SCROLLIT
    $.scrollIt({
      upKey: 38, // key code to navigate to the next section
      downKey: 40, // key code to navigate to the previous section
      easing: "swing", // the easing function for animation
      scrollTime: 1000, // how long (in ms) the animation takes
      activeClass: "menu__link--active", // class given to the active nav element
      onPageChange: null, // function(pageIndex) that is called when page is changed
      topOffset: -25 // offste (in px) for fixed top navigation
    });
  
  
    // NAVIGATION SCRIPT
  
    $(window).on("scroll", function() {
      var bodyScroll = $(window).scrollTop(),
        navbar = $(".header__topbar");
      if (bodyScroll > 300) {
        navbar.addClass("header__fixed-top");
      } else {
        navbar.removeClass("header__fixed-top");
      }
    });
  
  
    // SVG SUPPORT FOR IE8+
    svg4everybody();
  
    // BARFILLERS
    $(window).on("scroll", function() {
      var bodyScroll = $(window).scrollTop();
  
      if (bodyScroll > 1700) {
        $("#bar1").barfiller({
          barColor: '#1abc9c',
          // duration in ms
          duration: 800
        });
  
        $("#bar2").barfiller({
          barColor: '#1abc9c',
          // duration in ms
          duration: 800
        });
  
        $("#bar3").barfiller({
          barColor: '#1abc9c',
          // duration in ms
          duration: 1200
        });
  
        $("#bar4").barfiller({
          barColor: '#1abc9c',
          // duration in ms
          duration: 1200
        });
      }
    });
  
  }());
  
});






