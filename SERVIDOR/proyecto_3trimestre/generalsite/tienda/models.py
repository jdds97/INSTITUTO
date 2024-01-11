from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.validators import MinValueValidator


# pylint:disable member
class User(AbstractUser):
    vip = models.BooleanField(default=False)
    saldo = models.FloatField(default=0)

    def __str__(self):
        return str(self.username)


class Producto(models.Model):
    nombre = models.CharField(max_length=100)
    marca = models.ForeignKey("Marca", on_delete=models.PROTECT)
    modelo = models.CharField(max_length=500)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    precio = models.DecimalField(
        max_digits=12, decimal_places=2, validators=[MinValueValidator(0.0)]
    )
    # imagen = models.ImageField(upload_to="productos")
    vip = models.BooleanField(default=False)

    def __str__(self):
        return str(self.nombre)

    class Meta:
        unique_together = ["marca", "modelo"]
        verbose_name_plural = "Productos"


class Compra(models.Model):
    producto = models.OneToOneField(Producto, on_delete=models.CASCADE)
    usuario = models.OneToOneField(User, on_delete=models.CASCADE)
    fecha = models.DateTimeField(auto_now_add=True)
    unidades = models.IntegerField(validators=[MinValueValidator(0)])
    iva = models.DecimalField(max_digits=12, decimal_places=2, default=1.21)
    importe = models.FloatField(validators=[MinValueValidator(0.0)])

    def calcular_importe(self):
        self.importe = self.unidades * self.producto.precio * self.iva

    def __str__(self):
        return str(self.usuario) + " - " + str(self.producto) + " - " + str(self.fecha)

    class Meta:
        unique_together = ["producto", "usuario", "fecha"]
        verbose_name_plural = "Compras"


class Marca(models.Model):
    nombre = models.CharField(max_length=100)

    def __str__(self):
        return str(self.nombre)
