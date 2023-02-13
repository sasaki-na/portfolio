
//ハンバーガーメニュー

$(function () {
    $('.hamburger').click(function () {
        $(this).toggleClass('active');

        if ($(this).hasClass('active')) {
            $('.globalMenuSp').addClass('active');
        } else {
            $('.globalMenuSp').removeClass('active');
        }
    });
});


//メッセージのアニメーション

var container = $(".header-logo");
var speed = 80;

var content = container.html();
var text = $.trim(content);
var newHtml = "";

text.split("").forEach(function (v) {
    newHtml += '<span>' + v + '</span>';
});

container.html(newHtml);

// 1文字ずつ表示
var txtNum = 0;
container.css({ opacity: 1 });
setInterval(function () {
    container.find('span').eq(txtNum).css({ opacity: 1 });
    txtNum++
}, speed);

// 飛び出し

function showElementAnimation() {

    var element = document.getElementsByClassName('open_animation');
    if (!element) return;

    var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
    var scrollY = window.pageYOffset;
    var windowH = window.innerHeight;

    for (var i = 0; i < element.length; i++) {
        var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if (scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
        } else if (scrollY + windowH < elemY) {
            element[i].classList.remove('is-show');
        }
    }
}
showElementAnimation();
window.addEventListener('scroll', showElementAnimation);

