$(function(){

    /* header 추가 */
    $('body').prepend(
        "<header>\n"+
                    "<div class='inner'>\n"+
                        "<button type='button' class='menu-btn on'></button>\n"+
                        "<a href='#'>IAMS V2</a>\n"+
                    "</div>\n"+
                    "<div class='inner'>\n"+
                        "<div class='account'>\n"+
                            "<span>관리자</span>[<span>홍길동</span> / <span>IT운영</span>]\n"+
                        "</div>\n"+
                        "<button type='button' class='logout-btn'>Logout</button>\n"+
                    "</div>\n"+
        "</header>"
    );

    /* sidebar 추가 */
    $('#wrapper').prepend(
        "<div class='sidebar open'>\n"+
            "<div class='menu'>\n"+
                "<ul>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산<br>신청</button>\n"+
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
                        "<button type='button' class='btn'>자산<br>현황</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산현황조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산상태변경</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>전부서자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>부서 사용자별 조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>S/W 조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>변경이력조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>변경이력조회 - 공용자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>미반납 자산현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>강제회수</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>서비스<br>데스크</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스신청 - SW 사용 신청</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>장애<br>신고</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고현황 - 만족도 통계</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산<br>등록</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산신규등록</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산입고현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산<br>실사</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사 결과조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사 부서별 결과조회</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>정기<br>교체</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>정기교체 진행상황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>기준<br>정보</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>사용자정보</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>사용자정보 - 권한대행</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산분류관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산모델관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>신청구분</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애처리유형관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>사용장소관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>품목정보</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>업무 구분 코드</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>기업<br>자산</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>SW자산현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>HW자산현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>SAP자산현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                "</ul>\n"+
            "</div>\n"+
        "</div>\n"
    );

    if($("body").hasClass("user-main-page")){
        $(".menu-btn").removeClass("on");
        $(".sidebar").removeClass("open");
        $(".sidebar").addClass("close");
    }

});

