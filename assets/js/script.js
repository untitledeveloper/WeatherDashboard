var search_val, api_key, url, search_sec, weather;

function get(x) {
    return document.getElementById(x)
}

function renderCards(condition, temp, city, country) {
    weather_sec = get('weather_sec');

    if (condition == 'Clear') {
        console.log('clear icon')
    }

    else if (condition == 'Clouds') {
        console.log('clouds icon')
    }

    weather_sec.innerHTML = "<div class='card weather_card'> <p class='city'>"+city+"</p> <p>"+country+"</p> <p class='temp'>"+temp+"°C</p> <p class='condition'>"+condition+"</p></div>"
}

function weatherData(data) {
    var condition = data['weather'][0]['main'];
    var temp = Math.trunc(data['main']['temp']);
    var country = data['sys']['country']
    var city = data['name']
    var icon = data['weather'][0]['icon']

    localStorage.setItem('pastSearches', city)

    console.log(condition, temp, city, country, icon);

    return renderCards(condition, temp, city, country)
}

function openApi() {
    search_val = get("search_input").value
    console.log(search_val)
    api_key = "ec4f5e12892b28d33f59d3518701bc45"
    url = `https://api.openweathermap.org/data/2.5/weather?q=${search_val}&appid=${api_key}&units=metric`;
    
    fetch(url)
    .then(response => response.json())
    .then(data => weather = data)
    .then(() => weatherData(weather));

}

