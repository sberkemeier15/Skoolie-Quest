//imports


// Mobile View Toggle in Navbar
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
});


// JavaScript for Slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("img-fade");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    slides[slideIndex-1].style.display = "flex";  
    setTimeout(showSlides, 10000); // Changes image every 10 seconds
}

//Tiles

function showTile(tileId) {
    let tile = document.getElementById(tileId);
    if (tile.style.display === "none") {
        tile.style.display = "block";
    } else {
        tile.style.display = "none";
    }
}


//Weather API
    const validateZipCode = (zipCode) => {
        const zipCodeRegex = /^(\d{5}(-\d{4})?|\w+, \w+)$/; //regex for zipcode and city, state
        if (!zipCodeRegex.test(zipCode)) {
          alert("Invalid input. Please input a valid zipcode OR city, state");
          return false;
        }
        return true;
      };
    
      
      const weatherInfoBox = document.getElementById("weather-info");
      const zipcodeBox = document.getElementById('destination');
      const WeatherAPIKey = "9f414a5dacd44d8b896223930240508";
      
      const getWeatherInfo = async () => {
          let zipCode = zipcodeBox.value;
          console.log(zipCode);

          if (!validateZipCode(zipCode)) {
              return;
          }
      
          const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${WeatherAPIKey}&q=${zipCode}&days=7`;
          
              let response = await fetch(apiUrl); 
              let data = response.json();
              return data
              .then((data) => {
                  console.log(data);
                  weatherInfoBox.innerHTML = `<h2>${data.location.name}, ${data.location.region}</h2> Forecast for ${data.forecast.forecastday[0].date} through ${data.forecast.forecastday[6].date}`;
                  for (let i = 0; i < data.forecast.forecastday.length; i++) {
                      const date = new Date(data.forecast.forecastday[i].date);
                      const options = { weekday: 'short' };
                      const weekday = date.toLocaleString('en-US', options);
                      console.log(weekday);
                      weatherInfoBox.innerHTML += `<p>${weekday}: ${data.forecast.forecastday[i].day.condition.text} with a high of ${data.forecast.forecastday[i].day.maxtemp_f}°F and a low of ${data.forecast.forecastday[i].day.mintemp_f}°F.</p>`
                      const icon = document.createElement("img");
                      icon.src = `https:${data.forecast.forecastday[i].day.condition.icon}`;
                      weatherInfoBox.appendChild(icon);
                      icon.classList.add("weather-icon");
                  }
                  console.table(data.forecast.forecastday);
                  const resetButton = document.createElement("button");
                  resetButton.textContent = "Reset";
                  weatherInfoBox.appendChild(resetButton);
                  resetButton.addEventListener("click", () => {
                      weatherInfoBox.innerHTML = "";
                      zipcodeBox.value = "";
                  });
              })
              .catch((error) => {
                  console.error(error);
              });
              
          }
