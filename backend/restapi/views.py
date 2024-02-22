from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .serializer import sensorSerializer, ctcsensorSerializer, predictionSerializer, solarSerializer
from .models import SensorData, CtcData, PredictedData, solarData
from django.db.models import Avg
import json
# Create your views here.

class showdata(APIView):
    def get(self, request, *args, **kwargs):
        qs = SensorData.objects.all().order_by('-id')[:1]
        serializers = sensorSerializer(qs, many=True)
        return Response(serializers.data)

class showPredictData(APIView):
    def get(self, request, *args, **kwargs):
        qs = PredictedData.objects.all().order_by('-id')[:1]
        serializers = predictionSerializer(qs, many=True)
        return Response(serializers.data)

class showSolarData(APIView):
    def get(self, request, *args, **kwargs):
        qs = solarData.objects.all().order_by('-id')[:1]
        serializers = solarSerializer(qs, many=True)
        return Response(serializers.data)

class ctcdata(APIView):
    def get(self, request, *args, **kwargs):
        qs = CtcData.objects.all().order_by('-id')[:1]
        serializers = ctcsensorSerializer(qs, many=True)
        return Response(serializers.data)


class showDataDay(APIView):
    def get(self, request, *args, **kwargs):
        l = SensorData.objects.last().id
        data = []
        for i in range(24):
            qs = SensorData.objects.order_by('-id').filter( id__lte = l)[:1].aggregate(rain_mm = Avg('rain_mm'),ap_mb = Avg('ap_mb'),solrad_w_per_m2 = Avg('solrad_w_per_m2'),WDavg_deg = Avg('WDavg_deg'),windmax_km_per_hr = Avg('windmax_km_per_hr'),RHavg_percentage = Avg('RHavg_percentage'),ATavg_degC = Avg('ATavg_degC'),)
            d = SensorData.objects.filter(id=l).values('date','time')
            if d.first():
                qs['date'] = d.first()['date']
                qs['time'] = d.first()['time']
                data.append(qs)
            l = l - 2 
        data.reverse()
        return Response(data)
        # serializer = sensorSerializer(qs, many=True)
        # return Response(serializer.data)

class showDataMonth(APIView):
    def get(self, request, *args, **kwargs):
        l = SensorData.objects.last().id
        data = []
        for i in range(30):
            qs = SensorData.objects.order_by('-id').filter( id__lte = l)[:48].aggregate(rain_mm = Avg('rain_mm'),ap_mb = Avg('ap_mb'),solrad_w_per_m2 = Avg('solrad_w_per_m2'),WDavg_deg = Avg('WDavg_deg'),windmax_km_per_hr = Avg('windmax_km_per_hr'),RHavg_percentage = Avg('RHavg_percentage'),ATavg_degC = Avg('ATavg_degC'),)
            d = SensorData.objects.filter(id=l-24).values('date')
            if d.first():
                qs['date'] = d.first()['date']
                data.append(qs)
            l = l - 48
        data.reverse()
        return Response(data)
 
class showDataYear(APIView):
    def get(self, request, *args, **kwargs):
        l = SensorData.objects.last().id
        data = []
        for i in range(12):
            qs = SensorData.objects.order_by('-id').filter(id__lte = l)[:1440].aggregate(rain_mm = Avg('rain_mm'),ap_mb = Avg('ap_mb'),solrad_w_per_m2 = Avg('solrad_w_per_m2'),WDavg_deg = Avg('WDavg_deg'),windmax_km_per_hr = Avg('windmax_km_per_hr'),RHavg_percentage = Avg('RHavg_percentage'),ATavg_degC = Avg('ATavg_degC'),)
            d = SensorData.objects.filter(id=l-720).values('date')
            if d.first() and (d.first()['date'].year) > 2021:
                qs['date'] = d.first()['date']
                data.append(qs)
            l = l - 1440
        data.reverse()
        return Response(data)

class twentySeventeen(APIView):
    def get(self, request, *args, **kwargs):
        l = SensorData.objects.last().id
        ml = ['','January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        data = []
        while True:
            qs = SensorData.objects.order_by('-id').filter(id__lte = l)[:1440].aggregate(rain_mm = Avg('rain_mm'),ap_mb = Avg('ap_mb'),solrad_w_per_m2 = Avg('solrad_w_per_m2'),WDavg_deg = Avg('WDavg_deg'),windmax_km_per_hr = Avg('windmax_km_per_hr'),RHavg_percentage = Avg('RHavg_percentage'),ATavg_degC = Avg('ATavg_degC'),)
            d = SensorData.objects.filter(id=l-720).values('date')
            #print(d.first()['date'].year)
            if d.first()  and (d.first()['date'].year) < 2020:
                qs['date'] = ml[d.first()['date'].month] + " " + str(d.first()['date'].year)
                data.append(qs)
            l = l - 1440
            if l <=0 :
                break
        data.reverse()
        return Response(data)
