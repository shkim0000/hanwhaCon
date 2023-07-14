$(function(){
    /* header 추가 */
    $('#guide').prepend(
"<header>\n"+
            "<div class='inner'>\n"+
                "<button type='button' class='menu-btn'></button>\n"+
                "<a href='#'>IAMS V2</a>\n"+
            "</div>\n"+
            "<div class='inner'>\n"+
                "<div class='account'>\n"+
                    "[<span>홍길동</span> / <span>IT운영</span>]\n"+
                "</div>\n"+
                "<button type='button' class='logout-btn'>Logout</button>\n"+
            "</div>\n"+
        "</header>"
    );

    /* sidebar 추가 */
    $('#wrapper').prepend(
"<div class='sidebar'>\n"+
            "<div class='menu'>\n"+
                "<ul>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산신청</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산신청현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>신규신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>교체신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>대여신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>대여연장신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>반납신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>인수인계신청</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산현황</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>부서자산조회</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>서비스데스크</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>장애신고</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산등록</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산등록</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산실사</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                "</ul>\n"+
            "</div>\n"+
        "</div>\n"
    );
});

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
        if($(e.target).hasClass("popup open")){
            $(e.target).removeClass("open");
        }
    });

    /* sidebar 설정 */
    $(document).ready(function(){
        let pageName = $('.page-indicator ul li:nth-child(2)').text();
        let finalDepthName = $('.page-indicator ul li:last-child').text();

        // HTML 페이지의 title과 page-indicator에 있는 텍스트가 일치하면, sidebar에 open 클래스를 부여합니다.
        if($('title').text() === pageName){
            $('.sidebar').addClass('open');
            let currentListEl = $('.sidebar .menu ul').find('.btn').filter(function(){
                return $(this).text() === pageName;
            });
            currentListEl.addClass('active');
            currentListEl.siblings('.depth').addClass('active');
        }
        if($('title').text() === finalDepthName){
            $('.sidebar').addClass('open');
            let currentListEl = $('.sidebar .menu ul').find('.linkBtn').filter(function(){
                return $(this).text() === finalDepthName;
            });
            currentListEl.closest('.depth').siblings('.btn').addClass('active');
            currentListEl.addClass('active');
            currentListEl.closest('.depth').addClass('active');
            let num = currentListEl.closest('.depth').find('ul li').length;
            currentListEl.closest('.depth').css(`height`, `${num * 39.2}`);
        }
    })

    $(".sidebar .menu ul li .btn").on("click",function(){
        if($(this).hasClass("active")){
            $(this).removeClass("active");
            $(this).siblings(".depth").removeClass("active").css('height','0');
        } else if(!$(this).hasClass("active")){
            $(this).closest(".menu").find(".depth.active").removeClass("active").css('height','0');
            $(this).closest(".menu").find(".btn.active").removeClass("active");
            $(this).addClass("active");
            let num = $(this).siblings(".depth").find("ul li").length;
            $(this).siblings(".depth").addClass("active").css(`height`,`${num * 39.2}`);
        }
    });

    /* 행 추가 버튼 클릭 : 일반 테이블 */
    $(".btn.add-column").on("click",function(){
        $(this).closest(".title-box").next(".table").find("tbody").append(
            "<tr>\n"+
                "<td>\n"+
                    "<div class='td-wrap center'>\n"+
                        "<label class='check no-text'>\n"+
                            "<input type='checkbox'>\n"+
                            "<span></span>\n"+
                        "</label>\n"+
                    "</div>\n"+
                "</td>\n"+
                "<td>\n"+
                    "<div class='td-wrap'>\n"+
                        "<label class='select whole'>\n"+
                            "<select>\n"+
                                "<option value=''>데스트탑1</option>\n"+
                                "<option value=''>데스크탑2</option>\n"+
                            "</select>\n"+
                        "</label>\n"+
                    "</div>\n"+
                "</td>\n"+
                "<td>\n"+
                    "<div class='td-wrap'>\n"+
                        "<label class='select whole'>\n"+
                            "<select>\n"+
                                "<option value=''>데스트탑 모델1</option>\n"+
                                "<option value=''>데스크탑 모델2</option>\n"+
                            "</select>\n"+
                        "</label>\n"+
                    "</div>\n"+
                "</td>\n"+
                "<td>\n"+
                    "<div class='td-wrap'>\n"+
                        "<label class='input whole'>\n"+
                            "<input type='number'>\n"+
                        "</label>\n"+
                    "</div>\n"+
                "</td>\n"+
            "</tr>\n"
        );
    });

    /* 첨부파일 */
    $(".btn.add-file").on("click",function(){
        let fileName;
       $(this).prev().queue(function(){
           $(this).change(function(){
               fileName = $(this).val();
               let fileNameSlice = fileName.split("\\").reverse()[0];
               $(this).closest(".title-box").next(".table").find("tbody").append(
                    "<tr>\n"+
                        "<td>\n"+
                            "<div class='td-wrap center'>\n" +
                                "<label class='check no-text'>\n"+
                                    "<input type='checkbox'>\n"+
                                    "<span></span>\n"+
                                "</label>\n"+
                            "</div>\n"+
                        "</td>\n"+
                        "<td>\n"+
                            "<div class='td-wrap'>\n"+
                                "<div class='file-box long'>\n"+
                                    "<label class='file'>\n"+
                                        "<input type='file' value='"+fileName+ "'>\n"+
                                        "<span class='btn'>파일선택</span>\n"+
                                    "</label>\n"+
                                    "<span>"+fileNameSlice+"</span>\n"+
                                "</div>\n"+
                            "</div>\n"+
                        "</td>\n"+
                    "</tr>\n"
                );
           });
       }).dequeue(function(){
           fileName = "";
       });
    });

    /* 테이블 내 첨부파일 */
    $(document).on("click",".file-box .btn",function(){
        let fileName;
        $(this).prev().queue(function(){
            $(this).change(function(){
                fileName = $(this).val();
                let fileNameSlice = fileName.split("\\").reverse()[0];
                $(this).closest(".file-box").find(">span").text(fileNameSlice);
                $(this).attr("value",fileName);
            });
        }).dequeue(function(){
            if(fileName != ''){
                fileName = "";
            }
        });
    });

    /* 테이블 요소 삭제 */
    $(".btn.trash").on("click",function(){
        $(this).closest(".title-box").siblings(".table").find("tbody tr").has("input[type='checkbox']:checked").remove();
        $(".table thead input[type='checkbox']").prop("checked",false);
    });

    /* 체크박스 선택 */
    $(document).on("change",".table thead input[type='checkbox']",function(){
        if($(this).is(":checked")){
            $(this).closest("thead").next().children().find("input[type='checkbox']").prop("checked",true);
        }else{
            $(this).closest("thead").next().children().find("input[type='checkbox']").prop("checked",false);
        }
    });
    
    $(document).on("change",".table tbody input[type='checkbox']",function(){
        var total = $(this).closest("tbody").find("input[type='checkbox']").length;
        var checked = $(this).closest("tbody").find("input[type='checkbox']:checked").length;

        if(total != checked) {
            $(this).closest("tbody").prev('thead').find("input[type='checkbox']").prop("checked", false);
        } else {
            $(this).closest("tbody").prev('thead').find("input[type='checkbox']").prop("checked", true);
        }
    });

    /* popup model-list 클릭 */

});
