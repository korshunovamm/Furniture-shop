# Create your models here.
from django.db import models
from django.contrib.auth.models import User

class Cart(models.Model):
  title = models.CharField(max_length=100)
  description = models.TextField(null=True, default="")
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  price = models.IntegerField(max_length=100)
  date_creation = models.DateTimeField()
  image = models.ImageField(upload_to="cartGoods", null=True)

  def __str__(self) -> str:
    return self.title + "\n" + self.description
