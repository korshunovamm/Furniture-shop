# Generated by Django 4.1.3 on 2022-12-18 18:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('favorites', '0003_favorite_delete_favorites'),
    ]

    operations = [
        migrations.AlterField(
            model_name='favorite',
            name='image',
            field=models.ImageField(upload_to='favoriteGoods'),
        ),
    ]
