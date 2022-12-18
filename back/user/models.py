# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class User(models.Model):
  username = models.CharField(max_length=20)
  email = models.CharField(max_length=30)