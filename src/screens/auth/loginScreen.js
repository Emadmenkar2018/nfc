import React from 'react'
import { View ,Text} from 'react-native'
import Svg ,{ Defs , Path , G  , TextPath , TSpan,Polyline } from 'react-native-svg'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions'


const LoginScreen = () =>{

    return (

        <View style={{ backgroundColor: '#fff' ,justifyContent:'space-between',height:'100%' }}>

            <Svg  style={{transform: [{ rotate: '180deg'}]  ,backgroundColor:'#000'  }}   height="30%" width="100%" >
                 
                <Path fill="#2FC8FE" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            
                {/* <Text
                    style={{transform: [{ rotate: '-180deg'}]}}
                    x="50"
                    y="16"
                    fill="white"
                    fontSize="16"
                    fontWeight="bold"
                    textAnchor="middle">
                    Giriş
                </Text> */} 
                 <View style={{   transform: [{ rotate: '-180deg'}] ,position:'absolute', top: 50, right:20, zindex:1}}>

                    <Text style={{color:'#273444',fontSize:responsiveScreenFontSize(4), fontFamily:'BarlowCondensed-SemiBold'}}>
                        Giriş Yap  
                    </Text>

                </View>

            </Svg>

           
           <View>
               
           </View>
            

            <Svg  style={{backgroundColor:'#000'}}   height="30%" width="100%" >
                 
                 <Path fill="#2FC8FE" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
             </Svg>
  
            {/* <Svg  style={{transform: [{ rotate: '180deg'}] , position:'absolute' ,top:0}}   height="60%" width="100%" >
                    <Path fill="#000" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
            </Svg>  */}
        </View>
    )
}

export default LoginScreen

// style={{transform: [{ rotate: '55deg'}]}}