$(function(){
  var w = $(window).width();
  var h = $(window).height();
  var rad = 45;
  var timer;
  $(".centerButton").css("left",w/2-8).css("top",h/2-8);
  $("#twitter").css("left",w/2+100*Math.cos(rad*1 *(Math.PI / 180))).css("top",h/2-100*Math.sin(rad*1* (Math.PI / 180)));
  $("#github").css("left",w/2+100*Math.cos(rad*2* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*2* (Math.PI / 180)));
  $("#hatena").css("left",w/2+100*Math.cos(rad*3* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*3* (Math.PI / 180)));
  $("#facebook").css("left",w/2+100*Math.cos(rad*4* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*4* (Math.PI / 180)));
  $("#tumblr").css("left",w/2+100*Math.cos(rad*5* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*5* (Math.PI / 180)));
  $("#soundcloud").css("left",w/2+100*Math.cos(rad*6* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*6* (Math.PI / 180)));
  $("#lastfm").css("left",w/2+100*Math.cos(rad*7* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*7* (Math.PI / 180)));
  $("#askfm").css("left",w/2+100*Math.cos(rad*8* (Math.PI / 180))).css("top",h/2-100*Math.sin(rad*8* (Math.PI / 180)));

function startTimer(){
   timer = setInterval(function(){
  rad += 45;
  $("#twitter").animate({left: w/2+100*Math.cos((rad*1+45) *(Math.PI / 180)),top:h/2-100*Math.sin((rad*1+45) *(Math.PI / 180))},1);
  $("#github").animate({left: w/2+100*Math.cos((rad+90) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+90) *(Math.PI / 180))},1);
  $("#hatena").animate({left: w/2+100*Math.cos((rad+135) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+135) *(Math.PI / 180))},1);
  $("#facebook").animate({left: w/2+100*Math.cos((rad+180) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+180) *(Math.PI / 180))},1);
  $("#tumblr").animate({left: w/2+100*Math.cos((rad+225) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+225) *(Math.PI / 180))},1);
  $("#soundcloud").animate({left: w/2+100*Math.cos((rad+270) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+270) *(Math.PI / 180))},1);
  $("#lastfm").animate({left: w/2+100*Math.cos((rad+315) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+315) *(Math.PI / 180))},1);
  $("#askfm").animate({left: w/2+100*Math.cos((rad+360) *(Math.PI / 180)),top:h/2-100*Math.sin((rad+360) *(Math.PI / 180))},1);
},1000);
console.log("hogehoge");
}
function stopTimer(){
  clearInterval(timer);
}
startTimer();
$(".servicesLinks a").hover(stopTimer,startTimer);


});
