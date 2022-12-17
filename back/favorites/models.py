from django.db import models

# Create your models here.
from django.contrib.auth.models import User

class Favorites(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField(null=True, default="")
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  price = models.CharField(max_length=100)
  date_creation = models.DateTimeField()
  image = models.ImageField(upload_to="favoritesGoods", null=True)

  def __str__(self) -> str:
    return self.title + self.description

