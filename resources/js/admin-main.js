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
                            "<span>관리자</span>[<span>홍길동</span> / <span>IT운영</span>]\n"+
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
                                "<li><a href='#' class='linkBtn'>자산상태변경</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>전부서자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>부서 사용자별 조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>변경이력조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>변경이력조회 - 공용자산조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>미반납 자산현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>강제회수</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>강제회수현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>서비스데스크</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스 신청</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스신청 - SW 사용 신청</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>장애신고</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고현황 - 만족도 통계</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애신고</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산등록</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산신규등록</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산입고현황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>자산실사</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사 결과조회</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산실사 부서별 결과조회</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>정기교체</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>정기교체 대상현황</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>정기교체 진행상황</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>환경설정</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>메일설정</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>메일편집기</a></li>\n"+
                            "</ul>\n"+
                        "</div>\n"+
                    "</li>\n"+
                    "<li>\n"+
                        "<button type='button' class='btn'>기준정보</button>\n"+
                        "<div class='depth'>\n"+
                            "<ul>\n"+
                                "<li><a href='#' class='linkBtn'>사용자정보</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>사용자그룹 권한관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>사용자정보 - 권한대행</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산분류관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산품목관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산모델관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>신청구분</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>장애처리유형관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>서비스데스크 처리유형 관리</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>자산위치</a></li>\n"+
                                "<li><a href='#' class='linkBtn'>모델정보</a></li>\n"+
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


    /* 팝업 열기 */
    /*    $("[data-popup]").on("click", function(){
            let id = $(this).attr("data-popup");
            $("#"+id).addClass("open");
        });*/

    /* 팝업 닫기 */
    /*    $(".popup .close-btn, [data-btn='cancel']").on("click", function(){
            $(this).closest(".popup").removeClass("open");
        });*/

    /* 딤처리 부분 닫기 */
    /*    $(document).on("click", function(e){
            let i = e.target;
            if($(e.target).hasClass("popup open")){
                $(e.target).removeClass("open");
            }
        });*/


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
/*            if(id === "groupBasicInformation"){
                console.log("으아ㅡ아ㅡ아ㅡ아")
                if ($("#" + id +"  .btn.trash").data('btn') === "hide"){
                    alert("기본 그룹정보가 등록되면 등록 가능합니다.");

                }
            }else{

            }*/
        });
    });
});

/* 팝업창 열기 */
function lp_open(id,title,width,height,e,type){
    $("#"+id).dialog({
        title: title,
        width: width,
        height:height,
        modal: true,
        resizable: false,
        dialogClass: 'no-close success-dialog'
    });
    /* 페이지 하단에 버튼이 없어지면 없어질 코드입니다 */
    if(id === "gridPop_user"){
        gridPopUser(id,title,width,height,e, type) ;
    } else if (id === "gridPop_manager"){
        gridPopManager(id,title,width,height,e);
    } else if(id === "gridPop_department"){
        popupDepartmentSearch(id,title,width,height,e)
    } else if(id === "newEnroll_pop"){
        gridPopNewEnrollDetail(id,title,width,height);
        gridPopNewEnrollHistory(id,title,width,height);
    } else if(id === "changeEnroll_pop"){
        gridPopChangeEnrollDetail(id,title,width,height);
        gridPopChangeEnrollHistory(id,title,width,height);
    } else if (id === "rentalEnroll_pop"){
        gridPopRentalEnrollDetail(id,title,width,height);
        gridPopRentalEnrollHistory(id,title,width,height);
    } else if (id === "returnEnroll_pop"){
        gridPopReturnEnrollDetail(id,title,width,height);
        gridPopReturnEnrollHistory(id,title,width,height);
    } else if (id === "takingOverEnroll_pop"){
        gridPopTakeoverEnrollDetail(id,title,width,height);
        gridPopTakeoverEnrollHistory(id,title,width,height);
    } else if (id === "rentalExtensionEnroll_pop"){
        gridPopRentalExtensionEnrollDetail(id,title,width,height);
        gridPopRentalExtensionEnrollHistory(id,title,width,height);
    } else if (id === "gridPop_rental_info"){
        popupChangeAssetInfo(id,title,width,height);
    } else if (id==="submit_pop"){
        popupSubmitList(id,title,width,height);
    } else if (id === "submitSearch_pop"){
        subPopupSearchExecutives(id,title,width,height);
        subPopupAddExecutives(id,title,width,height);
    } else if (id === "submitApprovalChange_pop"){
        subPopupApprovalChange(id,title,width,height);
    } else if (id === "gridPop_disabledAddRow"){
        popupAddDisabled(id,title,width,height);
    } else if (id ==="gridPop_disabledCurrent"){
        gridPopDisabledDetail(id,title,width,height);
        gridPopDisabledHistory(id,title,width,height);
        gridPopDisabledListHistory(id,title,width,height);
    }  else if(id==="excelImport_pop" || id==="gridPop_enrollCurrent"){
        popupConsistency(id,title,width,height);
    } else if (id === "assetSearch_pop"){
        subPopupAssetSearch(id,title,width,height,e,type);
    } else if (id === "haveNetClient"){
        popupSwInformation(id,title,width,height);
        popupBoxInformation(id,title,width,height);
    } else if (id === "gridPop_serviceDesk_detail"){
        gridPopServiceDeskDetail(id,title,width,height);
        gridPopServiceDeskHistory(id,title,width,height);
    }else if(id === "gridPop_selectUser"){
        gridPopSelectUser();
    }else if(id === "gridPop_assetClassification"){
        gridPopAssetClassification();
    }else if(id === "gridPop_applicationStatus") {
        popupApplicationStatus();
    }else if(id === "gridPop_assetDetail"){
        gridPopAssetDetail();
    }else if(id === "gridPop_department_checkbox"){
        popupDepartmentCheckboxSearch(id,title,width,height,e);
    }
}


/* 팝업창 닫기 */
function lp_close(target){
    if(target === "userGroup_pop"){
        /* 사용자 그룹정보 */
        AUIGrid.destroy('#popup_grid_groupBasicInformation');
        $("#" + target +"  .btn.trash").attr("data-btn","hide");
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