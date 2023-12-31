/* [팝업] 모음 */
/* [사용자 / 부서 검색 팝업]------------------------------------------------------------------- */
/* 1. 사용자 검색 */
let popup_grid_user;
function gridPopUser(e,type){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_user_column = [
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180
        },
        {
            dataField: "category_user_name",
            headerText: "사용자명",
            width: 180
        }, {
            dataField: "category_department",
            headerText: "부서",
            width: 160
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_user_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
    }

    /* 그리드 생성 */
    popup_grid_user = AUIGrid.create("#popup_grid_user",  gridPop_user_column, gridPop_user_pros);
    requestGridPopUser();
    if(type === "newEnroll"){
        AUIGrid.bind(popup_grid_user, "cellDoubleClick", function(event){
            console.log(event);
            console.log(e);
            let changeItem = {
                ...e,
                category_admin_select_user: event.item.category_user_name,
            }
            AUIGrid.updateRow(popup_grid_newEnroll_detail, changeItem, e.rowIndex);
            $("#gridPop_user").dialog("close");
        })
    } else if(type === "popTable"){

    } else {
        /* 그리드 기능 */
        let targetPlace = $(e).attr("data-place");
        let userName;
        let applicantName;
        let userDepartment;
        let userID;
        let disabledOccurrence;

        AUIGrid.bind(popup_grid_user, "cellDoubleClick", function(event) {
            console.log(targetPlace)
            if(targetPlace === 'user_search'){
                userName = event.item.category_user_name;
                userDepartment = event.item.category_department;
                userID = event.item.category_employeeID;

                $("input[data-label='user']").val(userName);
                $("input[data-label='department']").val(userDepartment);
                $("input[data-label='userID']").val(userID);

                $("#gridPop_user").dialog("close");
            }else if(targetPlace === 'user_applicant'){
                applicantName = event.item.category_user_name;
                $("input[data-label='applicant']").val(applicantName);

                $("#gridPop_user").dialog("close");
            }else if(targetPlace === "user_only"){
                userName = event.item.category_user_name;
                $("input[data-label='user']").val(userName);

                $("#gridPop_user").dialog("close");

            } else if(targetPlace === "disabled-occurrence"){
                disabledOccurrence = event.item.category_user_name;
                $("input[data-label='disabled-occurrence-val']").val(disabledOccurrence);

                $("#gridPop_user").dialog("close");
            }else{
                userName = event.item.category_user_name;
                userDepartment = event.item.category_department;

                $("input[data-label='change_user']").val(userName);
                $("input[data-label='change_department']").val(userDepartment);

                $("#gridPop_user").dialog("close");
            }

        });
    }

}
function requestGridPopUser() {
    $.get("../resources/lib/aui-grid/data/sample-datas4.json", function (data) {
        AUIGrid.setGridData(popup_grid_user, data);
    });
}
/* // 사용자 검색 */

/* 담당자 검색 */
let popup_grid_manager;
function gridPopManager(id,title,width,height,e){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_user_column = [
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180
        },
        {
            dataField: "category_user_name",
            headerText: "담당자명",
            width: 180
        }, {
            dataField: "category_department",
            headerText: "부서",
            width: 160
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_user_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
    }

    /* 그리드 생성 */
    popup_grid_manager = AUIGrid.create("#popup_grid_manager",  gridPop_user_column, gridPop_user_pros);
    requestGridPopManager();

    /* 그리드 기능 */
    let targetPlace = $(e).attr("data-place");
    let userName;
    let userDepartment;

    if(targetPlace === 'manager_search'){
        AUIGrid.bind(popup_grid_manager, "cellDoubleClick", function(event) {
            userName = event.item.category_user_name;
            userDepartment = event.item.category_department;

            $("input[data-label='manager']").val(userName);
            $("input[data-label='manager_department']").val(userDepartment);

            $("#gridPop_manager").dialog("close");
        });
    }
}
function requestGridPopManager() {
    $.get("../resources/lib/aui-grid/data/sample-datas4.json", function (data) {
        AUIGrid.setGridData(popup_grid_manager, data);
    });
}

/* 2. 부서 검색 */
let popup_grid_department; // 부서 검색
function popupDepartmentSearch(id,title,width,height,e){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_department",
            headerText: "부서명",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_depart_code",
            headerText: "부서코드",
            width: 180,
            filter: {
                showIcon: true,
            }
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true, // 가로 스크롤 X
        copyDisplayValue: false, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_department = AUIGrid.create("#popup_grid_department", columnLayout, gridPros);
    requestGridPopDepartment();

    /* 그리드 기능 */
    let targetPlace = $(e).attr("data-place");
    let userDepartment;
    AUIGrid.bind(popup_grid_department, "cellDoubleClick", function(event) {
        if(targetPlace === 'department_search'){
            userDepartment = event.item.category_department;
            $("input[data-label='department']").val(userDepartment);
            $("#gridPop_department").dialog("close");
        } else if(targetPlace === 'department_search_only') {
            userDepartment = event.item.category_department;
            $("input[data-label='department-only']").val(userDepartment);
            $("#gridPop_department").dialog("close");
        } else if(targetPlace === "normal"){
            userDepartment = event.item.category_department;
            $("input[data-label='department']").val(userDepartment);
            $("input[data-label='user']").val("");
            $("#gridPop_department").dialog("close");
        } else{
            $("input[data-label='department']").val(event.item.category_department);
            $("#gridPop_department").dialog("close");

            /* input 에 value 가 들어가면, 부서관리자산현황 그리드 호출*/
            if($("input[data-label='department']").val().length > 1 && $('title').text() === "전부서자산조회"){
                createAssetManagementStatusGrid();
            } else if($("input[data-label='department']").val().length > 1 && $('title').text() === "부서 사용자별 조회"){
                createUserAssetManagementStatusGrid();
            }
        }
    });
}

function requestGridPopDepartment() {
    $.get("../resources/lib/aui-grid/data/sample-datas3.json", function (data) {
        AUIGrid.setGridData(popup_grid_department, data);
    });
}
/* // 부서 검색 */
/* ------------------------------------------------------------------------ */

/* [신청 팝업 모음] ----------------------------------------------------------- */
/* [수정] 2023-10-03 */
/* 1. 신규신청 */
/* 자산정보 */
let popup_grid_newEnroll_detail;
let essentialPartsList = ["지급","미지급"];
let usageList = ["개인","공용","기타등등"]
function gridPopNewEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_newEnroll_detail_column = [
        {
            dataField: "application_parent", // 임의의 값
            headerText: "신청",
            children: [
                {
                    dataField: "category_user_product",
                    headerText: "자산분류",
                    filter: {
                        showIcon: true,
                    }
                },{
                    dataField: "category_user_name",
                    headerText: "사용자",
                    filter: {
                        showIcon: true,
                    }
                },{
                    dataField: "category_quantity",
                    headerText: "수량",
                    filter: {
                        showIcon: true,
                    }
                },{
                    dataField: "category_usage",
                    headerText: "용도",
                    filter: {
                        showIcon: true,
                    }
                }
            ]
        },
        {
            dataField:"payment_parent", // 임의의 값
            headerText:"지급",
            children: [
                {
                    dataField: "category_asset_num",
                    headerText: "자산번호",
                    style: "search_grid_style",
                    renderer:{
                        type: "ButtonRenderer",
                        onClick: function(event){
                            let rowData = AUIGrid.getSelectedRows(popup_grid_newEnroll_detail);
                            let rowIndex = event.rowIndex;
                            let resultData = {...rowData[0], rowIndex: rowIndex}
                            lp_open("assetSearch_pop","자산검색",800,480, resultData, "newEnroll");
                        }
                    },
                    width:"15%",
                    filter: {
                        showIcon: true,
                    }
                },{
                    dataField: "category_admin_quantity",
                    headerText: "수량",
                    renderer: {
                        type: "NumberStepRenderer",
                        min: 0,
                        max: 1,
                    },
                    filter: {
                        showIcon: true,
                    }
                }, {
                    dataField: "category_product",
                    headerText: "자산분류",
                    filter: {
                        showIcon: true,
                    }
                }, {
                    dataField: "category_usage",
                    headerText: "용도",
                    renderer: {
                        type: "DropDownListRenderer",
                        list: usageList
                    },
                    filter: {
                        showIcon: true,
                    }
                }, {
                    dataField: "category_item_name",
                    headerText: "모델명",
                    filter: {
                        showIcon: true,
                    }
                }, {
                    dataField: "category_essential_parts",
                    headerText: "필수부품",
                    renderer: {
                        type: "DropDownListRenderer",
                        list: essentialPartsList
                    },
                    filter: {
                        showIcon: true,
                    }
                }, {
                    dataField: "category_admin_select_user",
                    headerText: "사용자",
                    style: "search_grid_style",
                    renderer:{
                        type: "ButtonRenderer",
                        onClick: function(event){
                            let rowData = AUIGrid.getSelectedRows(popup_grid_newEnroll_detail);
                            let rowIndex = event.rowIndex;
                            let resultData = {...rowData[0], rowIndex: rowIndex}
                            lp_open('gridPop_user','사용자 검색',505,530,resultData,"newEnroll")
                        }
                    },
                    width:"10%",
                    filter: {
                        showIcon: true,
                    }
                },{
                    dataField: "category_release_date",
                    headerText: "출고일자",
                    width:"10%",
                    filter: {
                        showIcon: true,
                    }
                }
            ]
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPop_newEnroll_detail_pros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        enableSorting: true, // 소팅
        editable: false,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        autoGridHeight : true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_newEnroll_detail = AUIGrid.create("#popup_grid_newEnroll_detail", gridPop_newEnroll_detail_column, gridPop_newEnroll_detail_pros);
    requestGridPopNewEnrollDetail();

    /* 지급 수량이 0이될때 alert, 출고일자 변경 함수 */
    $(".aui-grid-number-step-down-btn").on("click", function(){
        let number = $(this).closest("tr").find(".aui-grid-number-step-input");

        let result = confirm("자산을 미출고 하시겠습니까?");
        if(result){
            $(this).closest("tr").find("td:last-child > div").text("미출고");
        }else{
            if(number.val() === "0"){
                number.val("1")
            }
        }
    });
}
function requestGridPopNewEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas14-2.json", function (data) {
        AUIGrid.setGridData(popup_grid_newEnroll_detail, data);
    });
}

/* [수정] 20231016*/
/* 자산검색 */
let popup_subGrid_assetSearch;

