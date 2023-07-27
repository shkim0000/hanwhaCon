let popup_grid_detail1Col = [
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
let popup_grid_detail1Del = {
    selectionMode: "multipleCells",
    enableSorting: true, // 소팅
    noDataMessage: "출력할 데이터가 없습니다.", // 데이터 없을 경우
    headerHeight : 30, // 기본 헤더 높이 지정
    pagingMode: "simple", // 페이징을 간단한 유형으로 나오도록 설정
    autoGridHeight : true,
    fillColumnSizeMode:true,
}
function requestData3() {
    $.get("../resources/lib/aui-grid/data/sample-datas14.json", function (data) {
        AUIGrid.setGridData(popup_grid_detail1, data);
    });
}




let popup_grid_user;
let columnLayout2 = [
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
let gridPros2 = {
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





