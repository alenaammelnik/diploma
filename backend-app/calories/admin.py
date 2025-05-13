from django.contrib import admin
from .models import Entry

@admin.register(Entry)
class EntryAdmin(admin.ModelAdmin):
    list_display = ['name', 'weight', 'calories_per_100g', 'total_calories', 'date', 'created_at']
    readonly_fields = ['created_at']
