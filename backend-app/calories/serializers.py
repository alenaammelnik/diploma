from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    total_calories = serializers.ReadOnlyField()

    class Meta:
        model = Entry
        fields = '__all__'