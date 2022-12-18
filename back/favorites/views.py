from django.shortcuts import render
from django.shortcuts import HttpResponseRedirect
from . models import Favorite
from . forms import FavoriteForm
from django.http.response import HttpResponseNotFound
from rest_framework import viewsets, mixins
from django.utils import timezone
from django.views.generic import CreateView, UpdateView
from .serializers import FavoriteSerializer
# from back.urls import router

# Create your views here.


class FavoriteViewSet(viewsets.ModelViewSet):
  queryset = Favorite.objects.all()
  serializer_class = FavoriteSerializer      

# router.register(r'favorites', FavoriteViewSet)

def create(request):
  if request.method == 'POST':
    form = FavoriteForm(request.POST)

    if form.is_valid():
      title = form.cleaned_data.get('title')
      description = form.cleaned_data.get('description')
      price = form.cleaned_data.get('price')
      cartGood = Favorite.objects.create(title=title, description=description, price=price, user=request.user,date_creation=timezone.now())
      cartGood.save()
      return HttpResponseRedirect('/favorite/list/')

  else: 
    form = FavoriteForm()
    return render(request, 'create.html', { 'form': form })

class FavoriteCreate(CreateView):
  template_name = 'cregate.html'
  model = Favorite
  context_object_name = 'form'
  fields = ['title', 'description', 'price', 'date_creation', 'user', 'image']
  success_url = '/favorite/list' 

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super(FavoriteCreate, self).form_valid(form)

