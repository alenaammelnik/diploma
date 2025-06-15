from rest_framework import serializers
from .models import Entry

class EntrySerializer(serializers.ModelSerializer):
    total_calories = serializers.ReadOnlyField()

    class Meta:
        model = Entry
        fields = '__all__'
    def validate_weight(self, value):
        if value < 0:
            raise serializers.ValidationError("Убедитесь, что это значение больше либо равно 0.")
        return value

    def validate_calories_per_100g(self, value):
        if value < 0:
            raise serializers.ValidationError("Убедитесь, что это значение больше либо равно 0.")
        return value

    def validate_name(self, value):
        if not value.strip():
            raise serializers.ValidationError("Обязательное поле.")
        return value