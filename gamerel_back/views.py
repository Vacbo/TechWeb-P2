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

    slug = data['slug']
    real_name = data['name_original']
    update_time = datetime.strptime(data['updated'], "%Y-%m-%dT%H:%M:%S")
    twitch_count = data['twitch_count']
    playtime = data['playtime']

    game = Game.objects.create(slug=slug, real_name=real_name,
                               update_time=update_time, twitch_count=twitch_count, playtime=playtime)

    game.save()

    return Response(GameSerializer(game).data)

@api_view(['POST'])
def data(request: HttpRequest) -> HttpResponse:
    data = loads(request.body.decode('utf-8'))

    games = Game.objects.all().filter(slug__contains=data['slug']).order_by('-update_time')
    
    if games[0].twitch_count > games[1].twitch_count:
        streamsCount = "Há mais streams que a última vez que verificamos"
    elif games[0].twitch_count < games[1].twitch_count:
        streamsCount = "Há menos streams que a última vez que verificamos"
    else:
        streamsCount = "Há o mesmo número de streams que a última vez que verificamos"
    
    return Response(streamsCount)