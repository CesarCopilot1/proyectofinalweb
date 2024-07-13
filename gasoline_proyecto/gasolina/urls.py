from django.urls import path, include
from rest_framework import routers
from gasolina.api import ClienteViewSet, BombaViewSet, UserViewSet, SurtidorViewSet, VentaViewSet

router = routers.DefaultRouter()
router.register(r'cliente', ClienteViewSet)
router.register(r'bomba', BombaViewSet)
router.register(r'user', UserViewSet)
router.register(r'surtidor', SurtidorViewSet)
router.register(r'venta', VentaViewSet)

urlpatterns = [
    path('', include(router.urls)),

]