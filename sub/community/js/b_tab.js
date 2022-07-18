$(document).ready(function(){
    $(".atab > div > .atabBtn > h2").mouseover(function(){
        $("#tabP").slideUp(300);//전체 p를 보이지 않게 설정

        if ($(this).next().css("display")=="block"){//내가 선택한 a의 p가 보이면,
            $(this).next().slideUp(300);//탭의 클래스 해제, P숨기기
        }else{
            $(this).next().slideDown(300);//탭의 클래스 적용, p보이기
        }
    });
});