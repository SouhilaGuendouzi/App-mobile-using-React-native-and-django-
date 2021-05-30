import React , {useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
  } from 'react-native';
 
  import {TextInput , Button } from 'react-native-paper'
export default function Create() {
    const [title,setTitle]=useState("")
    const [description,setDescription]=useState("")
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
        onPress={()=>console.log("ss")}
        >
       Insert Article
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
