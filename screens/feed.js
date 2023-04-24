import *as React from 'react'
import {View, Text, StyleSheet} from 'react-native';

export default class Feed extends React.Component{
 render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Feed Screen</Text>
        </View>
    )
 }
}

const styles = StyleSheet.create({
 container:{flex:1, backgroundColor:"black"},
 text:{marginTop:100, alignSelf:"center", fontSize:40}
})