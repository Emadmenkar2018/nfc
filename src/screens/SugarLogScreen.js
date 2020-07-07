import React,{useEffect} from 'react'
import {View, ScrollView} from 'react-native'
import InqueryComp from '../../components/log/InqueryComp'
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth'

const SugarLogScreen = ()=>{
 


    // firestore().collection("user_meals").where('content' , "==","Yumurta").where('date' , "==","2020-07-06").get().then(function(querySnapshot){
    //     querySnapshot.forEach(doc => {
    //        console.log(doc.data());
    //     });
    //   }).catch(err => {
    //      console.log('Error getting documents', err);
    //   });
 

    return (
        <ScrollView>

            <InqueryComp
                title='7 Gün Önce'
            />

            <InqueryComp
                title='14 Gün Önce'
            />

            <InqueryComp
                title='30 Gün Önce'
            />

        </ScrollView>
    )
}

export default SugarLogScreen