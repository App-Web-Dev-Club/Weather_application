from django.shortcuts import render
from rest_framework import status, generics, permissions
# Create your views here.
from rest_framework.response import Response
from .models import WeatherData
from .serializers import WeatherDataSerializer

class WeatherDataView(generics.ListCreateAPIView):
    queryset = WeatherData.objects.all()
    serializer_class = WeatherDataSerializer


from django.shortcuts import render
from django.views import View
from .models import *


from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializers import *

class LatestWeatherDataView(APIView):
    def get(self, request, format=None):
        # Get the latest WeatherData object based on datetime
        latest_data = WeatherData.objects.latest('datetime')

        # Serialize the data
        serializer = WeatherDataSerializer(latest_data)

        return Response(serializer.data, status=status.HTTP_200_OK)


class showdata(APIView):
    def get(self, request, *args, **kwargs):
        qs = SensorData.objects.all().order_by('-id')[:1]
        serializers = sensorSeriaizer(qs, many=True)
        return Response(serializers.data)
