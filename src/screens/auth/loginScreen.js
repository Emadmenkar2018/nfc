import React , {useState, Component} from 'react'
import { View ,Text,Image,TouchableOpacity , Dimensions} from 'react-native'
import Svg ,{ Defs , Path , Stop  , LinearGradient , Polyline } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

import { responsiveScreenFontSize, responsiveWidth, responsiveScreenWidth } from 'react-native-responsive-dimensions' 
import {Input , Icon,Button} from 'react-native-elements' 
const {
    Value,
    event,
    block,
    cond,
    eq,
    set,
    Clock,
    startClock,
    stopClock,
    debug,
    timing,
    clockRunning,
    interpolate,
    Extrapolate
  } = Animated;

function runTiming(clock, value, dest) {
    const state = {
      finished: new Value(0),
      position: new Value(0),
      time: new Value(0),
      frameTime: new Value(0)
    };
  
    const config = {
      duration: 1000,
      toValue: new Value(0),
      easing: Easing.inOut(Easing.ease)
    };
  
    return block([
      cond(clockRunning(clock), 0, [
        set(state.finished, 0),
        set(state.time, 0),
        set(state.position, value),
        set(state.frameTime, 0),
        set(config.toValue, dest),
        startClock(clock)
      ]),
      timing(clock, state, config),
      cond(state.finished, debug('stop clock', stopClock(clock))),
      state.position
    ]);
  }

  class  LoginScreen  extends Component {

    // const [email, setEmail] = useState('')
    // const [password, setpPssword] = useState('')
    constructor() {
        super();

        this.buttonOpacity = new Value(1);

        this.onPress = this.onPress.bind(this);
        
        this.state = {
            sliderPosition: new Animated.Value(0)
          }

        this.onStateChange = event([
        {
            nativeEvent: ({ state }) =>
            block([
                cond(
                eq(state, State.END),
                set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
                )
            ])
        }
        ]);

        this.onStateChange2 = event([
            {
                nativeEvent: ({ state }) =>
                block([
                    console.log('He2y',state),
                    cond(
                    eq(state, State.END),
                    set(this.buttonOpacity, runTiming(new Clock(), 1, 0))
                    )
                ])
            }
        ]);

         

        this.buttonY = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [100, 0],
        extrapolate: Extrapolate.CLAMP
        });

        this.bgY = interpolate(this.buttonOpacity, {
        inputRange: [0, 1],
        outputRange: [-height / 3, 0],
        extrapolate: Extrapolate.CLAMP
        });
    }

    onPress(event){
        Animated.timing(this.state.sliderPosition, {
          toValue: 202.5, 
          duration: 100,
          easing: Easing.linear, 
        }).start();
    }

    render(){

        return (
    
            <View style={{ backgroundColor: '#fff' ,justifyContent:'space-between',height:'100%' }}>
    
                <Svg  style={{transform: [{ rotate: '180deg'}]  ,backgroundColor:'transparent'  }}   height="33%" width="100%" >
                     
     
               
                    <Path fill="#65cde6"   d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                
                   
                     <View style={{   transform: [{ rotate: '-180deg'}] ,position:'absolute', top: 70, right:responsiveScreenWidth(10), zindex:1}}>
    
    
                        <Image style={{height:responsiveWidth(30),width:responsiveWidth(50)}} resizeMode="contain" source={require('../../../assets/logo.png')} />
                        {/* <Text style={{color:'#273444',fontSize:responsiveScreenFontSize(4), fontFamily:'BarlowCondensed-SemiBold'}}>
                           Enbiosis
                        </Text> */}
    
                    </View>
    
                </Svg>
    
                <Svg  style={{transform: [{ rotate: '180deg'}]  ,backgroundColor:'transparent'  ,position:'absolute',top:0}}   height="30%" width="100%" >
                      
                     <Path fill="#49b3cc"   d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                   
                 </Svg>
    
                 <Svg  style={{ backgroundColor:'transparent'  ,position:'absolute',bottom:0,zindex:2}}   height="33%" width="100%" >
                       
                       <Path fill="#e8957e"   d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                    
                </Svg>
    
                
     
                <Text style={{color:'#273444',fontSize:responsiveScreenFontSize(3), fontFamily:'BarlowCondensed-SemiBold',alignSelf:'flex-start',marginLeft:20}}>
                           Giriş Yap
                </Text>
    
                <View style={{flexDirection:'row',alignItems:'center' ,backgroundColor:'#f4f4f4', width:'70%',borderTopRightRadius:40,borderBottomRightRadius:40,elevation:5,borderColor:'rgba(255, 111, 0,.3)',shadowColor:'rgba(255, 111, 0,.3)'}}>
    
        
                    <View style={{width:'100%',justifyContent:'center' ,alignSelf:'center'}}>
    
    
                        <Input
                        placeholder='Email'
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='Email'
                        inputContainerStyle={{borderBottomWidth:0}}
                        errorStyle={{ height:0}}
                        containerStyle={{backgroundColor:'#fff',width:'100%',padding:2,borderTopRightRadius:80,borderBottomRightRadius:80,justifyContent:'center' , borderBottomWidth:.3}}
                        leftIcon={
                            <Icon
                            name='email'
                            size={24}
                            color='black'
                            />
                        }
                        />
    
                        <Input
                        placeholder='Şifre'
                        // errorStyle={{ color: 'red' }}
                        // errorMessage='ENTER A VALID ERROR HERE'
                        errorStyle={{ height:0}}
                        containerStyle={{backgroundColor:'#fff',width:'100%',borderTopRightRadius:80,borderBottomRightRadius:80}}
                        inputContainerStyle={{borderBottomWidth:0,}}
                        leftIcon={
                            <Icon
                            name='lock'
                            type='material'
                            size={24}
                            color='black'
                            />
                        }
                        />
    
    
                    </View>
                    
                
                    <TapGestureHandler onHandlerStateChange={this.onStateChange2}>
                        <Animated.View
                        style={{
                            position:'absolute',right:-20,
                            opacity: this.buttonOpacity,
                            transform: [{ translateY: this.buttonY }]
                        }}
                        >
                        <Image tintColor={'#fcba03'}  style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/enter.png')} /> 

                        </Animated.View>
                    </TapGestureHandler>
    
                    {/* <TouchableOpacity onPress={ this.onStateChange} style={{ position:'absolute',right:-20}}>

                        <Animated.View
                            style={{ 
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}
                            >
                            <Image tintColor={'#fcba03'}  style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/enter.png')} /> 

                        </Animated.View>

                    </TouchableOpacity> */}


                    {/* <TouchableOpacity style={{ position:'absolute',right:-20}}>
                        <Image tintColor={'#fcba03'}  style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/enter.png')} /> 
                    </TouchableOpacity> */}
                    
    
                  
    
                    
                        
                </View>
    
    
               
                <Text style={{color:'#999',fontFamily:'BarlowCondensed-SemiBold',marginLeft:20,fontSize:responsiveScreenWidth(4),marginTop:5}}>{'< Unuttun mu'}</Text>
                 
                <Button 
                            onPress={()=>console.log('register')}
                            title= {'Register'}
                            containerStyle={{borderRadius:10  ,marginRight:15 , width:'20%',alignSelf:'flex-end' ,elevation:4}}
                            buttonStyle={{ backgroundColor:'#fff'}}
                            titleStyle={{color:'#e37c5f',fontSize:responsiveScreenFontSize(2.3),fontFamily:'BarlowCondensed-SemiBold'}}
                    />
    
                <Svg  style={{backgroundColor:'transparent',zindex:1}}   height="30%" width="100%" >
                     
                     <Path fill="#e37c5f" fill-opacity="1" d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                 
                 </Svg>
      
              
            </View>
        )
    }
}

export default LoginScreen

// style={{transform: [{ rotate: '55deg'}]}}