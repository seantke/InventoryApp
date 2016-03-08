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
  $(document).on("click",".dropdown-setting-btn", function(e){
    //console.log($(this));
    $(this).toggleClass("fullscreen-click");
    $(this).children(".dropdown-content").toggleClass("make-visible");
  });
}());
