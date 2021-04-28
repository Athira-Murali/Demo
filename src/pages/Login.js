
import React, { Component } from 'react';

import { StyleSheet, View, Button,Text,Image,TextInput,} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class FirstPage extends Component {
  constructor(props, context, validations) {
    super(props, context);
    this.state = {
       
     hidePassword: true ,
     hideconfirmpassword:true,
      text:'',
     email: '',
     password: '',
     
    };

  }
  // email_validates = () => {

  //   let text = this.state.email;
  //   let emailError = this.state.emails;
  //   let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  //   if (reg.test(text) === false) {
  //     // this.setState({Error1:'Invalid email'});
  //     console.warn("Invalid email")
  //     this.setState({ email: text })
  //     return false;
  //   }
  //   else {
  //     // this.setState({ email: text })
  //     this.setState({ Errormail: 'Email is Correct' });
     
  //   }
  // }

  myfun = () => {
   

 if (this.state.email == "") {
      this.setState({ Errormail: 'please fill the email_id' });
    }
    else {
      // this.setState({ Errormail: '' });
      // AsyncStorage.setItem('any_key_here',this.state.email)
      
     }

   

    if(this.state.password == ""){
      this.setState({ Errorpwd: 'please fill the passsword' })
     }
     else{
      this.setState({ Errorpwd: '' })
      // AsyncStorage.setItem('any_key_here',this.state.password)

     } 

    

  }
  

  static navigationOptions = {
    title: 'Sign In',
    headerStyle: {
      backgroundColor: '#FFF',
     },
    headerTintColor: '#000',
    
    headerTitleStyle: {
      fontWeight: 'bold',
     
    },
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
<View style={styles.chevron}>
        <View style={styles.chevronMain} />
        <View style={[styles.chevronTriangle, styles.chevronTopLeft]} />
        <View style={[styles.chevronTriangle, styles.chevronTopRight]} />
        <View style={[styles.chevronTriangle, styles.chevronBottomLeft]} />
        <View style={[styles.chevronTriangle, styles.chevronBottomRight]} />
      </View>  
            
      <View style={styles.chevron}>
        <View style={styles.chevronMain} />
        <View style={[styles.chevronTriangle, styles.chevronTopright]} />
        <View style={[styles.chevronTriangle, styles.chevronTopleft]} />
        <View style={[styles.chevronTriangle, styles.chevronBottomright]} />
        <View style={[styles.chevronTriangle, styles.chevronBottomleft]} />
      </View>  



          <View style={{alignItems:'center',justifyContent:'center',marginVertical:50}}>
            <View style={styles.circle}>
                <Image  style={styles.imLogo} source={require('../images/signin.png')}></Image> 
            </View>
               
                      <View style={styles.sectionStyle}>
                        <TextInput
                        onChangeText={(text) => this.setState({ email: text })}
                          placeholder=' enter email address'
                          keyboardType='email-address'
                          underlineColorAndroid="transparent"
                        style={styles.textinput} />
                      
                    </View>
                    <View style={styles.sectionStyle}>
                    <TextInput
                      onChangeText={(pass) => this.setState({ password: pass })}
                        placeholder='enter password'
                        returnKeyType='go'
                        secureTextEntry
                        autoCorrect={false}
                        style={styles.textinput}
                      />
                  </View>
               
              <TouchableOpacity style={styles.button}  onPress={() =>navigate('Register')} ><Text style={{textAlign:'center',padding:10,fontSize:18}}>next</Text></TouchableOpacity>


        {/* <Button title='Sign in' style={styles.button}
        onPress={() =>navigate('Register')}
        /> */}

        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
chevron: {
    width: 150,
    height: 50
  },
  chevronMain: {
    width: 150,
    height: 50,
    backgroundColor: '#FFB90F',
    left:250
  },
  chevronTriangle: {
    backgroundColor: 'transparent',
    borderTopWidth: 20,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 75,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#FFB90F',
    left:250
  },
  chevronTopLeft: {
    position: 'absolute',
    top: -20,
    left: 0
  },
  chevronTopRight: {
    position: 'absolute',
    top: -20,
    right: 0,
    transform: [
      {scaleX: -1}
    ]
  },
  chevronBottomLeft: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    transform: [
      {scale: -1 }
    ]
  },     
  chevronBottomRight: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    transform: [
      {scaleY: -1}
    ]
  },



  
  chevron: {
    width: 50,
    height: 50
  },
  chevronMain: {
    width: 110,
    height: 50,
    backgroundColor: '#FFB90F',
    borderBottomEndRadius:20,
    borderRadius:5,
   
  },
  chevronTriangle: {
    backgroundColor: 'transparent',
    borderTopWidth: 20,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderLeftWidth: 75,
    borderTopColor: 'transparent',
    borderBottomColor: 'transparent',
    borderRightColor: 'transparent',
    borderLeftColor: '#FFB90F',
    borderBottomLeftRadius:10,
    borderTopEndRadius:2,
    
  },
  chevronTopright: {
    position: 'absolute',
    top: -20,
    left: 0
  },
  chevronTopleft: {
    position: 'absolute',
    top: -20,
    right: 0,
    transform: [
      {scaleX: -1}
    ]
  },
  chevronBottomright: {
    position: 'absolute',
    bottom: -20,
    left: 0,
    transform: [
      {scale: -1 }
    ]
  },     
  chevronBottomleft: {
    position: 'absolute',
    bottom: -20,
    right: 0,
    transform: [
      {scaleY: -1}
    ]
  },
  











  container: {
    flex: 1,
    backgroundColor: '#1E90FF',

    
  },
  imLogo:{
    height:100,
    width:100,
    borderRadius: 50,
    },
    circle: {
      width: 100,
      height: 100,
      borderRadius: 100 / 2,
      backgroundColor: "white",
      alignSelf:'center'
    },
    logintext:{
        textAlign:'center',
        fontSize:20,
        marginVertical:15,
        fontWeight:'bold',

    },
    sectionStyle: {
      flexDirection: 'row',
      marginHorizontal:50,
      marginVertical:10,
      backgroundColor:'#DCDCDC',
      borderWidth: 0.5,
      borderColor: '#fff',
      height: 40,
      borderRadius: 5,
      margin: 10,
      
    },

textinput:{
    flex:1,
   
  },
  button:{
  backgroundColor: '#FFB90F',
   height:45,
   width:100,
   borderRadius:5,
   marginTop:20


  }


});