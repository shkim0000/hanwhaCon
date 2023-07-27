/* [팝업] 모음 */
/* 사용자 검색 */
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

/* 신규신청 : 자산정보 , 처리이력 */
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

/* 교체신청 : 자산정보 , 처리이력 */
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

/* 대여신청 */
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

/* 반납신청 */
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

/* 인수인계 신청 */
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

/* 대여연장신청 */
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