$(function(){
    $(document).on("click", ".menu-btn", function(){
        let sidebar = $(".sidebar");
        let contents = $(".contents");

        if(!sidebar.hasClass("open")){
            /* 1. 사이드 바 - open-ver */
            $(this).addClass("on");
            sidebar.removeClass("close on");
            sidebar.addClass("open");

            let lastActiveBtn= $('.sidebar.open .btn.active').next().find("li").length;
            $('.sidebar.open .btn.active').next().css(`height`, `${lastActiveBtn * 39.2}`);

            contents.addClass("active");
        }else{
            /* 2. 사이드 바 : close-ver */
            $(this).removeClass("on");
            sidebar.removeClass("open");

            contents.removeClass("active");

        }
    });

    $(document).on("mouseenter", ".menu-btn", function(){
        if(!$(this).hasClass("on")){
            $(".sidebar").addClass("close on");
        }
    });

    $(document).on("mouseleave", ".sidebar.close.on .menu", function(){
        $(this).closest(".sidebar").removeClass("close on")
    });


    $(document).on("mouseenter",".sidebar.close .btn",function(){
        if(!$(this).hasClass("open")){
            $(".sidebar.close .btn").removeClass("open");
            $(this).addClass("open");

            let num = $(this).next(".depth").find("ul li").length;
            $(this).next(".depth").css(`height`,`${num * 27.19 + 5}`);
        }else{
            $(".sidebar.close .btn").removeClass("open");


        }
    });

    $(document).on("mouseleave",".sidebar.close .menu > ul > li",function(){
        $(".sidebar.close .btn").removeClass("open");
        if(!$(".sidebar .depth .btn").hasClass("active")){
            $(".sidebar.close .depth").css(`height`,0);
        }
    });

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

        /* 사이드바 초기 설정 */
        if(finalDepthName){
            // $('.sidebar').addClass('open');
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
        if($(this).closest(".sidebar").hasClass("open")){
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
        },

    });

    $(".date input").datepicker({
        changeMonth:true,
        changeYear:true,
        closeText:'초기화',
        showButtonPanel: true,
        onClose: function () {
            if ($(window.event.srcElement).hasClass('ui-datepicker-close')) {
                $(this).val('');
            }
        }
    });


    $(".date input").keydown(function(){
        $(this).val("");
    });

    $(".date input").keyup(function(){
        $(this).val("");
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

    /* 20231011 : 첨부파일2 : 리스트에 삭제 버튼 있는 */
    $(".btn.add-file2").on("click",function(){
        $(this).closest(".title-box").next(".table").find("tbody").append(
            "<tr>\n"+
                "<td>\n"+
                    "<div class='td-wrap between'>\n"+
                        "<div class='file-box long'>\n"+
                            "<label class='file'>\n" +
                                "<input type='file' class='fileUpload'>\n"+
                                "<span class='btn'>파일선택</span>\n"+
                            "</label>\n"+
                            "<span></span>\n"+
                        "</div>\n"+
                        "<button type='button' class='btn trash ver2'>삭제</button>\n"+
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

    $(document).on("click",".btn.trash.ver2",function(){
        $(this).closest("tr").remove();
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

    /* popup model-list 클릭 (작업중) */
    $(".tab-wrap").each(function(){
        let length = $(this).find("li").length;
        for(let i = 0; i <= length; i++){
            $(this).find("li").eq(i).attr("data-tab", "tab" + (i + 1));
            $(this).parent().find(".tabs").eq(i).attr("data-tabs", "tab" + (i + 1));
        }
        $(this).find(".popBtn").on("click", function(){
            let id = $(this).attr('id');
            let i = $(this).parent().attr("data-tab");
            $(this).closest(".tab-wrap").find("li").removeClass("on");
            $(this).parent().addClass("on");
            $(this).closest(".tab-box").find(".tabs").removeClass("on");
            $(this).closest(".tab-box").find("[data-tabs="+i+"]").addClass("on");
        });
    });
});


/* [수정] 20231016 */
/* 팝업창 열기 */
function lp_open(id,title,width,height,e,type){
    $("#"+id).dialog({
        title: title,
        width: width,
        height:height,
        modal: true,
        resizable: false,
        dialogClass: 'no-close success-dialog',
        open: function(event,ui) {
            $('input:first').blur();
            $('#ui-datepicker-div').hide();
        },
        close: function( event, ui ) {
            if (event.target.id === "gridPop_replacementTarget") {
                AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list1,
                    false);
                AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list2, false);
                AUIGrid.clearGridData(popup_grid_replacementTarget_list2);
            }
        }
    });

    switch (id) {
        case "gridPop_user":
            gridPopUser(e, type);
            break;

        case "gridPop_selectUser":
            gridPopSelectUser();
            break;

        case "gridPop_manager":
            gridPopManager(id, title, width, height, e);
            break;

        case "gridPop_department":
            popupDepartmentSearch(id, title, width, height, e);
            break;

        case "gridPop_department_checkbox":
            popupDepartmentCheckboxSearch(e);
            break;

        case "newEnroll_pop":
            /* 자산신청 > 신규신청 */
            gridPopNewEnrollDetail();
            gridPopNewEnrollHistory();
            gridSizePopupBig(popup_grid_newEnroll_detail, 1250);
            gridSizePopup(popup_grid_newEnroll_history, 1250);
            break;

        case "changeEnroll_pop":
            /* 자산신청 > 교체신청 */
            gridPopChangeEnrollDetail();
            gridPopChangeEnrollHistory();
            gridSizePopup(popup_grid_changeEnroll_detail, 1250);
            gridSizePopup(popup_grid_change_history, 1250);
            break;

        case "rentalEnroll_pop":
            /* 자산신청 > 대여신청 */
            gridPopRentalEnrollDetail();
            gridPopRentalEnrollHistory();
            gridSizePopup(popup_grid_rentalEnroll_detail, 1250);
            gridSizePopup(popup_grid_rental_history, 1250);
            break;

        case "returnEnroll_pop":
            /* 자산신청 > 반납신청 */
            gridPopReturnEnrollDetail();
            gridPopReturnEnrollHistory();
            gridSizePopup(popup_grid_returnEnroll_detail, 1250);
            gridSizePopup(popup_grid_return_history, 1250);
            break;
        case "takingOverEnroll_pop":
            /* 자산신청 > 인수인계신청 */
            gridPopTakeoverEnrollDetail();
            gridPopTakeoverEnrollHistory();
            gridSizePopup(popup_grid_takeOverEnroll_detail, 1250);
            gridSizePopup(popup_grid_takeOverEnroll_history, 1250);
            break;
        case "rentalExtensionEnroll_pop":
            /* 자산신청 > 대여연장신청 */
            gridPopRentalExtensionEnrollDetail();
            gridPopRentalExtensionEnrollHistory();
            gridSizePopup(popup_grid_rentalExtension_detail, 1250);
            gridSizePopup(popup_grid_rentalExtension_history, 1250);
            break;
        case "submit_pop":
            /* 상신 */
            popupSubmitList(id, title, width, height);
            break;
        case "submitSearch_pop":
            /* 상신 */
            subPopupSearchExecutives(id, title, width, height);
            subPopupAddExecutives(id, title, width, height);
            break;
        case "submitApprovalChange_pop":
            /* 상신 */
            subPopupApprovalChange(id, title, width, height);
            break;

        case "excelImport_pop":
            popupConsistency();
            gridSizePopup(popup_grid_consistency, 1250);
            break;

        case "gridPop_disabledCurrent":
            /* 장애신고현황 */
            gridPopDisabledDetail();
            gridPopDisabledHistory();
            gridPopDisabledListHistory();
            break;

        case "gridPop_disabledAddRow":
            /* 장애신고 > 장애신고 */
            popupAddDisabled();
            gridSizePopup(popup_grid_disabledAddRow, 1230);
            break;
            
        case "assetSearch_pop":
            /* 자산검색 */
            subPopupAssetSearch(e, type);
            break;
        case "haveNetClient":
            /* 자산현황 > 자산조회 : 사용자 장비 정보 팝업 */
            popupSwInformation();
            popupBoxInformation();
            break;
        case "gridPop_serviceDesk_detail":
            /* 서비스 데스크 > 서비스 신청 현황 */
            gridPopServiceDeskDetail();
            gridPopServiceDeskHistory();
            gridSizePopup(popup_grid_serviceDesk_detail, 1250);
            gridSizePopup(popup_grid_serviceDesk_history, 1250);
            break;
        case "gridPop_applicationStatus":
            /* 자산등록 > 자산입고 현황 */
            popupApplicationStatus();
            gridSizePopup(popup_grid_application_status, 1250);
            break;
        case "gridPop_assetDetail":
            /* 자산정보 */
            gridPopAssetDetail();
            break;
        case "gridPop_replacement_current":
            /* 정기교체 > '완료'상태 일 경우 더블 클릭시 나오는 팝업 */
            gridPopReplacementTargetCurrent();
            break;
        case "gridPop_replacement":
            /* 정기교체 > 등록 버튼 클릭시 나오는 팝업 */
            gridPopReplacementTarget();
            break;
        case "gridPop_replacementTarget":
            /* 정기교체 > 등록 버튼 + 추가 버튼 클릭시 나오는 팝업 */
            gridPopReplacementTargetList1();
            gridPopReplacementTargetList2();
            break;
        case "regularChangeEnroll_pop":
            /* 정기교체 > 정기교체 진행상황 > 상세 팝업 */
            gridPopRegularChangeEnrollDetail();
            gridSizePopup(popup_grid_regularChangeEnroll_detail, 1250);
            break;
        case "gridPop_assetDuediligenceDetail":
            /* 자산실사 > 자산실사 결과조회 */
            gridPopAssetChangeDetail();
            gridPopAssetChangeHistory();
            break;
        case "gridPop_detail":
            /* 자산현황 >  변경이력 조회 */
            gridPopChangeHistory();
            gridPopDueDiligenceHistory();
            gridSizePopup(popup_grid_changeHistory, 1250);
            gridSizePopup(popup_grid_duediligenceHistory, 1250);
            break;
        case "gridPop_assetClassification":
            /* 기준정보 > 자산모델관리 */
            gridPopAssetClassification(e);
            break;
        case "gridPop_sw_detail":
            /* 기업자산 > SW 상세정보 */
            gridPopLicenseManage();
            break;
        case "gridPop_sw_add":
            /* 기업자산 > SW 신규추가 */
            gridPopLicenseManage2();
            break;
        case "gridPop_hw_detail":
            /* 기업자산 > HW 상세정보 */
            gridPopLicenseManageAddf();
            break;
        case "gridPop_hw_add":
            /* 기업자산 > HW 상세정보 > 신규추가 */
            gridPopLicenseManageAddf2();
            gridSizePopup(popup_grid_license_manage_addf2, 850);
            break;
        case "swLicenseSearch_pop":
            /* 기업자산 > HW 상세정보 > SW 라이선스 검색 */
            subPopupSWLicenseSearch(e);
            break;

        default:
            break;
    }
}


/* 팝업창 닫기 */
function lp_close(target){
    if(target === "userGroup_pop"){
        /* 사용자 그룹정보 */
        AUIGrid.destroy('#popup_grid_groupBasicInformation');
        $("#" + target +"  .btn.trash").attr("data-btn","hide");
        $("#"+target).dialog("close");
    } else if(target === "gridPop_replacementTarget"){
        AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list1, false);
        AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list2, false);
        AUIGrid.clearGridData(popup_grid_replacementTarget_list2);
        $("#"+target).dialog("close");
    } else if(target){
        $("#"+target).dialog("close");
    } else
    {
        /*        const _this = $(obj);
                const lp_id = _this.closest(".lp-wrap").attr("id");
                $("#"+lp_id).dialog("close");*/
    }
}

/* grid-title 에 적용될 함수 */
function getRowCount(gridname){
    setTimeout(function(){
        $(".title-box .grid-title h3 span").text(AUIGrid.getRowCount(gridname));
    },100)
}

function getRowCount2(gridname){
    setTimeout(function(){
        $(".title-box .row-count > span").text(AUIGrid.getRowCount(gridname));
    },100)
}

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
