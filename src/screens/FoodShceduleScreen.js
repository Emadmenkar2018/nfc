import React, { Component } from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native'; 
import Calender from '../../components/foodSchedule/Calender'
import { Button ,Icon } from 'react-native-elements'; 
import MealsScroller from '../../components/foodSchedule/MealsScroller'
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 
 
import {addingUserMeal ,addingextraMeal} from '../../helpers/firebase/FoodHelpers'
import AddMealModal from '../../components/foodSchedule/AddMealModal';
// import Fire from '../../Fire' 
export default class FoodShceduleScreen extends Component {
    constructor(props) {
        super(props);
    }
    
    state = {
        mealVisibility : false
    }


    closeMealModal = () => {
        this.setState({mealVisibility : false})
    }

    render() { 
  
        return (
        <View style={styles.container}>
 

            <Text style={{fontFamily:'BarlowCondensed-Bold',fontSize:responsiveScreenFontSize(2.2),margin:6}}>Gün Seç</Text>  

            <View style={{backgroundColor:'#E9ECF1',paddingHorizontal:10,borderRadius:10,marginHorizontal:5}}>

                <Calender/>

            </View>

 
            <MealsScroller
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
                    onPress={()=>this.setState({mealVisibility:true
                    
                    
                    
                    })}
                    title="Yemek Ekle" 
                    containerStyle={{borderRadius:10 , width:'90%',alignSelf:'center', backgroundColor:'#FF6F00' }}
                    buttonStyle={{ backgroundColor:'#FF6F00'}}
                    />
            
            </View>

            <AddMealModal 
                mealVisibility={this.state.mealVisibility}
                closeMealModal = {this.closeMealModal}
            />

        </View>
        )
    }
}
 
const styles = StyleSheet.create({
    container : {
        width:'100%',
        backgroundColor:'#F4F4F4',
        height : '100%', 
    }
});