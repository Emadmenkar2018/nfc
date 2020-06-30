import React from 'react'
import {View, ScrollView} from 'react-native'
import InqueryComp from '../../components/log/InqueryComp'

const SugarLogScreen = ()=>{

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