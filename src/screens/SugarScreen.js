import React ,{useState,useEffect} from 'react'
import {View, ImageBackground , StyleSheet} from 'react-native'
import { Tile ,Button,Text } from 'react-native-elements';
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'; 
import { Actions } from 'react-native-router-flux';
import { LineChart,   } from "react-native-chart-kit";
import { Dimensions } from "react-native"; 
import SugarModal  from '../../components/sugar/SugarModal'
import NfcManager, {NfcEvents} from 'react-native-nfc-manager';


const screenWidth = Dimensions.get("window").width;

const SugarScreen =({ history, ...props })   =>{

   const [modalVisibility, setModalVisibility] = useState(false)

    useEffect(() => {
        NfcManager.start();
        NfcManager.setEventListener(NfcEvents.DiscoverTag, tag => {
          console.log('tag', tag);
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
            console.log('resp', resp);
          });
        } catch (ex) {
          console.log('ex', ex);
          NfcManager.unregisterTagEvent().catch(() => 0);
        }
      }
      
 
    const chartConfig = {
        backgroundGradientFrom: "#fff",
        // backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#fff",
        // backgroundGradientToOpacity: 0, 
        color: (opacity = 1) => `rgba(15,21,27, ${opacity})`, // optional
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false, // optional
        fillShadowGradient : '#fff'	
      };

    const data = {
        labels: ["January", "February", "March", "April", "May", "June"],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43], 
            color: (opacity = 1) => `rgba(255, 111, 0, ${opacity+0.2})`, // optional
            strokeWidth: 2 // optional
          }
        ], 
      };


      const closeModal = ()=>{
        cancelNfc()
        setModalVisibility(false)
      }

    return (
        // <View> 
        <View style={{flex:1,justifyContent:'flex-start',backgroundColor:'#fff'}}>


            <View style={{height:'45%',width:'100%',marginBottom:10,color:'rgba(15,21,27,1)'}}>

                <Text style={{alignSelf:'center',marginBottom:10,fontFamily:'BarlowCondensed-Bold'}}>Gelişme Grafiği</Text>
 
                <LineChart
                    data={data}
                    width={screenWidth}
                    height={256} 
                    chartConfig={chartConfig}
                    withDots={false}
                    withInnerLines={false}
                    // bezier
                    />
            </View>


             <View style={{height:'30%',width:'100%',marginTop:'auto',marginBottom:20,elevation:2 ,borderRadius:10}}>

                <ImageBackground resizeMode={'cover'}  style={{width:'100%' ,borderRadius:10,marginBottom:0,backgroundColor:'#000'}} source={require('../../assets/check.jpg')}>
                    <View style={{width:'100%',height:'100%',backgroundColor:'rgba(0,0,0,.5)',justifyContent:'flex-end',alignItems:'flex-start',paddingLeft:20,borderRadius:10}}>

                        <Text style={{fontSize:25,color:'#fff',marginBottom:10,fontFamily:'BarlowCondensed-Regular'}}>Bugün Taramayı Yaptın Mı ?</Text>


                        <Button 
                        onPress={()=>{
                          // readNfc()
                          // setModalVisibility(true)
                          Actions.push('nfcReader')
                        }}
                        title="Tara Şimdi" 
                        containerStyle={{borderRadius:10  ,marginBottom:15 }}
                        buttonStyle={{ backgroundColor:'#fe796d'}}
                        titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.5),fontFamily:'BarlowCondensed-SemiBold'}}
                        />

                    </View>

                </ImageBackground> 

            </View> 


            <SugarModal
              readNfc={readNfc}
              closeModal={closeModal}
              modalVisibility={modalVisibility}
              />

            
{/* 
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

            </View> */}

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
        borderColor:'#fe796d'
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
        borderRightColor: '#fe796d',
        borderBottomWidth: 13,
        borderBottomColor: 'transparent'
      }
})