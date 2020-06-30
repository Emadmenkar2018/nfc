import React, { useState ,useRef } from 'react';
import { StyleSheet, View,Text } from 'react-native'; 
import LogTabBar from '../../components/log/LogTabBar' 
import ViewPager from '@react-native-community/viewpager';
import FoodLogScreen from './FoodLogScreen'
import SugarLogScreen from './SugarLogScreen' 
import { BackButton } from 'react-router-native';


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
        <View style={{width:'100%',  height : '100%',backgroundColor:'#F4F4F4'}}>


             <LogTabBar
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
            /> 

                <ViewPager ref={myViewPager} scrollEnabled={false} transitionStyle='curl' style={styles.viewPager} initialPage={0} >
                     

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
     
                 </ViewPager> 

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