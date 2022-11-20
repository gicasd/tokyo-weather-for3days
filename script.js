$.getJSON("https://weather.tsukumijima.net/api/forecast/city/130010", function(data){
	console.log(data);

    for(var i =0; i<3; i++){
        var date = data.forecasts[i].date;
        var icon = data.forecasts[i].image.url;
        var weather = data.forecasts[i].detail.weather;
        var wind = data.forecasts[i].detail.wind;

        $(".date"+i).append(date);
        $(".icon"+i).attr("src",icon);
        $(".weather"+i).append("<b>天気</b>　：　"+weather);
        $(".wind"+i).append("<b>風</b>　　：　"+wind);
    }
});