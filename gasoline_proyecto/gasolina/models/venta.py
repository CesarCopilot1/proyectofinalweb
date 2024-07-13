from django.db import models
from gasolina.models import Bomba, Cliente

class Venta(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_factura = models.CharField(max_length=255)
    nit_factura = models.CharField(max_length=50)
    cliente = models.ForeignKey(Cliente, on_delete=models.CASCADE, related_name='cliente')
    correo = models.EmailField()
    monto = models.DecimalField(max_digits=10, decimal_places=2)
    precio_actual_producto = models.DecimalField(max_digits=10, decimal_places=2)
    cantidad_producto_litros = models.DecimalField(max_digits=10, decimal_places=2)
    tipo_producto = models.CharField(max_length=255)
    bomba = models.ForeignKey(Bomba, on_delete=models.CASCADE, related_name='bomba')
    fecha_hora = models.DateTimeField(auto_now_add=True)

 
