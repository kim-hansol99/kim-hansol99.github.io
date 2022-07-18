window.onload = function(){
    const afaq=document.getElementById("faqBtn");
    const aqna=document.getElementById("qnaBtn");
    const atel=document.getElementById("telBtn");
    const aasp=document.getElementById("aspBtn");
    const anotice=document.getElementById("noticeBtn");

    const amem=document.getElementById("faqMem");
    const aprd=document.getElementById("faqPrd");
    const are=document.getElementById("faqRe");
    const aas=document.getElementById("faqAs");
    const asell=document.getElementById("faqSell");
    const aother=document.getElementById("faqOther");

    afaq.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="block";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.setAttribute("class","mouseon");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");
    }

    aqna.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="block";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.setAttribute("class","mouseon");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");

        document.getElementById("faq-member").style.display="block";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","mouseover list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");

        document.getElementById("tabP").style.display="none";
    }

    atel.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="block";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.setAttribute("class","mouseon");
        aasp.removeAttribute("class");
        anotice.removeAttribute("class");

        document.getElementById("faq-member").style.display="block";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","mouseover list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");

        document.getElementById("tabP").style.display="none";
    }
    
    aasp.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="block";
        document.getElementById("notice").style.display="none";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.setAttribute("class","mouseon");
        anotice.removeAttribute("class");

        document.getElementById("faq-member").style.display="block";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","mouseover list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");

        document.getElementById("tabP").style.display="none";
    }

    anotice.onclick=function(){

        window.scrollTo(0,0);
        document.getElementById("faq").style.display="none";
        document.getElementById("qna").style.display="none";
        document.getElementById("telph").style.display="none";
        document.getElementById("asp").style.display="none";
        document.getElementById("notice").style.display="block";

        afaq.removeAttribute("class");
        aqna.removeAttribute("class");
        atel.removeAttribute("class");
        aasp.removeAttribute("class");
        anotice.setAttribute("class","mouseon");

        document.getElementById("faq-member").style.display="block";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","mouseover list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");

        for(var i=0; i<4; i++) {
            document.getElementById("tabP").style.display="none";
        } 
    }
    //버튼2

    amem.onclick=function(){
        document.getElementById("faq-member").style.display="block";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","mouseover list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");
    }

    aprd.onclick=function(){
        document.getElementById("faq-member").style.display="none";
        document.getElementById("faq-product").style.display="block";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","list");
        aprd.setAttribute("class","mouseover list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");
    }

    are.onclick=function(){
        document.getElementById("faq-member").style.display="none";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="block";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","mouseover list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");
    }

    aas.onclick=function(){
        document.getElementById("faq-member").style.display="none";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="block";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","mouseover list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","list");
    }

    asell.onclick=function(){
        document.getElementById("faq-member").style.display="none";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="block";
        document.getElementById("faq-other").style.display="none";

        amem.setAttribute("class","list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","mouseover list");
        aother.setAttribute("class","list");
    }

    aother.onclick=function(){
        document.getElementById("faq-member").style.display="none";
        document.getElementById("faq-product").style.display="none";
        document.getElementById("faq-re").style.display="none";
        document.getElementById("faq-as").style.display="none";
        document.getElementById("faq-sell").style.display="none";
        document.getElementById("faq-other").style.display="block";

        amem.setAttribute("class","list");
        aprd.setAttribute("class","list");
        are.setAttribute("class","list");
        aas.setAttribute("class","list");
        asell.setAttribute("class","list");
        aother.setAttribute("class","mouseover list");
    }

    example=document.getElementById("bbutton");

    example.onclick=function(){
        document.getElementById("btabmain").style.display="none";
    }
}