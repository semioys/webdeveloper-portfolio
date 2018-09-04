(function() {
  // SVG SUPPORT FOR IE8+
  svg4everybody();

  // BARFILLERS
  $(window).on("scroll", function() {
    var bodyScroll = $(window).scrollTop();

    if (bodyScroll > 1500) {
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

