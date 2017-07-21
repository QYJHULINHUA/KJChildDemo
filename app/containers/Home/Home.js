
import React,{Component} from 'react';
import {
  Image,
  ScrollView

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import { userInfoAction} from '../../myRedux/action/user_action.js'

import {storageLoginStatus,getLoginStatus} from '../../dataBase/userinfoStorage.js'
import {loginAccount} from '../../network/UserNetApi.js'
import HeaderView from '../../components/JKHeader/HeaderView1.js'


import {SeparatorLine} from '../../components/SeparatorLine.js'
import {NavigationCard} from './NavigationCard'
import {SwiperImage} from './SwiperImage.js'
import {BabyRank} from './BabyRank'
import {BabyKnowledge} from './BabyKnowledge'
import {SocialFocus} from './SocialFocus'
import {ExpertSolution} from './ExpertSolution'



class Home extends Component {

//进入的时候默认登录一下
  _defaultLoginUser(){
    getLoginStatus((response)=>{
      if (response['code']) {

        let logindata = response['data'];
        let username = logindata['username'];
        let password = logindata['password'];
        this.props.dispatch(userInfoAction('user_account',username))
        this.props.dispatch(userInfoAction('user_password',password))

        let isLoggedIn = logindata['isLoggedIn'];

        if (isLoggedIn) {
          let formData = {
            username:username,
            password:password,
          }


          loginAccount(formData,(responseData)=>{

            let code = responseData['code'];
            if (code == '1') {
              console.log('登录成功——————————',responseData);
              let userdata = responseData['data'];

              this.props.dispatch(userInfoAction('user_telphone',userdata['Mobile']))
              this.props.dispatch(userInfoAction('user_score',userdata['score']))
              this.props.dispatch(userInfoAction('user_id',userdata['UserId']))
              this.props.dispatch(userInfoAction('user_avatar',userdata['HeadImg']))

            }else {
              storageLoginStatus(this.props.username,this.props.password,false);
              console.log('登录失败回调：',responseData);
            }
          })



        }else {
          console.log('app start -- 未登录2');
          console.log(logindata);
        }

      }else {
        console.log('app start -- 未登录1');
        console.log(response);
      }
    })

  }

  constructor(props) {
    super(props);
    this._defaultLoginUser();
  }


  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKHome.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),
    header:<HeaderView tilte='首页'/>,
  }

  shouldComponentUpdate(nextProps, nextState){
    return false;
  }


  render(){
    console.log('首页刷新');
    let renderList = [require('./img/1.jpg'),require('./img/2.jpg'),require('./img/3.jpg'),require('./img/4.jpg')];
    let dataSoureeee = '宝宝排名';
    return(

      <ScrollView>

        {/**推荐的轮播图*/}
        <SwiperImage renderList={renderList}/>

        {/**宝宝排名*/}
        <BabyRank dataSource={dataSoureeee}/>

        {/**一大堆的功能导航卡*/}
        <SeparatorLine/>
        <NavigationCard/>

        {/**育儿知识*/}
        <SeparatorLine/>
        <BabyKnowledge/>

        {/**社会焦点*/}
        <SeparatorLine/>
        <SocialFocus/>

        {/**专家解答*/}
        <SeparatorLine/>
        <ExpertSolution/>

        {/**以物换物*/}
        <SeparatorLine/>

      </ScrollView>


    );
  }
}


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

 export default connect(select)(Home);
