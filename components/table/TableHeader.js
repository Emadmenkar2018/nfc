import React from 'react'
import {View ,Image , Text } from 'react-native'
import { Icon } from 'react-native-elements'
import { Actions } from 'react-native-router-flux'

const TableHeader = () =>{

    return (
        <View style={{flexDirection:'row',width:'100%',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>

            <Icon onPress={()=>Actions.pop()} name="arrow-back" type="material" color="#263645" size={25} />

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',alignSelf:'center'}}> 
                    <Image style={{width: 30, height: 30}}    tintColor={'#FF6F00'} source={require('../../assets/doctor.png')} resizeMode="contain"/>

                    <Text style={{fontFamily:'Pacifico-Regular'}}>Analyser</Text>
            </View>

            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}> 

                <Icon name="save" type="material" color="#263645" containerStyle={{marginRight:20}} size={25}/>

                <Icon name="share" type="material" color="#263645"   size={25}/>

            </View>


        </View>
    )
}

export default TableHeader;