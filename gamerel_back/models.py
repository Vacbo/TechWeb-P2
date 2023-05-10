from django.db import models
from rest_framework import serializers

class Game(models.Model):

    gameName = models.TextField()
    twich_views = models.IntegerField()
    playtime = models.IntegerField()


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['gameName', 'twitch_views', 'playtime']