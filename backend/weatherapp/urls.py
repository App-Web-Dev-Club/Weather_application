from django.contrib import admin
from django.urls import path,include
from .views import *

urlpatterns = [
    # path('admin', admin.site.urls),
    # path('', include('accounts.urls'))

    path('test',WeatherDataView.as_view()),
    path('latest-weather/', LatestWeatherDataView.as_view(), name='latest-weather'),
    path('test',showdata.as_view()),
]