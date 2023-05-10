from django.urls import path

from views import *

urlpatterns = [
    path('', index, name='index'),
    path('games', api_game, name='games'),
]