from django.urls import path

from .views import *

urlpatterns = [
    path('', index, name='index'),
    path('games/update', update, name='games/update'),
]