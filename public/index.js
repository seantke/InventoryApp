(function() {
  $(".button-collapse").sideNav({});
  $(".modal-trigger").leanModal({
    dismissible: true
  })
  $('.side-nav li a').on('click', function(e) {
    var windowsize = $(window).width();
    if (windowsize < 992) {
      $('.button-collapse').sideNav('hide');
    }
  });
  $(".dropdown-button").dropdown();
}());
