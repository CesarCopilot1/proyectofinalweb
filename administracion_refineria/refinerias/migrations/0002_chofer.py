# Generated by Django 5.0.4 on 2024-06-27 21:04

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('refinerias', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Chofer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nombre', models.CharField(max_length=100)),
                ('apellido', models.CharField(max_length=100)),
                ('telefono', models.CharField(max_length=100)),
                ('edad', models.IntegerField()),
                ('direccion', models.CharField(max_length=100)),
                ('camion', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='camion', to='refinerias.camion')),
                ('ruta_id', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='ruta', to='refinerias.ruta')),
            ],
        ),
    ]
