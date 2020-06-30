import React from 'react'
import {View, ImageBackground , StyleSheet} from 'react-native'
import { Tile ,Button,Text } from 'react-native-elements';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'; 

const SugarScreen =({ history, ...props })   =>{
 
    return (
        // <View> 
        <View style={{justifyContent:'flex-start'}}>


            <View style={{height:'70%',width:'100%'}}>

                <ImageBackground resizeMode={'cover'}  style={{width:'100%' ,borderRadius:10,marginBottom:0,backgroundColor:'#000'}} source={require('../../assets/check.jpg')}>
                    <View style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.3)',justifyContent:'flex-end',alignItems:'flex-start',paddingLeft:20,borderRadius:10}}>

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

            </View>

            <View style={styles.talkBubble}>
                <View style={styles.talkBubbleSquare}>

                    <Text> En Son Tarama : </Text>

                    <Text>30-6-2020</Text>

                </View>
                <View style={styles.talkBubbleTriangle} />
            </View> 


            <View style={{}}>

                <Text style={{fontSize: responsiveScreenFontSize(2.4) ,color:'#000', fontFamily:'BarlowCondensed-Regular'}}>Yardıma mı ihtiyacınız var?</Text>
                <Text style={{fontSize:responsiveScreenFontSize(1.9),color:'#000', fontFamily:'BarlowCondensed-Regular'}}>Karşılaştığınız sorunu içeren bir e-posta gönderin</Text>
                <Text style={{fontSize:responsiveScreenFontSize(1.9),color:'#263645', fontFamily:'BarlowCondensed-Regular'}}>emadmenkar@gmail.com</Text>

            </View>

        </View>

    )
}

export default SugarScreen


const styles = StyleSheet.create({
    talkBubble: {
        marginTop:5,
        backgroundColor: 'transparent',
        alignSelf:'flex-end'
      },
      talkBubbleSquare: {
        width: 250,
        height: 50,
        flexDirection:'row',
        backgroundColor: 'transparent',
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#FF6F00'
      },
      talkBubbleTriangle: {
        position: 'absolute',
        left: -26,
        top: 12,
        width: 0,
        height: 0,
        borderTopColor: 'transparent',
        borderTopWidth: 13,
        borderRightWidth: 26,
        borderRightColor: '#FF6F00',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent'
      }
})