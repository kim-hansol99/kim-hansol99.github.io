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


// 마우스 오버시 이미지 확대
function zoomIn(event) {
    event.target.style.transform = "scale(1.2)";
    event.target.style.zIndex = 1;
    event.target.style.transition = "all 0.5s";
}


// 마우스 오버시 이미지 원래 사이즈로
function zoomOut(event) {
    event.target.style.transform = "scale(1)";
    event.target.style.zIndex = 0;
    event.target.style.transition = "all 0.5s";
}
