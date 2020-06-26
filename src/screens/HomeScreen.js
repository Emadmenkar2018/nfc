import React , {useState,useRef} from 'react';
import {View , StyleSheet} from 'react-native'
import TabBar from '../../components/main/TabBar'
import TableScreen from './TableScreen'
import FoodShceduleScreen from './FoodShceduleScreen'
import LogScreen from './LogScreen'
import ViewPager from '@react-native-community/viewpager';

const HomeScreen = (props) =>{

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
        <View style={{height:'100%', with:'100%', backgroundColor:"#fff"}}>

            <TabBar
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
                    {/* {pageIndex ===1 &&  */}
                        <FoodShceduleScreen
                            {...props} 
                        />
                    {/* // } */}
                </View>

                <View style={styles.full} key="2">
                    {/* {pageIndex ===2 &&  */}
                        <TableScreen
                            {...props} 
                        />
                    {/* // } */}
                </View>

                <View style={styles.full} key="3">
                    {/* {pageIndex ===3 &&  */}
                        <LogScreen
                        {...props} 
                    />
                    {/* } */}
                    
                </View>

            </ViewPager> 

        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({ 
    viewPager:{
        flex:1
    },  
    full:{
        backgroundColor:'#fff'
    },
    centerBtn:{
        position:'absolute',
        bottom:20,
        width:50,
        height:50,
        borderRadius:40,
        backgroundColor:'rgba(239, 239, 239,.9)',
        justifyContent:'center',
        // borderColor:'transparent',
        alignSelf:'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 4,
            height: 4,
        },
        shadowOpacity: 0.30,
        shadowRadius: 4.65, 
        elevation: 8,
        zIndex:1
    },
    centerBtn2:{  
        width:30,
        height:30,
        borderRadius:40,
        backgroundColor:'#73d1c9',
        alignSelf:'center', 
    },
}) 