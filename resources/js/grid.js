/* [팝업] 모음 */
/* [사용자 / 부서 검색 팝업]------------------------------------------------------------------- */
    /* 1. 사용자 검색 */
    let popup_grid_user;
    function gridPopUser(id,title,width,height,e){
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

        /* 그리드 기능 */
        let targetPlace = $(e).attr("data-place");
        let userName;
        let userDepartment;
        if(targetPlace === 'user_search'){
            AUIGrid.bind(popup_grid_user, "cellDoubleClick", function(event) {
                userName = event.item.category_user_name;
                userDepartment = event.item.category_department;

                $(".list-box .title-box .list-title span").text(userName);
                $("input[data-label='user']").val(userName);
                $("input[data-label='department']").val(userDepartment);

                $("#gridPop_user").dialog("close");
            });
        } else{
            AUIGrid.bind(popup_grid_user, "cellDoubleClick", function(event) {
                userName = event.item.category_user_name;
                userDepartment = event.item.category_department;

                $("input[data-label='change_user']").val(userName);
                $("input[data-label='change_department']").val(userDepartment);

                $("#gridPop_user").dialog("close");
            });
        }
    }
    function requestGridPopUser() {
        $.get("../resources/lib/aui-grid/data/sample-datas4.json", function (data) {
            AUIGrid.setGridData(popup_grid_user, data);
        });
    }
    /* // 사용자 검색 */

    /* 2. 부서 검색 */
    let popup_grid_department; // 부서 검색
    function popupDepartmentSearch(id,title,width,height,e){
        /* 팝업 그리드(예시) */
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "category_department",
                headerText: "부서명",
                width: 180
            },
            {
                dataField: "category_depart_code",
                headerText: "부서명",
                width: 180
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
        }

        /* 그리드 생성 */
        popup_grid_department = AUIGrid.create("#popup_grid_department", columnLayout, gridPros);
        requestGridPopDepartment();

        /* 그리드 기능 */
        let targetPlace = $(e).attr("data-place");
        let userDepartment;
        if(targetPlace === 'department_search'){
            AUIGrid.bind(popup_grid_department, "cellDoubleClick", function(event) {
                userDepartment = event.item.category_department;
                $("input[data-label='department']").val(userDepartment);

                $("#gridPop_department").dialog("close");
            });
        }
    }

    function requestGridPopDepartment() {
        $.get("../resources/lib/aui-grid/data/sample-datas3.json", function (data) {
            AUIGrid.setGridData(popup_grid_department, data);
        });
    }
    /* // 부서 검색 */
/* ------------------------------------------------------------------------ */

/* [신청 팝업 모음] ----------------------------------------------------------- */
/* 1. 신규신청 */
    /* 자산정보 */
    let popup_grid_newEnroll_detail;
    function gridPopNewEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let gridPop_newEnroll_detail_column = [
            {
                dataField: "category_product",
                headerText: "자산분류",
            },{
                dataField: "category_product",
                headerText: "품목",
            }, {
                dataField: "category_asset_num",
                headerText: "자산번호",
            }, {
                dataField: "category_item_name",
                headerText: "모델명",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPop_newEnroll_detail_pros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
        }

        /* 그리드 생성 */
        popup_grid_newEnroll_detail = AUIGrid.create("#popup_grid_newEnroll_detail", gridPop_newEnroll_detail_column, gridPop_newEnroll_detail_pros);
        requestGridPopNewEnrollDetail();
    }
    function requestGridPopNewEnrollDetail(){
        $.get("../resources/lib/aui-grid/data/sample-datas14.json", function (data) {
            AUIGrid.setGridData(popup_grid_newEnroll_detail, data);
        });
    }

    /* 처리이력 */
    let popup_grid_newEnroll_history;
    function gridPopNewEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let gridPop_newEnroll_history_column = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPop_newEnroll_history_pros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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

