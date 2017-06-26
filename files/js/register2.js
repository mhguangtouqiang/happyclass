//提交密码去登录
$('.aio').click(function () {
  $('#spo').animate({'scrollTop': '0'}, 'slow', 'easeInOutExpo')
  $('.comi').animate({'scrollTop': '0'})
})
$('.aio2').click(function () {
  $('#spo').animate({'scrollTop': '0'}, 'slow', 'easeInOutExpo')
  $('.comi').animate({'scrollTop': '0'})
})
//提交密码
$('.wwwq').click(function () {
  $('#spo').animate({'scrollTop': '162'})

})



//注册特效
$(function () {
  var x=0;
  var tpl=$('.web .mayud').outerHeight(true);
  var ang=true;

  /*var i=$(this).index()*/
  $('#iy').click(function (){
    if (ang) {
      ang=false;
      x++;
      if (x>=$('.web .mayud').length) {
        x=0;
      };
     
      $('.comi').stop().animate({scrollTop:tpl*x},'slow','easeOutQuad',function (){
        ang=true;
      });
    };
  });
  $('#iy2').click(function (){
    if (ang) {
      ang=false;
      x++;
      if (x>=$('.web .mayud').length) {
        x=0;
      };
     
      $('.comi').stop().animate({scrollTop:tpl*x},'slow','easeOutQuad',function (){
        ang=true;
      });
    };
  });
  $('.oss').click(function (){
    if (ang) {
      ang=false;
      x--;
      if (x<=$('.web .mayud').length) {
        x=0;
      };
      
      $('.comi').stop().animate({scrollTop:tpl*x},'slow','easeOutBounce',function (){
        ang=true;
      });
    };
  });
})
  //登录特效
$(function () {
  var x=0;
  var tpl=$('.dsf li').outerHeight(true);
  var ang=true;

  /*var i=$(this).index()*/
  $('#iu').click(function (){
    if (ang) {
      ang=false;
      x++;
      if (x>=$('.dsf li').length) {
        x=0;
      };
      
      $('#spo').stop().animate({scrollTop:tpl*x},'slow','easeOutElastic',function (){
        ang=true;
      });
    };
  });
  $('.kji').click(function (){
    if (ang) {
      ang=false;
      x--;
      if (x<=$('.dsf li').length) {
        x=0;
      };
      
      $('#spo').stop().animate({scrollTop:tpl*x},'slow','easeOutQuad',function (){
        ang=true;
      });
    };
  });
})
  
  