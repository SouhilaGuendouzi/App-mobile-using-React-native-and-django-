/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home  from './screens/Home';
import Create from './screens/Create';
import ArticleEdit from './screens/ArticleEdit';
import {
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import ArticleDetails from './screens/ArticleDetails';

var firebase = require("firebase");

  var config = {
    apiKey: "AIzaSyDJs_aopi3T84rqvXOydP8FrhySdZ_u5g0",
    authDomain: "test-c2e01.firebaseapp.com",
    projectId: "test-c2e01",
    storageBucket: "test-c2e01.appspot.com",
    messagingSenderId: "34041498725",
    appId: "1:34041498725:web:48681649d3553649de8a8c",
    measurementId: "G-XWMFXWVK1Z"
  };
 const Stack=createStackNavigator()

const MyStyles ={
  title:"Article List",
  headerTintColor:"white",
  headerStyle:{
    backgroundColor:"blue"
  }
}
const App= () => {
  const isDarkMode = useColorScheme() === 'dark';
  
  // Initialize Firebase
  if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
var write=(a)=>{
  firebase.database().ref('test/').push({
   a
  }).then((data)=>{
      //success callback
      console.log('data ' , data)
  }).catch((error)=>{
      //error callback
      console.log('error ' , error)
  })
}

  

  return (
    <View style={styles.sectionContainer}>
    <Stack.Navigator>
      <Stack.Screen name="Home" component= {Home}
      options={MyStyles}
      />
      
      <Stack.Screen name="Create" component= {Create}
      options={{...MyStyles,title:"Create"}}
      />
      <Stack.Screen name="Details" component= {ArticleDetails}
      options={{...MyStyles,title:"Details"}}
      />
    <Stack.Screen name="Edit" component= {ArticleEdit}
      options={{...MyStyles,title:"Edit"}}
      />
    
    </Stack.Navigator>
    
    </View>
  );
};

export default ()=>{
 return (
   <NavigationContainer>
     <App/>
   </NavigationContainer>
 )
}
const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor:'#eddfdf',
    flex:1
    

   
  },
  
  
});

