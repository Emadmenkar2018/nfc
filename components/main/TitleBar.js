import React from 'react'
import {View ,Image ,Text } from 'react-native'
import MainTab from './MainTab'
import {Svg ,Rect ,Circle} from 'react-native-svg';
import { Icon } from 'react-native-elements';
import auth   from '@react-native-firebase/auth';
import { responsiveWidth } from 'react-native-responsive-dimensions';

const TitleBar = (props) =>{

    const onLogout =() => {
        auth()
        .signOut()
        .then(() => console.log('User signed out!'));
    }
    return (
        <View style={{height:'8%', width:'100%' ,marginTop:6 , marginBottom:0 ,borderBottomWidth:1,borderBottomColor:'#555' }} >

            <View style={{backgroundColor:'#fff5f2',height:'98%', width:'100%', flexDirection:'row', justifyContent:'space-between', alignItems:'center' , paddingHorizontal:15}}>

                <Icon onPress={onLogout} name="bars" type="font-awesome" color="#253545"/>

                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 
                    <Image style={{width: responsiveWidth(30), height: responsiveWidth(15)}}     source={require('../../assets/logoTra.png')} resizeMode="contain"/>
 
                </View>


                <Icon name="user" type="font-awesome" color="#253545"/>


            </View>
 

        </View>
     

            
    )
}

export default TitleBar