/* 2. 교체신청  */
    /* 자산 정보 */
    let popup_grid_changeEnroll_detail;
    function gridPopChangeEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let gridPop_changeEnroll_history_column = [
            {
                dataField: "category_product_name",
                headerText: "교체자산",
                headerStyle: "my-header-style",
                style: "my-column-style",
            },{
                dataField: "category_model_name",
                headerText: "모델명",
                headerStyle: "my-header-style",
                style: "my-column-style",
            }, {
                dataField: "category_asset_num",
                headerText: "자산번호",
                headerStyle: "my-header-style",
                style: "my-column-style",
            }, {
                dataField: "",
                headerText: "교체 후 자산",
            }, {
                dataField:"category_note",
                headerText: "자산분류"
            }, {
                dataField:"category_changeProduct_name",
                headerText: "품목",
            }, {
                dataField: "category_changeAsset_num",
                headerText: "자산번호",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPop_changeEnroll_history_pros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
    function gridPopChangeEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let gridPop_changeEnroll_history_column = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPop_changeEnroll_history_pros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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
    function gridPopRentalEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "category_product",
                headerText: "자산분류",
            },{
                dataField: "category_item",
                headerText: "품목",
            }, {
                dataField: "category_asset_num",
                headerText: "자산번호",
            }, {
                dataField: "category_item_name",
                headerText: "모델명",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
    function gridPopRentalEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout3 = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPros3 = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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
    function gridPopReturnEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {   dataField: "category_asset_num",
                headerText: "자산번호",
            }, {
                dataField: "category_product",
                headerText: "자산분류",
            }, {
                dataField: "category_item",
                headerText: "품목",
            }, {
                dataField: "category_model_name",
                headerText: "자산번호",
            }, {
                dataField: "category_asset_status",
                headerText: "자산상태",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
    function gridPopReturnEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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
    function gridPopTakeoverEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {   dataField: "category_asset_num",
                headerText: "자산번호",
            }, {
                dataField: "category_product",
                headerText: "자산분류",
            }, {
                dataField: "category_item",
                headerText: "품목",
            }, {
                dataField: "category_model_name",
                headerText: "모델명",
            }, {
                dataField: "category_asset_status",
                headerText: "자산상태",
            }, {
                dataField: "category_takeover_time",
                headerText: "인수완료시간",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
    function gridPopTakeoverEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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
    function gridPopRentalExtensionEnrollDetail(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {   dataField: "category_asset_num",
                headerText: "자산번호",
            }, {
                dataField: "category_product",
                headerText: "자산분류",
            }, {
                dataField: "category_item",
                headerText: "품목",
            }, {
                dataField: "category_model_name",
                headerText: "모델명",
            }, {
                dataField: "category_asset_status",
                headerText: "자산상태",
            }, {
                dataField: "category_rental_extension_time",
                headerText: "대여연장기간",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
    function gridPopRentalExtensionEnrollHistory(id,title,width,height){
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "category_state",
                headerText: "상태",
            },
            {
                dataField: "category_manager",
                headerText: "담당자",
            },
            {
                dataField: "category_time",
                headerText: "시간",
            },
        ]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 10, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            fillColumnSizeMode: true, // 가로 스크롤 X
            autoGridHeight : true, // 게시되는 data에 맞게 height지정
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
    //

    /* 클릭된 row에 대한 index 정보 */
    let rowNum;
    let cnt = 0; // 임의로 찍어주는 번호이나 변경해야 함.

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
                        console.log(item);
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
            let changeItem = {...rows, category_kinds: value};

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
    };

    /* [윈도우 팝업] 미리보기 */
    function openWindowPop(url, name){
        var options = 'top=10, left=10, width=1000, height=600, status=no, menubar=no, toolbar=no, resizable=no';
        window.open(url, name, options);
    }

    /* 선택 행들 아래로 한 단계 올림 */
    function moveRowsToDown() {
        AUIGrid.moveRowsToDown(popup_grid_submitList);
    };

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

/* [장애신고 - 장애신고 : 장애대상 추가 팝업 ]----------------------------------------------------------- */
    /* 장애대상 추가 */
    let popup_grid_disabledAddRow;
    function popupAddDisabled(id,title,width,height){
        /* 팝업 그리드(예시) */
        /* 1. AUIGrid 칼럼 설정 */
        let columnLayout = [
            {
                dataField: "id",
                headerText: "아이디",
                visible:false
            },
            {
                dataField: "category_product_name",
                headerText: "물품명",
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
                dataField: "category_order",
                headerText: "신청구분",
                width: 160,
                filter: {
                    showIcon: true,
                }
            },
            {
                dataField: "category_description",
                headerText: "신청내용",
                width: 160,
                filter: {
                    showIcon: true,
                }
            },
            {
                dataField: "category_place",
                headerText: "사용장소",
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
            showRowCheckColumn: true,// 엑스트라 체크박스 표시 설정
            enableRowCheckShiftKey: true,
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            usePaging: true, // 페이징 사용
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            pageRowCount: 12, // 한 화면에 출력되는 행 개수 30개로 지정
            showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
            softRemoveRowMode: false,
            copyDisplayValue: true, //그리드 데이터 복사 가능
            editable: false, // 수정가능여부, 그리드 데이터 수정 가능
            enableFilter: true, // 필터 true 설정
            autoGridHeight: true,
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
                },{
                    dataField: "category_product",
                    headerText: "자산분류",
                }, {
                    dataField: "category_product",
                    headerText: "품목",
                }, {
                    dataField: "category_item_name",
                    headerText: "모델명",
                }, {
                    dataField: "category_place",
                    headerText: "자산위치"
                }]
            /* 2. 그리드 속성 설정 */
            let gridPros = {
                selectionMode: "multipleCells",
                enableSorting: true, // 소팅
                noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
                headerHeight : 30, // 기본 헤더 높이 지정
                pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
                autoGridHeight : true,
                fillColumnSizeMode:true,
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
                },{
                    dataField: "category_manager",
                    headerText: "조치자",
                }, {
                    dataField: "category_date",
                    headerText: "처리일시",
                }, {
                    dataField: "category_state",
                    headerText: "상태",
                }]
            /* 2. 그리드 속성 설정 */
            let gridPros = {
                selectionMode: "multipleCells",
                enableSorting: true, // 소팅
                noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
                headerHeight : 30, // 기본 헤더 높이 지정
                pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
                autoGridHeight : true,
                fillColumnSizeMode:true,
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
};
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
    };

    AUIGrid.search(popup_grid_disabledAddRow, "category_user_name", term, options);

};

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
    };

    AUIGrid.search(popup_grid_disabledAddRow, "category_asset_num", term, options);
};
/* // 장애 신고 신청 현황 */
/* ------------------------------------------------------------------------ */

