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
  $("#movePortfolio").click(function(){
      $('body').animate({
         scrollTop: $("#Portfolio").offset().top
      },1200);
  });
});
$(function(){
  $("#moveCareer").click(function(){
      $('body').animate({
         scrollTop: $("#Career").offset().top
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

$(function(){
  $("#slideshow > div:gt(0)").hide();

  setInterval(function() {
    $('#slideshow > div:first')
      .fadeOut(1000)
      .next()
      .fadeIn(1000)
      .end()
      .appendTo('#slideshow');
  },  3000);
});
