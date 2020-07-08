

import React , {useState} from 'react';
import { View,   StyleSheet , Text, TouchableOpacity} from 'react-native';  
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods'  
import {  responsiveScreenFontSize,   responsiveWidth } from "react-native-responsive-dimensions"; 
// import Month from '../../constants/arrays' 


const DayComponent = ({   ...props }) => { 

    const  Month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] 

    var today = new Date();
 
    
    var fullToday =today.getDate().toString()   +"-" +  `${today.getMonth() + 1}` 

    const setDay = () =>{ 
        props.setSelectedIndex(   props.day.split('-')[0]+ "-"+ props.day.split('-')[1] )
    }

       return (
           <TouchableOpacity activeOpacity={0.9} onPress={setDay}>

                <View style={{...styles.container,backgroundColor:props.day == fullToday? '#65cde6' :'#fff' , justifyContent:'center' ,borderWidth:props.day ==props.selectedIndex ? 4 :0 ,borderColor : props.day ==props.selectedIndex ?  "#e8957e" : "#fff"}}>
                        
                    <Text style={{color:props.day == fullToday? '#fff': '#253547',fontSize:responsiveScreenFontSize(2),fontFamily:'BarlowCondensed-SemiBold'}}>{Month[parseInt(props.day.split('-')[1])-1]}</Text>
                
                
                    <Text style={{color:props.day == fullToday? '#fff': '#253547',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Regular'}}>{props.day.split('-')[0]}</Text>

                    <Text style={{color:props.day === fullToday? '#fff':'#253547',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-SemiBold'}}>. . .</Text>

                
                </View>

           </TouchableOpacity> 
       ) 
   } 

export default DayComponent;


const styles = StyleSheet.create({ 
   container : {
    elevation: 2 ,
    height:responsiveWidth(18),
    width : responsiveWidth(18),
    marginHorizontal:5, 
    justifyContent:'center',
    alignItems:'center', 
    marginVertical:20 , 
    borderRadius:10
   }
 });