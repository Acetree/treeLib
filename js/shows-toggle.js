/*shows toggle*/
function ToggleShow(){
     var holder = $("#show-hd");
     var shows = holder.children("li");
     var total = shows.length;
     var curShow = holder.children("li.show-cur").index();
     var nextShow = (curShow + 1) % total;
     $(shows[curShow]).fadeOut(800,function(){
          $(this).removeClass("show-cur");
     });
     $(shows[nextShow]).fadeIn(800,function(){
          $(this).addClass("show-cur");
     });
}

setInterval("ToggleShow()",5000);