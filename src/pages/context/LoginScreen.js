import React from 'react';
import { View,Text, StyleSheet, TextInput, Button,FlatList,ToastAndroid,TouchableOpacity,Dimensions} from 'react-native';

import Context from './context';
import { useNavigation } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
const { width, height } = Dimensions.get('window');

export default class Footer extends React.Component{
  // static navigationOptions = {header: null}
  constructor(props,navigate){
   super(props);
   this.state = {
   newTask: '',
   newpassword:'',
  
   }
  }
static contextType = Context;

//validations
 fillTextInput = () => {
    if(this.state.newTask == ''){
          ToastAndroid.show('email address is required', ToastAndroid.SHORT);
          return false
        }
    else{
    //  this.email_validates()
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.newTask) === false) {
 
        ToastAndroid.show('invalid email address', ToastAndroid.SHORT);
          return false;
        }
      else {
        console.log("valid email");
      }
   }
if(this.state.newpassword ==''){
     ToastAndroid.show('password is required', ToastAndroid.SHORT);
 }
  else{
     
     ToastAndroid.show('sucess', ToastAndroid.SHORT);
    //  this.context.addNewTask(this.state.newTask)
  this.props.navigation.navigate('Home')
     

     }
   return true
  
 };

 //email validation
 email_validates = () => {
     let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (reg.test(this.state.newTask) === false) {
 
        ToastAndroid.show('invalid email address', ToastAndroid.SHORT);
          return false;
        }
      else {
        console.log("valid email");
      }
    }
   

 
  render(){

   return(
    <View style={styles.container}>
      <View style={styles.parent}>
        <View style={styles.child}>
              <Text style={styles.title}>Login</Text>


              <TextInput 
                    style={styles.input} 
                    onChangeText={(x)=>{this.setState({newTask: x})}}
                    keyboardType='email-address'
                    placeholder="enter mail id" 
                   />

                <TextInput 
                    style={styles.input} 
                    onChangeText={(pass)=>{this.setState({newpassword: pass})}}
                    placeholder="enter a password" 
                    secureTextEntry={true}
                    />

                    
                      <TouchableOpacity  style={{marginTop:25}}   onPress={() => this.fillTextInput()}>
                      <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#720017', '#A37C']} style={styles.linearGradient}>
                           <Text style={styles.buttontext}>Login</Text>
                           </LinearGradient>
                      </TouchableOpacity> 



       {/* <TouchableOpacity style={styles.button1} 
       onPress={() => this.props.navigation.navigate('Home')}>
        <Text style={styles.signinText1}>Create new</Text>
    </TouchableOpacity> */}
        </View>

   

      </View>
     

    {/* data show */}
                <View>
                         <FlatList 
                         data={this.context.tasks} 
                         keyExtractor={(item, index) => index.toString()}
                         renderItem={({item, index}) => {
                         return (
                         <View style={styles.rowcontainer}>
                         <Text style={styles.text}>Show:  {item}</Text>
                     
                         </View>
                         )
                         }}
                         />
                      </View>
     </View>
    );
   }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  flexDirection:'column',
 },
 title: {
  top:'-10%',
  fontSize: 30,
  fontWeight:'700'
 },
 input: {
  width:'75%',
  borderWidth:1,
  borderBottomRightRadius:20,
  padding: 5,
  alignSelf:'center',
  marginTop:10
 },

 loginbutton:{
     alignSelf:'center',
     backgroundColor:'blue',
     width:'60%',
     height:50,
     marginVertical:10,
     borderTopLeftRadius:10,
     borderBottomEndRadius:10,
     borderBottomLeftRadius:10
},
linearGradient: {
  width: 279,
  height: 45,
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: height * .03,
  borderRadius: 6
},
buttontext:{
     textAlign:'center',
     padding:10,
},
text: {
  padding: 10,
  
 },
 delete: {
  alignSelf: 'flex-end',
  padding: 8,
  fontSize: 15,
 },

 parent : {
  height : '80%',
  width : '100%',
  transform : [ { scaleX : 2 } ],
  borderBottomStartRadius : 200,
  borderBottomEndRadius : 200,
  overflow : 'hidden',
},
child : {
  flex : 1,
  transform : [ { scaleX : 0.5 } ],
  backgroundColor : '#D9AC2A',
  alignItems : 'center',
  justifyContent : 'center'
}
});