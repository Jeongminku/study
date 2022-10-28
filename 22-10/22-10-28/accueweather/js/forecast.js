var url = "https://api.openweathermap.org/data/2.5/weather?"
url += "appid=832c3462e69aa18c2706a68df74092dc"
url += "&units=metric"
url += "&lang=kr"
url += "&q="

// 현재 날씨의 모든 정보 얻어오기
function getCurrentWeather(city) {
    var dataObj;
    var openWeatherAPI = url; //var url로 선언한 값이 들어감.

    //,ajax({}) 함수안에 매개변수에 객체데이터를 준다.
    $.ajax({
        type: "GET", //서버에 request를 GET 방식으로 했다는 뜻. 주소에 쿼리스트링이 붙어있으면 GET방식.
        url: openWeatherAPI += city,
        dataType: "json", //불러올 녀석(받아올 데이터) 타입
        async: false, // 비동기를 false = 비동기를 안해주겠다. => 동기 (*사유 : 결과 데이터를 리턴시키기 위해)
        success: function(data) { //요청한 데이터를 가져오는데 성공 = API call 성공
            // console.log(data.main.temp)
            // console.log(data.weather[0]description)
            //console.log(data.wind.speed)
            //console.log(data.dt)
            //console.log(data.weather[0].icon) //weather는 배열값이기 때문에 [0]으로 출력을하고 뒤에 더함.
            //console.log(data)
            dataObj = data
        }, 
        error: function(request, status, error) {//요청한 데이터를 가져오는데 실패 = API call 실패
            console.log(request, status, error)

        }

    })

    return dataObj  //비동기로 해야 위의 함수가 다 끝나고 나서 dataObj를 return 할 수 있다. (async: false) 를 줘서 비동기를 준 이유.
}

//동기에 대하여 syncronous(동기식) programming
    // 동기 = 순차적 ex) 서버에 작업요청 A작업, B작업 -> A라는 작업이 10초, B라는 작업이 5초가 걸린다고 했을때 동기방식으로 작업을 처리할 경우 A Request -> A Response -> B Request -> B Response 형식 처리 된다. 응답이 돌아와야 다음 동작을 수행할 수 있는것 그것이 동기
    // 주문한 후에 커피가 나올때까지 기다려 주세요 -> A라는 작업이 끝날때까지 B,C,D 등의 작업이 행해지지 못한다.


//비동기에 대하여 asyncronous(비동기식) programming 
    // 응답상태와 상관없이 A작업을 요청하고 B작업을 요청한경우 B작업이 빨리끝나면 B작업을 먼저 Response, A작업을 나중에 Response 할 수 있다.
    // 주문한 후에 진동벨이 울리면 커피를 가지러 오세요.


//main 안에있는 temp값을 갖고오고 싶다면 success 안에 console.log(data.main.temp) 라고 적으면 됨.





// 지역별 온도 얻어오기
function getCurrentTemper(city) {
    var temp = {}
    var openWeatherAPI = url

    $.ajax({
        type: "GET", 
        url: openWeatherAPI += city,
        dataType: "json", 
        async: false, 
        success: function(data) { 
            temp.celsius = data.main.temp.toFixed(0) //temp에 celsius라는 객체 데이터 추가
            temp.icon = data.weather[0].icon
        }, 
        error: function(request, status, error) {
            console.log(request, status, error)
        }
    })
    
    return temp
    }
