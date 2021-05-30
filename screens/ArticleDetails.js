

import React from 'react'
import {Button} from 'react-native-paper'
import {StyleSheet , Text , View , FlatList ,Alert } from 'react-native'
function ArticleDetails(props) {
    const data=props.route.params.data;
    const DeleteData=()=>
    {
        const a ='http://192.168.8.101:80/api/articles/'+data.id+'/'
     fetch(a,
     {
         method:"DELETE",
         headers:{
            'Content-Type':'application/json'
        
        },
     })
     .then(resp=>resp.json())
     .then(data=>{
     console.log(data)
        props.navigation.navigate("Home",{data:data})
        
     
     })
     .catch(error=>  Alert.alert(error))
    }
    return (
   <View style={styles.ViewStyle}>
       <Text style={{fontSize:25}}>
           {data.title}
       </Text>
       <Text style={{fontSize:20}}>
           {data.description}
       </Text>
       <View style={styles.btnStyle}>
          <Button 
          icon="update"
          mode="contained"
          onPress={()=>props.navigation.navigate("Edit",{data:data})}
          >
              Edit
          </Button>
          <Button 
          icon="update"
          mode="contained"
          onPress={()=>DeleteData()}
          >
             Delete
          </Button>
       </View>
   </View>
    )
}
const styles= StyleSheet.create({
    ViewStyle:{
     margin:10,
      padding:10   
    },
    btnStyle:{
        flexDirection:"row",
        justifyContent:"space-around",
        margin:15,
        padding:10

    }
    
})
export default ArticleDetails
