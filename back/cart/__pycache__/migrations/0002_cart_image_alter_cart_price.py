# Generated by Django 4.1.3 on 2022-12-06 14:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='image',
            field=models.ImageField(null=True, upload_to='cartGoods'),
        ),
        migrations.AlterField(
            model_name='cart',
            name='price',
            field=models.IntegerField(max_length=100),
        ),
    ]