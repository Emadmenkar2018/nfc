import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { Table, TableWrapper, Row } from 'react-native-table-component';
import TableHeader from '../../components/table/TableHeader'
import {getUserMeals} from '../../helpers/firebase/FoodHelpers'
import auth from '@react-native-firebase/auth' 
import firestore from '@react-native-firebase/firestore';

export default class FoodTableScreen extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      tableHead: ['DATE', 'Kahvaltı', 'Ana Yemek', 'Akşam Yemek', 'Ek yemek 1', 'Ek yemek 2' ],
      widthArr: [80, 80, 80, 80, 80, 80 ],
      userMeals : []
    }
  }
 
  componentDidMount(){
    // this.getUserMeals()
    
  }

  
    
  
  getUserMeals = () => {
    let userMeals = []
    const user =  auth().currentUser.uid;
    firestore().collection("user_meals").where('uid' , "==",user).get()
    .then(querySnapshot => {
        if (querySnapshot.size > 0) {
            querySnapshot.forEach(doc => {   
               userMeals.push(doc)
                // this.userMeals.push({...doc.data(), doc_id : doc.id})  
            });
        } 
        this.setState({ userMeals }); 
      

      })
      // this.setState({userMeals })
        
        
      // return userMeals ;g
    }

  render() { 
    const state = this.state;
    getUserMeals()
    console.log('ds3', this.state.userMeals)   
    // console.log('ds3', this.getUserMeals())   
    const tableData = [];
    for (let i = 0; i < 20; i += 1) {
      const rowData = [];
      for (let j = 0; j < 9; j += 1) {
        rowData.push(`${i}${j}`);
      }
      tableData.push(rowData);
    }
 
    return (
      <View style={styles.container}>
      
        <TableHeader/>
 

        <ScrollView style={{}} horizontal={true}>
          <View>
            <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text}/>
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{borderWidth: 1, borderColor: '#C1C0B9'}}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index%2 && {backgroundColor: 'rgba(255, 111, 0,0.2)'}]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff', },
  header: { height: 50, backgroundColor: 'rgba(255, 111, 0,0.8)',  },
  text: { textAlign: 'center', fontWeight: '100',fontFamily:'BarlowCondensed-Medium' },
  dataWrapper: { marginTop: -1 },
  row: { height: 40, backgroundColor: '#fff' }
});