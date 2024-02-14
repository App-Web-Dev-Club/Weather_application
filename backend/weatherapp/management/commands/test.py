# yourappname/management/commands/my_command.py

from django.core.management.base import BaseCommand
from django.utils import timezone
import requests
# from weatherapp.models import YourModel  # Import your model

class Command(BaseCommand):
    help = 'Make a request every 2 minutes and save data'

    def handle(self, *args, **options):
        # Your API endpoint and key
        # api_endpoint = "https://api.openweathermap.org/data/2.5/your_endpoint"
        # api_key = "your_api_key"

        # # Make the request
        # response = requests.get(f"{api_endpoint}?appid={api_key}")

        # # Check if the request was successful
        # if response.status_code == 200:
        #     # Process and save data to your model
        #     data_to_save = response.json()  # Adjust this based on your API response structure
        #     YourModel.objects.create(data_field=data_to_save['desired_data'])

        #     # Print a success message
        #     self.stdout.write(self.style.SUCCESS(f"Data saved successfully at {timezone.now()}"))
        # else:
        #     # Print an error message if the request was not successful
        #     self.stderr.write(self.style.ERROR(f"Error: {response.status_code} - {response.text}"))
        print('test')
