import React , {Component} from 'react'
import {StyleSheet , Text , View , Button} from 'react-native'
export default class ClassA extends Component{
    state ={
        name:"souhila"
    }

    render(){
        return(
            <View>
             <Text style={{fontSize:25}}>
                 {this.state.name}
             </Text>
             <Button title="Click me" onPress={()=> this.setState({name:"Badra"})}/>
             </View> 
       )
    }
}