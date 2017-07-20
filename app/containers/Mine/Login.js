
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
import { userInfoAction} from '../../myRedux/action/user_action.js'
import { Form,Util,Button } from 'react-native-wxui';

import {loginAccount} from '../../network/UserNetApi.js'
import Toast, {DURATION} from 'react-native-easy-toast'
import {storageLoginStatus,getLoginStatus} from '../../dataBase/userinfoStorage.js'


class Login extends Component {
  constructor(props) {
    super(props);
    this.clickLoginButton = this.clickLoginButton.bind(this);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='登录'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  clickLoginButton(){

    let formData = {
      username:this.props.username,
      password:this.props.password,

    }

    loginAccount(formData,(responseData)=>{
      console.log('登录回调：',responseData);

      let msg = responseData['msg'];
      this.refs.toast.show(msg);
      let code = responseData['code'];

      if (code === '1') {
        console.log('登录成功——————————');
        let userdata = responseData['data'];

        this.props.dispatch(userInfoAction('user_telphone',userdata['Mobile']))
        this.props.dispatch(userInfoAction('user_score',userdata['score']))
        this.props.dispatch(userInfoAction('user_id',userdata['UserId']))
        this.props.dispatch(userInfoAction('user_avatar',userdata['HeadImg']))

        storageLoginStatus(this.props.username,this.props.password,true);

      }else {


        // storageLoginStatus(this.props.username,this.props.password,true);

      }


    });

  }



  render(){

    return(

      <ScrollView style={styles.container}>
              <Form.Separator/>
              <Form.InputField
                label="用户名"
                ref="username"
                onChangeText={(text)=>{
                  this.props.dispatch(userInfoAction('user_account',text))

                }}
                placeholder="用户名／手机号" />

              <Form.InputField
                label="密码"
                ref="password"
                secureTextEntry={true}
                onChangeText={(text)=>{
                  this.props.dispatch(userInfoAction('user_password',text))

                }}
                placeholder="请输入密码" />


            <Form.Separator/>


            <View>
              <Button onPress={this.clickLoginButton}>登录</Button>
            </View>

            <View style={styles.tt}>
              <Text
                style={{left:60,top:20,color:'red'}}
                onPress={()=>{
                  const { navigate } = this.props.navigation;
                  navigate('Regist')
                }}>注册账号</Text>
              <Text style={{right:60,top:20,color:'red'}}>忘记密码</Text>
            </View>

            <Toast ref="toast" position="center"/>

        </ScrollView>

    );
  }
}



const styles = StyleSheet.create({

  tt:{
    flexDirection:'row',
    justifyContent:'space-between',
  },
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
     username:store.userInfo.user_account,
     password:store.userInfo.user_password,
     telphone:store.userInfo.user_telphone,
     acore:store.userInfo.user_score,
     uuid:store.userInfo.user_id,
     avatar:store.userInfo.user_avatar,
   }
}


 export default connect(select)(Login);
