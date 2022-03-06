
import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {createAppContainer} from '@react-navigation'
/*
import {Home,Exit } from './screens';
componentDidMount(){
    setTimeout( () => {
        SplashScreen.hide();
    }, 5000 );

<View style={styles.viewLook}>
          <Text style={styles.textLook}>This is Front Page</Text>
        </View>
*/

/*
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

function ExitScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    </View>
  );
}

const Drawer = createDrawerNavigator();

const appNavigator=createDrawerNavigator({
  Home:{
    screen: App
  }
})
*/

class App extends React.Component {

  componentDidMount(){
    setTimeout( () => {
        SplashScreen.hide();
    }, 5000 )};

  render(){
      return (
        <View style={styles.viewLook}>
          <Text style={styles.textLook}>Home</Text>
        </View>
      );
}
}


const styles = StyleSheet.create({
  viewLook:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black'
  },
  textLook:{
    color:'white',
    fontSize: 25,
    fontFamily: 'google_fonts'
  }
});




export default App;

