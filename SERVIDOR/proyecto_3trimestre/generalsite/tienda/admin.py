from django.contrib import admin
from django.contrib.auth.admin import UserAdmin
from .models import User, Producto, Compra, Marca

admin.site.register(User, UserAdmin)
admin.site.register(Producto)
admin.site.register(Compra)
admin.site.register(Marca)
# Register your models here.
