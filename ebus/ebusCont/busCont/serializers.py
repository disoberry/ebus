from rest_framework import serializers
from .models import *


class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = BusTableM

        fields = ('id' ,'price', 'fromWhere', 'toWhere', 
                  'platform', 'status',)
        # 'raceNum',


class TripRaceSerializer(serializers.ModelSerializer):

    class Meta:
        model = BusTrip
        fields = ('id', 'bus_table', 'freeSeats', 'seats', 'timeFrom', 'timeTo', 'date')



class TicketSerializer(serializers.ModelSerializer):

    class Meta:
        model = Ticket
        fields = ('id' ,'trip_race_ticket', 'seat_number', 'ticket_owner', 'ticket_status')