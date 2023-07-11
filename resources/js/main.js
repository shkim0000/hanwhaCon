$(function(){
    /* header 추가 */
    $('#guide').prepend(`
        <header>
            <div class="inner">
                <button type="button" class="menu-btn"></button>
                <a href="#">IAMS V2</a>
            </div>
            <div class="inner">
                <div class="account">
                    [<span>홍길동</span> / <span>IT운영</span>]
                </div>
                <button type="button" class="logout-btn">Logout</button>
            </div>
        </header>
    `);
    /* sidebar 추가 */
    $('#wrapper').prepend(`
    <div class="sidebar open">
        <div class="menu">
            <ul>
                <li>
                    <button type="button" class="btn active">자산신청</button>
                    <div class="depth active">
                        <ul>
                            <li><a href="#" class="linkBtn">자산신청현황</a></li>
                            <li><a href="#" class="linkBtn">신규신청</a></li>
                            <li><a href="#" class="linkBtn">교체신청</a></li>
                            <li><a href="#" class="linkBtn">대여/연장신청</a></li>
                            <li><a href="#" class="linkBtn">반납신청</a></li>
                            <li><a href="#" class="linkBtn">인수인계신청</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn">자산현황</button>
                    <div class="depth">
                        <ul>
                            <li><a href="#" class="linkBtn">자산조회</a></li>
                            <li><a href="#" class="linkBtn">부서자산조회</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn">서비스데스크</button>
                    <div class="depth">
                        <ul>
                            <li><a href="#" class="linkBtn">서비스신청현황</a></li>
                            <li><a href="#" class="linkBtn">서비스신청</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <button type="button" class="btn">자산등록</button>
                    <div class="depth">
                        <ul>
                            <li><a href="#" class="linkBtn">자산등록</a></li>
                        </ul>
                    </div>
                </li>
                <li>
                    <a href="#" class="btn">자산등록</a>
                </li>
                <li>
                    <a href="#" class="btn">자산실사</a>
                </li>
            </ul>
        </div>
    </div>
    `)
})

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

    /* sidebar 설정 */
    $('.depth.active').each(function(){
        let num = $(this).find('ul li').length;
        $(this).css(`height`,`${num * 39.2}`)
    });

    $('.sidebar .menu ul li .btn').on('click',function(){
        if($(this).hasClass('active')){
            $(this).removeClass('active');
            $(this).siblings('.depth').removeClass('active').css('height','0');
        } else if(!$(this).hasClass('active')){
            $(this).closest('.menu').find('.depth.active').removeClass('active').css('height','0');
            $(this).closest('.menu').find('.btn.active').removeClass('active');
            $(this).addClass('active');
            let num = $(this).siblings('.depth').find('ul li').length;
            $(this).siblings('.depth').addClass('active').css(`height`,`${num * 39.2}`);
        }
    });
    /* title에 있는 text와 linkBtn에 있는 text가 같다면 active 클래스 부여 */
    $(document).ready(function(){
        var pageTitle = $('title').text();

        $('.linkBtn').each(function(){
            var btnText = $(this).text();
            if(btnText === pageTitle){
                $(this).addClass('active');
            }
        });
    });

    /* 행 추가 버튼 클릭 */
    $('.btn.add-column').on('click',function(){
        $(this).closest('.title-box').next('.table').find('tbody').append(`
            <tr>
                    <td>
                        <div class="td-wrap center">
                            <label class="check no-text">
                                <input type="checkbox">
                                <span></span>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="td-wrap">
                            <label class="select whole">
                                <select>
                                    <option value="">데스트탑1</option>
                                    <option value="">데스크탑2</option>
                                </select>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="td-wrap">
                            <label class="select whole">
                                <select>
                                    <option value="">데스트탑 모델1</option>
                                    <option value="">데스크탑 모델2</option>
                                </select>
                            </label>
                        </div>
                    </td>
                    <td>
                        <div class="td-wrap">
                            <label class="input whole">
                                <input type="number">
                            </label>
                        </div>
                    </td>
                </tr>
        `)
    })
    $('.btn.trash').on('click',function(){
        $(this).closest('.title-box').siblings('.table').find('tbody tr').has('input[type="checkbox"]:checked').remove();
    })
});
