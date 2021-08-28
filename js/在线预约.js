function $(elementId) {
    return document.getElementById(elementId);
}
/*验证邮箱*/
function checkEmail() {
    var email = $("email").value;
    var email_prompt = $("email_prompt");
    email_prompt.innerHTML = "";
    var reg = /^\w+@\w+\.\w+[(com)|(cn)]$/;
    if (reg.test(email) == false) {
        email_prompt.innerHTML = "Email格式不正确，例如web@sohu.com";
        return false;
    }
    return true;
}
/*验证手机号码*/
function checkMobile() {
    var mobile = $("mobile").value;
    var mobileId = $("mobile_prompt");
    var regMobile = /^1\d{10}$/;
    if (regMobile.test(mobile) == false) {
        mobileId.innerHTML = "手机号码不正确，请重新输入";
        return false;
    }
    mobileId.innerHTML = "";
    return true;
}
var maobi2 = document.querySelector(".maobi2");
//用js检测鼠标滚轮距离顶部位置来给div添加动画
window.onscroll = function () {
    //检测鼠标滚轮距离顶部位置
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    console.log(top);
    //要设置到DIV显示出来时给div添加动画
    if (top > (maobi2.offsetTop - maobi2.offsetHeight)) {
        maobi2.style.animation = "maobi2 1s linear 1" //添加毛笔动画 
    }
}