/* [서비스 신청 현황 - 서비스데스트 신청현황 팝업 ]----------------------------------------------------------- */
    /* 처리 이력  */
    let popup_grid_serviceDesk_history; // 서비스데스크 신청현황
    function gridPopServiceDeskHistory(id,title,width,height){
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
            },{
                dataField: "category_manager",
                headerText: "조치자",
            }, {
                dataField: "category_date",
                headerText: "처리일시",
            }, {
                dataField: "category_state",
                headerText: "상태",
            }]
        /* 2. 그리드 속성 설정 */
        let gridPros = {
            selectionMode: "multipleCells",
            enableSorting: true, // 소팅
            noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
            headerHeight : 30, // 기본 헤더 높이 지정
            pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
            autoGridHeight : true,
            fillColumnSizeMode:true,
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
        headerHeight : 30, // 기본 헤더 높이 지정
        usePaging: true, // 페이징 사용
        pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
        pageRowCount: 4,
        showPageRowSelect: true, // 페이지 행 개수 select UI 출력 여부 (기본값 : false)
        fillColumnSizeMode: true,
        autoGridHeight : true,
        copyDisplayValue: true, //그리드 데이터 복사 가능
        editable: false, // 수정가능여부, 그리드 데이터 수정 가능
        enableFilter: true, // 필터 true 설정
        softRemoveRowMode: false, // 소프트 제거 모드 사용 안함
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