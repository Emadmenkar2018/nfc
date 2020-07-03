import React, {useState} from 'react'
import {View, Modal ,Text , Image , Picker} from 'react-native'
import { responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions'
import {Button ,Input} from 'react-native-elements'

const AddMealModal  = (props) => {

    const [ready,setReady] = useState(true)
    const [food,setFood] = useState(true)
    const [selectedValue,setSelectedValue] = useState("java")


    return(

        <Modal
            transparent={true} 
            
            visible = {props.mealVisibility} >

            <View style={{height:'100%',width:'100%' ,alignContent:'center',alignItems:'center',justifyContent:'flex-end',backgroundColor:'rgba(0,0,0,.7)'}} >


                <View style={{height:'45%',width:'100%',backgroundColor:'#f4f4f4',alignContent:'center',alignItems:'center',justifyContent:'space-evenly', alignSelf:'flex-end'}} >
                    
                    <Text style={{color:'#000',fontSize:responsiveScreenFontSize(2.5),fontFamily:'BarlowCondensed-SemiBold'}}>{'Yemek Ekle'}</Text>


                    <View style={{width:'70%',justifyContent:'center'}}>

                        <Input 
                            containerStyle={{width:'100%',alignSelf:'center',borderRadius:20 }}
                            errorStyle={{height : 0}}
                            placeholder={'Besin Giriniz'}
                            inputStyle={{  fontFamily:'BarlowCondensed-Regular'}}
                            value={food}
                            onChangeText={text=> setFood(text)}
                        />

                        <Picker
                                selectedValue={selectedValue}
                                style={{ alignSelf:'center',  width:'100%',justifyContent:'center',textAlign:'center'}}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="Java" value="java" />
                                <Picker.Item label="JavaScript" value="js" />
                        </Picker>

                    </View>


 
                    <Button 
                        onPress={()=>props.closeMealModal()}
                        title= {ready ? "Iptal": 'Ana Sayfaya Dön'}
                        containerStyle={{borderRadius:20  ,marginBottom:15 , width:'30%'}}
                        buttonStyle={{ backgroundColor:'#FF6F00'}}
                        titleStyle={{color:'#fff',fontSize:responsiveScreenFontSize(1.8),fontFamily:'BarlowCondensed-SemiBold'}}
                    />


                </View>

            </View>

        </Modal>

    )
}
export default AddMealModal