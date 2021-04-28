import React from 'react';
import { View, StyleSheet } from 'react-native';
import Footer from './LoginScreen';
import GlobalState from './Global';

export default class LoginApp extends React.Component{
 render(){
  return(
   <GlobalState>
    <View style={styles.container}>
     <Footer/> 
    </View>
   </GlobalState>
  );
 }
}
const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection:'column',
  
 }
});