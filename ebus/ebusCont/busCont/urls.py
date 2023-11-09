from django.urls import path
from . import views

urlpatterns = [
    path('ebuscont/api/', views.LeadListCreate.as_view()),
]