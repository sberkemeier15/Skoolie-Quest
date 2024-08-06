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
    setTimeout(showSlides, 10000); // Change image every 10 seconds
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



console.log(zipCode);
async function getWeatherInfo  () {
    const zipCode = document.getElementById("destination").value;
    const apiUrl = `https://api.weatherapi.com/v1/forecast.json?key=${APIKey}&q=41071`;
    
        let response = await fetch(apiUrl);
        let data = response.json();
        return data
        .then((data) => {
            console.log(data);
        })
        
    }

//Map 
//fetch(`https://maps.googleapis.com/maps/api/js?key=${MAP_API_KEY}&libraries=places`) // trying to fetch map without showing API key

let map;
let directionsService;
let directionsRenderer;

async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 39.0914, lng: -84.4958 },
    zoom: 8,
  });
}

initMap();


directionsService = new google.maps.DirectionsService();
    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    // Add a click event listener to the map to add stops
    google.maps.event.addListener(map, 'click', function(event) {
        addStop(event.latLng);
    });


let stops = [];

function addStop(location) {
    stops.push({
        location: location,
        stopover: true
    });
    calculateAndDisplayRoute();
}

function calculateAndDisplayRoute() {
    directionsService.route({
        origin: stops[0].location,
        destination: stops[stops.length - 1].location,
        waypoints: stops.slice(1, stops.length - 1),
        travelMode: 'DRIVING'
    }, function(response, status) {
        if (status === 'OK') {
            directionsRenderer.setDirections(response);
        } else {
            window.alert('Directions request failed due to ' + status);
        }
    });
}



// Search for Google's office in Australia.
/*var request = {
    location: map.getCenter(),
    radius: '500',
    query: 'Google Sydney'
};

var service = new google.maps.places.PlacesService(map);
service.textSearch(request, callback);

// Checks that the PlacesServiceStatus is OK, and adds a marker
// using the place ID and location from the PlacesService.
function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
            map: map,
            place: {
                placeId: results[0].place_id,
                location: results[0].geometry.location
            }
        });
    }
}

google.maps.event.addDomListener(window, 'load', initialize);


function addStop(location) {
    const marker = new google.maps.Marker({
        position: location,
        map: map,
    });
    markers.push(marker);

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ location: location }, (results, status) => {
        if (status === "OK") {
            if (results[0]) {
                stops.push(results[0].formatted_address);
                updateItinerary();
            } else {
                window.alert("No results found");
            }
        } else {
            window.alert("Geocoder failed due to: " + status);
        }
    });
}

// Update itinerary
function updateItinerary() {
    const stopsDiv = document.getElementById("stops");
    stopsDiv.innerHTML = "";

    stops.forEach((stop, index) => {
        const stopDiv = document.createElement("div");
        stopDiv.textContent = `Stop ${index + 1}: ${stop}`;
        stopsDiv.appendChild(stopDiv);
    });
}

document.getElementById("itinerary").addEventListener("submit", (e) => {
    e.preventDefault();
    // Save stops or send to server
    console.log("Itinerary saved:", stops);
});

window.initMap = initMap;

//Enhance form submission
document.getElementById("itinerary").addEventListener("submit", (e) => {
  e.preventDefault();
  // Save stops or send to server
  console.log("Itinerary saved:", stops);
});

*/
