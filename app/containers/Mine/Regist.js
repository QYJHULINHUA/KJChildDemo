
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Image,


} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast'

import { connect } from 'react-redux';
import HeaderView from '../../components/JKHeader/HeaderView1.js'

import { Form,Button,Util } from 'react-native-wxui';

import {getMobileReqCode,registAccount} from '../../network/UserNetApi.js'

let registData={}

class Regist extends Component {
  constructor(props) {
    super(props);
    this.clickGetPhoneReqButton = this.clickGetPhoneReqButton.bind(this);
    this.clickRegistReqButton = this.clickRegistReqButton.bind(this);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='注册'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  _handleChange = (formData, fieldRef) => {
        registData=formData;
        console.log('FormData: ', registData);
    }

// 获取验证码
    clickGetPhoneReqButton(){

      let mobile= registData['mobile'];
      let formData = {
        mobile:mobile,
      }

      getMobileReqCode(formData,(responseData)=>{
        console.log('验证码回调：',responseData);
        let msg = responseData['msg'];

        this.refs.toast.show(msg);

      });
    }

// 注册
    clickRegistReqButton(){
      registAccount(registData,(responseData)=>{
        console.log('注册回调：',responseData);
        let msg = responseData['msg'];
        this.refs.toast.show(msg);
      })
    }

  render(){
    return(


      <ScrollView style={styles.container}>
            <Form.Form onFieldChange={this._handleChange}>

              <Form.InputField label="用户名" ref="username"
                  placeholder="请输入用户名" />
              <Form.Separator label="6-15位字母或数字" />

              <Form.InputField label="设置密码" ref="password"
                  placeholder="请输入密码" />
              <Form.InputField label="请重新输入密码" ref="comitpassword"
                  placeholder="请重新输入密码" />
              <Form.Separator label="6-20位字母或数字" />


              <Form.InputField label="手机号" ref="mobile" keyboardType='numeric'
                  placeholder="请输入您的手机号" />

              <Button
                style={styles.buttonReq}
                textStyle={{fontSize: 14}}
                onPress={this.clickGetPhoneReqButton} >
                免费获取验证码
              </Button>
              <Form.InputField
                keyboardType='numeric'
                label="手机验证码"
                ref="mobile_code"
                placeholder="请输入手机验证码"
               />
            </Form.Form>




            <Text>我已阅读并理解我们的<Text style={{color:'red',fontSize:16}}>网站协议</Text></Text>

            <Form.Separator/>
            <Form.Separator/>
            <Toast ref="toast" position="center"/>
            <Button onPress={this.clickRegistReqButton}>注册</Button>
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
