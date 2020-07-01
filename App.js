import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'; 
import HomeScreen from './src/screens/HomeScreen'   
import NfcReaderScreen from './src/screens/NfcReaderScreen'   
import TableScreen from './src/screens/TableScreen'    
import { Router, Scene } from 'react-native-router-flux'

// import {Provider} from 'react-redux';

  
// const store = initStore(); 


export default class App extends Component {
  render() {
    return ( 
        // <NativeRouter>
        //   <Switch>
        //   <Route  
        //       exact path="/" 
        //       render={props => {
        //         return <HomeScreen
        //           {...props}
        //         />
        //       }}
        //     /> 

        //     <Route  
        //       exact path="/Main/NfcReader" 
        //       render={props => {
        //         return <NfcReaderScreen
        //           {...props}
        //         />
        //       }}
        //     /> 

            
        //     <Route  
        //       exact path="/Main/Table" 
        //       render={props => {
        //         return <TableScreen
        //           {...props}
        //         />
        //       }}
        //     /> 

        //   </Switch>
        // </NativeRouter> 
        <Router>
        <Scene key = "root">
           <Scene key = "home" component = {HomeScreen}  hideNavBar={true} title = "Home" initial = {true} />
           <Scene key = "nfcReader" component = {NfcReaderScreen} hideNavBar={true}  title = "NfcReader" />
           <Scene key = "table" component = {TableScreen} hideNavBar={true}   title = "Table" />
        </Scene>
      </Router>
      
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});