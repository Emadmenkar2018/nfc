import React from 'react'
import {View ,Text} from 'react-native'
import { responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import {Icon} from 'react-native-elements' 
import { Actions } from 'react-native-router-flux';


const InqueryComp = (props) =>{ 
 
    // let history = useHistory();
    return(
        <View style={{width:'90%',backgroundColor:'#fff',marginVertical:10,alignSelf:'center',padding:15,borderRadius:10,justifyContent:'space-between',flexDirection:'row'}}>

            <View>
            
                <Text style={{color:'#273444', fontSize:responsiveScreenFontSize(2.),fontFamily:'BarlowCondensed-SemiBold'}}>{props.title}</Text>

            </View>

            <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center'}}>

                <Icon name="save" type="material" containerStyle={{marginRight:10}} size={responsiveScreenFontSize(2.5)} color={'#273444'} />

                <Icon name="keyboard-arrow-right"  onPress={()=>Actions.push('table') }  type="material" size={responsiveScreenFontSize(2.5)} color={'#273444'} />

            </View>


        </View>
    )
}
export default InqueryComp;