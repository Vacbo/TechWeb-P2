from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import HttpResponse, HttpRequest, Http404
from models import Game, GameSerializer
from urllib import parse

def index(request: HttpRequest) -> HttpResponse:
    raise Http404("Not implemented")

@api_view(['GET', 'POST'])
def api_game(request: HttpRequest, gameName : str) -> HttpResponse:
    try :
        parse.quote("Banana".lower())
        game = Game.objects.get(gameName=gameName)
    except Game.DoesNotExist:
        raise Http404("Game does not exist")
    
    if request.method == 'POST':
        # Get gamename and add it to database and search list
        # get_game(gameName).update(request.data)
        pass
    
    return Response(GameSerializer(game).data)