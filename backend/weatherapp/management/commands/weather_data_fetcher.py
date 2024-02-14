from django.core.management.base import BaseCommand
import requests
from weatherapp.models import WeatherData
import schedule
import time

class Command(BaseCommand):
    help = 'Fetch weather data from OpenWeatherMap API and save to WeatherData model'

    def handle(self, *args, **options):
        print('Started')
        def fetch_and_save_weather_data():
           
            # API key and endpoint
            api_key = "d79085c3ebd47c71fdd4526777822922"
            endpoint = "https://api.openweathermap.org/data/2.5/weather"

            # Coordinates for the location (in this case, example coordinates)
            lat = 10.9413
            lon = -76.7439

            # Construct the URL with parameters
            url = f"{endpoint}?lat={lat}&lon={lon}&appid={api_key}&units=metric"
            response = requests.get(url)
            if response.status_code == 200:
                # Parse the API response
                api_data = response.json()

                # Extract relevant information
                extracted_data = {
                    "temperature": api_data["main"]["temp"],
                    "rainfall": None,  # Rainfall information may not be available in the response
                    "wind_speed": api_data["wind"]["speed"],
                    "humidity": api_data["main"]["humidity"],
                    "solar_radiation": None,  # Solar radiation information is not present in the response
                    "wind_direction": api_data["wind"]["deg"],
                    "type": api_data['weather'][0]['main']
                }

                # Save the extracted data to the WeatherData model
                WeatherData.objects.create(**extracted_data)

                self.stdout.write(self.style.SUCCESS("Weather data saved to WeatherData model"))
            else:
                # Print an error message if the request was not successful
                self.stderr.write(self.style.ERROR(f"Error: {response.status_code} - {response.text}"))

        # Schedule the task to run every 2 minutes
        schedule.every(2).minutes.do(fetch_and_save_weather_data)

        # Run the scheduler in the background
        while True:
            schedule.run_pending()
            time.sleep(1)
