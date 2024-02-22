from django.contrib import admin
from .models import SensorData, CtcData, PredictedData, solarData

# Register your models here.
admin.site.register(SensorData)
admin.site.register(CtcData)
admin.site.register(PredictedData)
admin.site.register(solarData)
