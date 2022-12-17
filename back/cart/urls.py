from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
  path('', views.index, name="index"),
  path('<int:cart_id>/', views.detail),
  path('list/', views.list),
  path('react/', views.react),
  path('create/', views.CartCreate.as_view())
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)