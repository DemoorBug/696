$(document).ready(function(){
        // 导航
    $(".form_control").focus(function(){
        $("#navbar_form").addClass("hunt");
    });
    $(".form_control").blur(function () {
        $("#navbar_form").removeClass("hunt");
    })
    $('#login #password').focus(function() {
        $('#owl-login').addClass('password');
    }).blur(function() {
        $('#owl-login').removeClass('password');
    });


    $('.log-up').click(function(){
        $('#email').focus().attr('placeholder','请输入注册用户名/邮箱')
        $('.btn-primary').html('注册')
        $('#text-muted').html('登录')
    })
    $('.log-in').click(function(){
        $('#email').attr('placeholder','请输入登录用户名/邮箱').focus()
        $('.btn-primary').html('登录')
        $('#text-muted').html('注册')
    })
})
