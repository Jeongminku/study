
var cityList = ["seoul", "incheon", "busan", "gwangju", "jeju", "jeonju"]

//foreach   (jquery방식)
//$('.클래스명').each(function(배열에 들어갈거[i]){})  i에는 인덱스 번호가 들어감.
$('.temp').each(function(i){
    var temp = getCurrentTemper(cityList[i]) //getCurrentTemper(지역)는 forecast.js에 작성해두었음.
    var iconURL = "https://openweathermap.org/img/wn/"

    $(this).text(temp.celsius + "℃")//J쿼리에서의 this는 ('.temp'를 뜻함.) 현재의 이벤트가 일어나는 요소를 뜻함.
    $(this).prev().children().attr("src", iconURL + temp.icon + ".png") //temp의 prev = 이전태그는 icon_weather --->의 children() 자식 -> img = src~~
})

$(".location").on({
    "click" : function() {
        var q = $(this).children(".q").attr("id") //temp의 자식인 q에서 id값을 가져온다. span class="q" id="busan" 의 id값인 busan을 가져옴
        var redirectURL = "pages/weather_location.html?q=" + q
        location.href = redirectURL; //redirectURL로 이동을 시켜준다.
    }
})