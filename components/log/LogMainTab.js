import React from 'react'
import {View ,Text , StyleSheet,Image, TouchableOpacity} from 'react-native' 
import { 
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";




const LogMainTab = (props) =>{


    const setPage = () =>{
        props.setViewPage(props.pageindex)
        if (props.pageindex ===0){
            props.setFirstIsSelected()
        }
        else if (props.pageindex ===1) {
            props.setSecondIsSelected()
        }
        else {
            props.setThirdIsSelected()
        } 
    }
    return (

        <TouchableOpacity activeOpacity={.9} onPress={setPage}>

            <View style={{alignItems:'center'}}>

                <View style={{...styles.container,backgroundColor: props.firstisSelected  ? '#FF6F00':props.secondisSelected  ?  '#FF6F00': props.thirdisSelected  ? '#FF6F00':  '#E9ECF1',borderRadius:10}} >
   

                    <Text style={{...styles.text,  color :props.firstisSelected  ? '#fff' : props.secondisSelected  ?  '#fff' : '#273444'}}>{props.text}</Text>
    
        
                </View>
 

            </View> 

        </TouchableOpacity>

    )
}

export default LogMainTab

const styles = StyleSheet.create({
    container : { 
        margin:5,
        padding : 5 ,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        width:responsiveScreenWidth(25)
    },
    text : { 
        textAlign:'center' ,
        color:'#273444' ,
        fontFamily:'BarlowCondensed-SemiBold',
        fontSize : responsiveScreenFontSize(1.6)
    }
})