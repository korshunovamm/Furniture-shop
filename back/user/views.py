from django.shortcuts import render
from django.contrib.auth.views import LoginView, LogoutView

# Create your views here.
class Login(LoginView):
  template_name = 'login.html'

  def get_redirect_url(self):
    return '../../cart/list'

class Logout(LogoutView):
  next_page = '../../cart/'  
