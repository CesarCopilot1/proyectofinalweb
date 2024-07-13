from django.urls import path, include
from rest_framework import routers
from gasolina.api import SurtidorViewSet

router = routers.DefaultRouter()

router.register(r'surtidor', SurtidorViewSet)

urlpatterns = [
    path('', include(router.urls)),

]
