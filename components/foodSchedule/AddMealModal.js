import React, {useState} from 'react'
import {View, Modal ,Text , TextInput , Picker,Image } from 'react-native'
import { responsiveScreenFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'
import {Button ,Input} from 'react-native-elements'
import DatePicker from 'react-native-datepicker'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import LinearGradient from 'react-native-linear-gradient';
import { Overlay } from 'react-native-elements';
import {addingextraMeal ,NewaddingextraMeal,SelectMeal} from '../../helpers/firebase/FoodHelpers'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const AddMealModal  = (props) => {

    const user =  auth().currentUser.uid;
     

    const [ready,setReady] = useState(true)
    const [food,setFood] = useState("")
    const [date,setDate] = useState("")
    const [selectedValue,setSelectedValue] = useState("Kahvaltı")
    const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0

    const setValues = () =>{ 
        NewaddingextraMeal(food ,selectedValue, date)
        props.closeMealModal()
    }

    const selectedValueMeal = () =>{
        SelectMeal()
    }
    var today = new Date();

    return( 
        <Modal
        transparent={true}  
        visible = {props.mealVisibility} >
 
            <View style={{height:'100%',width:'100%' ,alignContent:'center',alignItems:'center',justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,.7)'}} >


                <View style={{marginHorizontal:5 , height:'50%',width:'100%',backgroundColor:'#fff',alignContent:'center',alignItems:'center',justifyContent:'space-evenly', alignSelf:'flex-end'}} >
                    
                     
                    <KeyboardAwareScrollView style={{width:'100%'  }} behavior='padding' keyboardVerticalOffset={keyboardVerticalOffset}>

                    <View style={{width:'100%',height:'100%',justifyContent:'center' , alignItems:'center' }}>

                        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#e6866c', '#fe796d', '#e8baae']} style={{width:'100%',height:responsiveHeight(10),marginBottom:20,marginTop:0,justifyContent:'center',alignItems:'center'}}>
                            <Text style={{fontFamily:'BarlowCondensed-SemiBold',fontSize:responsiveScreenFontSize(2),color:'#fff',letterSpacing:5}}>
                                Yemek Giriniz
                            </Text>
                        </LinearGradient>   

                        <View style={{width:'70%',justifyContent:'center'}}>

                            <View style={{flexDirection:'row', height:responsiveHeight(7), marginBottom:15,alignItems:'center',justifyContent:'center',borderRadius:10 ,borderWidth:.8 ,borderColor:'rgba(101, 205, 230,.7)'}} >

                                <Image
                                    source={require('../../assets/grape.png')}
                                    resizeMode={'contain'}
                                    style={{width:responsiveWidth(6),height:responsiveWidth(6),}}
                                />
                                <TextInput 
                                    placeholderTextColor="#999"
                                    //here fix the width of the input
                                    style={{textAlign:'center',color:'#253545',fontFamily:'BarlowCondensed-Regular',fontSize:responsiveScreenFontSize(2) ,width:'88%',marginLeft:-5,alignSelf:'center' }}                                errorStyle={{height : 0}}
                                    placeholder={'Besin Giriniz'}
                                    inputStyle={{  }}
                                    value={food}
                                    onChangeText={text=>setFood(text.replace(/[^0-9,.&a-z ]/gi, '')) }

                                    />
                            </View>


                            <View style={{height:responsiveHeight(7),borderWidth:.8,borderRadius:10 ,borderColor:'rgba(101, 205, 230,.7)', marginBottom:15,alignItems:'center'}}>

                                <Picker 
                                        selectedValue={selectedValue} 
                                        itemStyle={{ backgroundColor: "#000", TextStyle : { fontSize:responsiveScreenFontSize(5),fontFamily:'BarlowCondensed-Bold',color:'#253545' } }}
                                        style={{   width:'100%', justifyContent:'center' ,color:'#253545',fontFamily:'BarlowCondensed-Regular' }}
                                        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                        >
                                        <Picker.Item color='#253545' label="Kahvaltı" value="Kahvaltı" />
                                        <Picker.Item color='#253545' label="Ana Yemeği" value="Ana Yemeği" />
                                        <Picker.Item color='#253545' label="Akşam Yemeği" value="Akşam Yemeği" />
                                        <Picker.Item color='#253545' label="Ek Yemek 1" value="Ek Yemek 1" />
                                        <Picker.Item color='#253545' label="Ek Yemek 2" value="Ek Yemek 2" />
                                </Picker>

                            </View>

                            <View style={{marginBottom:10,height:responsiveHeight(7),borderWidth:.8,borderRadius:10 ,borderColor:'rgba(101, 205, 230,.7)' ,justifyContent:'center'}}>

                                <DatePicker
                                    style={{width:'100%' }}
                                    date={ date}
                                    mode="date"
                                    placeholder="Tarih Seç"
                                    format="YYYY-MM-DD"
                                    minDate="2016-05-01"
                                    maxDate={today}
                                    confirmBtnText="Seç"
                                    cancelBtnText="İptal"
                                    customStyles={{
                                        
                                        dateIcon: {
                                            position: 'absolute',
                                            left: 0,
                                            top: 4,
                                            marginLeft: 0
                                        },
                                        dateInput: { 
                                            borderWidth:0, 
                                        },
                                        placeholderText:{
                                            color:'#999'
                                        },
                                        dateText:{ 
                                            color:'#253545'
                                        }
                                        // ... You can check the source to find the other keys.
                                    }}
                                    onDateChange={(date) => setDate(date)}
                                    />

                            </View>
    
                        </View>

                    </View>

                    </KeyboardAwareScrollView>

 
                    <View style={{flexDirection:'row',alignItems :'center',justifyContent:'space-evenly',width:'70%'}}>

                        <Button 
                            onPress={()=> setValues()}
                            title= { "Tamam"}
                            containerStyle={{borderRadius:10  ,marginBottom:15 , width:'35%'}}
                            buttonStyle={{ backgroundColor:'#65cde6'}}
                            titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.8),fontFamily:'BarlowCondensed-SemiBold'}}
                        />

                        

                        <Button 
                            // onPress={()=>selectedValueMeal()}
                            onPress={()=>props.closeMealModal()}
                            title= { "Iptal" }
                            containerStyle={{borderRadius:10  ,marginBottom:15 , width:'35%', borderWidth:1,borderColor:'#65cde6'}}
                            buttonStyle={{ backgroundColor:'transparent'}}
                            titleStyle={{color:'#65cde6',fontSize:responsiveScreenFontSize(1.8),fontFamily:'BarlowCondensed-SemiBold'}}
                        />
                    </View>


                </View>

            </View>
 
        </Modal>

    )
}
export default AddMealModal