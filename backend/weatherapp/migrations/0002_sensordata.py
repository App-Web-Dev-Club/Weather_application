# Generated by Django 4.2.9 on 2024-02-13 17:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('weatherapp', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='SensorData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date', models.DateField()),
                ('time', models.TimeField()),
                ('ap_mb', models.FloatField()),
                ('rain_mm', models.FloatField()),
                ('solrad_w_per_m2', models.FloatField()),
                ('batt_V', models.FloatField()),
                ('WDavg_deg', models.FloatField()),
                ('windmax_km_per_hr', models.FloatField()),
                ('RHavg_percentage', models.FloatField()),
                ('ATavg_degC', models.FloatField()),
            ],
            options={
                'db_table': 'weatherstation',
            },
        ),
    ]