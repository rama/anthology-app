# Generated by Django 5.1.5 on 2025-01-17 19:47

import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Story',
            fields=[
                ('title', models.CharField(max_length=255)),
                ('author', models.CharField(max_length=255)),
                ('link', models.TextField(blank=True)),
                ('published_in', models.CharField(max_length=255)),
                ('id', models.UUIDField(default=uuid.uuid4, editable=False, primary_key=True, serialize=False)),
            ],
        ),
    ]