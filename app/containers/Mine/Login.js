
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Image,
  Text,


} from 'react-native';


import { connect } from 'react-redux';
import HeaderView from '../../components/JKHeader/HeaderView1.js'
import KJC_Button from '../../components/JKButton.js'


const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


class Login extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='登录'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });





  render(){

    return (
      <View style={styles.container}>
        <View style={{backgroundColor:'red'}}>
          <Image style={styles.avastImgStyle} source={require('../src/loginIcon.png')}/>
        </View>




      <View style={{backgroundColor:'green'}}>
        <TextInput
          style={styles.TextInputStyle}
          underlineColorAndroid={'transparent'}
          placeholder='手机号'
          keyboardType='numeric'
          value={this.props.telphone}
          onChangeText={(accountText) => {
            this.props.dispatch(userInfoAction('user_telphone',accountText))
          }}
        />
      </View>

      <View style={{backgroundColor:'green'}}>
        <TextInput
          style={styles.TextInputStyle}
          underlineColorAndroid={'transparent'}
          placeholder='手机号'
          keyboardType='numeric'
          value={this.props.telphone}
          onChangeText={(accountText) => {
            this.props.dispatch(userInfoAction('user_telphone',accountText))
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
      alignItems:'center',

  },
  avastImgStyle:{
    width:100,
    height:100,
  },

  TextInputStyle:{
    top:10,

    width:240,
    height:40,
    backgroundColor:'red',

  },




});

function select(store){
   return {

   }
}

export default connect(select)(Login);
