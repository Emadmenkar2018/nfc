import React , {useState, Component} from 'react'
import { View ,Text,Image,TouchableOpacity , Dimensions, ToastAndroid ,Platform,Alert} from 'react-native'
import Svg ,{ Defs , Path , Stop  , LinearGradient , Polyline } from 'react-native-svg'
import Animated, { Easing } from 'react-native-reanimated';
import { TapGestureHandler, State } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');
import auth   from '@react-native-firebase/auth';
import { responsiveScreenFontSize, responsiveWidth, responsiveScreenWidth } from 'react-native-responsive-dimensions' 
import {Input , Icon,Button, ThemeConsumer} from 'react-native-elements'  
import { Actions } from 'react-native-router-flux';
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

  class  RegisterScreen  extends Component {

    // const [email, setEmail] = useState('')
    // const [password, setpPssword] = useState('')
    constructor() {
        super();

        this.buttonOpacity = new Value(1);

        this.onPress = this.onPress.bind(this);
        
        this.state = {
            sliderPosition: new Animated.Value(0),
            email:'',
            password:'',
            passwordError :'',
            emailError:'',
            username:''
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

    
    onRegister  = () =>{ 
        var re = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (this.state.email.length > 0 || this.state.password.length > 0 || this.state.username.length >0){
            if (this.state.username.lnegth < 6 ){
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Kullanıcı adı kısadır!', ToastAndroid.SHORT)
                } else {
                    Alert.alert('Kullanıcı adı kısadır!');
                }   
            }
            else if (!re.test(this.state.email)){
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Email geçersiz', ToastAndroid.SHORT)
                } else {
                    Alert.alert('Email geçersiz');
                } 
            }
            else if (this.state.password.length < 6){
                if (Platform.OS === 'android') {
                    ToastAndroid.show('Kullanıcı adı kısadır!', ToastAndroid.SHORT)
                } else {
                    Alert.alert('Kullanıcı adı kısadır!');
                } 
            }
            else { 
                auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                  console.log('User account created & signed in!');
                  Actions.push('root')
                })
                .catch(error => {
                  if (error.code === 'auth/email-already-in-use') {
                      this.setState({emailError:'email is is already in use!'})
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('That email address is already in use!', ToastAndroid.SHORT)
                    } else {
                        Alert.alert('That email address is already in use!');
                    }   
                  }
              
                  if (error.code === 'auth/invalid-email') {
                    this.setState({emailError:'email is is already in use!'})
                    if (Platform.OS === 'android') {
                        ToastAndroid.show('That email address is invalid!', ToastAndroid.SHORT)
                    } else {
                        Alert.alert('That email address is invalid!');
                    }  
                  }
              
                  console.log(error);
                });
            }
            
        }
        else { 
            this.setState({emailError:'Bilgileri giriniz' , passwordError:'Bilgileri giriniz'})
            if (Platform.OS === 'android') {
                ToastAndroid.show('Bilgileri giriniz', ToastAndroid.SHORT)
            } else {
                Alert.alert('Bilgileri giriniz');
            } 
        }
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
                       
                       <Path fill="#fe796d"   d="M0,64L48,96C96,128,192,192,288,192C384,192,480,128,576,128C672,128,768,192,864,192C960,192,1056,128,1152,90.7C1248,53,1344,43,1392,37.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"/>
                    
                </Svg>
    
                
     
                <Text style={{color:'#273444',fontSize:responsiveScreenFontSize(3), fontFamily:'BarlowCondensed-SemiBold',alignSelf:'flex-end',marginRight:20}}>
                           Kayıltı Ol
                </Text>
    
                <View style={{alignSelf:'flex-end',flexDirection:'row',alignItems:'center' ,backgroundColor:'#fff', width:'75%',borderColor:'rgba(255, 111, 0,.3)',shadowColor:'rgba(255, 111, 0,.3)',marginLeft:5}}>
    
        
                    <TouchableOpacity onPress={this.onRegister} style={{ zindex:1,marginRight:-20,elevation:8,alignSelf:'center'}}>
                        <Image   style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/plus.png')} /> 
                    </TouchableOpacity>


                    <View style={{width:'100%',justifyContent:'center' ,alignSelf:'center',zindex:-1}}>
    
    
                        <Input
                            placeholder='Username'
                            errorStyle={{ color: 'red' }}
                            errorMessage={this.state.emailError}
                            value={this.state.username}
                            onChangeText = {username=>this.setState({username})}
                            inputStyle={{fontSize:responsiveScreenFontSize(1.8)}}
                            inputContainerStyle={{borderBottomWidth:0}}
                            errorStyle={{ height:0}}
                            containerStyle={{paddingLeft:30,backgroundColor:'#fff',width:'100%',padding:2,justifyContent:'center' , borderBottomWidth:.3,borderTopLeftRadius:60,elevation:5}}
                            leftIcon={
                                <Icon
                                name='person'
                                size={20}
                                color='black'
                                />
                            }
                        />

                        <Input
                        placeholder='Email'
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.state.emailError}
                        value={this.state.email}
                        onChangeText = {email=>this.setState({email})}
                        inputStyle={{fontSize:responsiveScreenFontSize(1.8)}}
                        inputContainerStyle={{borderBottomWidth:0}}
                        errorStyle={{ height:0}}
                        containerStyle={{backgroundColor:'#fff',width:'100%',padding:2,justifyContent:'center' , borderBottomWidth:.3 ,elevation:5,paddingLeft:30}}
                        leftIcon={
                            <Icon
                            name='email'
                            size={20}
                            color='black'
                            />
                        }
                        />
    
                        <Input
                        placeholder='Şifre'
                        value={this.state.password}
                        onChangeText = {password=>this.setState({password})}
                        secureTextEntry={true}
                        errorStyle={{ color: 'red' }}
                        errorMessage={this.state.passwordError}
                        inputStyle={{fontSize:responsiveScreenFontSize(1.8)}}
                        errorStyle={{ height:0}}
                        containerStyle={{backgroundColor:'#fff',width:'100%',borderBottomLeftRadius:60,elevation:5,justifyContent:'center' ,padding:2,paddingLeft:30}}
                        inputContainerStyle={{borderBottomWidth:0,}}
                        leftIcon={
                            <Icon
                            name='lock'
                            type='material'
                            size={20}
                            color='black'
                            />
                        }
                        />
    
    
                    </View>
                    
                
                    {/* <TapGestureHandler onHandlerStateChange={this.onStateChange2}>
                        <Animated.View
                        style={{
                            zindex:1,marginLeft:-20,elevation:5,
                            opacity: this.buttonOpacity,
                            transform: [{ translateY: this.bgY }]
                        }}
                        >
                        <Image tintColor={'#fcba03'}  style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/enter.png')} /> 

                        </Animated.View>
                    </TapGestureHandler> */}
    
                    {/* <TouchableOpacity onPress={ this.onStateChange} style={{ position:'absolute',Left:-20}}>

                        <Animated.View
                            style={{ 
                                opacity: this.buttonOpacity,
                                transform: [{ translateY: this.buttonY }]
                            }}
                            >
                            <Image tintColor={'#fcba03'}  style={{width:responsiveWidth(10),height:responsiveWidth(10)}} resizeMode="contain" source={require('../../../assets/enter.png')} /> 

                        </Animated.View>

                    </TouchableOpacity> */}


                    
                    
    
                  
    
                    
                        
                </View>
     
                <Button 
                            onPress={()=>Actions.push('login')}
                            title= {'Login'}
                            containerStyle={{borderRadius:10  ,marginLeft:15 , width:'20%',alignSelf:'flex-start' ,elevation:4}}
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

export default RegisterScreen

// style={{transform: [{ rotate: '55deg'}]}}