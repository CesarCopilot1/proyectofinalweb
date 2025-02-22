from rest_framework import serializers, viewsets, status
from rest_framework.response import Response

from django.contrib.auth.models import User
from gasolina.models import Cliente


class ClienteSerializer(serializers.ModelSerializer):
    username = serializers.CharField(source='user.username')
    password = serializers.CharField(source='user.password')
    first_name = serializers.CharField(source='user.first_name')
    last_name = serializers.CharField(source='user.last_name')

    class Meta:
        model = Cliente
        fields = 'username', 'password', 'first_name', 'last_name', 'tipo_usuario'


class ClienteViewSet(viewsets.ModelViewSet):
    queryset = Cliente.objects.all()
    serializer_class = ClienteSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        username = request.data.get('username')
        password = request.data.get('password')
        first_name = request.data.get('first_name')
        last_name = request.data.get('last_name')
        tipo_usuario = request.data.get('tipo_usuario')

        is_superuser = tipo_usuario == Cliente.TIPO_ADMINISTRADOR

        user = User.objects.create_user(
            username=username,
            password=password,
            first_name=first_name,
            last_name=last_name,
            is_superuser=is_superuser
        )
        cliente = Cliente.objects.create(
            user=user,
            tipo_usuario=tipo_usuario,
        )

        serializer = self.get_serializer(cliente)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)
