from django.db import models

# Create your models here.


class CustomUserM(models.Model):
    email = models.EmailField(max_length=50)
    password = models.TextField(max_length=21)