# Generated by Django 5.0.4 on 2024-06-27 21:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('refinerias', '0002_chofer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='chofer',
            old_name='ruta_id',
            new_name='ruta',
        ),
    ]
