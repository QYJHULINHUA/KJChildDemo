


import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  Image,


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window');
import HeaderView from '../../components/JKHeader/HeaderView1.js'
import ScrollableTabView, {DefaultTabBar, } from 'react-native-scrollable-tab-view';
import {navBarStyle} from '../../utils/KJStylesE.js'

import CourseIntroduce from './CoureseIntroduce.js'


class CourseDetails extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = ({ navigation }) => ({


    header:<HeaderView tilte={navigation.state.params.courseItem.title}  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  render(){
    return(
      <View style={styles.container}>
        <Image
        style={{height:180}}
        source={{uri: 'http://pic.baike.soso.com/p/20131203/20131203133649-2126513849.jpg'}}
      />

      <ScrollableTabView
        tabBarUnderlineStyle={{backgroundColor:navBarStyle.theme_color,height:3}}
        tabBarActiveTextColor={navBarStyle.theme_color}
        tabBarInactiveTextColor='#898989'
        renderTabBar={() => <DefaultTabBar />}
        style={{backgroundColor:'white'}}
        >

          <CourseIntroduce tabLabel='介绍'/>
          <Text tabLabel='目录'>ttt</Text>
          <Text tabLabel='评价'>ttt</Text>
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
   }
}
export default connect(select)(CourseDetails);
