import React from 'react'
import {View } from 'react-native'
import MainTab from './MainTab'
import {Svg ,Rect ,Circle} from 'react-native-svg';


const TabBar = (props) =>{
    return (
        <View style={{height:'25%', width:'100%' , marginBottom:10  ,borderLeftColor: 'transparent',  borderBottomEndRadius: 20,borderTopLeftRadius:50}} >

            <View style={{backgroundColor:'#E9ECF1',height:'98%',borderBottomLeftRadius :20, width:'100%', flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'}}>

 
                <MainTab
                    text={'Yemek'}
                    setFirstIsSelected= {props.setFirstIsSelected}
                    firstisSelected={props.firstisSelected}
                    // isSelected= {props.isSelected}
                    pageindex = {0}
                    setViewPage={props.setViewPage}
                />

                <MainTab
                    text={'Seker'}
                    setSecondIsSelected= {props.setSecondIsSelected}
                    secondisSelected={props.secondisSelected}
                    // isSelected= {props.isSelected}
                    pageindex = {1}
                    setViewPage={props.setViewPage}
                />
                
                <MainTab
                    text={'Gecmis'}
                    setThirdIsSelected= {props.setThirdIsSelected}
                    thirdisSelected={props.thirdisSelected}
                    // isSelected= {props.isSelected}
                    pageindex = {2}
                    setViewPage={props.setViewPage}
                />
 

            </View>

            {/* <View style={{marginTop:-10, position:'absolute',right:20,bottom:0}}>

                <Svg height='30' width = '80'> 
                    <Circle cx="10" cy="30" r="20" fill="#000" />
                </Svg>   

            </View> */}

        </View>
     

            
    )
}

export default TabBar