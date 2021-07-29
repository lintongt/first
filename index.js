var eq;
$(function () {
    // 点击下一步  当前元素父元素隐藏
    //当前元素父元素下一个兄弟展示
    $('.next').click(function () {
        $(this).parent().hide();
        eq=$(this).parent().next();
        eq.slideDown().show();
        $("#list li").eq($("section").index(eq)).addClass("active");

    })

    // 点击上一步  当前元素父元素隐藏
    //当前元素父元素上一个兄弟展示
    $('.pre').click(function () {
        $(this).parent().hide();
        eq=$(this).parent().prev();
        eq.slideDown().show();
        $("#list li").eq($("section").index($(this).parent())).removeClass("active");
    })
})