function subPopupAssetSearch(e, type){

    let columnLayout = [
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item_name",
            headerText: "모델명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_status",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        }]

    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true, // 가로 스크롤 X
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }
    popup_subGrid_assetSearch = AUIGrid.create("#popup_subGrid_assetSearch", columnLayout, gridPros);
    requestSubPopupAssetSearch();

    /* 20231106그리드 기능 */
    let targetPlace = $(e).attr("data-place");
    let disabledAssetNum;

    AUIGrid.bind(popup_subGrid_assetSearch, "cellDoubleClick", function(event) {
        let rowData = AUIGrid.getSelectedRows(popup_subGrid_assetSearch)[0];

        if (targetPlace === 'disabled-assetNum') {
            disabledAssetNum = rowData.category_asset_num;
            $("input[data-label='disabled-assetNum-val']").val(disabledAssetNum);
            lp_close("assetSearch_pop");
        } else {
            $("#assetSearch_pop input[data-label='product']").val(rowData.category_product);
            $("#assetSearch_pop input[data-label='item']").val(rowData.category_item);

            let changeItem = {
                category_item: rowData.category_item,
                category_item_name: rowData.category_item_name,
                category_asset_num: rowData.category_asset_num,
                category_product: rowData.category_product,
                category_status: rowData.category_status,
            };

            if (type === "newEnroll") {
                AUIGrid.updateRow(popup_grid_newEnroll_detail, changeItem, e.rowIndex);
            } else if (type === "change") {
                changeItem = {
                    category_changeAsset_num: rowData.category_asset_num,
                    category_changeProduct_name: rowData.category_item_name,
                    category_product: rowData.category_product,
                };
                AUIGrid.updateRow(popup_grid_changeEnroll_detail, changeItem, e.rowIndex);
            } else if (type === "rental") {
                changeItem.category_item = rowData.category_item;
                AUIGrid.updateRow(popup_grid_rentalEnroll_detail, changeItem, e.rowIndex);
            } else if (type === "normal") {
                $("input[data-label='assetNumber']").val(rowData.category_asset_num);
            } else if (type === "regularChangeEnroll") {
                changeItem.category_item = rowData.category_item;
                AUIGrid.updateRow(popup_grid_regularChangeEnroll_detail, changeItem, e.rowIndex);
            }

            lp_close("assetSearch_pop");
        }
    });
}

/* 자산검색 팝업에서 자산번호 input 에 4자 이상 입력했을 때 자동 필터링 함수 */
$(function(){
    $("#assetSearch_pop input[data-label='assetNumber']").on("keydown",function(event){
        if(event.target.value.length >= 3){
            var inlineTexts = [{dataField: "category_asset_num", text: event.target.value}];
            // 인라인 필터링 텍스트들 설정 시켜 필터링 실행하기.
            AUIGrid.setFilterInlineTexts(popup_subGrid_assetSearch, inlineTexts);
        } else{
            AUIGrid.clearFilterAll(popup_subGrid_assetSearch);
        }
    });
});

function requestSubPopupAssetSearch() {
    $.get("../resources/lib/aui-grid/data/sample-datas14.json", function (data) {
        AUIGrid.setGridData(popup_subGrid_assetSearch, data);
    });
}

/* 처리이력 */
let popup_grid_newEnroll_history;
function gridPopNewEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_newEnroll_history_column = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_opinion",
            headerText: "결재의견",
            filter: {
                showIcon: true,
            }
        }
    ]

    /* 2. 그리드 속성 설정 */
    let gridPop_newEnroll_history_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        autoGridHeight : true, // 게시되는 data에 맞게 height지정
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_newEnroll_history = AUIGrid.create("#popup_grid_newEnroll_history", gridPop_newEnroll_history_column, gridPop_newEnroll_history_pros);
    requestGridPopNewEnrollHistory();
}
function requestGridPopNewEnrollHistory() {
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_newEnroll_history, data);
    });
}
/* // 신규신청 */
/* //[수정] 2023-10-03 */

