from rest_framework import serializers
from . models import Cart
from user.serializers import UserSerializer

class CartSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  class Meta:
    model = Cart
    fields = ['id', 'title', 'price', 'description', 'user', 'image']
