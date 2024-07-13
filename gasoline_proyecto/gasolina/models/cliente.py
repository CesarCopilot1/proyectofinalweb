from django.contrib.auth.models import User
from django.db import models


class Cliente(models.Model):
    TIPO_VENDEDOR = 1
    TIPO_ADMINISTRADOR = 2
    TIPO_USUARIO_CHOICES = (
        (TIPO_VENDEDOR, 'Vendedor'),
        (TIPO_ADMINISTRADOR, 'Administrador'),
    )

    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
    )
    tipo_usuario = models.IntegerField(choices=TIPO_USUARIO_CHOICES, null=True, blank=True)

    def __str__(self):
        return self.user.username + " _ " + " _ " + self.user.first_name + " _ " + self.user.last_name + " _ " + self.telefono