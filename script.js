//BUTTONS
//SEARCH FOR A CITY 
$("#searchBtn").on("click", function() {
    //1ST AJAX vars
    var cityName1 = $("#searchInput").val();
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q="+cityName1+"&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//SEARCH BAR LOCAL STORAGE 
var searchInput = document.querySelector("#searchInput");
var searchBtn = document.querySelector("#searchBtn");
var searchStorage = localStorage.getItem('searchInput'); 
$("#searchBtn").on("click", function(){
    console.log(searchInput.value);
    localStorage.setItem('searchInput', searchInput.value);    
})
if (localStorage.getItem('searchInput') !== null){
    searchInput.value = localStorage.getItem('searchInput')};




//ALL CODE PAST THIS POINT IS A DUPLICATE OF THE SEARCH BUTTON CODE 
//IN ORDER TO MAKE THE SIDE BUTTONS FUNCTION, THERE IS ONE FOR EACH BUTTON 





//AUSTIN
$("#AustinBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Austin&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//CHICAGO

$("#ChicagoBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//NEW YORK CITY

$("#NYBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=New York City&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//ORLANDO

$("#OrlandoBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Orlando&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

// SAN FRAN

$("#SFBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=San Francisco&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//SEATTLE

$("#SeattleBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Seattle&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//DENVER

$("#DenverBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Denver&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});

//ATLANTA

$("#AtlantaBtn").on("click", function() {
    //1ST AJAX vars
    var queryURL1 = "https://api.openweathermap.org/data/2.5/forecast?q=Atlanta&appid=166a433c57516f51dfab1f7edaed8413";
    $.ajax({
    url: queryURL1,
    method: "GET"
  }).then(function(response) {
    console.log(response);
    //WEATHER INFORMATION vars
    var cityName = response.city.name;
    var date = response.list[0].dt_txt;
    date = date.substring(5, date.length - 9);
    var currentIcon = response.list[0].weather[0].icon;
    var iconLink = "https://openweathermap.org/img/wn/" + currentIcon + "@2x.png";
    var img = $('<img />', { 
        id: 'icon',
        src: iconLink,
    });
    var tempF = (response.list[0].main.temp - 273.15) * 1.80 + 32;
    var lat = response.city.coord.lat;
    var lon = response.city.coord.lon;
    var humidity = response.list[0].main.humidity;
    $("#cityname").text(cityName + " " + date);
    //WEATHER ICON
    $("#icon").empty();
    img.appendTo($('#icon'));
    //WEATHER INFO  
    tempF = tempF.toFixed(0);
    $("#temp").text(tempF + "°F");
    $("#humid").text(humidity + "%");
    $("#windspeed").text(response.list[0].wind.speed + "mph"); 
    $("#coord").text(lat + ", " + lon);
    //5 DAY FORECAST vars AND JQUERY APPENDS
    var currentIcon2 = response.list[8].weather[0].icon;
    var iconLink2 = "https://openweathermap.org/img/wn/" + currentIcon2 + "@2x.png";
    var img2 = $('<img />', { 
        id: 'icon2',
        src: iconLink2,
    });
    $("#iconA").empty();
    img2.appendTo($('#iconA'));
    var currentIcon3 = response.list[16].weather[0].icon;
    var iconLink3 = "https://openweathermap.org/img/wn/" + currentIcon3 + "@2x.png";
    var img3 = $('<img />', { 
        id: 'icon3',
        src: iconLink3,
    });
    $("#iconB").empty();
    img3.appendTo($('#iconB'));
    var currentIcon4 = response.list[24].weather[0].icon;
    var iconLink4 = "https://openweathermap.org/img/wn/" + currentIcon4 + "@2x.png";
    var img4 = $('<img />', { 
        id: 'icon4',
        src: iconLink4,
    });
    $("#iconC").empty();
    img4.appendTo($('#iconC'));
    var currentIcon5 = response.list[32].weather[0].icon;
    var iconLink5 = "https://openweathermap.org/img/wn/" + currentIcon5 + "@2x.png";
    var img5 = $('<img />', { 
        id: 'icon5',
        src: iconLink5,
    });
    $("#iconD").empty();
    img5.appendTo($('#iconD'));
    var currentIcon6 = response.list[39].weather[0].icon;
    var iconLink6 = "https://openweathermap.org/img/wn/" + currentIcon6 + "@2x.png";
    var img6 = $('<img />', { 
        id: 'icon6',
        src: iconLink6,
    });
    $("#iconE").empty();
    img6.appendTo($('#iconE'));
    var date2 = response.list[8].dt_txt;
    date2 = date2.substring(5, date2.length - 9);
    var date3 = response.list[16].dt_txt;
    date3 = date3.substring(5, date3.length - 9);
    var date4 = response.list[24].dt_txt;
    date4 = date4.substring(5, date4.length - 9);
    var date5 = response.list[32].dt_txt;
    date5 = date5.substring(5, date5.length - 9);
    var date6 = response.list[39].dt_txt;
    date6 = date6.substring(5, date6.length - 9);
    var humidity2 = response.list[8].main.humidity;
    var tempF2 = (response.list[8].main.temp - 273.15) * 1.80 + 32;
    tempF2 = tempF2.toFixed(0);
    var humidity3 = response.list[16].main.humidity;
    var tempF3 = (response.list[16].main.temp - 273.15) * 1.80 + 32;
    tempF3 = tempF3.toFixed(0);
    var humidity4 = response.list[24].main.humidity;
    var tempF4 = (response.list[24].main.temp - 273.15) * 1.80 + 32;
    tempF4 = tempF4.toFixed(0);
    var humidity5 = response.list[32].main.humidity;
    var tempF5 = (response.list[32].main.temp - 273.15) * 1.80 + 32;
    tempF5 = tempF5.toFixed(0);
    var humidity6 = response.list[39].main.humidity;
    var tempF6 = (response.list[39].main.temp - 273.15) * 1.80 + 32;
    tempF6 = tempF6.toFixed(0);
    $("#date1").text(date2);
    $("#date2").text(date3);
    $("#date3").text(date4);
    $("#date4").text(date5);
    $("#date5").text(date6);
    $("#humid1").text(humidity2 + "%");
    $("#humid2").text(humidity3 + "%");
    $("#humid3").text(humidity4 + "%");
    $("#humid4").text(humidity5 + "%");
    $("#humid5").text(humidity6 + "%");
    $("#temp1").text(tempF2 + "°F");
    $("#temp2").text(tempF3 + "°F");
    $("#temp3").text(tempF4 + "°F");
    $("#temp4").text(tempF5 + "°F");
    $("#temp5").text(tempF6 + "°F");
    //2ND AJAX var AND UV INDEX 
    var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?lat="+lat+"&lon="+lon+"&appid=cdbdb8f717f41703f5e5a88731d41445";
    $.ajax({
        url: queryURL2,
        method: "GET"
    }).then(function(response){
        console.log(response);
        var uv = response.value;
        $("#uv").text(uv);
        if(uv < 3){
            $("#uv").css("color", "green");
        }
        else if(uv < 6){
            $("#uv").css("color", "yellow");
        }
        else if(uv < 8){
            $("#uv").css("color", "orange");
        }
        else if(uv < 11){
            $("#uv").css("color", "red");
        };
    });
})});