$(function(){
  var rad = 45;
  var rotate = 45;
  var w = $(window).width();
  var h = $(window).height();
  var icon_place_init = function(id_name,num){
    $(id_name).css("left",w/2+100*Math.cos(rad*num *(Math.PI / 180))).css("top",h/2-100*Math.sin(rad*num* (Math.PI / 180)));
  }
  var icon_animate = function(id_name,num){
    $(id_name).animate({left: w/2+100*Math.cos(((rad*num)+rotate) *(Math.PI / 180)),top:h/2-100*Math.sin(((rad*num)+rotate) *(Math.PI / 180))},1000);
  }

  var id_lists = ["#twitter",
              "#github",
              "#hatena",
              "#facebook",
              "#tumblr",
              "#soundcloud",
              "#lastfm",
              "#askfm"];
//アイコン位地初期化
  $(".centerButton").css("left",w/2-8).css("top",h/2-8);
  id_lists.forEach(function(val,index,ar){
    icon_place_init(val,index+1);
  });

  //アイコン回転
  function startTimer(){
    rotate += 45;
    id_lists.forEach(function(val,index,ar){
      icon_animate(val,index+1);
    })
  }
  var timer = setInterval(startTimer,1000);
  function stopTimer(){
    clearInterval(timer);
  }
  $(".servicesLinks a").hover(stopTimer,setInterval(startTimer,1000));
});
