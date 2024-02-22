from django.db import models

# Create your models here.
class SensorData(models.Model):
    date = models.DateField()
    time = models.TimeField()
    ap_mb = models.FloatField()
    rain_mm= models.FloatField()
    solrad_w_per_m2 = models.FloatField()
    batt_V = models.FloatField()
    WDavg_deg = models.FloatField()
    windmax_km_per_hr = models.FloatField()
    RHavg_percentage = models.FloatField()
    ATavg_degC = models.FloatField()
    class Meta:
        db_table="weatherstation"

class CtcData(models.Model):
    date = models.DateField()
    time = models.TimeField()
    Pressure_hPa = models.FloatField()
    Humidity_rH = models.FloatField()
    LightIntensity_lux = models.FloatField()
    Noise = models.FloatField()
    Temperature_degC = models.FloatField()
    class Meta:
        db_table="indoor"

        
class PredictedData(models.Model):
    date = models.DateField()
    time = models.TimeField()
    min_temp = models.FloatField()
    hours_of_rain = models.FloatField()
    max_temp = models.FloatField()
    hours_of_sunlight = models.FloatField()
    cloud_cover = models.FloatField()
    solar_radiation = models.FloatField()
    rain_prob = models.FloatField()
    precipitaion = models.FloatField()
    thunderstorm_prob = models.FloatField()
    wind_speed = models.FloatField()
    wind_dir = models.FloatField()
    air_quality = models.CharField(max_length=200)
    phrase = models.CharField(max_length=200)
    wind_dir_local = models.CharField(max_length=200)
    class Meta:
        db_table="weather_api"

class solarData(models.Model):
    date = models.DateField()
    time = models.TimeField()
    pv_energy = models.FloatField()
    class Meta:
        db_table="solar"
