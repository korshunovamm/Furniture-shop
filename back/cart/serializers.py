from rest_framework import serializers
from . models import Cart
from user.serializers import UserSerializer

class CartSerializer(serializers.ModelSerializer):
  user = UserSerializer(read_only=True)
  image_url = serializers.ImageField()

  class Meta:
    model = Cart
    # fields = ['id', 'title', 'price', 'description', 'image', 'user']
    fields = ['price', 'image','user']
    extra_kwargs = {"image": {"read_only" : True}}
