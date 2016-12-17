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
      },1200);
  });
});
$(function(){
  $("#moveSkills").click(function(){
      $('body').animate({
         scrollTop: $("#Skills").offset().top
      },1200);
  });
});
$(function(){
  $("#moveWork").click(function(){
      $('body').animate({
         scrollTop: $("#Work").offset().top
      },1200);
  });
});
$(function(){
  $("#moveExperienced").click(function(){
      $('body').animate({
         scrollTop: $("#Experienced").offset().top
      },1200);
  });
});
$(function(){
  $("#moveContact").click(function(){
      $('body').animate({
         scrollTop: $("#Contact").offset().top
      },1200);
  });
});

//contact
$(function(){
  var request;

  $("#mainForm").submit(function(event){

    if (request) {
        request.abort();
    }

    var myData = $("#mainForm").find("input,textarea").serialize();

    request = $.ajax({
      url: "http://api.ideiadoluiz.com.br/email/index.php",
      method: "post",
      data: myData
    });

    request.done(function(data){
      $("#result").removeClass();

      if (data.description == "success") {
        $("#result")
          .html("Thank you for your message!!!")
          .addClass("bg-success");
      } else {
        $("#result")
          .html(data.description)
          .addClass("bg-danger");
      }
    });

    request.fail(function(jqXHR, textStatus, errorThrown){
      console.log(jqXHR + " " + textStatus + errorThrown);
    });

    event.preventDefault();
    // alert("hi");
  });
});

function slideSwitch() {
    var $active = $('#slideshow img.active');

    if ( $active.length == 0 ) $active = $('#slideshow img:last');

    var $next =  $active.next().length ? $active.next()
        : $('#slideshow img:first');

    $active.addClass('last-active');

    $next.css({opacity: 0.0})
        .addClass('active')
        .animate({opacity: 1.0}, 1000, function() {
            $active.removeClass('active last-active');
        });
}

$(function() {
    setInterval( "slideSwitch()", 1000 );
});
