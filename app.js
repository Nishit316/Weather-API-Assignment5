//link and api-key
const api = {
    key: "6c235f48b35433f4397316ea448d9579",
    base: "https://api.openweathermap.org/data/2.5/"
  }
  
  
  //search logic
  const searchbox = document.querySelector('.search-box');
  searchbox.addEventListener('keypress', setQuery);
  
  function setQuery(evt) {
    if (evt.keyCode == 13) {
      getResults(searchbox.value);
    }
  }
  
  
  
  //api calls
  function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
      .then(weather => {
        return weather.json();
      }).then(displayResults);
  }
  
  
  
  
  //weather and data change logic
  function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
  
  
    //date () => dateBuilder
    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);
  
  
    //temprature 
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;
    
    //weather 
    let weather_eg = document.querySelector('.current .weather');
    weather_eg.innerText = weather.weather[0].main;

    if(weather_eg.innerText === 'Clouds' ){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1561484930-974554019ade?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjJ8fGNsb3VkfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if(weather_eg.innerText === 'Rain' ){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1540959012611-325e61b9a2b2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTF8fHJhaW4lMjBkcm9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if(weather_eg.innerText === 'Smoke' ){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTJ8fHNtb2tlJTIwd2VhdGhlcnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if(weather_eg.innerText === 'Haze' ){
      document.body.style.backgroundImage = "url('https://cdn.dnaindia.com/sites/default/files/styles/full/public/2018/10/23/746497-smog.jpg')";

    }
    else if(weather_eg.innerText === 'Snow' ){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1418985991508-e47386d96a71?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHNub3d8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if(weather_eg.innerText === 'Mist'){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1549863897-3aa27a8b31da?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fG1pc3QlMjB3ZWF0aGVyfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else if(weather_eg.innerText === 'Fog'){
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1615460386605-65003451fbb5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTV8fGZvZyUyMHdlYXRoZXJ8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    else{
      document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1503453363464-743ee9ce1584?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNsZWFyJTIwc2t5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";

    }
    
    
    //temperatue high and low 
    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.floor(weather.main.temp_min)}°c / ${Math.ceil(weather.main.temp_max)}°c`;
  }
  
  
  
  
  //date logic
  function dateBuilder (d) {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${day} ${date} ${month} ${year}`;
  }
  