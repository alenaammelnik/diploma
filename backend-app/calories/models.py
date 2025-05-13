from django.db import models
from datetime import date

class Entry(models.Model):
    name = models.CharField(max_length=100)  # Название продукта
    weight = models.FloatField()             # Вес (в граммах)
    calories_per_100g = models.FloatField()  # Калорийность на 100 г
    date = models.DateField(default=date.today) 
    created_at = models.DateTimeField(auto_now_add=True)

    @property
    def total_calories(self):
        return (self.weight * self.calories_per_100g) / 100

    def __str__(self):
        return f"{self.name} ({self.weight} г)"
