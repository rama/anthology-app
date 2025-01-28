from django.core.serializers import serialize
from django.http import JsonResponse

from .models import Story
# Create your views here.

def detail(request, id):
  story = Story.objects.get(id=id)
  # data = {
  #   'id': story.id,
  #   'title': story.title,
  #   'author': story.author
  # }
  story_json = serialize('json', [story])
  return JsonResponse(story_json, safe=False)

def all_stories(request):
  stories = Story.objects.all()
  # data = {
  #   'id': story.id,
  #   'title': story.title,
  #   'author': story.author
  # }
  stories_json = serialize('json', stories[:5])
  return JsonResponse(stories_json, safe=False)
