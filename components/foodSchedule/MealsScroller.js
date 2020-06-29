import React from 'react'
import {ScrollView} from 'react-native'
import FoodContainer from './FoodContainer' 

const MealsScroller = () =>{

    return (
        <ScrollView style={{backgroundColor:'#F4F4F4'}}>

            <FoodContainer
                    title='Kahvaltı'
                />

            <FoodContainer
                title='Ana Yemeği'
            /> 

            <FoodContainer
                title='Akşam Yemeği'
            />
{/* 
            <FoodContainer  
                title='Ek Yemeği'
            /> */}

        </ScrollView>
    )

}

export default MealsScroller