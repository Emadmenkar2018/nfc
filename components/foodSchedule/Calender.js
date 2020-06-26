

import React, { useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet ,Dimensions, ScrollView,} from 'react-native';  
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods'  
import { useHistory } from 'react-router-native'; 
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 
import DayComponent from './DayComponent'


const MyCalender = ({   ...props }) => { 
 

//    const [showRandevu, setShowRandevu] =useState(false) 
   const [myRan, setmyRandevus] =useState('')
   const [index, setIndex] =useState(2)
   const [firstIndex, setFirstindex] =useState('')
   const [myitem, setMyitem] =useState('')
   const [passingData,setPassingData]=useState('')
   const carrousel = useRef(null);
   let history = useHistory(); 
    
  

   useEffect(() =>{  

    }, []);
    

    const _renderItem = ({item, index}) => {  
            return (
                <View   style={styles.slide}> 
                    {/* <Text style={props.randevudays.includes(item)? styles.titleHighlighted : styles.title}>{ item }</Text>  */}
                    <Text>{ item }</Text> 
                </View>

            );
    }

 
    const handleSnapToItem =(myindex) =>{   
        setIndex(myindex) 
    }
 
     
    //Current Date 
       return ( 
           <View style={{width:'100%',height:'100%',alignItems:'center',paddingHorizontal:10,zIndex:0}}>
                
                <View style={{width:'100%', alignItems:'center',alignContent:'center',justifyContent:'center'}}>   
                    
                    <ScrollView>

                        <DayComponent/>

                    </ScrollView>
                </View>
           </View>
       ) 
   } 

export default MyCalender;


const styles = StyleSheet.create({ 
    slide:{
        
    },
    titleHighlighted:{
        fontSize:responsiveScreenFontSize(2.2),
        color:'#26C8A8',textAlign:'center',
        fontFamily:'Merienda-Regular'
    },
    title:{
        fontSize:responsiveScreenFontSize(2.2),
        color:'rgba(29, 37, 60,.9)',textAlign:'center',
        fontFamily:'Merienda-Regular'
    },
    stretch:{ 
        height:25,
        width:25, 
    },
 });