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
from back.urls import router


# Create your views here.
def index(request):
  return render(request, 'index.html')

def react(request):
  return render(request, 'react.html')

def detail(request, cart_id):
  cart = get_object_or_404(Cart, pk=cart_id)
  return render(request, 'index.html', {'cart': cart})

def list(request):
  carts = Cart.objects.all()
  return render(request, 'list.html', {'carts': carts})  

def create(request):
  if request.method == 'POST':
    form = CartForm(request.POST)

    if form.is_valid():
      title = form.cleaned_data.get('title')
      description = form.cleaned_data.get('description')
      price = form.cleaned_data.get('price')
      cartGood = Cart.objects.create(title=title, description=description, price=price, user=request.user,date_creation=timezone.now())
      cartGood.save()
      return HttpResponseRedirect('/cart/list/')

  else: 
    form = CartForm()
    return render(request, 'create.html', { 'form': form })

class CartCreate(CreateView):
  template_name = 'create.html'
  model = Cart
  context_object_name = 'form'
  fields = ['title', 'description', 'price', 'date_creation', 'user']
  success_url = '/cart/list' 

  def form_valid(self, form):
    form.instance.user = self.request.user
    return super(CartCreate, self).form_valid(form)

class CartViewSet(viewsets.ModelViewSet):
  queryset = Cart.objects.all()
  serializer_class = CartSerializer  

router.register(r'carts', CartViewSet)





