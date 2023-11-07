from .models import BusTableM
from .serializers import LeadSerializer
from rest_framework import generics



class LeadListCreate(generics.ListCreateAPIView):
    queryset = BusTableM.objects.all()
    serializer_class = LeadSerializer
