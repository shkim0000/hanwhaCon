/* 요약정보에서 사용될 color class 배열입니다. */
let color = ["orange","yellow","lightOrange","lightPink","blue","green","purple","gray"];

$(function(){

    /* header 추가 */
    $('body').prepend(
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
                                "<li><a href='#' class='linkBtn'>부서 사용자별 자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>S/W 조회</a></li>\n"+
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
                                "<li><a href='#' class='linkBtn'>자산실사현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>정기교체</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>모델신청</a></li>\n"+
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
    $(".date.limit.prev input").datepicker({
        changeMonth:true,
        changeYear:true,
        maxDate: "+1m",
        minDate: 0,
        onSelect: function(date){
            let prevDate = date
            let cal = new Date(prevDate);
            cal.setMonth(cal.getMonth() + 1);
            let year = cal.getFullYear();
            let month = cal.getMonth() + 1;
            let day = cal.getDate();
            let maxDate = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;

            $(".date.limit.next input").datepicker('option','minDate', prevDate);
            $(".date.limit.next input").datepicker('option','maxDate', maxDate);
        }
    });

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
    -

    /* 20231016 : sidebar 설정 */
    $(document).ready(function(){
        let pageName = $('.page-indicator ul li:nth-child(2)').text();
        let finalDepthName = $('.page-indicator ul li:last-child').text();

        if(pageName){
            $('.sidebar').addClass('open');
            let currentListEl = $('.sidebar .menu ul').find('.btn').filter(function(){
                return $(this).text() === pageName;
            });
            currentListEl.addClass('active');
            currentListEl.siblings('.depth').addClass('active');
        }
        if(finalDepthName){
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
                            "<label class='file'>\n" +
                                "<input type='file' class='fileUpload'>\n"+
                                "<span class='btn'>파일선택</span>\n"+
                            "</label>\n"+
                            "<span></span>\n"+
                        "</div>\n"+
                    "</div>\n"+
                "</td>\n"+
            "</tr>\n"
        );
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

    /* file 탐색기 */
    $(".search-file-box").click(function(){
        let fileName;
        if(fileName != ''){
            fileName = "";
        }
        $(this).find("input[type='file']").queue(function(){
            $(this).change(function(){
                fileName = $(this).val();
                let fileNameSlice = fileName.split("\\").reverse()[0];
                $(this).next().text(fileNameSlice);
                $(this).attr("value",fileName);
            });
        }).dequeue(function(){

        });
    });

    /* popup model-list 클릭 */
    $(".tab-wrap").each(function(){
        let length = $(this).find("li").length;
        for(let i = 0; i <= length; i++){
            $(this).find("li").eq(i).attr("data-tab", "tab" + (i + 1));
            $(this).parent().find(".tabs").eq(i).attr("data-tabs", "tab" + (i + 1));
        }
        $(this).find(".popBtn").on("click", function(){
            let i = $(this).parent().attr("data-tab");
            $(this).closest(".tab-wrap").find("li").removeClass("on");
            $(this).parent().addClass("on");
            $(this).closest(".tab-box").find(".tabs").removeClass("on");
            $(this).closest(".tab-box").find("[data-tabs="+i+"]").addClass("on");
        });
    });
});

/* 팝업창 열기 */
function lp_open(id,title,width,height,e){
    $("#"+id).dialog({
        title: title,
        width: width,
        height:height,
        modal: true,
        resizable: false,
        dialogClass: 'no-close success-dialog'
    });

    if(id === "gridPop_user"){
        gridPopUser(id,title,width,height,e) ;
    } else if(id === "gridPop_department"){
        popupDepartmentSearch(id,title,width,height,e)
    } else if (id === "assetSearch_pop"){
        /* 자산검색 */
        subPopupAssetSearch(id,title,width,height,e);
    } else if(id === "newEnroll_pop"){
        /* 자산신청 > 신규신청 팝업 */
        gridPopNewEnrollDetail();
        gridPopNewEnrollHistory();
        gridSizePopup(popup_grid_newEnroll_detail,1250);
        gridSizePopup(popup_grid_newEnroll_history,1250);
    } else if(id === "changeEnroll_pop"){
        /* 자산신청 > 교체신청팝업 */
        gridPopChangeEnrollDetail();
        gridPopChangeEnrollHistory();
        gridSizePopup(popup_grid_changeEnroll_detail,1250);
        gridSizePopup(popup_grid_change_history,1250);
    } else if (id === "rentalEnroll_pop"){
        /* 자산신청 > 대여신청 */
        gridPopRentalEnrollDetail();
        gridPopRentalEnrollHistory();
        gridSizePopup(popup_grid_rentalEnroll_detail,1250);
        gridSizePopup(popup_grid_rental_history,1250);
    } else if (id === "returnEnroll_pop"){
        /* 자산신청 > 반납신청 */
        gridPopReturnEnrollDetail();
        gridPopReturnEnrollHistory();
        gridSizePopup(popup_grid_returnEnroll_detail,1250);
        gridSizePopup(popup_grid_return_history,1250);
    } else if (id === "takingOverEnroll_pop"){
        /* 자산신청 > 인수인계신청 */
        gridPopTakeoverEnrollDetail();
        gridPopTakeoverEnrollHistory();
        gridSizePopup(popup_grid_takeOverEnroll_detail,1250);
        gridSizePopup(popup_grid_takeOverEnroll_history,1250);
    } else if (id === "rentalExtensionEnroll_pop"){
        /* 자산신청 > 대여연장신청 */
        gridPopRentalExtensionEnrollDetail();
        gridPopRentalExtensionEnrollHistory();
        gridSizePopup(popup_grid_rentalExtension_detail,1250);
        gridSizePopup(popup_grid_rentalExtension_history,1250);
    } else if (id === "gridPop_assetDetail"){
        /* 자산현황 > 자산조회 */
        gridPopAssetDetail();
    } else if (id==="submit_pop"){
        /* 상신 */
        popupSubmitList(id,title,width,height);
    } else if (id === "submitSearch_pop"){
        /* 상신 */
        subPopupSearchExecutives(id,title,width,height);
        subPopupAddExecutives(id,title,width,height);
    } else if (id === "submitApprovalChange_pop"){
        /* 상신 */
        subPopupApprovalChange(id,title,width,height);
    } else if (id==="gridPop_serviceDesk_detail"){
        /* 서비스데스크 > 서비스 신청현황 */
        gridPopServiceDeskCurrent();
        gridPopServiceDeskHistory();
        gridSizePopup(popup_grid_serviceDesk_current,1250);
        gridSizePopup(popup_grid_serviceDesk_history,1250);
    } else if (id === "gridPop_disabledAddRow"){
        /* 장애신고 */
        popupAddDisabled();
    } else if (id ==="gridPop_disabledCurrent"){
        /* 장애신고 > 장애신고현황 */
        gridPopDisabledDetail();
        gridPopDisabledHistory();
        gridSizePopup(popup_grid_disabledCurrent_detail,1250);
        gridSizePopup(popup_grid_disabledCurrent_history,1250);
    }
}
/* 팝업창 닫기 */
function lp_close(target){
    if(target)
    {
        $("#"+target).dialog("close");
    }
    else
    {
        /*        const _this = $(obj);
                const lp_id = _this.closest(".lp-wrap").attr("id");
                $("#"+lp_id).dialog("close");*/
    }
}

/* 20231016 추가 */
function gridSizePopup(gridname,width){
    let innerWidth = width - 28;
    AUIGrid.resize(gridname, innerWidth);
}

function gridSizePopupBig(gridname,width){
    let innerWidth = width - 44;
    AUIGrid.resize(gridname, innerWidth);
}


function hide_open(){
    $(".title-box.hide-ver").addClass("open");
}
function hide_open2(){
    $(".title-box.hide-ver2").addClass("open");
}

function hide_open_only(){
    $(".hide-ver-only").addClass("open");
    setTimeout(function(){
        createAssetStatusGrid();createUserStatusGrid();
    },20);
}