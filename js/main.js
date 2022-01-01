//Drop down List
$(document).ready(function(){
  $("#menu li ul").css({
    position: "absolute",
    display: "none",
  });

  $("#menu li").hover(function(){
    $(this)
    .find("ul")
    .stop(true,true)
    .slideDown("medium");
  },function(){
    $(this)
    .find("ul")
    .stop(true,true)
    .fadeOut("fast");
  });
});

//Toggle Buttons
$(document).ready(function(){
  $('#button1').click(function(){
    $('#t1').toggle('slow');
  });
});

$(document).ready(function(){
  $('#button2').click(function(){
    $('#t2').toggle('slow');
  });
});

$(document).ready(function(){
  $('#button3').click(function(){
    $('#t3').toggle('slow');
  });
});

$(document).ready(function(){
  $('#button4').click(function(){
    $('#t4').toggle('slow');
  });
});

$(document).ready(function(){
  $('#button5').click(function(){
    $('#t5').toggle('slow');
  });
});

$(document).ready(function(){
  $('#button6').click(function(){
    $('#t6').toggle('slow');
  });
});

//Aside Table Zebra
$(document).ready(function(){
  $('tbody tr:even').addClass('zebra');
  $('tbody tr').hover(function(){
    $(this).addClass('zebraHover');
  }, function(){
    $(this).removeClass('zebraHover');
  });
});