from django.contrib import admin
from django.urls import path, include
from restapi.views import showdata, showDataDay, showDataMonth, ctcdata, showDataYear, showPredictData, showSolarData, twentySeventeen
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api-auth/',include('rest_framework.urls')),
    path('', showdata.as_view(), name="data"),
    path('ctc/', ctcdata.as_view(), name="data"),
    path('day/', showDataDay.as_view(), name="day_data"),
    path('month/', showDataMonth.as_view(), name="week_data"),
    path('year/', showDataYear.as_view(), name="year_data"),
    path('predict/', showPredictData.as_view(), name="predicted_data"),
    path('solar/', showSolarData.as_view(), name="solar_data"),
    path('2017/', twentySeventeen.as_view(), name="solar_data"),
]
