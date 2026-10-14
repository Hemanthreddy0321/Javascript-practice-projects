let search = document.querySelector(".search");
let button = document.querySelector(".btn");
let update = document.querySelector(".update");

button.addEventListener("click",function(){
    let city=search.value.trim();
    if(city===""){
         update.textContent = "Please enter a city name.";
        return;
    }
    

  
    findCity(city);
})


async function findCity(city) {


     try {
        let response = await fetch(
        `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1`
    );

    let data = await response.json();

  
   if (!data.results || data.results.length === 0) {
    update.textContent = "City not found. Try another city.";
    return;
}

 let location = data.results[0];
   

   let url = `https://api.open-meteo.com/v1/forecast?latitude=${location.latitude}&longitude=${location.longitude}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`;


   let weatherResponse = await fetch(url);
let weatherData = await weatherResponse.json();


update.textContent = `${location.name}: ${weatherData.current.temperature_2m}°C |` + `Humidity:${weatherData.current.relative_humidity_2m}% | ` +`Wind:${weatherData.current.wind_speed_10m}km/h`;

       
    } catch (error) {
        update.textContent = "Unable to load weather. Please try again.";
        console.error(error);
    }

    
}