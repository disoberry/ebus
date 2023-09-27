# Generated by Django 4.2.5 on 2023-09-27 07:11

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BusTableM',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('raceNum', models.IntegerField(max_length=6)),
                ('price', models.IntegerField()),
                ('fromWhere', models.TextField()),
                ('toWhere', models.TextField()),
                ('seats', models.IntegerField()),
                ('freeSeats', models.IntegerField()),
                ('platform', models.IntegerField()),
                ('status', models.BooleanField()),
                ('fromWhen', models.DateTimeField()),
                ('toWhen', models.DateTimeField()),
                ('routeSchedule', models.TextField(choices=[('8:00', '8:00'), ('9:00', '9:00'), ('10:00', '10:00'), ('11:00', '11:00'), ('12:00', '12:00'), ('13:00', '13:00'), ('14:00', '14:00')], default='c12')),
            ],
        ),
    ]
