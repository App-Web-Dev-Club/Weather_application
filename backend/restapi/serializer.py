from ast import Return
from urllib import response
from rest_framework import serializers
from .models import SensorData, CtcData, PredictedData, solarData

class sensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = SensorData
        fields = (
            'id','date','time','ap_mb','rain_mm','solrad_w_per_m2','batt_V','WDavg_deg','windmax_km_per_hr',"RHavg_percentage","ATavg_degC"
        )

class ctcsensorSerializer(serializers.ModelSerializer):
    class Meta:
        model = CtcData
        fields = (
            'id','date','time','Pressure_hPa','Humidity_rH','LightIntensity_lux','Noise','Temperature_degC',
        )

class predictionSerializer(serializers.ModelSerializer):
    class Meta:
        model = PredictedData
        fields = (
            'id','date','time','min_temp','max_temp','hours_of_rain','hours_of_sunlight','cloud_cover','solar_radiation','rain_prob','precipitaion','thunderstorm_prob','wind_speed','wind_dir','air_quality','phrase','wind_dir_local'
        )

class solarSerializer(serializers.ModelSerializer):
    class Meta:
        model = solarData
        fields = (
            'id', 'date','time','pv_energy'
        )
