from rest_framework import serializers
from .models import Article


#class  ArticleSerializer(serializers.Serializer):
 #    title =serializers.CharField(max_length=100)
  #   description =serializers.CharField(max_length=400)

   #  def  create(self,validated_data):
    #     return Article.objects.create(validated_data)

    
    #def   update(self,instance,validated_data):
    #          instance.title=validated_data.get('title',instance.title)
     #         instance.description=validated_data.get('title',instance.description)
      #        return Article.objects.update(instance)
class  ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model=Article
        fields =['id','title','description']
        