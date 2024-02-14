from django.db import models

# Create your models here.
class WeatherData(models.Model):
    datetime = models.DateTimeField(auto_now_add=True)
    temperature = models.FloatField()
    rainfall = models.FloatField(blank=True,null = True)
    wind_speed = models.FloatField()
    humidity = models.FloatField()
    solar_radiation = models.FloatField(blank=True,null = True)
    wind_direction = models.FloatField()
    type = models.CharField(max_length=100,null = True, blank = True)


class SensorData(models.Model): #not found for what
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