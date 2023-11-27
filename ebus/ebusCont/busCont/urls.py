from django.urls import path
from . import views

urlpatterns = [
    path('ebuscont/api/', views.LeadListCreate.as_view()),
    path('ebuscont/api/triprace', views.TripRaceListCreate.as_view()),
    path('ebuscont/api/ticket', views.TicketListCreate.as_view()),
]