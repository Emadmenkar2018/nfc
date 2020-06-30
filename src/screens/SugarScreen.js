import React from 'react'
import {View, ImageBackground} from 'react-native'
import { Tile ,Button,Text } from 'react-native-elements';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { useHistory} from 'react-router-native'

const SugarScreen =({ history, ...props })   =>{
 
    return (
        // <View> 
        <View>

            <ImageBackground  style={{width:'100%',height:'80%',borderRadius:10,marginBottom:0}} source={require('../../assets/check.jpg')}>
                <View style={{width:'100%',height:'80%',backgroundColor:'rgba(0,0,0,.3)',justifyContent:'flex-end',alignItems:'flex-start',paddingLeft:20,borderRadius:10}}>

                    <Text style={{fontSize:25,color:'#fff',marginBottom:10,fontFamily:'BarlowCondensed-Regular'}}>Bugün Taramayı Yaptın Mı ?</Text>


                    <Button 
                    onPress={()=>history.push("/Main/NfcReader")}
                    title="Tara Şimdi" 
                    containerStyle={{borderRadius:20  ,marginBottom:15 }}
                    buttonStyle={{ backgroundColor:'#FF6F00'}}
                    titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.5),fontFamily:'BarlowCondensed-SemiBold'}}
                    />

                </View>

            </ImageBackground> 

            <Text style={{fontSize: responsiveScreenFontSize(2.4) ,color:'#000', fontFamily:'BarlowCondensed-Regular'}}>Yardıma mı ihtiyacınız var?</Text>
            <Text style={{fontSize:responsiveScreenFontSize(1.9),color:'#000', fontFamily:'BarlowCondensed-Regular'}}>Karşılaştığınız sorunu içeren bir e-posta gönderin</Text>
            <Text style={{fontSize:responsiveScreenFontSize(1.9),color:'#263645', fontFamily:'BarlowCondensed-Regular'}}>emadmenkar@gmail.com</Text>

        </View>

    )
}

export default SugarScreen