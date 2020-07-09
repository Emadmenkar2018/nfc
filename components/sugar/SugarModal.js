import React, {useState,useEffect} from 'react'
import {View, Modal ,Text , Image ,Platform , ToastAndroid , Alert} from 'react-native'
import { responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import {Button} from 'react-native-elements'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';
 

const SugarModal  = (props) => {

    const [ready,setReady] = useState(true)

    useEffect(() => {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
          console.warn('tag', tag);
          NfcManager.setAlertMessageIOS('I got your tag!');
          NfcManager.unregisterTagEvent().catch(() => 0);
        });

        return () => {
            NfcManager.setEventListener(NfcEvents.DiscoverTag, null);
            NfcManager.unregisterTagEvent().catch(() => 0);
        }
    }, [])


    const cancelNfc = () => {
        NfcManager.unregisterTagEvent().catch(() => 0);
      }

    const  readNfc =  () => {
        try {
          NfcManager.registerTagEvent().then( resp =>{
              console.warn(resp)
            //   if (resp.length > 0 && resp !=="undefined"){
            //     if (Platform.OS === 'android') {
            //         ToastAndroid.show('Tarama Başarılıdır', ToastAndroid.SHORT)
            //     } else {
            //         Alert.alert('Tarama Başarılıdır');
            //     } 
            //   }
            // console.warn('resp', resp);
          });
        } catch (ex) {
          console.log('ex', ex);
          NfcManager.unregisterTagEvent().catch(() => 0);
        }
      }

   

    return(

        <Modal
            transparent={true} 
            
            visible = {props.modalVisibility} >

            <View style={{height:'100%',width:'100%' ,alignContent:'center',alignItems:'center',justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,.7)'}} >


                <View style={{height:'45%',width:'100%',backgroundColor:'#fff',alignContent:'center',alignItems:'center',justifyContent:'space-evenly', alignSelf:'flex-end'}} >
                    
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.5),fontFamily:'BarlowCondensed-SemiBold'}}>{ready ?' Taramaya Hazir' : 'başarıyla tarandı'}</Text>

                    <View>

                        <View style={{alignSelf:'center' , height:responsiveWidth(30), width:responsiveWidth(30),borderColor : '#999', borderWidth:ready ? 1 : 0, borderRadius:responsiveWidth(30),alignItems:'center',justifyContent:'center'}}>

                            {ready &&
                                <Image resizeMode={'contain'} style={{borderColor : '#efefef',height:responsiveWidth(20), width:responsiveWidth(20),alignSelf:'center'}} tintColor={'#999'} source ={require('../../assets/nfc.png')} />
                            }
                            {!ready &&
                                <Image resizeMode={'contain'} style={{borderColor : '#efefef',height:responsiveWidth(20), width:responsiveWidth(20),alignSelf:'center'}} tintColor={'#53b05e'} source ={require('../../assets/checked.png')} />
                            }
                     
                     
                        </View>
                    
                        {ready &&
                            <Text style={{color:'#888',fontSize:responsiveScreenFontSize(2.2),fontFamily:'BarlowCondensed-Regular',alignSelf:'center'}}>Telefonu sensöre yaklaştırın</Text>
                        }
                    
                    </View>
 
                    <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'center'}}>

                        <Button 
                            onPress={()=>readNfc()}
                            title= {'Başla'}
                            containerStyle={{borderRadius:20  ,marginBottom:15 , width:'30%'}}
                            buttonStyle={{ backgroundColor:'#fe796d'}}
                            titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.8),fontFamily:'BarlowCondensed-SemiBold'}}
                        />

                        <Button 
                            onPress={()=>{
                                cancelNfc()
                                props.closeModal()
                            }}
                            title= {"Iptal"}
                            containerStyle={{borderRadius:20  ,marginBottom:15 , width:'30%'}}
                            buttonStyle={{ backgroundColor:'#fe796d'}}
                            titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.8),fontFamily:'BarlowCondensed-SemiBold'}}
                        />

                    </View>


                </View>

            </View>

        </Modal>

    )
}
export default SugarModal