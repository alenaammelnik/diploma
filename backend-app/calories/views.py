from django.shortcuts import render
from rest_framework import viewsets
from .models import Entry
from .serializers import EntrySerializer
from datetime import date

class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all() 
    serializer_class = EntrySerializer

    def get_queryset(self):
        # Только записи за сегодня (можно потом сделать динамически)
        return Entry.objects.filter(date=date.today()).order_by('-created_at')

    def get_allowed_methods(self):
        return ['GET', 'POST', 'HEAD', 'OPTIONS']

