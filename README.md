# Skoolie-Quest
Purpose

Welcome to Skoolie Quest, the ultimate platform designed for nomads, adventurers, and Skoolie enthusiasts. Here, you can seamlessly plan your trips, connect, and socialize with like-minded travelers, access comprehensive resources on converting your school bus into a mobile home, and navigate effortlessly to your destinations—all in one convenient place. 

Please note that the social features, build guides, and navigation tools are currently under development.

Skoolie Quest, your ultimate adventure guide on wheels. Upon landing on our homepage, you will find a navigation bar featuring our logo, links to various sections, and a "Plan Your Trip" button. Clicking on this button will take you to the Skoolie Adventure Planner section.
In this section, you can select "Map It Out" to input your destination and planned stops along the way (please note this feature is still under development and is currently not functional). Next, you can click "Forecast It," where you can enter your destination to receive the weather forecast for that location. The "Budget It" feature allows you to input your desired spending goals and categorize expenses such as food, gas, and entertainment. (please note this feature is still under development and is currently not functional).
All this information will be compiled to create a personalized itinerary that you can print out (please note the itinerary feature is still under development and is not yet functional).

The design of Skoolie Quest is a modern take on the aesthetic and functionality seen in popular outdoor and adventure-focused websites like Hipcamp and AllTrails. The website is inspired by an outdoor and adventure-driven theme. Emphasizing a clean, intuitive, and visually appealing interface that encourages users to explore and plan their trips. 

Responsive Design

Skoolie Quest is designed to be fully responsive, offering an optimized experience on both desktop and mobile devices. Using media queries, the layout adapts seamlessly when the screen size is reduced to 800px, ensuring the design stays both comprehensive and functional. For example, in mobile view, the navigation bar collapses its links, replacing them with a menu button for easy access to the navigation on smaller screens.
In addition to media queries, I implemented Flexbox to control the order of elements, allowing for a dynamic and adaptable layout across different screen sizes. 
To structure the overall layout of the page, I used CSS Grid. This grid system serves as the backbone of the homepage, dividing it into major regions and aligning elements into columns and rows. Within the Adventure Planner, I applied a 3/1 grid ratio, where the header spans three columns (large tile) while the smaller tiles occupy one column each. When clicked, these smaller tiles dynamically expand to reveal a medium-sized column.

Features

I utilized the WeatherAPI to retrieve reliable data for a seven-day forecast, which I then displayed within my application.
For the weather feature, I implemented an asynchronous function that retrieves and displays a seven-day forecast within the 'Forecast it' container. Users can input either a zip code or a city and state, which the function then parses as JSON and returns. The function sends a GET request to WeatherAPI (Weatherapi.com) using Fetch, and it extracts key details such as the day of the week, high and low temperatures, and a weather icon to present a user-friendly forecast.
To ensure accuracy in user input, I used Regex to validate the 'Enter Destination' field. This validation checks for invalid entries and alerts the user if, for example, they enter an incorrect zip code like '41071908.' This helps maintain the integrity of the data being processed by the weather application.


Set Up Instructions (Special Instructions for the Reviewer):
1.	Click "Plan Your Trip."
2.	Enter a destination, either by zip code or city and state.
3.	View the 7-day forecast for your selected area.
4.	To get a new forecast, click the "Reset" button and enter a different location.
Note: The Skoolie Quest logo will always return you to the homepage. All buttons and navigation links are functional, except the save buttons.
