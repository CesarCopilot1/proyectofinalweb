from django.db import models


class Surtidor(models.Model):
    nombre = models.CharField(max_length=100)
    latitud = models.FloatField()
    longitud = models.FloatField()
    saldo_gasolina = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    saldo_gasolinapremium = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    saldo_diesel = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)

    def __str__(self):
        return self.nombre + " _ " + str(self.latitud) + " _ " + str(self.longitud) + " _ " + str(
            self.saldo_gasolina) + " _ " + str(self.saldo_gasolinapremium) + " _ " + str(self.saldo_diesel + " _ ")
