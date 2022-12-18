from django.shortcuts import HttpResponse, render, get_object_or_404, HttpResponseRedirect
from . models import Cart
from . forms import CartForm
from django.http.response import HttpResponseNotFound
from rest_framework import viewsets, mixins
from django.urls import reverse
from django.http import Http404
from django.utils import timezone
from django.views.generic import CreateView, UpdateView
from .serializers import CartSerializer
from rest_framework.parsers import MultiPartParser, FormParser



# def create(request):
#   if request.method == 'POST':
#     form = CartForm(request.POST)

#     if form.is_valid():
#       title = form.cleaned_data.get('title')
#       description = form.cleaned_data.get('description')
#       price = form.cleaned_data.get('price')
#       cartGood = Cart.objects.create(title=title, description=description, price=price, user=request.user,  date_creation=timezone.now())
#       cartGood.save()
#       return HttpResponseRedirect('/cart/list/')

#   else: 
#     form = CartForm()
#     return render(request, 'create.html', { 'form': form })

class CartCreate(CreateView):
  model = Cart
  context_object_name = 'form'
  fields = [ 'price', 'image', 'user']
  success_url = '/cart/list' 

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super(CartCreate, self).form_valid(form)

class CartViewSet(viewsets.ModelViewSet):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer 
  # parser_classes = (MultiPartParser, FormParser) 

  # def perform_create(self, serializer):
  #   serializer.validated_data['user'] = self.request.user
  #   return super().perform_create(serializer)






