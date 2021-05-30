import React , {useState , useEffect}from 'react'
import {Card ,FAB} from 'react-native-paper'
import {StyleSheet , Text , View , Button, FlatList ,Alert } from 'react-native'



function Home(props){
     const [data,setData]=useState([])
     const[loading,setLoading]=useState(true)
     const clickedItem=(data)=>{
        props.navigation.navigate("Details",{data:data});
      
        }
     const loadData=()=>{

        fetch('http://192.168.8.101:80/api/articles/',
        {
            method:"GET"
        })
        .then(resp=>resp.json())
        .then(data=>{
            setData(data)
            setLoading(false)
        
        })
        .catch(error=>  Alert.alert(error))
    
     }

    useEffect(()=>{
    loadData()   
    },[])
    const renderData= (item) =>{
        return (
        <Card style={styles.cardStyle} onPress={()=>
        {
            clickedItem(item)
            console.log(item)
        }}> 
        <Text style={{fontSize:20}}>   {item.title}</Text>
        <Text style={{fontSize:20}}>   {item.description}</Text>
        </Card>)
    }





    return(
     <View  style={{marginTop:50}}>
       <FlatList 
       data={data}
       renderItem={({item})=>{
           return renderData(item)
       }
    }
        onRefresh={()=>loadData()}
        refreshing={loading}
        keyExtractor={item=>item.id}
       />
       <FAB 
       style={styles.fab}
       small={false}
       icon="plus"
       theme={{colors:{accent:"blue"}}}
       onPress={()=>props.navigation.navigate("Create")}
       />
      </View>
    )
}
const styles=StyleSheet.create({
   cardStyle:{
       padding:10,
       margin:10
   } ,
   fab :{
       position:"absolute",
       margin:16,
       right:0,
       bottom:0,
       backgroundColor:"blue"
   },
})
export default Home