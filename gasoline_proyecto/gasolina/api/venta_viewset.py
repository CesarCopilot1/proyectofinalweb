from django.http import request
from rest_framework import serializers, viewsets
from rest_framework.exceptions import ValidationError
from gasolina.api import  BombaSerializer
from gasolina.models import Bomba, Venta


class VentaSerializer(serializers.ModelSerializer):
    bomba = BombaSerializer(read_only=True)
    bomba_id = serializers.PrimaryKeyRelatedField(
        queryset=Bomba.objects.all(), source='bomba', write_only=True
    )

    class Meta:
        model = Venta
        fields = '__all__'


class VentaViewSet(viewsets.ModelViewSet):
    queryset = Venta.objects.all()
    serializer_class = VentaSerializer

    def create(self, request, *args, **kwargs):
        # Get the product and quantity from the request data
        bomba_id = request.data.get('bomba_id')
        cantidad = request.data.get('cantidad')

        # Get the product instance
        bomba = Bomba.objects.get(id=bomba_id)

        # Check if there is enough stock
        if bomba.stock < cantidad:
            raise ValidationError('No hay suficiente stock para realizar la venta.')

        # If there is enough stock, proceed with creating the sale
        return super().create(request, *args, **kwargs)
