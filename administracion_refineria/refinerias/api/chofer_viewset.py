from rest_framework import serializers, viewsets

from proyecto_refineria.models import Chofer, Camion, Ruta
from refinerias.api import CamionSerializer
from refinerias.api import RutaSerializer
class ChoferSerializer(serializers.ModelSerializer):
    camion = CamionSerializer(read_only=True)
    camion_id = serializers.PrimaryKeyRelatedField(queryset=Camion.objects.all(), source='camion', write_only=True)
    ruta = RutaSerializer(read_only=True)
    ruta_id =  serializers.PrimaryKeyRelatedField(queryset=Ruta.objects.all(), source='ruta', write_only=True)
    class Meta:
        model = Chofer
        fields = '__all__'


class ChoferViewSet(viewsets.ModelViewSet):
    queryset = Chofer.objects.all()
    serializer_class = ChoferSerializer
