import React from 'react'
import {ScrollView , Text ,View ,Image} from 'react-native'
import FoodContainer from './FoodContainer' 
import { responsiveWidth } from 'react-native-responsive-dimensions'

const MealsScroller = (props) =>{


    let userMeals = props.userMeals
    let selectedMonth = props.selectedIndex.split("-")[1].length > 1  ?  props.selectedIndex.split("-")[1] : "0" + props.selectedIndex.split("-")[1] 
    let selectedFirst = props.selectedIndex.split("-")[0].length > 1  ?  props.selectedIndex.split("-")[0]: "0" + props.selectedIndex.split("-")[0] 

    //here change the year 
    let selectedDay ="2020" + "-" + selectedMonth + "-" + selectedFirst
 

    var finalUserMeals =  userMeals.filter(function(meal) {
        return meal.date ===  selectedDay;
    });


    let mealsList = finalUserMeals.map((day)  => (
        <FoodContainer
            title={day.type}
            date = {day.date}
            content = {day.content}
            doc_id = {day.doc_id}
            key={day.type}
        />
    )); 

    if (mealsList.length > 0){

        return (
            <ScrollView style={{backgroundColor:'#fff'}}>
    
                {mealsList}
     
    
            </ScrollView>
        )
    }
    else {
        return (
            <View style={{width:'100%',height:'50%' ,justifyContent : 'center', alignItems: 'center'}}>
                <Image style={{width:responsiveWidth(30),height:responsiveWidth(30),marginBottom:8}} tintColor="#e8957e" source={require('../../assets/noRecord.png')} resizeMode="contain"/>
                <Text style={{color:'#263645'}}>Besin Girilmemiştir</Text>
            </View>
        )
    }

}

export default MealsScroller