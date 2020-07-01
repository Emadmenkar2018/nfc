

import React from 'react';
import { View,   StyleSheet , Text, TouchableOpacity,Image} from 'react-native';   
import {  responsiveScreenFontSize,   responsiveWidth } from "react-native-responsive-dimensions"; 
import { Icon } from 'react-native-elements';
// import Month from '../../constants/arrays' 


const FoodContainer = ({   ...props }) => { 
 

 
       return (
           <TouchableOpacity onPress={()=>console.log('Hey')}>

                <View style={{...styles.container }}>

                    <View style={{flexDirection:'row',alignItems:'center'}}>

                        <Image style={{width:20,height:20,marginHorizontal:10}} resizeMode={'contain'} tintColor={'#000'} source={props.title.includes('kahval') ?  require('../../assets/bread.png') : props.title.includes('ana') ? require('../../assets/lunch.png') :    require('../../assets/dinner.png') }/>                    
                        <Text style={{color:'#263645',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-SemiBold'  }}>{props.title}</Text>
                    
                    </View>
                        
                   
                  
                   <View style={{width:'100%',flexDirection:'row', justifyContent:'space-between',marginVertical:15}}>

                        <Text style={{width : '60%',color:'#888',fontSize:responsiveScreenFontSize(2),fontFamily:'BarlowCondensed-Regular',alignSelf:'center'}}>Yumurta Peynir Ekmek </Text>
                        
                        {/* <Text style={{color:'#263645',fontSize:responsiveScreenFontSize(2),fontFamily:'BarlowCondensed-Regular',alignSelf:'center'}}>{props.title}</Text> */}
            
                        <View style={{alignitems:'center' , flexDirection:'row'}}>

                            <Icon name ="edit" containerStyle={{marginHorizontal:5}} type="material" size={responsiveScreenFontSize(2)} />

                            <Icon name ="delete" containerStyle={{marginHorizontal:5}} type="material" size={responsiveScreenFontSize(2)} />


                        </View>

                   </View> 
               
                
                </View>

           </TouchableOpacity> 
       ) 
   } 

export default FoodContainer;


const styles = StyleSheet.create({ 
   container : {
    elevation: 2 ,
    alignSelf:'center', 
    width : '90%',
    marginHorizontal:5,   
    marginVertical:10 , 
    // backgroundColor:'#E9ECF1', 
    backgroundColor:'#fff', 
    borderRadius:6,
    paddingHorizontal:10, 
    paddingVertical:5,
    borderLeftWidth:15,
    borderLeftColor:'#FF6F00'
    
   }
 });