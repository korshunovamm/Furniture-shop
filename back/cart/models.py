# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Cart(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True, db_constraint=False)
  price = models.IntegerField(max_length=100)
  image = models.ImageField(upload_to="cartGoods", null=True, blank=True)


