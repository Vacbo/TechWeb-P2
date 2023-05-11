from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, HttpRequest, Http404
from urllib import parse
from .models import Game, GameSerializer
from json import loads
from datetime import datetime


def index(request: HttpRequest) -> HttpResponse:
    raise Http404("Not implemented")


@api_view(['POST'])
def update(request: HttpRequest) -> HttpResponse:
    data = loads(request.body.decode('utf-8'))

    name = data['name']
    real_name = data['name_original']
    update_time = datetime.strptime(data['updated'], "%Y-%m-%dT%H:%M:%S")
    twitch_count = data['twitch_count']
    playtime = data['playtime']

    game = Game.objects.create(name=name, real_name=real_name,
                               update_time=update_time, twitch_count=twitch_count, playtime=playtime)

    game.save()

    return Response(GameSerializer(game).data)

@api_view(['POST'])
def data(request: HttpRequest) -> HttpResponse:
    data = loads(request.body.decode('utf-8'))

    games = Game.objects.get(name=data['name'])

    return Response(GameSerializer(games, many=True).data)