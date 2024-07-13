from django.db import models
from refinerias.models import Ruta, Camion   # Adjust the import based on the actual location of the Ruta model

class Chofer(models.Model):
    nombre = models.CharField(max_length=100)
    apellido = models.CharField(max_length=100)
    telefono = models.CharField(max_length=100)
    edad = models.IntegerField()
    direccion = models.CharField(max_length=100)
    ruta = models.ForeignKey(Ruta, on_delete=models.CASCADE, related_name='ruta', null=True)
    camion = models.ForeignKey(Camion, on_delete=models.CASCADE, related_name='camion', null=True, blank=True)

    def __str__(self):
        return f'{self.codigo} - {self.nombre}'




