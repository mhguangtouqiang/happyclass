//立即购买
$(function() {
    $('.zgu').click(function() {
        $('#qiss').show();
    }) 
    $('.kpo').click(function() {
        $('#qiss').hide();
    })
})
//烟雾特效
var yzhou = document.getElementById('yzhou');
var img = yzhou.getElementsByTagName('img')[0];
var chong = 0;
var tm = null;

/*window.onload=wangch;*/
function wangch() {
    tm = setInterval(function() {
        yzhou.scrollTop++;
        if (yzhou.scrollTop >= img.offsetHeight - yzhou.clientHeight) {
            yzhou.scrollTop = 0;
        }

    },
    40)
}
wangch();

var yzhou2 = document.getElementById('yzhou2');
var img2 = yzhou2.getElementsByTagName('img')[0];

var tm2 = null;

/*window.onload=wangch;*/
function wangch2() {
    tm2 = setInterval(function() {
        yzhou2.scrollTop++;
        if (yzhou2.scrollTop >= img2.offsetHeight - yzhou2.clientHeight) {
            yzhou2.scrollTop = 0;
        }

    },
    40)
}
wangch2();

//判断IE9版本以下替换CSS3
//判断IE11浏览器及其他浏览器
$(function() {
    if (Object.hasOwnProperty.call(window, "ActiveXObject") && !window.ActiveXObject) {
        $('#webi').attr("src", "register2.html");
    } else if ($.browser.webkit) {
        $('#webi').attr("src", "register2.html");
    } else if ($.browser.safari) {
        $('#webi').attr("src", "register.html");
    } else if ($.browser.mozilla) {
        $('#webi').attr("src", "register.html");
    } else if ($.browser.opera) {
        $('#webi').attr("src", "register.html");
    }
})

$(function() {
    if ($.browser.msie) {

        $('#tlist').attr("src", "twodete.html");
    }
})
//判断IE浏览器替换CS3元素
$(function() {
    if ($.browser.msie && ($.browser.version == "6.0") && !$.support.style) {
        $('#tlist').attr("src", "twodete.html");
    }
})

$(function() {
    if ($.browser.msie && ($.browser.version == "8.0") && !$.support.style) {
        $('#sof').attr("src", "photowall2.html");
        $('#yzhou').hide();
        $('#yzhou2').hide();
        $
    }
})

//tab切换
$(function() {
    $('.opp li').click(function() {
        var i = $(this).index() 
        if ($(this).hasClass('colorw'));
        $('.opp li').eq(i).addClass('colorw').siblings().removeClass('colorw');
        $('.sort').eq(i).show().siblings('.sort').hide();

    })
})
//返回顶部
/*$(function () {
	$('#shoow').click(function () {	
	$('html body').animate({'scrollTop': '0'}, 'slow', 'easeOutCirc')
	})
})*/

function myEvent(obj, ev, fn) {
    if (obj.attachEvent) {
        obj.attachEvent('on' + ev, fn);
    } else {
        obj.addEventListener(ev, fn, false);
    }
}
myEvent(window, 'load',
function() {
    var oRTT = document.getElementById('shoow');
    var pH = document.documentElement.clientHeight;
    var timer = null;
    var scrollTop;
    window.onscroll = function() {
        scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= pH) {
            oRTT.style.display = 'block';
        } else {
            oRTT.style.display = 'none';
        }
        return scrollTop;
    };
    oRTT.onclick = function() {
        clearInterval(timer);
        timer = setInterval(function() {
            var now = scrollTop;
            var speed = (0 - now) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (scrollTop == 0) {
                clearInterval(timer);
            }
            document.documentElement.scrollTop = scrollTop + speed;
            document.body.scrollTop = scrollTop + speed;
        },
        30);
    }
});
//判断滚动条
$(window).scroll(function() {
    var chhe = $(window).scrollTop();
    if (chhe >= 1500) {
        $('#shoow').show();

    } else {
        $('#shoow').hide();
    }

})
//透明图切换
$(function() {
    var x = 0;
    var timer = null;
    /*var BacArr = ['sd2', 'bgggg', 'sadas2'];*/
    //自动走。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。。
    function automove() {
        timer = setInterval(function() {
            x++;
            if (x >= $('.qiehuan li img').length) {
                x = 0;
            }
            Show();
        },
        3000);
    }
    automove();
    //透明度切换。。。。。。。。。。。。。。。。。。。。。。。。。。。
    function Show() {
        
        $('.qiehuan li').eq(x).fadeIn().siblings().hide();
        $('.x_biao p').eq(x).addClass('active').siblings().removeClass('active');
        $('.noni_do').each(function(index){console.log(index);
            if(index == x){
                $(this).show();
            }else{
                $(this).hide();
            }
        });
        //$('.noni_do').eq(x).show().siblings().hide();
       /* $("#kok").css("background", 'url(images/' + BacArr[x] + '.png) 0 0 no-repeat');*/
    }
    //点击下表切换。。。。。。。。。。。。。。。。。。。。。。。。
    $('.x_biao p').click(function() {
        clearInterval(timer);
        x = $('.x_biao p').index(this);
        Show();
        automove()
    })
})
