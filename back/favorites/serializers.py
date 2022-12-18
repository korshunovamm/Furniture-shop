from rest_framework import serializers
from . models import Favorite
from user.serializers import UserSerializer

class FavoriteSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  class Meta:
    model = Favorite
    fields = ['id', 'price', 'user', 'image']
