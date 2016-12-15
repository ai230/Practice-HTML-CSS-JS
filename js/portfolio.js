//Add class="openNav" when clicked drawer menu
$(function() {
    $('#navToggle').click(function(){
        $('header').toggleClass('openNav');
    });
});


$(function(){
  $("#moveAboutme").click(function(){
      $('body').animate({
         scrollTop: $("#Aboutme").offset().top
      }, 'slow');
  });
});
$(function(){
  $("#moveHome").click(function(){
      $('body').animate({
         scrollTop: $("#Home").offset().top
      }, 'slow');
  });
});
