<<<<<<<HEAD
- Search functionality to fetch and display weather information for the entered location.
=======
- Search option for users to fetch weather data for other cities.
>>>>>>> origin/main

- Dark mode and light mode toggle.
- Responsive design that works well on various devices (desktop, tablet, mobile).

## Technologies Used

- React
- HTML
- CSS
- JavaScript
- OpenWeather API

## Getting Started

* Components 
- App.js: The main component that renders the 'ToggleSwitch' and 'Weather' components. Manages the state for dark mode.
- ToggleSwitch.js: A functional component that renders a toggle switch for dark mode. Accepts 'toggleDarkMode' and 'darkMode' as props.
- Weather.js: A functional component that fetches and displays weather information based on user input. Displays location, temparature, data, time, wind speed, and a brief weather description. Accepts 'darkMode' as a prop to conditionally apply dark mode styling.

* Styling
- App.css: Contains the main styles for the application.
- ToggleSwitch.css: Contains styles for the dark mode toggle switch.
- Weather.css: Contains styled for the weather information card.

### API Integration

The application uses the OpenWeather API to fetch weather data. Ensuring a valid API key from OpenWeather.

### Handling Errors

The application gracefully handles API errors adn provides feedback to the use in case of invalid input for connection issues.

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Akhiladara/Weather-App.git


### Acknowledgements
- OpenWeather API for providing the weather data.
- React for the powerful JvaScript library for building use interfaces.