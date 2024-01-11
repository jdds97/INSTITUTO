"""
Urls accesibles para la tienda virtual 
"""
from django.urls import path
from .views import (
    CrearProducto,
    ListarProductos,
    EditarProducto,
    EliminarProducto,
    DetalleProducto,
)

urlpatterns = [
    path(
        "tienda/admin/productos/nuevo/",
        CrearProducto.as_view(),
        name="crear_producto",
    ),
    path(
        "tienda/admin/productos/listado/",
        ListarProductos.as_view(),
        name="listar_productos",
    ),
    path(
        "tienda/admin/productos/edicion/<int:pk>",
        EditarProducto.as_view(),
        name="editar_producto",
    ),
    path(
        "tienda/admin/productos/eliminar/<int:pk>",
        EliminarProducto.as_view(),
        name="eliminar_producto",
    ),
    path(
        "tienda/admin/productos/editar/<int:pk>",
        DetalleProducto.as_view(),
        name="detalle_producto",
    ),
]
