from django import forms

class FavoriteForm(forms.Form):
  title = forms.CharField(label='Название')
  description = forms.CharField(label='Описание')
  price = forms.IntegerField(label='Цена')
  # image = forms.ImageField(upload_to="favoritesGoods")