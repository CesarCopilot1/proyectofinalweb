from django.db import models


class Camion(models.Model):
    modelo = models.CharField(max_length=100)
    placa = models.CharField(max_length=100)
    capacidad = models.DecimalField(max_digits=10, decimal_places=2)
    saldo = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    
        
    COMBUSTIBLE_GASOLINA = 1
    COMBUSTIBLE_GASOLINAPREMIUM = 0
    COMBUSTIBLE_DIESEL = -1

    COMBUSTIBLE_CHOICES = (
        (COMBUSTIBLE_GASOLINA, "Gasolina"),
        (COMBUSTIBLE_GASOLINAPREMIUM, "Gasolina_Premium"),
        (COMBUSTIBLE_DIESEL, "Diesel")
    )
    tipo_combustible = models.IntegerField(choices=COMBUSTIBLE_CHOICES, blank=True)

    def __str__(self):
        return self.nombre + " _ " + self.placa + " _ " + str(
            self.capacidad) + " _ " + self.tipo_combustible + " _ " + str(self.saldo)