var currentURL = location.href // 주소인 url을 가져옴.
var urlObj = new URL(currentURL) // 주소를 이용할 수 있게 하는 객체

var params = urlObj.searchParams
var q = params.get("q");
console.log(q);


var result = getCurrentWeather(q);
console.log(result);

$('#temp').text(result.main.temp + "℃") 
$('#wind').text(result.wind.speed + "m/s")
$('#humidity').text(result.main.humidity + "%")





