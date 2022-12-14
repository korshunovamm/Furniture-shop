from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
  path('login/', views.Login.as_view(), name='login'),
  path('logout/', views.Logout.as_view(), name='logout')
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
