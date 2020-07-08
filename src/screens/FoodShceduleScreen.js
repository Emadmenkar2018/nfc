import React, { useState ,useEffect} from 'react';
import { StyleSheet, View, Text, ScrollView} from 'react-native'; 
import Calender from '../../components/foodSchedule/Calender'
import { Button ,Icon } from 'react-native-elements'; 
import MealsScroller from '../../components/foodSchedule/MealsScroller'
import {  responsiveScreenFontSize} from "react-native-responsive-dimensions";  
import { getUserMeals } from '../../helpers/firebase/FoodHelpers'
import AddMealModal from '../../components/foodSchedule/AddMealModal';  
import {Actions} from 'react-native-router-flux'

var today = new Date();
var fullToday =today.getDate().toString()   +"-" +  `${today.getMonth() + 1}` 
 
const FoodShceduleScreen = () => {
    const [mealVisibility, setmealVisibility] = useState(false)
    const [userMeals, setuserMeals] = useState(getUserMeals())
    const [selectedIndex, setselectedIndex] = useState(fullToday)

    useEffect(() => {
        setuserMeals(getUserMeals())  
    }, [])

 

//    componentDidMount (){  
//        setState({userMeals : getUserMeals() })
//    }
 
  
    const closeMealModal = () => {
        // Actions.refresh({ key: 'home',userMeals : getUserMeals()  });
        setuserMeals(getUserMeals())  
        setmealVisibility(false)   
    }

    const  setSelectedIndex = (index) =>{
        setselectedIndex(index) 
    }
 
    
        return (
        <View style={styles.container}>
 

            <Text style={{fontFamily:'BarlowCondensed-Bold',fontSize:responsiveScreenFontSize(2.2),margin:6}}>Gün Seç</Text>  

            {/* backgroundColor:'#edfcff', */}
            <View style={{backgroundColor:'transparent',paddingHorizontal:10,borderRadius:10,marginHorizontal:5}}>

                <Calender
                    selectedIndex={selectedIndex}
                    setSelectedIndex = {setSelectedIndex}
                    // isSelected = {isSelected}
                />

            </View>

 
            <MealsScroller
                selectedIndex={selectedIndex}
                userMeals={userMeals}
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
                    onPress={()=> setmealVisibility(true)}
                    title="Yemek Ekle" 
                    containerStyle={{borderRadius:10 , width:'90%',alignSelf:'center', backgroundColor:'#fe796d' }}
                    buttonStyle={{ backgroundColor:'#65cde6'}}
                    />
            
            </View>

            <AddMealModal 
                mealVisibility={mealVisibility}
                closeMealModal = {closeMealModal}
            />

        </View>
        ) 
}
 

export default FoodShceduleScreen ;

const styles = StyleSheet.create({
    container : {
        width:'100%',
        backgroundColor:'#fff',
        height : '100%', 
    }
});