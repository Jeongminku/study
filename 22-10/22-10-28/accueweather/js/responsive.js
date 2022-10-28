/* 모바일 햄버거 버튼 클릭 시 */
$(".hamburger").click(function(){ 
    $(".mobile.hamburger").hide() //hide = display속성을 none으로 바꿔주는 것.
    $(".mobile.close").show() //show = display속성을 block (보이게) 바꿔주는 것.

    $("mobie_menu").empty()

    var nav = $(".nav").clone() //clone() 전체적으로 복사하는것.

    $("#mobile_menu").append(nav) //append: 선택한 요소의 하위에 집어넣음. //#mobile_menu의 하위태그로 append 됌.
    $("#mobile_menu").show()

})


/* 모바일 햄버거 닫기 */
$(".close").click(function(){
    $(".mobile.hamburger").show(); //hide = display속성을 none으로 바꿔주는 것.
    $(".mobile.close").hide(); //show = display속성을 block (보이게) 바꿔주는 것.
    $("#mobile_menu").hide()

})

//브라우저 리사이징 될 때 모바일 메뉴 보이는 버그 방지.
$(window).resize(function(){
    var width = $(window).width()

    if (width >= 767) {
        if($("#mobile_menu").is(":visible")) {
            $(".mobile.hamburger").show(); //hide = display속성을 none으로 바꿔주는 것.
            $(".mobile.close").hide(); //show = display속성을 block (보이게) 바꿔주는 것.
            $("#mobile_menu").hide()
        }
    }
})