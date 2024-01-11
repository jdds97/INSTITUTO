"""
Modelo de elementos de una tienda virtual
"""
from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator

# importa el tiempo timezone
from django.utils import timezone


# pylint: disable=no-member
class User(AbstractUser):
    """
    User model represents a user in the system.
    """

    vip = models.BooleanField(default=False)
    saldo = models.FloatField(default=0)

    def __str__(self):
        return str(self.username)


class Producto(models.Model):
    """
    Producto model represents a product in the store.
    """

    nombre = models.CharField(max_length=100)
    marca = models.ForeignKey("Marca", on_delete=models.PROTECT)
    modelo = models.CharField(max_length=500)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    precio = models.DecimalField(
        max_digits=12, decimal_places=2, validators=[MinValueValidator(0.0)]
    )
    imagen = models.ImageField(upload_to="productos/", null=True, blank=True)
    vip = models.BooleanField(default=False)
    created_at = models.DateField(auto_now_add=True)
    updated_at = models.DateField(auto_now=True)

    class Meta:
        """
        Clase que define los metadatos del modelo Producto.
        """

        unique_together = ["marca", "modelo"]
        verbose_name_plural = "Productos"

    def __str__(self):
        return str(self.nombre)


class Compra(models.Model):
    """
    Compra model representa una compra realizada por un usuario.
    """

    producto = models.OneToOneField(Producto, on_delete=models.CASCADE)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    iva = models.DecimalField(max_digits=12, decimal_places=2, default=1.21)
    importe = models.FloatField(validators=[MinValueValidator(0.0)])

    def calcular_importe(self):
        """
        Calcula el importe total de la compra.
        """
        self.importe = self.unidades * self.producto.precio * self.iva

    def __str__(self):
        return str(self.usuario) + " - " + str(self.producto) + " - " + str(self.fecha)

    class Meta:
        """
        Meta clase para el modelo Compra.
        """

        unique_together = ["producto", "usuario", "fecha"]
        verbose_name_plural = "Compras"


class Marca(models.Model):
    """
    Marca model representa la marca de un producto
    """

    nombre = models.CharField(max_length=100)

    def __str__(self):
        return str(self.nombre)