/* 2. 교체신청  */
/* 자산 정보 */
let popup_grid_changeEnroll_detail;
function gridPopChangeEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_changeEnroll_history_column = [
        {
            dataField: "category_product_name",
            headerText: "교체자산",
            headerStyle: "my-header-style",
            style: "my-column-style",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_model_name",
            headerText: "모델명",
            headerStyle: "my-header-style",
            style: "my-column-style",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset`_num",
            headerText: "자산번호",
            headerStyle: "my-header-style",
            style: "my-column-style",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "",
            headerText: "교체 후 자산",
            filter: {
                showIcon: true,
            }
        }, {
            dataField:"category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField:"category_changeProduct_name",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_changeAsset_num",
            headerText: "자산번호",
            style: "search_grid_style",
            renderer:{
                type: "ButtonRenderer",
                onClick: function(event){
                    let rowData = AUIGrid.getSelectedRows(popup_grid_changeEnroll_detail)[0];
                    let resultData = {...rowData, rowIndex: event.rowIndex}
                    lp_open("assetSearch_pop","자산검색",800,480, resultData, "change");
                }
            },
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_changeEnroll_history_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_changeEnroll_detail = AUIGrid.create("#popup_grid_changeEnroll_detail", gridPop_changeEnroll_history_column, gridPop_changeEnroll_history_pros);
    requestGridChangeEnrollDetail();
}
function requestGridChangeEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas-id.json", function (data) {
        AUIGrid.setGridData(popup_grid_changeEnroll_detail, data);
    });
}

/* 처리이력 */
let popup_grid_change_history;
function gridPopChangeEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_changeEnroll_history_column = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPop_changeEnroll_history_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_change_history = AUIGrid.create("#popup_grid_change_history", gridPop_changeEnroll_history_column, gridPop_changeEnroll_history_pros);
    requestGridPopChangeEnrollHistory();
}
function requestGridPopChangeEnrollHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas-id.json", function (data) {
        AUIGrid.setGridData( popup_grid_change_history, data);
    });
}
/* // 교체신청 */

/* 3. 대여신청 */
/* 자산정보 */
let popup_grid_rentalEnroll_detail;
function gridPopRentalEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_num",
            headerText: "자산번호",
            style: "search_grid_style",
            renderer:{
                type: "ButtonRenderer",
                onClick: function(event){
                    let rowData = AUIGrid.getSelectedRows(popup_grid_rentalEnroll_detail)[0];
                    let resultData = {...rowData, rowIndex: event.rowIndex}
                    lp_open("assetSearch_pop","자산검색",800,480, resultData, "rental");
                }
            },
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item_name",
            headerText: "모델명",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_rentalEnroll_detail = AUIGrid.create("#popup_grid_rentalEnroll_detail", columnLayout, gridPros);
    requestGridRentalEnrollDetail();

}
function requestGridRentalEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas14.json", function (data) {
        AUIGrid.setGridData(popup_grid_rentalEnroll_detail, data);
    });
}
/* 처리이력 */
let popup_grid_rental_history;
function gridPopRentalEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout3 = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros3 = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_rental_history = AUIGrid.create("#popup_grid_rental_history", columnLayout3, gridPros3);
    requestGridRentalEnrollHistory();
}
function requestGridRentalEnrollHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_rental_history, data);
    });
}
/* // 대여신청 */

/* 4. 반납신청 */
/* 자산정보 */
let popup_grid_returnEnroll_detail;
function gridPopReturnEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {   dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model_name",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_status",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 체크박스 */
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_returnEnroll_detail = AUIGrid.create("#popup_grid_returnEnroll_detail", columnLayout, gridPros);
    requestGridReturnEnrollDetail();
}
function requestGridReturnEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas18.json", function (data) {
        AUIGrid.setGridData( popup_grid_returnEnroll_detail, data);
    });
}
/* 처리이력 */
let popup_grid_return_history;
function gridPopReturnEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_return_history = AUIGrid.create("#popup_grid_return_history", columnLayout, gridPros);
    requestGridReturnEnrollHistory();
}
function requestGridReturnEnrollHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_return_history, data);
    });
}
/* // 반납신청 */

/* 5. 인수인계 신청 */
/* 자산정보 */
let popup_grid_takeOverEnroll_detail;
function gridPopTakeoverEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {   dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model_name",
            headerText: "모델명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_status",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_takeover_time",
            headerText: "인수완료시간",
            filter: {
                showIcon: true,
            }
        }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_takeOverEnroll_detail = AUIGrid.create("#popup_grid_takeOverEnroll_detail", columnLayout, gridPros);
    requestGridTakeoverEnrollDetail();
}
function requestGridTakeoverEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas18.json", function (data) {
        AUIGrid.setGridData(popup_grid_takeOverEnroll_detail, data);
    });
}
/* 처리이력 */
let popup_grid_takeOverEnroll_history
function gridPopTakeoverEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_takeOverEnroll_history = AUIGrid.create("#popup_grid_takeOverEnroll_history", columnLayout, gridPros);
    requestGridTakeoverEnrollHistory();
}
function requestGridTakeoverEnrollHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_takeOverEnroll_history, data);
    });
}
/* // 인수인계 신청 */

/* 6. 대여연장신청 */
/* 자산정보 */
let popup_grid_rentalExtension_detail;
function gridPopRentalExtensionEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {   dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model_name",
            headerText: "모델명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_status",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_start_date",
            headerText: "대여연장기간",
            colSpan: 2, // 자신을 포함하여 3개의 헤더를 가로 병합함.
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_finish_date",
            headerText: "",
            dataType: "date",
            dateInputFormat: "yyyymmdd", // 실제 데이터의 형식 지정
            formatString: "yyyy년 mm월 dd일", // 실제 데이터 형식을 어떻게 표시할지 지정
            renderer: {
                type: "IconRenderer",
                iconWidth: 15, // icon 사이즈, 지정하지 않으면 rowHeight에 맞게 기본값 적용됨
                iconHeight: 13,
                iconPosition: "aisleRight",
                iconTableRef: { // icon 값 참조할 테이블 레퍼런스
                    "default": "../resources/img/icon/icon_delete.svg" // default
                },
                onClick: function (event) {
                    // 달력 아이콘 클릭하면 실제로 달력을 띄움.
                    // 즉, 수정으로 진입함.
                    AUIGrid.openInputer(event.pid);
                }
            },
            editRenderer: {
                type: "JQCalendarRenderer", // jquery-datepicker 달력 렌더러 사용
                defaultFormat: "yyyymmdd", // 달력 선택 시 데이터에 적용되는 날짜 형식
                uncheckDateValue: "-", // Clear 버턴 클릭 시 적용될 값.
                showEditorBtn: false,
                showEditorBtnOver: false,
                // jquery-datepicker 속성을 여기에 설정하십시오.
                // API : https://api.jqueryui.com/datepicker/#option-appendText
                jqOpts: {
                    changeMonth: true,
                    changeYear: true,
                    selectOtherMonths: true,
                    showOtherMonths: true,
                    dayNamesMin: ["일", "월", "화", "수", "목", "금", "토"],
                    monthNamesShort: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"]
                } // end of jqOpts
            },
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_rentalExtension_detail = AUIGrid.create("#popup_grid_rentalExtension_detail", columnLayout, gridPros);
    requestGridRentalExtensionEnrollDetail();
}
function requestGridRentalExtensionEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas18.json", function (data) {
        AUIGrid.setGridData(popup_grid_rentalExtension_detail, data);
    });
}
/* 처리이력 */
let popup_grid_rentalExtension_history;
function gridPopRentalExtensionEnrollHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_time",
            headerText: "시간",
            filter: {
                showIcon: true,
            }
        },
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_rentalExtension_history = AUIGrid.create("#popup_grid_rentalExtension_history", columnLayout, gridPros);
    requestGridRentalExtensionEnrollHistory();
}
function requestGridRentalExtensionEnrollHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_rentalExtension_history, data);
    });
}
/* // 대여연장신청 */
/* ------------------------------------------------------------------------ */

/* [상신 팝업 모음]-------------------------------------------------------------- */
/* 결재 상신 팝업 */
let popup_grid_submitList; // 상신
let popup_subGrid_searchExecutives; // 상신 > 검색한 임직원
let popup_subGrid_addExecutives; // 상신 > 결재라인에 추가할 임직원
let popup_subGrid_approvalChange; // 상신 > 결재선변경
let submitList1 = ["결재", "협조결재","결재참조","병렬결재","병렬협조결재","참조","수신"];

/* 클릭된 row에 대한 index 정보 */
let rowNum;
let cnt = 0; // 임의로 찍어주는 번호이나 변경해야 함.

/* [수정] 2023-10-03 : 가로 스크롤 없앰 */
/* [팝업] 상신 */
function popupSubmitList(id,title,width,height){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_submit",
            headerText: "결재내용",
            width: 180,
            renderer: {
                type: "DropDownListRenderer",
                list: submitList1
            }
        },
        {
            dataField: "category_submit_person",
            headerText: "결재자",
            width: 180,
        },
        {
            dataField: "category_submit_change",
            headerText: "결재선 변경",
            width: 160,
            renderer: {
                type: "ButtonRenderer",
                onClick: function (event) {
                    lp_open('submitApprovalChange_pop','Search Employee',800,490);
                    subPopupApprovalChange(id,title,width,height);
                    rowNum = event.rowIndex;
                },
            }
        },
        {
            dataField: "category_submit_delete",
            headerText: "결재선 삭제",
            width: 120,
            renderer: {
                type: "ButtonRenderer",
                onClick: function (event) {
                    AUIGrid.removeRow(event.pid, event.rowIndex);
                },
                visibleFunction: function(rowIndex, columnIndex, value, item, dataField){
                    if(item.category_submit_delete !== "결재선 삭제"){
                        return false
                    }
                    return true
                },
            }
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        showHeader : false,
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        softRemoveRowMode:false,
        fillColumnSizeMode: true,
    }

    /* 그리드 생성 */
    popup_grid_submitList = AUIGrid.create("#popup_grid_submitList", columnLayout, gridPros);
    requestSubmitListData();
}

/* [팝업] 상신 > 검색한 임직원 */
function subPopupSearchExecutives(id,title,width,height){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_kinds",
            headerText: "유형",
            width: 180,
        },
        {
            dataField: "category_name",
            headerText: "성명",
            width: 180,
        },
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180,
        },
        {
            dataField: "category_ID",
            headerText: "ID",
            width: 180,
        },
        {
            dataField: "category_status",
            headerText: "직급",
            width: 180,
        },
        {
            dataField: "category_department",
            headerText: "부서",
            width: 180,
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        softRemoveRowMode: false // 소프트 제거 모드 사용 안함
    }

    // gridPros.showHeader = false;
    /* 그리드 생성 */
    popup_subGrid_searchExecutives = AUIGrid.create("#popup_subGrid_searchExecutives", columnLayout, gridPros);
    requestSearchExecutivesData();

    // 셀클릭 이벤트 바인딩
    AUIGrid.bind(popup_subGrid_searchExecutives, "cellClick",function(event){
        /* 선택한 행들 얻기 */
        let rows = event.item;
        let value = $("#submitSearch_pop").find("input[type='radio']:checked").siblings('span').text();
        let changeItem = {...rows, category_kinds: value}

        if (rows.length <= 0) {
            alert('상단 그리드에서 체크된 행이 없습니다.');
            return;
        }
        // 얻은 행을 하단 그리드에 추가하기
        if(value === ""){
            alert("결재종류를 선택하세요")
        } else {
            AUIGrid.addRow( popup_subGrid_addExecutives, changeItem, "last");

            // 선택한 상단 그리드 행들 삭제
            AUIGrid.removeRow(popup_subGrid_searchExecutives, "selectedIndex");
        }
    });
}

/* [팝업] 상신 > 결재라인에 추가할 임직원 */
function subPopupAddExecutives(id,title,width,height){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_del_btn", // 임의의 고유값
            headerText: "Del ",
            renderer: {
                type: "IconRenderer",
                iconWidth:12, // icon 사이즈, 지정하지 않으면 rowHeight에 맞게 기본값 적용됨
                iconHeight:16,
                iconPosition: "aisleCenter",
                iconTableRef: { // icon 값 참조할 테이블 레퍼런스
                    "default": "../resources/img/icon/icon_delete.svg" // default
                },
                onClick: function (event) {
                    /* 선택한 행들 얻기 */
                    let rows = AUIGrid.getSelectedRows(popup_subGrid_addExecutives);

                    if (rows.length <= 0) {
                        alert('상단 그리드에서 체크된 행이 없습니다.');
                        return;
                    }
                    // 얻은 행을 하단 그리드에 추가하기
                    AUIGrid.addRow( popup_subGrid_searchExecutives, rows, "last");

                    // 선택한 상단 그리드 행들 삭제
                    AUIGrid.removeRow(popup_subGrid_addExecutives, "selectedIndex");
                }
            }
        },
        {
            dataField: "category_kinds",
            headerText: "유형",
            width: 180,
        },
        {
            dataField: "category_name",
            headerText: "성명",
            width: 180,
        },
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180,
        },
        {
            dataField: "category_ID",
            headerText: "ID",
            width: 180,
        },
        {
            dataField: "category_status",
            headerText: "직급",
            width: 180,
        },
        {
            dataField: "category_department",
            headerText: "부서",
            width: 180,
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        softRemoveRowMode: false// 소프트 제거 모드 사용 안함

    }
    // 그리드 헤더를 표시하지 않습니다.
    // gridPros.showHeader = false;
    /* 그리드 생성 */
    popup_subGrid_addExecutives = AUIGrid.create("#popup_subGrid_addExecutives", columnLayout, gridPros);

}

/* [팝업] 상신 > 결재선변경 */
function subPopupApprovalChange(id,title,width,height){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_kinds",
            headerText: "유형",
            width: 180,
        },
        {
            dataField: "category_name",
            headerText: "성명",
            width: 180,
        },
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180,
        },
        {
            dataField: "category_ID",
            headerText: "ID",
            width: 180,
        },
        {
            dataField: "category_status",
            headerText: "직급",
            width: 180,
        },
        {
            dataField: "category_department",
            headerText: "부서",
            width: 180,
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        softRemoveRowMode: false// 소프트 제거 모드 사용 안함

    }
    // 그리드 헤더를 표시하지 않습니다.
    // gridPros.showHeader = false;
    /* 그리드 생성 */
    popup_subGrid_approvalChange = AUIGrid.create("#popup_subGrid_approvalChange", columnLayout, gridPros);

    AUIGrid.bind(popup_subGrid_approvalChange, "cellClick", function(event){
        let item = new Object();
        item.id = "grid_ID_1" + (++cnt),
            item.category_submit = '결재',
            item.category_submit_person = event.item.category_department,
            item.category_submit_change = '결재선변경',
            item.category_submit_delete = '결재선 삭제',
            AUIGrid.updateRow(popup_grid_submitList, item, rowNum)
        lp_close("submitApprovalChange_pop");

    })
    requestApprovalChange();
}

function requestSubmitListData() {
    $.get("../resources/lib/aui-grid/data/submitList-datas1.json", function (data) {
        AUIGrid.setGridData(popup_grid_submitList, data);
    });
}

function requestSearchExecutivesData() {
    $.get("../resources/lib/aui-grid/data/submitList-datas2.json", function (data) {
        AUIGrid.setGridData(popup_subGrid_searchExecutives, data);
    });
}
function requestApprovalChange() {
    $.get("../resources/lib/aui-grid/data/submitList-datas2.json", function (data) {
        AUIGrid.setGridData(popup_subGrid_approvalChange, data);
    });
}

/* 선택 행들 위로 한 단계 올림 */
function moveRowsToUp() {
    AUIGrid.moveRowsToUp(popup_grid_submitList);
}

/* [윈도우 팝업] 미리보기 */
function openWindowPop(url, name){
    var options = 'top=10, left=10, width=1000, height=600, status=no, menubar=no, toolbar=no, resizable=no';
    window.open(url, name, options);
}

/* 선택 행들 아래로 한 단계 올림 */
function moveRowsToDown() {
    AUIGrid.moveRowsToDown(popup_grid_submitList);
}

/* 결재선추가 팝업 에서 추가버튼 누르면, row 추가되는 기능 */
function addingResult(){
    let resultRows = AUIGrid.getAddedRowItems(popup_subGrid_addExecutives);

    /* 상신팝업에 선택된 row 추가하고 */
    resultRows.forEach((i) => {
        let item = new Object();
        item.id = "grid_ID_1" + (++cnt),
            item.category_submit = i.category_kinds,
            item.category_submit_person = i.category_department,
            item.category_submit_change = '결재선변경',
            item.category_submit_delete = '결재선 삭제',
            AUIGrid.addRow(popup_grid_submitList, item, "last")
    })
    /* 추가된 데이터는 삭제하고 */
    AUIGrid.clearGridData(popup_subGrid_addExecutives);

    /* 팝업창을 닫는다 */
    lp_close("submitSearch_pop");
}

/* // 결재 상신 팝업 */

/* ------------------------------------------------------------------------------------------------ */

/* [수정 ] 20231025 */
/* [장애신고 - 장애신고 : 장애대상 추가 팝업 ]----------------------------------------------------------- */
/* 장애대상 추가 */
let popup_grid_disabledAddRow;
function popupAddDisabled(){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_asset",
            headerText: "자산분류",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_item_name",
            headerText: "모델명",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_user_name",
            headerText: "발생자",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_department",
            headerText: "부서",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_status",
            headerText: "자산위치",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_use_type",
            headerText: "용도1",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_use_type2",
            headerText: "용도2",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_state",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_note",
            headerText: "비고",
            filter: {
                showIcon: true,
            }
        }
    ]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        softRemoveRowMode: false,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 체크박스 */
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_disabledAddRow = AUIGrid.create("#popup_grid_disabledAddRow", columnLayout, gridPros);

    AUIGrid.bind(popup_grid_disabledAddRow, "notFound", searchNotFoundHandler);

    requestDisabledAddRowData();
}
function requestDisabledAddRowData() {
    $.get("../resources/lib/aui-grid/data/sample-datas13.json", function (data) {
        AUIGrid.setGridData(popup_grid_disabledAddRow, data);
    });
}
/* // 장애대상 추가 */

/* [수정] 20231016 */
/* 장애 신고 신청 현황 */
/* 자산정보 */
let popup_grid_disabledCurrent_detail;
function gridPopDisabledDetail() {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_product",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item_name",
            headerText: "모델명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_place",
            headerText: "자산위치",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        softRemoveRowMode: false,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_disabledCurrent_detail = AUIGrid.create("#popup_grid_disabledCurrent_detail", columnLayout, gridPros);
    requestDisabledDetail();
}
function requestDisabledDetail() {
    $.get("../resources/lib/aui-grid/data/sample-datas14.json", function (data) {
        AUIGrid.setGridData(popup_grid_disabledCurrent_detail, data);
    });
}

/* 처리이력 */
let popup_grid_disabledCurrent_history;
function gridPopDisabledHistory() {
    /* 기본 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_history_desc",
            headerText: "처리내용",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_manager",
            headerText: "담당자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_date",
            headerText: "조치일시",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        softRemoveRowMode: false,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_disabledCurrent_history = AUIGrid.create("#popup_grid_disabledCurrent_history", columnLayout, gridPros);
    requestDisabledHistory();
}
function requestDisabledHistory() {
    $.get("../resources/lib/aui-grid/data/sample-datas16.json", function (data) {
        AUIGrid.setGridData(popup_grid_disabledCurrent_history, data);
    });
}

/* 장애이력 20231102 */
let popup_grid_disabledList_history;
function gridPopDisabledListHistory() {
    /* 기본 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_application_num",
            headerText: "신청번호",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_request",
            headerText: "요청내용",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_occur_date",
            headerText: "발생일시",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_take_action_person",
            headerText: "조치자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_processing_detail",
            headerText: "처리내용",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_processing_date",
            headerText: "처리일시",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_status",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        softRemoveRowMode: false,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount:4, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_disabledList_history = AUIGrid.create("#popup_grid_disabledList_history", columnLayout, gridPros);
    requestDisabledListHistory();
}
function requestDisabledListHistory() {
    $.get("../resources/lib/aui-grid/data/sample-datas16.json", function (data) {
        AUIGrid.setGridData(popup_grid_disabledList_history, data);
    });
}
/* // [수정 + 추가] 20231015 */

/* [검색 기능 함수 모음] */
/* 1. 검색 결과가 없을 때 실행될 함수*/
function searchNotFoundHandler(event) {
    var term = event.term; // 찾는 문자열
    var wrapFound = event.wrapFound; // wrapSearch 한 경우 만족하는 term 이 그리드에 1개 있는 경우.
    if (wrapFound) {
        alert('그리드 마지막 행을 지나 다시 찾았지만 다음 문자열을 찾을 수 없습니다 - ' + term);
    } else {
        alert('해당 데이터를 찾을 수 없습니다 - "' + term + '"');
    }
}
/* 2. 발생자 검색시 사용될 함수 */
function searchClickGenerator() {
    var term = document.getElementById("myInput").value;
    if (term.trim() == "") {
        alert("이름을 입력하십시오.");
        return;
    }

    var options = {
        direction : true, // 검색 방향  (true : 다음, false : 이전 검색)
        caseSensitive : true, // 대소문자 구분 여부 (true : 대소문자 구별, false :  무시)
        wholeWord : true, // 온전한 단어 여부
        wrapSearch : true, // 끝에서 되돌리기 여부
    }

    AUIGrid.search(popup_grid_disabledAddRow, "category_user_name", term, options);
}

/* 3. 자산번호 검색시 사용될 함수 */
function searchClickAssetNum() {
    var term = document.getElementById("myAssetNum").value;
    if (term.trim() == "") {
        alert("자산번호를 입력하십시오.");
        return;
    }

    var options = {
        direction : true, // 검색 방향  (true : 다음, false : 이전 검색)
        caseSensitive : true, // 대소문자 구분 여부 (true : 대소문자 구별, false :  무시)
        wholeWord : true, // 온전한 단어 여부
        wrapSearch : true, // 끝에서 되돌리기 여부
    }

    AUIGrid.search(popup_grid_disabledAddRow, "category_asset_num", term, options);
}
/* // 장애 신고 신청 현황 */
/* ------------------------------------------------------------------------ */

/* 20231012 [서비스 신청 현황 - 서비스데스크 신청현황 팝업 ]----------------------------------------------------------- */
/* 자산정보 */
let popup_grid_serviceDesk_detail;
function gridPopServiceDeskDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_user",
            headerText: "사용자",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_department",
            headerText: "부서",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_usage",
            headerText: "용도",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_use_date",
            headerText: "사용기한",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_software_name",
            headerText: "소프트웨어명",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_count",
            headerText: "수량",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_cost",
            headerText: "소요비용",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_request_content",
            headerText: "요청내용",
            filter: {
                showIcon: true,
            }
        },]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_serviceDesk_detail = AUIGrid.create("#popup_grid_serviceDesk_detail", columnLayout, gridPros);
    requestGridServiceDeskDetail();
}
function requestGridServiceDeskDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas29.json", function (data) {
        AUIGrid.setGridData(popup_grid_serviceDesk_detail, data);
    });
}

/* 처리 이력  */
let popup_grid_serviceDesk_history; // 서비스데스크 신청현황
function gridPopServiceDeskHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_history_desc",
            headerText: "처리내용",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_manager",
            headerText: "조치자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_date",
            headerText: "처리일시",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_state",
            headerText: "상태",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        autoGridHeight: true,
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_serviceDesk_history = AUIGrid.create("#popup_grid_serviceDesk_history", columnLayout, gridPros);
    requestServiceDeskHistory();
}
function requestServiceDeskHistory(){
    $.get("../resources/lib/aui-grid/data/sample-datas16.json", function (data) {
        AUIGrid.setGridData(popup_grid_serviceDesk_history, data);
    });
}
/* //[서비스 신청 현황 - 서비스데스트 신청현황 팝업 ]----------------------------------------------------------- */

/* [ 자산등록 - 자산신규등록 : excel import팝업 , 자산입고현황 : 신청현황 팝업 ]----------------------------------------------------------- */
let popup_grid_consistency; // 엑셀 import
function popupConsistency(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "category_consistency",
            headerText: "정합성",
            width: 180,
            renderer : {
                type : "ImageRenderer",
                imgHeight : 16, // 이미지 높이, 지정하지 않으면 rowHeight에 맞게 자동 조절되지만 빠른 렌더링을 위해 설정을 추천합니다.
                altField : null, // alt(title) 속성에 삽입될 필드명, 툴팁으로 출력됨. 만약 null 을 설정하면 툴팁 표시 안함.
                srcFunction: function(rowIndex, columnIndex, value, item){
                    switch(value){
                        case true:
                            return "../resources/img/accept-ok.png";
                        case false:
                            return "../resources/img/accept-not.png";
                    }
                }
            },
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            width: 180,
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_asset_classification",
            headerText: "자산분류",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model_name",
            headerText: "모델",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_place",
            headerText: "자산위치",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_detail_place",
            headerText: "상세위치",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_intro_date",
            headerText: "도입일",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_status",
            headerText: "상태",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_serial_num",
            headerText: "시리얼",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchase",
            headerText: "구매금액",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchase_place",
            headerText: "구매처",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchasing_manager",
            headerText: "구매담당자",
            width: 160,
            filter: {
                showIcon: true,
            }
        }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        // 페이징 사용
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pageRowCount: 17, // 한 화면에 출력되는 행 개수 30개로 지정
        pagingMode: "simple",
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    };

    /* 그리드 생성 */
    setTimeout(function(){
        popup_grid_consistency = AUIGrid.create("#popup_grid_consistency", columnLayout, gridPros);
        requestConsistencyData();
    },500);
}
function requestConsistencyData() {
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_consistency, data);
    });
}


// IE10, 11는 바이너리스트링 못읽기 때문에 ArrayBuffer 처리 하기 위함.
function fixdata(data) {
    var o = "", l = 0, w = 10240;
    for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)));
    o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)));
    return o;
}

// 파싱된 시트의 CDATA 제거 후 반환.
function process_wb(wb) {
    var output = "";
    output = JSON.stringify(to_json(wb));
    output = output.replace(/<!\[CDATA\[(.*?)\]\]>/g, '$1');
    return JSON.parse(output);
}

// 엑셀 시트를 파싱하여 반환
function to_json(workbook) {
    var result = {};
    workbook.SheetNames.forEach(function (sheetName) {
        // JSON 으로 파싱
        // var roa = XLSX.utils.sheet_to_row_object_array(workbook.Sheets[sheetName]);

        // CSV 로 파싱
        var roa = XLSX.utils.sheet_to_csv(workbook.Sheets[sheetName]);

        if (roa.length > 0) {
            result[sheetName] = roa;
        }
    });
    return result;
}

// 엑셀 파일 시트에서 파싱한 JSON 데이터 기반으로 그리드 동적 생성
function createAUIGrid(csvStr) {
    if (AUIGrid.isCreated(popup_grid_consistency)) {
        AUIGrid.destroy(popup_grid_consistency);
        popup_grid_consistency = null;
    }
    var jsonData = parseCsv(csvStr);
    var columnLayout = [
        {
            /* 적합성 여부는 "category_consistency : true 면 ok 이미지, false면 not 이미지가 출력됩니다. 적합성 조회시, boolean값을 넣어주면 됩니다. */
            dataField: "category_consistency",
            headerText: "적합성 여부",
            width: 180,
            renderer : {
                type : "ImageRenderer",
                imgHeight : 16, // 이미지 높이, 지정하지 않으면 rowHeight에 맞게 자동 조절되지만 빠른 렌더링을 위해 설정을 추천합니다.
                altField : null, // alt(title) 속성에 삽입될 필드명, 툴팁으로 출력됨. 만약 null 을 설정하면 툴팁 표시 안함.
                srcFunction: function(rowIndex, columnIndex, value, item){
                    switch(value){
                        case true:
                            return "../resources/img/accept-ok.png";
                        case false:
                            return "../resources/img/accept-not.png";
                    }
                }
            },
            filter: {
                showIcon: true,
            }
        },
    ];
    var gridProps = {
        rowIdField: "id",
        enableRowCheckShiftKey: true,
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple",
        showPageRowSelect: true,
        copyDisplayValue: true, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
        fillColumnSizeMode: true,
    }

    // 현재 엑셀 파일의 0번째 행을 기준으로 컬럼을 작성함.
    // 만약 상단에 문서 제목과 같이 있는 경우
    // 조정 필요.
    var firstRow = jsonData[0];

    if (typeof firstRow == "undefined") {
        alert("AUIGrid 로 변환할 수 없는 엑셀 파일입니다.");
        return;
    }

    const name = ["자산종류","모델명","수량","자산번호","시리얼키"]
    $.each(firstRow, function (n, v) {
        columnLayout.push({
            dataField: n,
            headerText: name[n],
            width: 180
        });
    });

    // 그리드 생성
    popup_grid_consistency = AUIGrid.create("#popup_grid_consistency", columnLayout, gridProps);

    // 그리드에 CSV 데이터 삽입
    AUIGrid.setCsvGridData(popup_grid_consistency, csvStr, false);

}


//최초 그리드 생성..
/*function popupConsistency() {

    var columnLayout = [];

    for (var i = 0; i < 20; i++) {
        columnLayout.push({
            dataField: "f" + i,
            headerText: String.fromCharCode(65 + i),
            width: 80
        });
    }

    // 그리드 속성 설정
    var gridPros = {
        noDataMessage: "로컬 PC의 엑셀 파일을 선택하십시오.",
        rowIdField: "id",
        enableRowCheckShiftKey: true,
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple",
        showPageRowSelect: true,
        copyDisplayValue: true, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
    }

    // 실제로 #grid_wrap 에 그리드 생성
    popup_grid_consistency = AUIGrid.create("#popup_grid_consistency", columnLayout, gridPros);

    // 그리드 최초에 빈 데이터 넣음.
    AUIGrid.setGridData(popup_grid_consistency, []);
}*/

function parseCsv(value) {
    var rows = value.split("\n");
    var pData = [];
    for (var i = 0, len = rows.length; i < len; i++) {
        pData[i] = rows[i].split(",");
    }
    return pData;
}





/* // [ 자산등록 - 자산신규등록 : excel import팝업 ]----------------------------------------------------------- */

/* 20231016 [ 자산등록 - 자산입고현황 팝업 */
let popup_grid_application_status;

function popupApplicationStatus(){
    let columnLayout = [
        {
            dataField: "category_consistency",
            headerText: "정합성",
            width: 180,
            renderer : {
                type : "ImageRenderer",
                imgHeight : 16, // 이미지 높이, 지정하지 않으면 rowHeight에 맞게 자동 조절되지만 빠른 렌더링을 위해 설정을 추천합니다.
                altField : null, // alt(title) 속성에 삽입될 필드명, 툴팁으로 출력됨. 만약 null 을 설정하면 툴팁 표시 안함.
                srcFunction: function(rowIndex, columnIndex, value, item){
                    switch(value){
                        case true:
                            return "../resources/img/accept-ok.png";
                        case false:
                            return "../resources/img/accept-not.png";
                    }
                }
            },
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            width: 180,
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_asset_classification",
            headerText: "자산분류",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model_name",
            headerText: "모델",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_place",
            headerText: "자산위치",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_detail_place",
            headerText: "상세위치",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_intro_date",
            headerText: "도입일",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_status",
            headerText: "상태",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_serial_num",
            headerText: "시리얼",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchase",
            headerText: "구매금액",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchase_place",
            headerText: "구매처",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_purchasing_manager",
            headerText: "구매담당자",
            width: 160,
            filter: {
                showIcon: true,
            }
        }
    ]
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pageRowCount:10,
        pagingMode: "simple",
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    popup_grid_application_status = AUIGrid.create("#popup_grid_application_status", columnLayout, gridPros);
    requestPopupApplicationStatusData();
}

function requestPopupApplicationStatusData() {
    $.get("../resources/lib/aui-grid/data/sample-datas15.json", function (data) {
        AUIGrid.setGridData(popup_grid_application_status, data);
    });
}


/*  20231016 : 자산조회 탭메뉴 그리드 sw 정보 */
let popup_grid_swInformation;

function popupSwInformation(){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_sw_name",
            headerText: "소프트웨어",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_original_sw_name",
            headerText: "제조사",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_license",
            headerText: "라이선스",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_install_date",
            headerText: "설치일",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_license_type",
            headerText: "라이선스유형",
            filter: {
                showIcon: true,
            }
        }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_swInformation = AUIGrid.create("#popup_grid_swInformation", columnLayout, gridPros);
    requestSwInformationData();
    $(document).on("click", "#swInformation", function(){
        AUIGrid.destroy("#popup_grid_swInformation");
        setTimeout(function(){
            AUIGrid.create("#popup_grid_swInformation", columnLayout, gridPros);
            requestSwInformationData();
        }, 10);
    });
}

function requestSwInformationData() {
    $.get("../resources/lib/aui-grid/data/sample-datas21.json", function (data) {
        AUIGrid.setGridData(popup_grid_swInformation, data);
    });
}
/* 20231016 : 자산조회 탭메뉴 그리드 box 정보 */
let popup_grid_boxInformation;

function popupBoxInformation(){
    /* 팝업 그리드(예시) */
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible:false
        },
        {
            dataField: "category_cp_name",
            headerText: "제어판표시명",
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_publisher",
            headerText: "게시자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_ip",
            headerText: "IP",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_mac",
            headerText: "MAC",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_computer_name",
            headerText: "컴퓨터명",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_registration_date",
            headerText: "등록일",
            filter: {
                showIcon: true,
            }
        },  {
            dataField: "category_user_name",
            headerText: "사용자명",
            filter: {
                showIcon: true,
            }
        }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_boxInformation = AUIGrid.create("#popup_grid_boxInformation", columnLayout, gridPros);
    requestBoxInformationData();
    $(document).on("click", "#boxInformation", function(){
        AUIGrid.destroy("#popup_grid_boxInformation");
        setTimeout(function(){
            AUIGrid.create("#popup_grid_boxInformation", columnLayout, gridPros);
            requestBoxInformationData();
        }, 10);
    });
}

function requestBoxInformationData() {
    $.get("../resources/lib/aui-grid/data/sample-datas21.json", function (data) {
        AUIGrid.setGridData(popup_grid_boxInformation, data);
    });
}
/* // 자산조회 탭메뉴 그리드 box 정보 */

/* 자산조회 자산정보, 변경이력 그리드*/
let popup_grid_changeHistory;
function gridPopChangeHistory() {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_change_item",
            headerText: "변경항목",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_before",
            headerText: "변경 전",
            width: 120,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_after",
            headerText: "변경 후",
            width:120,
            filter: {
                showIcon: true,
            },
        }, {
            dataField: "category_change_time",
            headerText: "변경시간",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_person",
            headerText: "변경자",
            width: 150,
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_changeHistory = AUIGrid.create("#popup_grid_changeHistory", columnLayout, gridPros);
    requestChangeHistoryData();
}

function requestChangeHistoryData() {
    $.get("../resources/lib/aui-grid/data/admin-datas2.json", function (data) {
        AUIGrid.setGridData(popup_grid_changeHistory, data);
    });
}
/* // 자산조회 자산정보, 변경이력 그리드*/

/* 사용자 그룹정보 */
/* 1. 그룹기본정보 */
let popup_grid_groupBasicInformation;
function gridPopGroupBasicInformation(id,title,width,height){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_mode",
            headerText: "모드",
            width: 160
        }, {
            dataField: "category_module_name",
            headerText: "모듈명",
            width: 120,
        }, {
            dataField: "category_program_name",
            headerText: "프로그램명",
            width:120,
            // 최초 보여질 때 모두 열린 상태로 출력 여부
            displayTreeOpen : true,

            // 트리 컬럼(즉, 폴딩 아이콘 출력 칼럼) 을 인덱스1번으로 설정함(디폴트 0번임)
            treeColumnIndex : 1,
        }, {
            dataField: "category_usage_status",
            headerText: "사용여부",
            width: 160,
            dataType: "boolean",
            headerRenderer: { // 헤더 렌더러
                type: "CheckBoxHeaderRenderer",
                dependentMode: true
            },
            renderer: {
                type: "CheckBoxEditRenderer",
                editable: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 50, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true,
        rowCheckDependingTree: true,
        treeIdField: "tree_id",
        treeIdRefField: "parent",
        displayTreeOpen : false
    }

    /* 그리드 생성 */
    popup_grid_groupBasicInformation = AUIGrid.create("#popup_grid_groupBasicInformation", columnLayout, gridPros);
    requestGroupBasicInformationData();

    /* 그리드 관련 함수 */
}
function requestGroupBasicInformationData(){
    $.get("../resources/lib/aui-grid/data/admin-datas4.json", function (data) {
        AUIGrid.setGridData(popup_grid_groupBasicInformation, data);
    });
}
/* // 1. 그룹기본정보 */

/* 2. 그룹별 사용자 (기본) */
let popup_grid_userGroup;
function gridPopUserGroup(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_user_column = [
        {
            dataField: "category_user_name",
            headerText: "사용자명",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_department_whole_name",
            headerText: "전체부서명",
            width: 160,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_department",
            headerText: "부서",
            width: 160,
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_user_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
        copyDisplayValue: true, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
        softRemoveRowMode: true // 소프트 제거 모드 사용 안함
    }

    /* 그리드 생성 */
    popup_grid_userGroup = AUIGrid.create("#popup_grid_userGroup",  gridPop_user_column, gridPop_user_pros);
}
/* // 2. 그룹별 사용자 (기본) */

/* 2-1. 사용자 선택 ( 사용자 추가 클릭시) */
let popup_grid_selectUser;
function gridPopSelectUser(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_user_column = [
        {
            dataField: "category_employeeID",
            headerText: "사번",
            width: 180,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_user_name",
            headerText: "사용자명",
            width: 180,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_department",
            headerText: "부서",
            width: 160,
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_user_pros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true, // 가로 스크롤 없이 현재 그리드 영역에 채우기 모드
        copyDisplayValue: true, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
        softRemoveRowMode: false, // 소프트 제거 모드 사용 안함
    }

    /* 그리드 생성 */
    popup_grid_selectUser = AUIGrid.create("#popup_grid_selectUser",  gridPop_user_column, gridPop_user_pros);
    requestGridPopSelectUser();


}
function requestGridPopSelectUser() {
    $.get("../resources/lib/aui-grid/data/sample-datas4.json", function (data) {
        AUIGrid.setGridData(popup_grid_selectUser, data);
    });
}
/* // 2-1. 사용자 선택 ( 사용자 추가 클릭시) */

/* [관련함수 모음] 사용자 그룹정보 관련 함수 모음 */
/* a. 선택 행 삭제 */
function deleteSelectUserGrid(){
    AUIGrid.removeCheckedRows(popup_grid_userGroup); // 체크된 행 삭제 처리
    let removedRows = AUIGrid.getRemovedItems(popup_grid_userGroup, true); // 삭제 처리된 아이템 있는지 보기
    if (removedRows.length <= 0) {
        alert("삭제 처리되어 마크된 행이 없습니다.")
        return;
    }
    AUIGrid.removeSoftRows(popup_grid_userGroup); // softRemoveRowMode 가 true 일 때 삭제를 하면 그리드 상에 마크가 되는데, 이를 실제로 그리드에서 삭제 함.
}

/* b. 그룹변경 : 체크된 항목이 없을때 팝업창 안열림 */
function changeGroup(){
    let checkRows = AUIGrid.getCheckedRowItemsAll(popup_grid_userGroup);
    let checkLength = checkRows.length;
    if(checkLength === 0){
        alert("선택된 사용자가 없습니다.")
        return false;
    } else {
        lp_open('gridPop_selectChangeGroup','변경할 그룹 선택',600,240);
    }
}

/* c. 사용자 선택 > 선택 클릭시 */
function selectAddRow(){
    let rows = AUIGrid.getCheckedRowItems(popup_grid_selectUser);
    if(rows.length < 1){
        alert("체크된 데이터가 없습니다.");
        return;
    }

    for(let i=0; i < rows.length; i++){
        AUIGrid.addRow(popup_grid_userGroup, rows[i].item, "last");
    }

    /*  중복되는 정보가 존재할 시 */
    lp_close("gridPop_selectUser");
}

/* d. 저장 버튼 클릭시 삭제 버튼 보임*/
function save_Info(id){
    if($("#" + id +"  .btn.trash").data('btn') === "hide"){
        /* 값 저장하기 */
        $("#" + id +"  .btn.trash").attr("data-btn","show");

        /* 그리드 구현하기 */
        setTimeout(function(){
            gridPopGroupBasicInformation('userGroup_pop','사용자 그룹 정보',1250,800);
        },20);
    }
}
/* 사용자 그룹정보 관련 함수 모음 */
/* // 사용자 그룹정보 */

/* [수정]20231016 */
/* 자산분류 팝업 */
let popup_grid_assetClassification;
function gridPopAssetClassification(e){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [{
        dataField: "id",
        headerText: "ID",
        visible:false,
        editRenderer: {
            type: "InputEditRenderer",

            // ID는 고유값만 가능하도록 에디팅 유효성 검사
            validator: function (oldValue, newValue, rowItem, dataField) {
                if (oldValue != newValue) {
                    // dataField 에서 newValue 값이 유일한 값인지 조사
                    var isValid = AUIGrid.isUniqueValue(popup_grid_assetClassification, dataField, newValue);

                    // 리턴값은 Object 이며 validate 의 값이 true 라면 패스, false 라면 message 를 띄움
                    return { "validate": isValid, "message": newValue + " 값은 고유값이 아닙니다. 다른 값을 입력해 주십시오." };
                }
            }
        }
    }, {
        dataField: "category_classification_name",
        headerText: "분류명",
        style: "left",
        filter: {
            showIcon: true,
        },
        width: "50%"
    }, {
        dataField: "category_classification_code",
        headerText: "분류코드",
        style: "left",
        filter: {
            showIcon: true,
        }
    }, {
        dataField: "category_note",
        headerText: "비고",
        filter: {
            showIcon: true,
        }
    }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "rowId",// 행의 고유 필드명
        selectionMode : "singleRow",
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 트리 */
        treeIdField: "id",// 트리의 고유 필드명
        flat2tree: true,//그리드에 입력되는 데이터가 계층구조의 데이터는 아니지만, id, parent 구조를 갖는 일반 데이터인 경우 트리 그리드로 출력할지 여부를 나타냅니다.
        treeIdRefField: "parent", // 계층 구조에서 내 부모 행의 treeIdField 참고 필드명
        treeColumnIndex : 1,
        displayTreeOpen : true,// 최초 보여질 때 모두 열린 상태로 출력 여부
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_assetClassification = AUIGrid.create("#popup_grid_assetClassification", columnLayout, gridPros);
    requestAssetClassificationData();

    /* 그리드 기능 */
    let targetPlace = $(e).attr("data-place");

    AUIGrid.bind(popup_grid_assetClassification, "cellDoubleClick", function(event) {
        if(targetPlace === 'asset') {
            let itemName = event.item.category_classification_name;

            $("input[data-label='asset_classify']").val(itemName);

            $("#gridPop_assetClassification").dialog("close");
        }
    });
}

function requestAssetClassificationData(){
    $.get("../resources/lib/aui-grid/data/admin-tree.json", function (data) {
        AUIGrid.setGridData(popup_grid_assetClassification, data);
    });
}
//자산분류 팝업
/* //[수정]20231016 */

/* [수정]2023-10-12 20231012 */
/* 정기교체 작업등록 팝업에서 정기교체 대상 그리드 */
let popup_grid_replacementTarget;
function gridPopReplacementTarget(id,title,width,height) {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_product_type",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model",
            headerText: "모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_name",
            headerText: "사용자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_department",
            headerText: "부서",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_place",
            headerText: "자산위치",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_introduction_day",
            headerText: "도입일",
            filter: {
                showIcon: true,
            }
        }]
    /* 20231016 : 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 5, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: false, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_replacementTarget = AUIGrid.create("#popup_grid_replacementTarget", columnLayout, gridPros);
    // requestReplacementTargetData();
}
function requestReplacementTargetData() {
    $.get("../resources/lib/aui-grid/data/admin-datas3.json", function (data) {
        AUIGrid.setGridData(popup_grid_replacementTarget, data);
    });
}

/* 정기교체 작업등록 팝업에서 정기교체작업등록현황 */
let popup_grid_replacementTarget_current;
function gridPopReplacementTargetCurrent() {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_product_type",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model",
            headerText: "모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_name",
            headerText: "사용자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_department",
            headerText: "부서",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_place",
            headerText: "자산위치",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_introduction_day",
            headerText: "도입일",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: false, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_replacementTarget_current = AUIGrid.create("#popup_grid_replacementTarget_current", columnLayout, gridPros);
    requestReplacementTargetCurrentData();
}
function requestReplacementTargetCurrentData() {
    $.get("../resources/lib/aui-grid/data/admin-datas3.json", function (data) {
        AUIGrid.setGridData(popup_grid_replacementTarget_current, data);
    });
}

/* 정기교체대상 팝업  > 자산내역 */
let popup_grid_replacementTarget_list1;
let removedRowsId = [];
function gridPopReplacementTargetList1() {
    /* 1. AUIGrid 칼럼 설정 */

    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_status",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "물품종류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model",
            headerText: "모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_start_date",
            headerText: "도입일",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user",
            headerText: "사용자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_department",
            headerText: "부서",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_installation_day",
            headerText: "설치일",
            filter: {
                showIcon: true,
            }
        }]
    /* 20231016 :  2. 그리드 속성 설정 */

    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        softRemoveRowMode: true,
        /* 체크박스 */
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount:5, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: false, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 수정 */
        independentAllCheckBox : true,
        enableRestore: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
        /* 체크박스 기능 */
        rowCheckDisabledFunction: function (rowIndex, isChecked, item) {
            let removedRows = AUIGrid.getRemovedItems(popup_grid_replacementTarget_list1, true);
            removedRowsId = removedRows.map(item => item.id);
            if(removedRows.length === 0){
                return true;
            }else{
                for(let i=0; i < removedRows.length; i++){
                    if(item.id === removedRowsId[i]){
                        return false;
                    }
                }
                return true;
            }
        }
    }

    /* 그리드 생성 */
    popup_grid_replacementTarget_list1 = AUIGrid.create("#popup_grid_replacementTarget_list1", columnLayout, gridPros);
    requestReplacementTargetList1Data();

    let removeRowsArr =[];

    /* 전체선택 */
    AUIGrid.bind(popup_grid_replacementTarget_list1, "rowAllChkClick", function (event) {
        let removedRows = AUIGrid.getRemovedItems(popup_grid_replacementTarget_list1, true);

        if(event.checked){
            let uniqueValues = AUIGrid.getColumnDistinctValues(event.pid, "id");
            removeRowsArr =[];
            for(let i=0; i<removedRows.length; i++){
                removeRowsArr.push(removedRows[i].id);
                uniqueValues = uniqueValues.filter(item => !removeRowsArr.includes(item));
            }
            AUIGrid.setCheckedRowsByValue(event.pid, "id", uniqueValues);
        } else {
            AUIGrid.setCheckedRowsByValue(event.pid, "id", []);
            removeRowsArr =[];
        }
    });


    /* 개별선택 */
    AUIGrid.bind(popup_grid_replacementTarget_list1, "rowCheckClick", function (event) {
        let rowCount = AUIGrid.getRowCount(popup_grid_replacementTarget_list1);
        let checkedItemsLength = AUIGrid.getCheckedRowItemsAll(popup_grid_replacementTarget_list1).length;
        let removedRows = AUIGrid.getRemovedItems(popup_grid_replacementTarget_list1, true).length;

        if(checkedItemsLength === (rowCount - removedRows)){
            AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list1, true);
        }else{
            AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list1, false);
        }
    });
}
function requestReplacementTargetList1Data() {
    $.get("../resources/lib/aui-grid/data/admin-datas3.json", function (data) {
        AUIGrid.setGridData(popup_grid_replacementTarget_list1, data);
    });
}

/* 정기교체대상 팝업  > 자산내역 */
let popup_grid_replacementTarget_list2;
function gridPopReplacementTargetList2() {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false,
            filter: {
                showIcon: true,
            }
        },
        {
            dataField: "category_asset_status",
            headerText: "자산상태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item",
            headerText: "물품종류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_model",
            headerText: "모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_start_date",
            headerText: "도입일",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user",
            headerText: "사용자",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_department",
            headerText: "부서",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_installation_day",
            headerText: "설치일",
            filter: {
                showIcon: true,
            }
        }]
    /* 20231016 : 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 체크박스 */
        showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
        enableRowCheckShiftKey: true,
        independentAllCheckBox : true,
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 5, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: false, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_replacementTarget_list2 = AUIGrid.create("#popup_grid_replacementTarget_list2", columnLayout, gridPros);

    /* 전체선택 */
    AUIGrid.bind(popup_grid_replacementTarget_list2, "rowAllChkClick", function (event) {
        if(event.checked){
            let uniqueValues = AUIGrid.getColumnDistinctValues(event.pid, "id");
            AUIGrid.setCheckedRowsByValue(event.pid, "id", uniqueValues);
        } else {
            AUIGrid.setCheckedRowsByValue(event.pid, "id", []);
        }
    });

    /* 개별선택 */
    AUIGrid.bind(popup_grid_replacementTarget_list2, "rowCheckClick", function (event) {
        let rowCount = AUIGrid.getRowCount(popup_grid_replacementTarget_list2);
        let checkedItemsLength = AUIGrid.getCheckedRowItemsAll(popup_grid_replacementTarget_list2).length;

        if(checkedItemsLength === rowCount){
            AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list2, true);
        }else{
            AUIGrid.setAllCheckedRows(popup_grid_replacementTarget_list2, false);
        }
    });
}

/* 정기교체 상세내역 > 교체신청_정기교체  */
/* 자산 정보 */
let popup_grid_regularChangeEnroll_detail;
function gridPopRegularChangeEnrollDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let gridPop_changeEnroll_history_column = [
        {
            dataField: "category_asset",
            headerText: "자산분류",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_item",
            headerText: "품목",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_model_name",
            headerText: "모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_asset_num",
            headerText: "자산번호",
            style: "search_grid_style",
            renderer:{
                type: "ButtonRenderer",
                onClick: function(event){
                    let rowData = AUIGrid.getSelectedRows(popup_grid_regularChangeEnroll_detail);
                    let rowIndex = event.rowIndex;
                    let resultData = {...rowData[0], rowIndex: rowIndex}
                    lp_open("assetSearch_pop","자산검색",800,480, resultData, "regularChangeEnroll");
                }
            },
            width:200,
            filter: {
                showIcon: true,
            }
        },{
            dataField:"category_old_model",
            headerText: "구 모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField:"category_old_asset_num",
            headerText: "구자산번호",
            filter: {
                showIcon: true,
            }
        }]
    /* 2. 그리드 속성 설정 */
    let gridPop_changeEnroll_history_pros = {
        selectionMode: "multipleCells",
        enableSorting: true,
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 24, // 기본 헤더 높이 지정
        fillColumnSizeMode:true,
        autoGridHeight: true,
        /* 페이지네이션 */
        usePaging: true,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 3,
        showPageRowSelect: true,
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_regularChangeEnroll_detail = AUIGrid.create("#popup_grid_regularChangeEnroll_detail", gridPop_changeEnroll_history_column, gridPop_changeEnroll_history_pros);
    requestGridRegularChangeEnrollDetail();
}
function requestGridRegularChangeEnrollDetail(){
    $.get("../resources/lib/aui-grid/data/sample-datas-id.json", function (data) {
        AUIGrid.setGridData(popup_grid_regularChangeEnroll_detail, data);
    });
}
/* // 교체신청 */



/* // [수정 + 추가]202361004 */


/* ---- 20231016 ----------------------------------------------------------- */
/* [추가] 자산정보 */
let popup_grid_assetDetail;
function gridPopAssetDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_due_diligence_title",
            headerText: "실사제목",
            width: 160,
            filter: {
                showIcon: true,
            }

        }, {
            dataField: "category_user_name",
            headerText: "사용자",
            width: 120,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_department",
            headerText: "부서",
            width:120,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_charge_person",
            headerText: "모델",
            width: 160,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_name",
            headerText: "사용자",
            width: 150,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_user_department",
            headerText: "부서",
            width: 150,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_investigate_date",
            headerText: "조사일",
            width: 150,
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_note",
            headerText: "비고",
            width: 150,
            filter: {
                showIcon: true,
            }
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pageRowCount: 4,
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_assetDetail = AUIGrid.create("#popup_grid_assetDetail", columnLayout, gridPros);
    requestAssetDetailData();
}

function requestAssetDetailData() {
    $.get("../resources/lib/aui-grid/data/sample-datas25.json", function (data) {
        AUIGrid.setGridData(popup_grid_assetDetail, data);
    });
}
/* // 자산정보 */


/* ---- 2023-09-12 ----------------------------------------------------------- */

/* ---- 2023-09-18 ----------------------------------------------------------- */
/* 자산조회 자산정보, 변경이력 그리드*/
let popup_grid_duediligenceHistory;
function gridPopDueDiligenceHistory(id,title,width,height) {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_title",
            headerText: "실사제목",
            width: 160
        }, {
            dataField: "category_user",
            headerText: "사용자",
            width: 120,
        }, {
            dataField: "category_department",
            headerText: "부서",
            width:120
        }, {
            dataField: "category_investigator",
            headerText: "조사자",
            width: 160
        }, {
            dataField: "category_note",
            headerText: "비고",
            width: 150
        }]
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true,
        autoGridHeight : true,
    }

    /* 그리드 생성 */
    popup_grid_duediligenceHistory = AUIGrid.create("#popup_grid_duediligenceHistory", columnLayout, gridPros);
    requestDueDiligenceHistoryData();
}

function requestDueDiligenceHistoryData() {
    $.get("../resources/lib/aui-grid/data/admin-datas2.json", function (data) {
        AUIGrid.setGridData(popup_grid_duediligenceHistory, data);
    });
}
/* ---- 2023-09-18 ----------------------------------------------------------- */
/* ---- 20231016----------------------------------------------------------- */
let  popup_grid_department_checkbox;
function popupDepartmentCheckboxSearch(e) {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [{
        dataField: "id",
        headerText: "ID",
        width: 140,
        visible:false,
    }, {
        dataField: "category_dName",
        headerText: "",
        style: "left",
        width: 340,

    }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multiRow",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 20,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 트리 */
        displayTreeOpen: true,
        treeColumnIndex: 1,
        showRowCheckColumn: true,
        rowCheckDependingTree: false,
        /* 검색 */
        searchByFormatValue :false
    }


    // 실제로 #grid_wrap 에 그리드 생성
    popup_grid_department_checkbox = AUIGrid.create("#popup_grid_department_checkbox", columnLayout, gridPros);
    requestGridPopDepartmentCheckbox();

    // 체크박스 클린 이벤트 바인딩
    AUIGrid.bind(popup_grid_department_checkbox, "rowCheckClick", function (event) {
        let depthMenu = event.item.children;

        if( event.item._$isBranch === true && event.item._$depth ===1 && event.checked === true){
            AUIGrid.setAllCheckedRows(popup_grid_department_checkbox, true);
        } else if(event.item._$isBranch === true && event.item._$depth ===2 && event.checked === true){
            let depthMenuArr = depthMenu.map(item => item.id);
            for(let i=0; i<depthMenuArr.length; i++){
                AUIGrid.addCheckedRowsByValue(popup_grid_department_checkbox, "id", depthMenuArr[i])
            }
        }
    });

    // 검색(search) Not Found 이벤트 바인딩
    AUIGrid.bind(popup_grid_department_checkbox, "notFound", function (event) {
        var term = event.term; // 찾는 문자열
        var wrapFound = event.wrapFound; // wrapSearch 한 경우 만족하는 term 이 그리드에 1개 있는 경우.

        if (wrapFound) {
            alert('그리드 마지막 행을 지나 다시 찾았지만 다음 문자열을 찾을 수 없습니다 - ' + term);
        } else {
            alert('다음 문자열을 찾을 수 없습니다 - "' + term + '"');
        }
    });

    // keyDown 이벤트 바인딩
    AUIGrid.bind(popup_grid_department_checkbox, "keyDown",	function(event) {
        if(event.keyCode === 32) { // 스페이스바
            let selectedItems = AUIGrid.getSelectedItems(popup_grid_department_checkbox);
            let items = selectedItems.map(selects => selects.item);
            let itemsId = items.map(item => item.id); // 아이디값
            let itemsDepth = items.map(item => item._$depth); // 뎁스
            let isChecked = AUIGrid.isCheckedRowById(popup_grid_department_checkbox, itemsId[0]);
            let childrenArr = items.map(item => item.children);
            let childrenId;

            if(isChecked === false){
                if(itemsDepth[0] === 1){
                    AUIGrid.setAllCheckedRows(popup_grid_department_checkbox, true);
                } else if(itemsDepth[0] ===2){
                    childrenId = childrenArr[0].map(item => item.id);

                    AUIGrid.addCheckedRowsByIds(popup_grid_department_checkbox, itemsId[0]);
                    AUIGrid.addCheckedRowsByIds(popup_grid_department_checkbox, childrenId);
                } else{
                    AUIGrid.addCheckedRowsByIds(popup_grid_department_checkbox, itemsId[0]);
                }
            } else{
                AUIGrid.addUncheckedRowsByIds(popup_grid_department_checkbox, itemsId[0]);

            }

            return false; // 엔터 키의 기본 행위 안함.
        }
        return true; // 기본 행위 유지
    });

}

function requestGridPopDepartmentCheckbox() {
    $.get("../resources/lib/aui-grid/data/admin-datas3-tree.json", function (data) {
        AUIGrid.setGridData(popup_grid_department_checkbox, data);
    });
}
function selectDepartment(e){
    /* 1. 체크 된 행 찾기 */
    let checkedRows = AUIGrid.getCheckedRowItemsAll(popup_grid_department_checkbox);
    let checkedDepartmentNameArr = checkedRows.map(item => item.category_dName);
    let checkedUidNameArr = checkedRows.map(item => item.uid);
    let item = new Object();

    /* 그리드 기능 */
    let targetPlace = $(e).attr("data-place");
    if(targetPlace === 'department_search'){
        /* 해당 인풋창 나열 */
        $("input[data-label='department']").val(checkedDepartmentNameArr.join(", "));
    }else if(targetPlace==='department_add'){
        /* 행 추가(반복) */
        for(let i=0; i<checkedRows.length;i++){
            item.uid = checkedUidNameArr[i],
                item.id = "T-Add" + (++cnt2), /* 임의로 넣어준 값\ */
                item.category_department = checkedDepartmentNameArr[i];
            AUIGrid.addRow(popup_grid_department_detail, item, "last");
        }
    }
    /* 창 닫기 */
    lp_close("gridPop_department_checkbox");
}

/* 검색(enter) */
$(document).ready(function(){
    let input_department = $("#search_checkbox_department");

    input_department.keyup(function(e){
        if(e.keyCode === 13){
            let term = input_department.val();

            if (term.trim() == "") {
                alert("검색 하고자 하는 단어를 입력하십시오.");
                return;
            }

            let options = {
                direction : true, // 검색 방향  (true : 다음, false : 이전 검색)
                caseSensitive : true, // 대소문자 구분 여부 (true : 대소문자 구별, false :  무시)
                wholeWord : false, // 온전한 단어 여부
                wrapSearch : true, // 끝에서 되돌리기 여부
            };

            AUIGrid.search(popup_grid_department_checkbox,"category_dName", term, options);
        }
    });
});


let popup_grid_department_detail;
function popupDepartmentDetail() {
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [{
        dataField: "id",
        headerText: "ID",
        visible:false,
    }, {
        dataField: "category_department",
        headerText: "부서명",
        style: "left",
        width: "90%"
    },{
        dataField: "category_del_btn", //임의의 고유값
        headerText: "",
        renderer: {
            type: "IconRenderer",
            iconWidth:12,
            iconHeight:16,
            iconPosition:"aisleCenter",
            iconTableRef:{
                "default":"../resources/img/icon/icon_delete.svg"
            },
            onClick: function(){
                clickItem = AUIGrid.getSelectedRows(popup_grid_department_detail)[0];
                AUIGrid.removeRow(popup_grid_department_detail, "selectedIndex");
            },
            width: "10%"
        }
    }];
    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multiRow",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        softRemoveRowMode: false, // 소프트 제거 모드 사용 안함
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 20,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
    }


    // 실제로 #grid_wrap 에 그리드 생성
    popup_grid_department_detail = AUIGrid.create("#popup_grid_department_detail", columnLayout, gridPros);
    requestGridPopDepartmentDetail();
}

function requestGridPopDepartmentDetail() {
    $.get("../resources/lib/aui-grid/data/admin-datas6.json", function (data) {
        AUIGrid.setGridData(popup_grid_department_detail, data);
    });
}

/* ---- //20231003 ----------------------------------------------------------- */
/* ---- 20231010 ----------------------------------------------------------- */
/* 자산실사  > 변경이력 */
let popup_grid_assetChangeDetail;
function gridPopAssetChangeDetail(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_change_item",
            headerText: "변경항목",
            filter: {
                showIcon: true,
            }

        }, {
            dataField: "category_before_change",
            headerText: "변경 전",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_after_change",
            headerText: "변경 후",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_time",
            headerText: "변경시간",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_person",
            headerText: "변경자",
            filter: {
                showIcon: true,
            }
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_assetChangeDetail = AUIGrid.create("#popup_grid_assetChangeDetail", columnLayout, gridPros);
    requestAssetChangeDetailData();
}

function requestAssetChangeDetailData() {
    $.get("../resources/lib/aui-grid/data/sample-datas25.json", function (data) {
        AUIGrid.setGridData(popup_grid_assetChangeDetail, data);
    });
}

/* 자산실사  > 실사이력 */
let popup_grid_assetChangeHistory;
function gridPopAssetChangeHistory(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_change_item",
            headerText: "변경항목",
            filter: {
                showIcon: true,
            }

        }, {
            dataField: "category_before_change",
            headerText: "변경 전",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_after_change",
            headerText: "변경 후",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_time",
            headerText: "변경시간",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_change_person",
            headerText: "변경자",
            filter: {
                showIcon: true,
            }
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_assetChangeHistory = AUIGrid.create("#popup_grid_assetChangeHistory", columnLayout, gridPros);
    requestAssetChangeHistoryData();
}

function requestAssetChangeHistoryData() {
    $.get("../resources/lib/aui-grid/data/sample-datas25.json", function (data) {
        AUIGrid.setGridData(popup_grid_assetChangeHistory, data);
    });
}
/* ---- // 20231010 ----------------------------------------------------------- */
/* ---- 20231011 ----------------------------------------------------------- */
/* sw 상세정보 */
let popup_grid_license_manage;

function gridPopLicenseManage(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산정보",
            filter: {
                showIcon: true,
            }

        }, {
            dataField: "category_visual",
            headerText: "형태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_sap_id",
            headerText: "SAP ID",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item_name",
            headerText: "장비명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_hardware_model",
            headerText: "하드웨어모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_assignment_date",
            headerText: "할당일sw",
            filter: {
                showIcon: true,
            }
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_license_manage = AUIGrid.create("#popup_grid_license_manage", columnLayout, gridPros);
    requestLicenseManageData();
}

function requestLicenseManageData() {
    $.get("../resources/lib/aui-grid/data/admin-license.json", function (data) {
        AUIGrid.setGridData(popup_grid_license_manage, data);
    });
}

/* sw 상세정보 > 신규추가 */
let popup_grid_license_manage2;

function gridPopLicenseManage2(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산정보",
            filter: {
                showIcon: true,
            }

        }, {
            dataField: "category_visual",
            headerText: "형태",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_sap_id",
            headerText: "SAP ID",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_item_name",
            headerText: "장비명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_hardware_model",
            headerText: "하드웨어모델",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_assignment_date",
            headerText: "할당일sw",
            filter: {
                showIcon: true,
            }
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        autoGridHeight : true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_license_manage2 = AUIGrid.create("#popup_grid_license_manage2", columnLayout, gridPros);
    requestLicenseManageData();
}

function requestLicenseManageData() {
    $.get("../resources/lib/aui-grid/data/admin-license.json", function (data) {
        AUIGrid.setGridData(popup_grid_license_manage2, data);
    });
}

/* HW 상세정보 */
let popup_grid_license_manage_addf;
function gridPopLicenseManageAddf(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산정보",
            editable: false,
            filter: {
                showIcon: true,
            },
        }, {
            dataField: "category_sw_product",
            headerText: "SW 종류",
            editable: false,
            filter: {
                showIcon: true,
            },
        }, {
            dataField: "category_sw_item",
            headerText: "SW 라이선스 제품명",
            editable: false,
            filter: {
                showIcon: true,
            },
            width:200
        }, {
            dataField: "category_quantity",
            headerText: "수량",
            editable: true,
            filter: {
                showIcon: true,
            },
            renderer: {
                type: "NumberStepRenderer",
                min: 0,
                max: 50,
                step: 1,
                inputHeight: 28, // input 높이 지정
                textEditable: true,
            },
            width:90
        },{
            dataField: "category_manager",
            headerText: "담당자",
            editable:true,
            editRenderer : {
                type : "InputEditRenderer",
                showEditorBtnOver : true, // 마우스 오버 시 에디터버턴 보이기
                textAlign : "right", // 오른쪽 정렬로 입력되도록 설정
                maxlength : 10,
            },
            filter: {
                showIcon: true,
            },
        },{
            dataField: "category_del_btn", //임의의 고유값
            headerText: "",
            headerStyle: "my-header-style",
            editable: false,
            style: "my-column-style",
            renderer: {
                type: "IconRenderer",
                iconWidth:12,
                iconHeight:16,
                iconPosition:"aisleCenter",
                iconTableRef:{
                    "default":"../resources/img/icon/icon_delete.svg"
                },
                onClick: function(){
                    clickItem = AUIGrid.getSelectedRows(popup_grid_license_manage_addf)[0];
                    AUIGrid.removeRow(popup_grid_license_manage_addf, "selectedIndex");
                },
            },
            width:60
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        softRemoveRowMode:false,
        editable: true, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 5,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_license_manage_addf = AUIGrid.create("#popup_grid_license_manage_addf", columnLayout, gridPros);
}

/* 행 추가 */
let add_id = 0;
function addRow() {
    var item = new Object();
    item.id = "grid_ID_1" + (++add_id),
        item.category_product = '',
        item.category_item = '',
        item.category_amount = '',

        // parameter
        // item : 삽입하고자 하는 아이템 Object 또는 배열(배열인 경우 다수가 삽입됨)
        // rowPos : rowIndex 인 경우 해당 index 에 삽입, first : 최상단, last : 최하단, selectionUp : 선택된 곳 위, selectionDown : 선택된 곳 아래
        AUIGrid.addRow(popup_grid_license_manage_addf, item, "first");
};

/* 20231121 : HW 상세정보 > 신규신청 */
let popup_grid_license_manage_addf2;
function gridPopLicenseManageAddf2(){
    /* 1. AUIGrid 칼럼 설정 */
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산정보",
            editable: false,
            filter: {
                showIcon: true,
            },
        }, {
            dataField: "category_sw_product",
            headerText: "SW 종류",
            editable: false,
            filter: {
                showIcon: true,
            },
        }, {
            dataField: "category_sw_item",
            headerText: "SW 라이선스 제품명",
            editable: false,
            filter: {
                showIcon: true,
            },
            width:200
        }, {
            dataField: "category_quantity",
            headerText: "수량",
            editable: true,
            filter: {
                showIcon: true,
            },
            renderer: {
                type: "NumberStepRenderer",
                min: 0,
                max: 50,
                step: 1,
                inputHeight: 28, // input 높이 지정
                textEditable: true,
            },
            width:90
        },{
            dataField: "category_manager",
            headerText: "담당자",
            editable:true,
            editRenderer : {
                type : "InputEditRenderer",
                showEditorBtnOver : true, // 마우스 오버 시 에디터버턴 보이기
                textAlign : "right", // 오른쪽 정렬로 입력되도록 설정
                maxlength : 10,
            },
            filter: {
                showIcon: true,
            },
        },{
            dataField: "category_del_btn", //임의의 고유값
            headerText: "",
            headerStyle: "my-header-style",
            editable: false,
            style: "my-column-style",
            renderer: {
                type: "IconRenderer",
                iconWidth:12,
                iconHeight:16,
                iconPosition:"aisleCenter",
                iconTableRef:{
                    "default":"../resources/img/icon/icon_delete.svg"
                },
                onClick: function(){
                    clickItem = AUIGrid.getSelectedRows(popup_grid_license_manage_addf2)[0];
                    AUIGrid.removeRow(popup_grid_license_manage_addf2, "selectedIndex");
                },
            },
            width:60
        }];

    /* 2. 그리드 속성 설정 */
    let gridPros = {
        rowIdField: "id",
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        softRemoveRowMode:false,
        editable: true, // 수정가능여부, 그리드 데이터 수정 가능
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true,
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 5,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    /* 그리드 생성 */
    popup_grid_license_manage_addf2 = AUIGrid.create("#popup_grid_license_manage_addf2", columnLayout, gridPros);
}
/* //HW 상세정보 > 신규신청 */


/*  HW 상세정보  > SW 라이선스 검색 */
let popup_subGrid_swLicenseSearch;

function subPopupSWLicenseSearch(e){
    let columnLayout = [
        {
            dataField: "id",
            headerText: "아이디",
            visible : false
        },
        {
            dataField: "category_asset_num",
            headerText: "자산번호",
            filter: {
                showIcon: true,
            }
        },{
            dataField: "category_sw_product",
            headerText: "SW종류",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_sw_item",
            headerText: "SW제품명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_sw_license_name",
            headerText: "SW라이선스 제품명",
            filter: {
                showIcon: true,
            }
        }, {
            dataField: "category_quantity",
            headerText: "남는 수량",
            filter: {
                showIcon: true,
            }
        }]

    let gridPros = {
        selectionMode: "multipleCells",
        enableSorting: true, // 소팅
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
        /* 사이즈 지정 */
        headerHeight : 30, // 기본 헤더 높이 지정
        fillColumnSizeMode: true, // 가로 스크롤 X
        autoGridHeight : true, // 게시되는 data에 맞게 height지정
        /* 페이지네이션 */
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        /* 그리드 복사 */
        copyDisplayValue: true, //그리드 데이터 복사 가능
        /* 필터 */
        enableFilter: true, // 필터 true 설정
    }

    popup_subGrid_swLicenseSearch = AUIGrid.create("#popup_subGrid_swLicenseSearch", columnLayout, gridPros);
    requestSubPopupSWLicenseSearch();

    let targetPlace = $(e).attr("data-place");

    /* 그리드 사용 함수 */
    AUIGrid.bind(popup_subGrid_swLicenseSearch, "cellDoubleClick", function(event){
        $("#swLicenseSearch_pop input[data-label='assetNumber']").val(event.category_sw_product);
        $("#swLicenseSearch_pop input[data-label='item']").val(event.category_sw_item);
        let rowData = AUIGrid.getSelectedRows(popup_subGrid_swLicenseSearch)[0];
        /* 담당자 이름 : 공란이어도 상관없음. */
        let manager = "홍길자";
        let changeItem = {
            category_asset_num: rowData.category_asset_num,
            category_sw_product: rowData.category_sw_product,
            category_sw_item: rowData.category_sw_item,
            category_quantity: rowData.category_quantity,
            category_manager: manager
        }
        if(targetPlace === "info"){
            AUIGrid.addRow(popup_grid_license_manage_addf, changeItem,"last");
        }else if(targetPlace ==="register"){
            AUIGrid.addRow(popup_grid_license_manage_addf2, changeItem,"last");
        }


        lp_close("swLicenseSearch_pop");
    });
}

function requestSubPopupSWLicenseSearch() {
    $.get("../resources/lib/aui-grid/data/admin-datasSWL.json", function (data) {
        AUIGrid.setGridData(popup_subGrid_swLicenseSearch, data);
    });
}

/* ---- // 20231011 ----------------------------------------------------------- */

