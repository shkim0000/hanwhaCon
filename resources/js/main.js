$(function(){
    $(document).on("click", ".menu-btn", function(){
        let sidebar = $(".sidebar");
        let contents = $(".contents");
        if(!sidebar.hasClass("open")){
            sidebar.addClass("open");
            contents.addClass("active");
        }else{
            sidebar.removeClass("open");
            contents.removeClass("active");
        }
    });
    /* datepicker */
    $(".date input").datepicker({
        changeMonth:true,
        changeYear:true,
    });

    $(".date input").keydown(function(){
        $(this).val("");
    });

    $(".date input").keyup(function(){
        $(this).val("");
    });

    /* 팝업 열기 */
    $("[data-popup]").on("click", function(){
        let id = $(this).attr("data-popup");
        $("#"+id).addClass("open");
    });

    /* 팝업 닫기 */
    $(".popup .close-btn, [data-btn='cancel']").on("click", function(){
        console.log("Sdfgsdf");
        $(this).closest(".popup").removeClass("open");
    });

    /* 딤처리 부분 닫기 */
    $(document).on("click", function(e){
        let i = e.target;
        console.log(i);
        if($(e.target).hasClass("popup open")){
            $(e.target).removeClass("open");
        }
    });

    /* sidebar 아코디언 */
    $('.sidebar .menu ul li .btn').on('click',function(){
        var num = $(this).siblings('.depth').find('ul li').length;

        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('.depth').css('height','0')
        } else if(!$(this).hasClass('active')){
            $(this).closest('.menu').find('.depth').css('height','0');
            $(this).closest('.menu').find('.btn.active').removeClass('active');
            $(this).addClass('active');
            $(this).siblings('.depth').css(`height`,`${num * 39.2}`);
        }
    })
});
