$(function(){

    //topBtn버튼을 클릭하면 화면 제일 위로 부드럽게 이동
    $('.topBtn').click(function(){
        $('html').animate({scrollTop:0},1000);        
    });

    var menuItem = $('nav li a');   //메뉴 버튼을 변수로

    menuItem.click(function(){
        $(this).addClass("active");
        $(this).parent().siblings().find("a").removeClass("active");

        var el = $(this).attr("href");      //클릭한 a의 href속성의 속성값을 변수에 
        //console.log(el);

        var $el = $(el);
        var headerH = $('header').height(); //헤더의 높이 값을 변수에

        scrollTo($el,headerH);

    });

    function scrollTo(eee,hh){
        var offsetTop = eee.offset().top;   //화면 제일 위에서 부터 위치값
        console.log("offSet값은? "+offsetTop);
    
        var scrollTotal = offsetTop-hh;
        
        $('html, body').animate({scrollTop:scrollTotal},1000);
    }

    

});