// 헤더 메뉴 클릭 시 실행되는 이벤트의 함수 내용
function openMenu() {
    document.getElementById('menu-sub').style.display = 'block';
}

function closeMenu() {
    document.getElementById('menu-sub').style.display = 'none';
}

// 헤더 검색버튼 클릭 시 실행되는 이벤트의 함수 내용
function openSearh() {
    document.getElementById("search-sub").style.width = '100%';
}

function closeSearch() {
    document.getElementById("search-sub").style.width = '0%';
}

// 헤더 메뉴 클릭 시 상세 메뉴 반응
$(function(){
    $(".sub-menu-des1").hide();
    $(".sub-menu1").click(function(){
        $(".sub-menu-des1").slideToggle();
    });

    $(".sub-menu-des2").hide();
    $(".sub-menu2").click(function(){
        $(".sub-menu-des2").slideToggle();
    });
});