
from .models import Article

from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import render, HttpResponse
from .serializer import ArticleSerializer
from django.http import JsonResponse
from rest_framework.parsers import JSONParser


from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from rest_framework.decorators import APIView
from rest_framework import mixins

from rest_framework import viewsets
from django.shortcuts import get_object_or_404

class ArticleViewSet(viewsets.ModelViewSet):
      queryset= Article.objects.all()
      serializer_class=ArticleSerializer
'''
class ArticleViewSet(viewsets.GenericViewSet, mixins.ListModelMixin,mixins.CreateModelMixin,mixins.RetrieveModelMixin,mixins.DestroyModelMixin): #Genereic to specify mixins
        queryset= Article.objects.all()
        serializer_class=ArticleSerializer

'''

'''
class ArticleViewSet(viewsets.ViewSet): #Genereic to specify mixins

    def list(self,request):
        articles= Article.objects.all()
        serializer=ArticleSerializer(articles,many=True)
        return Response(serializer.data)
    
    def create(self,request):
        serializer=ArticleSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status_400_BAD_REQUEST)

    def retrieve(self,request,pk=None):
        queryset=Article.objects.all()
        article=get_object_or_404(queryset,pk=pk)
        serializer=ArticleSerializer(article)
        return Response(serializer.data)
    
    def update(self,request,pk=None):
        article=Article.objects.get(pk=pk)
        serializer=ArticleSerializer(article,data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status_400_BAD_REQUEST)

    def destroy(self,request,pk=None):
        article=Article.objects.get(pk=pk)
        article.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

'''
'''
#using mixins
from rest_framework import mixins
from rest_framework import generics

class ArticleList(mixins.ListModelMixin,
                  generics.GenericAPIView,
                   mixins.CreateModelMixin,
                  ):
                  queryset=Article.objects.all()
                  serializer_class=ArticleSerializer
                  
                  def get(self, request):
                       return self.list(request)
                  def post(self,request):
                      return self.create(request)

class ArticleDetails( mixins.ListModelMixin,
                      generics.GenericAPIView,
                      mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.RetrieveModelMixin,
                      mixins.DestroyModelMixin
                       ):
                queryset=Article.objects.all()
                serializer_class=ArticleSerializer
                lookup_field='id'
                def get(self, request,id):
                       return self.retrieve(request,id=id)
                
                def put (self,request,id):
                     return self.update(request,id=id)
                
                def delete(self,request,id):
                     return self.destrOy(request,id=id)




'''



'''
class ArticleList(APIView):

    def get(self,request):
        articles =Article.objects.all()
        serializer =ArticleSerializer( articles,many=True)
        return Response(serializer.data)
    
    def post(self,request):
        serializer=ArticleSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status_400_BAD_REQUEST)


class ArticleDetails(APIView):
    def get_object(self,id):
       try :
        return Article.objects.get(id=id)
    
       except Article.DoesNotExist:
             return Response(status=status.HTTP_404_NOT_FOUND)
    
    def get(self,request,id):
        article=self.get_object(id)
        serializer =ArticleSerializer(article)
        return Response(serializer.data)
   
    def put(self,request,id):
        article=self.get_object(id)
        serializer=ArticleSerializer(article,data=request.data)
        if (serializer.is_valid()):
            serializer.save()    
            return Response(serializer.data)

        return Response(serializer.errors,status=status_400_BAD_REQUEST)
    
    def delete (self,request,id):
          article=self.get_object(id)
          article.delete()
          return Response(status=status.HTTP_204_NO_CONTENT)


'''
#@csrf_exempt # elle est obligé pour fair POST
# Create your views here.
#def Index(request):
#    return HttpResponse("It is Working")
'''
@api_view(['GET','POST']) # django rest framework interface

def article_list(request):
    if (request.method=='GET'):
        articles =Article.objects.all()
        serializer =ArticleSerializer( articles,many=True)
        #return JsonResponse(serializer.data,safe=False)
        return Response(serializer.data)
    
    elif (request.method=='POST'):
        serializer=ArticleSerializer(data=request.data)
        if (serializer.is_valid()):
            serializer.save()
            return Response(serializer.data,status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status_400_BAD_REQUEST)




#@csrf_exempt 
@api_view(['GET','PUT','DELETE'])
def article_details(request,pk):
   try:
       article=Article.objects.get(pk=pk)
   except Article.DoesNotExist:
      # return HttpResponse(status=404)
        return Response(status=status.HTTP_404_NOT_FOUND)
   if (request.method=='GET'):
        serializer =ArticleSerializer( article)
        #return JsonResponse(serializer.data)
        return Response(serializer.data)


   elif (request.method=='PUT'):
          serializer=ArticleSerializer(article,data=data)
        if (serializer.is_valid()):
            serializer.save()
            #return JsonResponse(serializer.data,status=status.HTTP_201_CREATED)
            return Response(serializer.data)
        #return JsonResponse(serializer.errors,status=status_400_BAD_REQUEST)
        return Response(serializer.data,status=status_400_BAD_REQUEST)    #data = JSONParser().parse(request)
  
     
     
   elif (request.method=='DELETE'):
       article.delete()
       #return HttpResponse(status=204)
       return HttpResponse(status=status.HTTP_204_NO_CONTENT)
'''
