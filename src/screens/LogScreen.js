import React, { useState ,useRef } from 'react';
import { StyleSheet, View,Text ,TouchableOpacity , ImageBackground} from 'react-native'; 
import LogTabBar from '../../components/log/LogTabBar' 
import ViewPager from '@react-native-community/viewpager';
import FoodLogScreen from './FoodLogScreen'
import SugarLogScreen from './SugarLogScreen'  
import { responsiveWidth, responsiveHeight, responsiveScreenFontSize } from 'react-native-responsive-dimensions'; 
import {Actions} from 'react-native-router-flux'


const LogScreen =(props) =>  {
    // constructor(props) {
    //     super(props);
    // }
    
    const [pageIndex, setPageIndex] = useState(3) 
    const [firstisSelected, setfirstIsSelected] = useState(true) 
    const [secondisSelected, setsecondIsSelected] = useState(false) 
    const [thirdisSelected, setthirdIsSelected] = useState(false) 
    
    const myViewPager = useRef(null); 

    const getCurrentpage=(index) =>{
        myViewPager.current.setPage(index) 
        setPageIndex(index)
    } 

    const setViewPage = (index) =>{  
        setPageIndex(index)
        myViewPager.current.setPage(index)  
    }

    const setFirstIsSelected = () =>{
        setfirstIsSelected(true)
        setsecondIsSelected(false)
        setthirdIsSelected(false)
    }
 
    const setSecondIsSelected =() =>{
        setfirstIsSelected(false)
        setsecondIsSelected(true)
        setthirdIsSelected(false)
    }

    const setThirdIsSelected =()=>{
        setfirstIsSelected(false)
        setsecondIsSelected(false)
        setthirdIsSelected(true)
    }
 
 
        return (
        <View style={{width:'100%',  height : '100%',backgroundColor:'#fff',paddingHorizontal:10,justifyContent:'space-evenly'}}>


             {/* <LogTabBar
                setViewPage={setViewPage}
                pageIndex={pageIndex} 
                // isSelected = {isSelected}
                setFirstIsSelected= {setFirstIsSelected}
                setSecondIsSelected ={setSecondIsSelected}
                setThirdIsSelected = {setThirdIsSelected}
                
                firstisSelected={firstisSelected}
                secondisSelected={secondisSelected}
                thirdisSelected={thirdisSelected}
                // setIsSelected={setIsSelected}
            />  */}
                <Text style={{color:"#253547" , fontFamily:'BarlowCondensed-SemiBold',fontSize:responsiveScreenFontSize(2.2)}}>Geçmiş</Text>

                <View style={{width:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center', marginBottom:10}}>
                    <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>Actions.push('table')}>
                        <ImageBackground resizeMode={'cover'}  style={{width:'100%',height:responsiveHeight(25) ,borderRadius:10,marginBottom:0,backgroundColor:'#000'}} source={require('../../assets/sugar.jpg')}>
                            <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255, 245, 242,.2)',justifyContent:'flex-end',alignItems:'flex-start',paddingLeft:20,borderRadius:10}}>

                                <Text style={{fontSize:25,color:'#253547',marginBottom:10,fontFamily:'BarlowCondensed-Regular'}}>Şeker Log</Text>
    
                            </View>

                        </ImageBackground>   
                    </TouchableOpacity>
                </View>

                <View style={{width:'100%', flexDirection:'row',alignItems:'center',justifyContent:'center', alignSelf:'flex-end'}}>
                    <TouchableOpacity style={{width:'100%',height:'100%'}} onPress={()=>Actions.push('table')}>
                        <ImageBackground resizeMode={'cover'}  style={{width:'100%',height:responsiveHeight(25) ,borderRadius:10,marginBottom:0,backgroundColor:'#000'}} source={require('../../assets/food.jpg')}>
                            <View style={{width:'100%',height:'100%',backgroundColor:'rgba(255, 245, 242,.2)',justifyContent:'flex-end',alignItems:'flex-start',paddingLeft:20,borderRadius:10}}>

                                <Text style={{fontSize:25,color:'#253547',marginBottom:10,fontFamily:'BarlowCondensed-Regular'}}>Yemek Log</Text>
    
                            </View>

                        </ImageBackground>   
                    </TouchableOpacity>
                </View>
 
                {/* <ViewPager ref={myViewPager} scrollEnabled={false} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
                     

                    <View style={styles.full} key="1">
                       
                             <FoodLogScreen
                                 {...props} 
                             />
                        
                     </View>
     
                     <View style={styles.full} key="2">
                   
                             <SugarLogScreen
                                 {...props} 
                             /> 
     
                     </View>   
     
                 </ViewPager>  */}

        </View>
        ) 
}

export default LogScreen
 
const styles = StyleSheet.create({
    viewPager:{
        flex:1
    },  
//   container :
//   width:'100%',
//    height : '100%',
   
});