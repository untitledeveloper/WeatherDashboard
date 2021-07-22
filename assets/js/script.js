var search_val, api_key, url, search_sec, weather;

function get(x) {
    return document.getElementById(x)
}

function renderCards(condition, temp, country) {
    
}

function weatherData(data) {
    var condition = data['weather'][0]['main'];
    var temp = data['main']['temp'];
    var country = data['sys']['country']
    console.log(condition, temp, country);

    return renderCards(condition, temp, country)
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

