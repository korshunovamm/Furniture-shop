from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('favorites/', views.FavoriteCreate.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
