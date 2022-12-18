from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Favorite(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  price = models.IntegerField()
  image = models.ImageField(upload_to="favoriteGoods")

  def __str__(self) -> str:
    return self.price

