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

        // 이미지 슬라이더
        $('.slide-list').slick({
            fade:true,
            slidesToShow: 1,
            draggable:false,
            lazyLoad: 'progressive',
            //autoplay:true,
            autoplay: true,
            autoplaySpeed:4000,
            pauseOnFocus:false,
            pauseOnHover:false,
            arrows:false,            
            dots:false, 
            centerMode: true
        });


        let mouseCursor = document.querySelector(".cursor");
        let Links = document.querySelectorAll("a"); //메뉴 링크
        //window 객체에 scroll & mouse 이벤트를 추가하고 cursor함수 실행되도록 함
        window.addEventListener("scroll", cursor);
        window.addEventListener("mousemove", cursor);
        //커스텀 커서의 left값과 top값을 커서의 XY좌표값과 일치시킴
        function cursor(e) {
          mouseCursor.style.left = e.pageX + "px";
          mouseCursor.style.top = e.pageY - scrollY + "px";
      }
        Links.forEach((link) => {
            link.addEventListener("mouseover", () => {
            mouseCursor.classList.add("link-grow");
            mouseCursor.style.zIndex = "-1";
            link.classList.add("hovered-link");
            });
            link.addEventListener("mouseleave", () => {
            mouseCursor.classList.remove("link-grow");
            mouseCursor.style.zIndex = "1000";
            link.classList.remove("hovered-link");
            });
        });

        new WOW().init();

        
});