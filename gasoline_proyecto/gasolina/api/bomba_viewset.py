from rest_framework import serializers, viewsets

from gasolina.api import SurtidorSerializer
from gasolina.models import Bomba, Surtidor


class BombaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Bomba
        fields = '__all__'


class BombaViewSet(viewsets.ModelViewSet):
    queryset = Bomba.objects.all()
    serializer_class = BombaSerializer
