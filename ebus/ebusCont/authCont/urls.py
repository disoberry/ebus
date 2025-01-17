from django.urls import path
from . import views
from knox.views import LogoutView, LogoutAllView

urlpatterns = [
    path('create_user/', views.CreateUserAPI.as_view()),
    path('update_user/<int:pk>/', views.UpdateUserAPI.as_view()),
    path('login/', views.LoginAPIView.as_view()),
    path('logout/', LogoutView.as_view()),
    path('logout-all/', LogoutAllView.as_view()),
    path('register/', views.RegisterUserAPI.as_view(), name='serializer'),
]