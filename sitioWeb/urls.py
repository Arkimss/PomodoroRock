from django.urls import path
from . import views


urlpatterns = [
    path("", views.home, name="home"),
    path("menu", views.menu, name="menu"),
    path("cervezaartesanal", views.cerveza, name="cerveza"),
    path("sobrenosotros", views.sobrenosotros, name="sobrenosotros"),
]
