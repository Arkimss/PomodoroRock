from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):
    return render(request, "home.html")


def menu(request):
    return render(request, "menu.html")


def cerveza(request):
    return render(request, "cerveza.html")


def sobrenosotros(request):
    return render(request, "sobrenosotros.html")


def promosdehoy(request):
    return render(request, "promosdehoy.html")
