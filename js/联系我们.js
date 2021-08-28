var sub = document.getElementById("sub");//获取表单提交按钮
var TOP1 = document.getElementById("TOP1");//获取超链接书签
var SPAN = document.getElementById("SPAN");//获取提示框
var textarea1 = document.querySelector(".textarea1");//获取表单第一个textarea
var textarea2 = document.querySelector(".textarea2");//获取表单第二个textarea
var map_box = document.getElementById("map-box");//获取地图div
var lxfs = document.getElementById("lxfs");//获取联系方式div
var yu4 = document.querySelector(".yu4");//获取留言标题的背景图片
//用js检测鼠标滚轮距离顶部位置来给div添加动画
window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    //要设置到DIV显示出来时给div添加动画 也可以设置一个数值只要保证div出来给它加动画即可
    if (top > (map_box.offsetTop - map_box.offsetHeight + 240)) {//地图出场
        map_box.style.animation = "map1 1s linear 1";
    }
    if (top > (lxfs.offsetTop - lxfs.offsetHeight + 240)) {//联系方式出场
        lxfs.style.animation = "rr1 1s linear 1";
    }
    if (top > (yu4.offsetTop - yu4.offsetHeight + 550)) {//留言标题的背景图片出场
        yu4.style.animation = "rx 1s linear 1";
    }
    if (top > (textarea1.offsetTop - textarea1.offsetHeight + 600)) {//留言里第一个textarea出场
        textarea1.style.animation = "textarea11 1s linear 1";
    }
    if (top > (textarea2.offsetTop - textarea2.offsetHeight + 600)) {//留言里第二个textarea出场
        textarea2.style.animation = "textarea11 1s linear 1";
    }
    if (top > (sub.offsetTop - sub.offsetHeight + 600)) {//提交按钮出场
        sub.style.animation = "right5 0.5s linear 1";
    }
    if (top > (TOP1.offsetTop - TOP1.offsetHeight + 300)) {//超链接书签出场
        TOP1.style.display = "block";
    }
    else {
        TOP1.style.display = "none";
    }
}
//点击提交按钮
function sub1() {
    alert("提交成功")
}
//回到顶部超链接悬停的提示内容
window.onload = function () {
    TOP1.onmousemove = function () {
        SPAN.style.display = "block"
    }
    TOP1.onmouseout = function () {
        SPAN.style.display = "none"
    }
}