from rest_framework import serializers
from .models import *


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusTableM
        fields = ('id' ,'price', 'raceNum', 'fromWhere', 'toWhere', 'seats', 'freeSeats',
                  'platform', 'status', 'fromWhen', "toWhen", 'routeSchedule')