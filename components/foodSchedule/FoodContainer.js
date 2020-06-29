

import React from 'react';
import { View,   StyleSheet , Text, TouchableOpacity} from 'react-native';   
import {  responsiveScreenFontSize,   responsiveWidth } from "react-native-responsive-dimensions"; 
// import Month from '../../constants/arrays' 


const FoodContainer = ({   ...props }) => { 
 

 
       return (
           <TouchableOpacity onPress={()=>console.log('Hey',props.day.split('-')[1])}>

                <View style={{...styles.container }}>
                        
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Medium',alignSelf:'center'}}>{props.title}</Text>
                   
                   
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Medium',alignSelf:'center'}}>{props.title}</Text>
              
              
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Medium',alignSelf:'center'}}>{props.title}</Text>
               
                
                </View>

           </TouchableOpacity> 
       ) 
   } 

export default FoodContainer;


const styles = StyleSheet.create({ 
   container : {
    elevation: 3 ,
    height: responsiveWidth(12),
    width : '100%',
    marginHorizontal:5, 
    justifyContent:'space-evenly',
    alignItems:'center',
    alignContent:'center', 
    marginVertical:10 ,
    backgroundColor:'#E9ECF1',
    flexDirection:'row',
    borderRadius:6
    
   }
 });