import React, { Component } from 'react';
import { StyleSheet, View,Text } from 'react-native'; 
 
export default class LogScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
        <View style={styles.container}>
            <Text>Log</Text>
        </View>
        )
    }
}
 
const styles = StyleSheet.create({
  container :
  { width:'100%',
   height : '100%'}
});