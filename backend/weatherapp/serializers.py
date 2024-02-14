from rest_framework import serializers
from .models import *


class WeatherDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = WeatherData
        fields = '__all__'


class sensorSeriaizer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = (
            'date','time','ap_mb','rain_mm','solrad_w_per_m2','batt_V','WDavg_deg','windmax_km_per_hr',"RHavg_percentage","ATavg_degC"
        )

