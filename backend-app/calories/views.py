from django.shortcuts import render
from rest_framework import viewsets
from .models import Entry
from .serializers import EntrySerializer
from datetime import datetime

class EntryViewSet(viewsets.ModelViewSet):
    queryset = Entry.objects.all() 
    serializer_class = EntrySerializer

    def get_queryset(self):
        queryset = Entry.objects.all().order_by('-created_at')
        date_str = self.request.query_params.get('date')

        if date_str:
            try:
                date_obj = datetime.strptime(date_str, '%Y-%m-%d').date()
                queryset = queryset.filter(date=date_obj)
            except ValueError:
                pass  # Некорректная дата — фильтр не применяется

        return queryset

    def get_allowed_methods(self):
        return ['GET', 'POST', 'HEAD', 'OPTIONS']

