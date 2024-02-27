from .models import BusTableM, BusTrip, Ticket
from .serializers import LeadSerializer, TripRaceSerializer, TicketSerializer
from rest_framework import generics
from rest_framework.filters import SearchFilter
from django_filters.rest_framework import DjangoFilterBackend


class LeadListCreate(generics.ListCreateAPIView):
    queryset = BusTableM.objects.all()
    serializer_class = LeadSerializer



class TripRaceListCreate(generics.ListCreateAPIView):
    queryset = BusTrip.objects.all()
    serializer_class = TripRaceSerializer
    filter_backends = (DjangoFilterBackend, SearchFilter)
    filterset_fields = ('bus_table__fromWhere', 'bus_table__toWhere',)

class TicketListCreate(generics.ListCreateAPIView):
    queryset = Ticket.objects.all()
    serializer_class = TicketSerializer
