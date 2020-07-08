

import React, { useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet ,Dimensions, ScrollView,} from 'react-native';  
import {_getDates,_extractDays,_extractDays2,_getDates2 , _newgetDates} from '../../utils/methods'  
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 
import DayComponent from './DayComponent'


const MyCalender = ({   ...props }) => { 
   
   const myScroller = useRef(null); 
   const [oneSelected, setoneSelected] = useState(true)
 

//    myScroller.scrollTo(30); 


   let DaysList = _newgetDates().map((day,key) => (
        <DayComponent
            selectedIndex={props.selectedIndex}
            setSelectedIndex={props.setSelectedIndex}
            isSelected= {props.isSelected}
            day={day}
            key={day}
        />
    )); 
     
    //Current Date 
       return (  
                
            <View style={{width:'100%'  ,alignContent:'center',justifyContent:'center',zindex:1,borderRadius:20}}> 
 
                
                <ScrollView ref={myScroller} style={{alignSelf:'center',borderRadius:20 }} snapToEnd={true} horizontal={true} showsHorizontalScrollIndicator={false}>

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