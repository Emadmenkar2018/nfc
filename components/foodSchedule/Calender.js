

import React, { useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet ,Dimensions, ScrollView,} from 'react-native';  
import {_getDates,_extractDays,_extractDays2,_getDates2 , _newgetDates} from '../../utils/methods'  
import { useHistory } from 'react-router-native'; 
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 
import DayComponent from './DayComponent'


const MyCalender = ({   ...props }) => { 
  
   const [index, setIndex] =useState(2)  
   const myScroller = useRef(null); 

   console.log('scroller', myScroller)

//    myScroller.scrollTo(30); 


   let DaysList = _newgetDates().map(day => (
        <DayComponent
            day={day}
        />
    )); 
     
    //Current Date 
       return (  
                
            <View style={{width:'100%'  ,alignContent:'center',justifyContent:'center',zindex:1,borderRadius:20}}> 
 
                
                <ScrollView ref={myScroller} style={{alignSelf:'center',borderRadius:20}} snapToEnd={true} horizontal={true} showsHorizontalScrollIndicator={false}>

                    {DaysList}
                    
                </ScrollView>

            </View> 
       ) 
   } 

export default MyCalender;


const styles = StyleSheet.create({ 
    slide:{
        
    },
    titleHighlighted:{
        fontSize:responsiveScreenFontSize(2.2),
        color:'#26C8A8',
        textAlign:'center',
        fontFamily:'Merienda-Regular'
    },
    title:{
        fontSize:responsiveScreenFontSize(2.2),
        color:'rgba(29, 37, 60,.9)',
        textAlign:'center',
        fontFamily:'Merienda-Regular'
    },
    stretch:{ 
        height:25,
        width:25, 
    },
 });