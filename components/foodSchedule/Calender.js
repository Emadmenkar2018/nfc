

import React, { useState,useEffect,useRef } from 'react';
import { View, Text, StyleSheet ,Dimensions,} from 'react-native'; 
const halfheight = Dimensions.get('window').height /2 
const halfwidth = Dimensions.get('window').width /2 
import Carousel from 'react-native-snap-carousel';
import {_getDates,_extractDays,_extractDays2,_getDates2} from '../../utils/methods' 
import { Icon } from 'react-native-elements' 
import { useHistory } from 'react-router-native'; 
import { 
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions"; 

const MyCalender = ({   ...props }) => { 
 

//    const [showRandevu, setShowRandevu] =useState(false) 
   const [myRan, setmyRandevus] =useState('')
   const [index, setIndex] =useState(2)
   const [firstIndex, setFirstindex] =useState('')
   const [myitem, setMyitem] =useState('')
   const [passingData,setPassingData]=useState('')
   const carrousel = useRef(null);
   let history = useHistory(); 
    
 
    const closeDialoug = () => { 
        console.log('sadsd')
    } 

   useEffect(() =>{ 
        showRandevusComponent(2) 
        setmyRandevus(props.MyRandevus) 
        props.setRender(true) 
    }, [props.MyRandevus]);
   
    

    const _snaptoNearest  = () =>{   
        let calender = _getDates() 
        let index =  calender.findIndex(item  => {
            if(item ===props.randevudays[0]) {   
                return item
            }
        })  
        if (index > 0 ){ 
            carrousel.current.snapToItem(index); 
        }  
    }
     

    const _renderItem = ({item, index}) => {  
            return (
                <View   style={styles.slide}> 
                    <Text style={props.randevudays.includes(item)? styles.titleHighlighted : styles.title}>{ item }</Text> 
                </View>

            );
    }

 
    const handleSnapToItem =(myindex) =>{   
        setIndex(myindex)
        showRandevusComponent(myindex) 
    }
 
    const showRandevusComponent = (index) =>{  
        let calender = _getDates2()   
        if (!props.showrandevudays.includes(calender[index])){ 
            props.setShowRandevu(false) 
        }
        if (props.showrandevudays.includes(calender[index])){ 
            props.setShowRandevu(true)  
            let passedtime = props.MyRandevus.filter( (el) => { 
                return el.desired_date.includes(calender[index])  
              }); 
            setPassingData(passedtime)
        }
    }  
 
    //Current Date 
       return ( 
           <View style={{width:'100%',height:'100%',alignItems:'center',paddingHorizontal:10,zIndex:0}}>
                
                <View style={{width:'100%',position:'absolute',bottom:15  ,alignItems:'center',alignContent:'center'}}>   
                    <View style={{alignContent:'center'}}> 
                            <Carousel 
                            //  
                            ref={carrousel} //this one
                            activeSlideOffset={2}
                            swipeThreshold={2}
                            data={_getDates()}
                            enableMomentum={false}
                            renderItem={_renderItem}
                            sliderWidth={ 4*halfwidth }
                            itemWidth={2*halfwidth/5} 
                            firstItem={2}
                            slideStyle={{ flex: 1,marginHorizontal:0  }}
                            onSnapToItem={(index)=>handleSnapToItem(index)} 
                            initialNumToRender={34}
                            activeSlideAlignment={'center'} 
                            sliderHeight={100} 
                            onBeforeSnapToItem={()=>props.setShowRandevu(false) }
                            inactiveSlideOpacity={0.2}
                            // contentContainerCustomStyle={{backgroundColor:'#000' }}
                            /> 
                        {/* } */}
                    </View>
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