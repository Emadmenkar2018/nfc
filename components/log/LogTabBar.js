import React from 'react'
import {View } from 'react-native'
import LogMainTab from './LogMainTab'
import {Svg ,Rect ,Circle} from 'react-native-svg';


const LogTabBar = (props) =>{

  

    return (
        <View style={{  width:'100%' , marginBottom:10  ,borderLeftColor: 'transparent',  borderBottomEndRadius: 20,borderTopLeftRadius:50}} >

            <View style={{backgroundColor:'#F4F4F4' ,borderBottomLeftRadius :20, borderBottomEndRadius :20, borderLeftColor:'transparent',width:'100%', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>

 
                <LogMainTab
                    text={'Yemek'}
                    setFirstIsSelected= {props.setFirstIsSelected}
                    firstisSelected={props.firstisSelected}
                    // isSelected= {props.isSelected}
                    pageindex = {0}
                    setViewPage={props.setViewPage}
                />

                <LogMainTab
                    text={'Seker'}
                    setSecondIsSelected= {props.setSecondIsSelected}
                    secondisSelected={props.secondisSelected}
                    // isSelected= {props.isSelected}
                    pageindex = {1}
                    setViewPage={props.setViewPage}
                />
                 
 

            </View>
 
        </View>
     

            
    )
}

export default LogTabBar