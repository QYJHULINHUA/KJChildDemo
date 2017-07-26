


import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,
  Alert,


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window');
import HeaderView from '../../components/JKHeader/HeaderView1.js'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {navBarStyle} from '../../utils/KJStylesE.js'

import CourseIntroduce from './CoureseIntroduce.js'
import CourseEvaluate from './CourseEvaluate'
import {getcourseDetail} from '../../network/CourseNetApi.js'
import CourseCatalogue from './CourseCatalogue.js'
import {BASEURL} from '../../utils/netUtils.js'



class CourseDetails extends Component {
  constructor(props) {
    super(props);
    this.makeRemoteRequest=this.makeRemoteRequest.bind(this);
    this._clickEvaluatlsCommit=this._clickEvaluatlsCommit.bind(this);


    this.state={
      detailsData:{},
    }

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte={navigation.state.params.courseItem.ProName}  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest(){

    let formData = {
      UserId:this.props.uuid,
      id:this.props.navigation.state.params.courseItem.Id,
    }

    getcourseDetail(formData,(responseData)=>{
      let code = responseData['code'];
      let msg = responseData['msg'];
      let data = responseData['data'];
      if (code === '1') {

        this.setState({
          detailsData:data,
        })

      }else {

      }

    })
  }

  _clickEvaluatlsCommit(str){

    const { navigate } = this.props.navigation;
    if (!this.props.uuid) {
      Alert.alert(
        '温馨提示',
        '您尚未登录，是否登录用户',
        [
          {text: '确定', onPress: () => navigate('Login')},
          {text: '取消', onPress: () => console.log('cancle Pressed!')},
        ],
      )

    }else {
      navigate('EvaluateCommit',{proId:this.state.detailsData.Id})
    }

  }

  render(){
    console.log('this.props.navigation.state.params.courseItem',this.props.navigation.state.params.courseItem);
    return(
      <View style={styles.container}>
        <Image
        style={{height:180}}
        source={{url:`${BASEURL}${this.state.detailsData.ProImg}`}}
      />

      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor:navBarStyle.theme_color,height:3}}
        tabBarActiveTextColor={navBarStyle.theme_color}
        tabBarInactiveTextColor='#898989'
        renderTabBar={() => <DefaultTabBar />}
        style={{backgroundColor:'white'}}
        >

          <CourseIntroduce sourceData={this.state.detailsData} tabLabel='介绍'/>

          <CourseCatalogue sourceData={this.state.detailsData.ProMes} tabLabel='目录'/>

          <CourseEvaluate
            evaluateOnPress={this._clickEvaluatlsCommit}
            sourceData={this.state.detailsData}
            tabLabel='评价'/>

          <Text tabLabel='咨询'>ttt</Text>


      </ScrollableTabView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
  },
});
function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}
export default connect(select)(CourseDetails);
