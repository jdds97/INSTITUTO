from django.views.generic import (
    CreateView,
    ListView,
    UpdateView,
    DeleteView,
    DetailView,
)
from django.urls import reverse_lazy
from django.contrib.auth.mixins import LoginRequiredMixin
from .models import Producto, Marca, Compra, User


class CrearProducto(LoginRequiredMixin, CreateView):
    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")


class ListarProductos(ListView):
    model = Producto


class EditarProducto(LoginRequiredMixin, UpdateView):
    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")


class EliminarProducto(LoginRequiredMixin, DeleteView):
    model = Producto
    success_url = reverse_lazy("listar_productos")


class DetalleProducto(LoginRequiredMixin, DetailView):
    model = Producto
    fields = "__all__"
    success_url = reverse_lazy("listar_productos")
