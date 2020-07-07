import React from 'react'
import {View ,Text , StyleSheet,Image, TouchableOpacity} from 'react-native' 
import { 
    responsiveScreenWidth,
    responsiveScreenFontSize
  } from "react-native-responsive-dimensions";




const MainTab = (props) =>{


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

                <View style={{...styles.container,backgroundColor: props.firstisSelected  ? '#fe796d':props.secondisSelected  ?  '#fe796d': props.thirdisSelected  ? '#fe796d':  '#fff',borderRadius:10}} >
  
                    <Image
                    style={{width: responsiveScreenFontSize(5), height: responsiveScreenFontSize(5)}}
                    tintColor={props.firstisSelected  ? '#fff' : props.secondisSelected  ? '#fff' : props.thirdisSelected  ?  null :  null}
                    source={ props.text === 'Seker' ?  require('../../assets/ruler.png') : props.text === 'Yemek' ? require('../../assets/soup.png') : require('../../assets/health.png') }
                    />
    
        
                </View>

                
                <Text style={styles.text}>
                    {props.text}
                </Text>

            </View> 

        </TouchableOpacity>

    )
}

export default MainTab

const styles = StyleSheet.create({
    container : {
        height:responsiveScreenWidth(18),
        width:responsiveScreenWidth(18), 
        elevation:3 ,
        alignItems:'center',
        justifyContent:'center'
    },
    text : {
        marginTop:3,
        textAlign:'center' ,
        color:'#273444' ,
        fontFamily:'BarlowCondensed-SemiBold',
        fontSize : responsiveScreenFontSize(1.6)
    }
})