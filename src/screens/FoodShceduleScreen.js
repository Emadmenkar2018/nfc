import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native'; 
 
export default class FoodShceduleScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
        <View style={styles.container}>
            <Text>Food</Text>
        </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container : {
        width:'100%',
        height : '100%'
    }
});