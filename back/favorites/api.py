from .models import Favorite
from rest_framework import viewsets, permissions
from .serializers import FavoriteSerializer

class FavoriteViewSet(viewsets.ModelViewSet):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer  