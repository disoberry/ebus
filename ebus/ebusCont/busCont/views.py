from .models import BusTableM, BusTrip, Ticket
from .serializers import LeadSerializer, TripRaceSerializer, TicketSerializer
from rest_framework import generics



class LeadListCreate(generics.ListCreateAPIView):
    queryset = BusTableM.objects.all()
    serializer_class = LeadSerializer


class TripRaceListCreate(generics.ListCreateAPIView):
    queryset = BusTrip.objects.all()
    serializer_class = TripRaceSerializer

class TicketListCreate(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
