# Generated by Django 5.0.4 on 2024-06-25 18:35

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Camion',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('modelo', models.CharField(max_length=100)),
                ('placa', models.CharField(max_length=100)),
                ('capacidad', models.DecimalField(decimal_places=2, max_digits=10)),
                ('saldo', models.DecimalField(decimal_places=2, default=0.0, max_digits=10)),
                ('tipo_combustible', models.IntegerField(blank=True, choices=[(1, 'Gasolina'), (0, 'Gasolina_Premium'), (-1, 'Diesel')])),
            ],
        ),
        migrations.CreateModel(
            name='Ruta',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('fecha', models.DateField()),
                ('nombre', models.CharField(max_length=100)),
                ('litro_combustible', models.DecimalField(decimal_places=2, max_digits=10)),
                ('precio_combustible', models.DecimalField(decimal_places=2, max_digits=10)),
                ('tipo_combustible', models.IntegerField(blank=True, choices=[(1, 'Gasolina'), (0, 'Gasolina_Premium'), (-1, 'Diesel')])),
                ('camion', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='camiones', to='refinerias.camion')),
            ],
        ),
    ]
