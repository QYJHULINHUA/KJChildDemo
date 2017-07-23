
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import HeaderView from '../../components/JKHeader/HeaderView1.js'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {navBarStyle} from '../../utils/KJStylesE.js'
import CourseList from './CourseList.js'


class Course extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='课程'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  render(){


    return(

      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor:navBarStyle.theme_color,height:3}}
        tabBarActiveTextColor={navBarStyle.theme_color}
        tabBarInactiveTextColor='#898989'
        renderTabBar={() => <DefaultTabBar />}
        style={{backgroundColor:'white'}}
        >

        <CourseList tabLabel='免费好课'/>
        <CourseList tabLabel='推荐好课'/>
        <CourseList tabLabel='免费专题'/>

      </ScrollableTabView>


    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
});

function select(store){
   return {

   }
}

export default connect(select)(Course);
