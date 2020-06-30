import React, { Component } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route,Scene,useHistory, Switch } from 'react-router-native'; 
import HomeScreen from './src/screens/HomeScreen'   
import NfcReaderScreen from './src/screens/NfcReaderScreen'   

// import {Provider} from 'react-redux';

  
// const store = initStore(); 


export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>
        <NativeRouter>
          <Switch>
          <Route  
              exact path="/" 
              render={props => {
                return <HomeScreen
                  {...props}
                />
              }}
            /> 

            <Route  
              exact path="/Main/NfcReader" 
              render={props => {
                return <NfcReaderScreen
                  {...props}
                />
              }}
            /> 
          </Switch>
        </NativeRouter>
      // </Provider>
      
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