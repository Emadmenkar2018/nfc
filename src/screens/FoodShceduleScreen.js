import React, { Component } from 'react';
import { StyleSheet, View, Text} from 'react-native'; 
import Calender from '../../components/foodSchedule/Calender'
import FoodContainer from '../../components/foodSchedule/FoodContainer' 
import { Button ,Icon } from 'react-native-elements'; 
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 
export default class FoodShceduleScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    render() { 
        return (
        <View style={styles.container}>
 

            <Text style={{fontFamily:'BarlowCondensed-Bold',fontSize:responsiveScreenFontSize(2.2),margin:6}}>Gün Seç</Text>  

            <View style={{backgroundColor:'#E9ECF1',paddingHorizontal:10,borderRadius:10}}>

                <Calender/>

            </View>


            <FoodContainer
                title='Kahvaltı'
            />

            <FoodContainer
                title='Ana Yemeği'
            /> 

            <FoodContainer
                title='Akşam Yemeği'
            />

            <FoodContainer  
                title='Ek Yemeği'
            />


            <View style={{marginTop:'auto',marginBottom:15}}>

                <Button
                    icon={
                        <Icon
                            type={'material'}
                            name="add"
                            size={15}
                            color="#fff"
                        />
                    }
                    title="Yemek Ekle" 
                    containerStyle={{borderRadius:5 , width:'90%',alignSelf:'center', backgroundColor:'#FF6F00' }}
                    buttonStyle={{ backgroundColor:'#FF6F00'}}
                    />
            
            </View>


        </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container : {
        width:'100%',
        backgroundColor:'#fff',
        height : '100%', 
    }
});