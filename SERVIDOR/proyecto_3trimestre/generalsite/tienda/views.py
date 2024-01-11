"""
Módulo que contiene las vistas de la tienda.
"""

from django.views.generic import (
    CreateView,
    ListView,
    UpdateView,
    DeleteView,
    DetailView,
)
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Producto  # , Marca, Compra, User


class CrearProducto(LoginRequiredMixin, CreateView):
    """
    Vista para crear un producto.
    """

    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")


class ListarProductos(LoginRequiredMixin, ListView):
    """
    Vista para listar los productos.
    """

    model = Producto


class EditarProducto(LoginRequiredMixin, UpdateView):
    """
    Vista para editar un producto.
    """

    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")


class EliminarProducto(LoginRequiredMixin, DeleteView):
    """
    Vista para eliminar un producto.
    """

    model = Producto
    success_url = reverse_lazy("listar_productos")


class DetalleProducto(LoginRequiredMixin, DetailView):
    """
    Vista para ver los detalles de un producto.
    """

    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")
