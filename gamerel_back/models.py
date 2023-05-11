from typing import ItemsView
from django.db import models
from rest_framework import serializers


class Game(models.Model):

    name = models.TextField(null=True)
    real_name = models.TextField(null=True)
    update_time = models.DateTimeField(null=True)
    twitch_count = models.IntegerField(null=True)
    playtime = models.IntegerField(null=True)


class GameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Game
        fields = ['name', 'real_name', 'update_time',
                  'twitch_count', 'playtime']
