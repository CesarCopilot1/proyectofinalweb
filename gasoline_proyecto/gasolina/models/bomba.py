from django.db import models
from gasolina.models import Surtidor

class Bomba(models.Model):
    id = models.AutoField(primary_key=True)
    codigo = models.CharField(max_length=100, unique=True)
    surtidor = models.ForeignKey(Surtidor, on_delete=models.CASCADE, related_name='surtidor',null = True)

    def __str__(self):
        return self.codigo
