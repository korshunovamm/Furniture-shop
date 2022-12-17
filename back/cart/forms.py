from django import forms

class CartForm(forms.Form):
  title = forms.CharField(label='Название')
  description = forms.CharField(label='Описание')
  price = forms.IntegerField(label='Цена')
  # image = forms.ImageField(upload_to="cartGoods", null=True)