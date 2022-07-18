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

$(document).ready(function(){ 
    if(matchMedia("screen and (min-width: 1024px)").matches){ 
        let d_width = 0;
        let d_height = 0;

        function tmp() { 
            let con_width = $(window).outerWidth() * $('.box').length; 
            
            $('.container').css({ 
                width: con_width, 
                height: '100vh', 
                position: 'fixed', 
                top: 0, 
                left: 0 }); 
                
            $('.box').css({ 
                width: con_width / $('.box').length, 
                height: '100vh', 
                float: 'left' 
            }); 

            $('body').css({
                height: '100vh' 
            }); 
            
            let w_width = $(window).width(); 
            let w_height = $(window).height();
            
            d_width = con_width - w_width; 
            d_height = $('body').height() - w_height;
        } 
        
        tmp(); 
        
        let array = []; 
        for(let i=0; i<$('.box').length; i++) { 
            array[i] = $('.box').eq(i).offset().left 
        } 
        let chk = true; $('.box').on('mousewheel DOMMouseScroll', function(){ 
            
            if(chk) { 
                chk = false; 
                setTimeout(function(){ 
                    chk = true; 
                }, 500) 
                
                let w_delta = event.wheelDelta / 120; 
                
                if(w_delta < 0 && $(this).next().length > 0) { 
                    $('.container').animate({ 
                        left: -array[$(this).index()+1] 
                    }, 500) 
                } 
                
                else if(w_delta > 0 && $(this).prev().length > 0) { 
                    $('.container').animate({ 
                        left: -array[$(this).index()-1] 
                    }, 500) 
                } 
            } 
        }); 
        
        $(window).resize(function(){ 
            for(let i=0; i<$('.box').length; i++) { 
                array[i] = $('.box').eq(i).offset().left 
            } 
            
            tmp(); 
        });
    } else {

    }

    window.onresize = function(){
        document.location.reload();
      };
});