

import React from 'react';
import { View,   StyleSheet , Text, TouchableOpacity} from 'react-native';  
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods'  
import {  responsiveScreenFontSize,   responsiveWidth } from "react-native-responsive-dimensions"; 
// import Month from '../../constants/arrays' 


const DayComponent = ({   ...props }) => { 

    const  Month =['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'] 

 
       return (
           <TouchableOpacity onPress={()=>console.log('Hey',props.day.split('-')[1])}>

                <View style={{...styles.container,backgroundColor:props.day === "26-06"? '#FF6F00' :'#E9ECF1' ,alignContent:'center'}}>
                        
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2),fontFamily:'BarlowCondensed-SemiBold'}}>{Month[parseInt(props.day.split('-')[1])]}</Text>
                
                
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Regular'}}>{props.day.split('-')[0]}</Text>

                    <Text style={{color:props.day === "26-06"? '#fff':'#FF6E01',fontSize:responsiveScreenFontSize(2),fontFamily:'BarlowCondensed-SemiBold'}}>. . .</Text>

                
                </View>

           </TouchableOpacity> 
       ) 
   } 

export default DayComponent;


const styles = StyleSheet.create({ 
   container : {
    elevation: 5 ,
    height:responsiveWidth(18),
    width : responsiveWidth(18),
    marginHorizontal:5, 
    justifyContent:'center',
    alignItems:'center', 
    marginVertical:20 , 
   }
 });