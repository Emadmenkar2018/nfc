import React from 'react'
import {View ,Image ,Text } from 'react-native'
import MainTab from './MainTab'
import {Svg ,Rect ,Circle} from 'react-native-svg';
import { Icon } from 'react-native-elements';


const TitleBar = (props) =>{
    return (
        <View style={{height:'8%', width:'100%' ,marginTop:6 , marginBottom:0 ,borderBottomWidth:1,borderBottomColor:'#555' }} >

            <View style={{backgroundColor:'#E9ECF1',height:'98%', width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center' , paddingHorizontal:15}}>

                <Icon name="bars" type="font-awesome" color="#253545"/>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                    <Image style={{width: 30, height: 30}}    tintColor={'#FF6F00'} source={require('../../assets/doctor.png')} resizeMode="contain"/>

                    <Text style={{fontFamily:'Pacifico-Regular'}}>Analyser</Text>
                </View>


                <Icon name="user" type="font-awesome" color="#253545"/>


            </View>
 

        </View>
     

            
    )
}

export default TitleBar