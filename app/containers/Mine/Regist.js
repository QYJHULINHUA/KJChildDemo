
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,


} from 'react-native';

import { connect } from 'react-redux';
import HeaderView from '../../components/JKHeader/HeaderView1.js'

import { Form,Button,Util } from 'react-native-wxui';

class Regist extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='注册'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  _handleChange = (formData, fieldRef) => {
        console.log('FormData: ', formData);
        console.log(fieldRef + ' has changed');
    }



  render(){
    return(


      <ScrollView style={styles.container}>
            <Form.Form onFieldChange={this._handleChange}>

              <Form.InputField label="用户名" ref="userName"
                  placeholder="请输入用户名" />
              <Form.Separator label="6-15位字母或数字" />

              <Form.InputField label="设置密码" ref="password1"
                  placeholder="请输入密码" />
              <Form.InputField label="请重新输入密码" ref="password2"
                  placeholder="请重新输入密码" />
              <Form.Separator label="6-20位字母或数字" />


              <Form.InputField label="手机号" ref="tellPhone" keyboardType='numeric'
                  placeholder="请输入您的手机号" />

              <Button style={styles.buttonReq} textStyle={{fontSize: 14}}>
                免费获取验证码
              </Button>
              <Form.InputField
                keyboardType='numeric'
                label="手机验证码"
                ref="tellPhoneReg"
                placeholder="请输入手机验证码"
               />
            </Form.Form>




            <Text>我已阅读并理解我们的<Text style={{color:'red',fontSize:16}}>网站协议</Text></Text>

            <Form.Separator/>
            <Form.Separator/>

            <Button>注册</Button>
        </ScrollView>





    );
  }
}



const styles = StyleSheet.create({
  container: {
        backgroundColor: '#f8f7f4',
        flex: 1,



    },
    iconLeft: {
        width: 20,
        height: 20,
    },
    iconRight: {
        width: 15,
        height: 10,
    },

    buttonReq:{
      backgroundColor:'green',
      alignSelf:'flex-end',
      width:120,
      height:40,
      top:5,

    }


});

function select(store){
   return {

   }
}

 export default connect(select)(Regist);
