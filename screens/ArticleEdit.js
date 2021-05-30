import React , {useState} from 'react'
import {Button , TextInput} from 'react-native-paper'
import {StyleSheet , Text , View , FlatList ,Alert } from 'react-native'
export default function ArticleEdit(props) {
    const data=props.route.params.data;
    const [title,setTitle]=useState(data.title)
    const [description,setDescription]=useState(data.description)
   const UpdateData=()=>
   {
       const a ='http://192.168.8.101:80/api/articles/'+data.id+'/'
    fetch(a,
    {
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        
        },
        body:JSON.stringify({title:title,description:description})
    })
    .then(resp=>resp.json())
    .then(data=>{
    console.log(data)
       props.navigation.navigate("Home",{data:data})
       
    
    })
    .catch(error=>  Alert.alert(error))
   }

  
    return (
        <View>
        <TextInput
        style={styles.TextInput}
        label="Title"
        value={title}
        mode="outlined"
        onChangeText={text=>setTitle(text)}
        />
         <TextInput
        style={styles.TextInput1}
        label="Description"
        value={description}
        mode="outlined"
        multiline
        numberOfLines={10}
        onChangeText={text=>setDescription(text)}
        />
        <Button
        style={{margin:10}}
        icon="pencil"
        mode="contained"
        onPress={()=>UpdateData()}
        >
      Update article
        </Button>
    </View>
    )
    
}
const styles=StyleSheet.create(
    {
        TextInput:{
            padding:15,
            marginTop:30
        
        },
        TextInput1:{
            padding:15,
            marginTop:10
        
        }
    }
)


