import React, { useState ,useEffect} from 'react';
import { Button, StyleSheet, Text, View } from 'react-native'; 
import HomeScreen from './src/screens/HomeScreen'    
import NfcReaderScreen from './src/screens/NfcReaderScreen'   
import TableScreen from './src/screens/TableScreen'    
import { Router, Scene } from 'react-native-router-flux'
import auth   from '@react-native-firebase/auth';
import LoginScreen from './src/screens/auth/LoginScreen'
import RegisterScreen from './src/screens/auth/RegisterScreen'
import database from '@react-native-firebase/database';

const App = ()=>{

  

  const config = { 
    apiKey :"AIzaSyBBfGNm7-oRvajx8mtuC075G83qs98IZ8E",
    authDomain : ""
  }
  

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }
  
  useEffect(() => {
    const subscriber =  auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <Router>
        <Scene key = "auth">
           <Scene key = "login" component = {LoginScreen}  hideNavBar={true} title = "Login" initial = {true} /> 
           <Scene key = "register" component = {RegisterScreen}  hideNavBar={true} title = "Register"   /> 
        </Scene>
      </Router>
    );
  }

  else { 

    return (  
           <Router>
              <Scene key = "root">
                  <Scene key = "home" component = {HomeScreen}  hideNavBar={true} title = "Home" initial = {true} />
                  <Scene key = "nfcReader" component = {NfcReaderScreen} hideNavBar={true}  title = "NfcReader" />
                  <Scene key = "table" component = {TableScreen} hideNavBar={true}   title = "Table" />
              </Scene>
          </Router>
      ) 

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

export default App