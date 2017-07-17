
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'

class Home extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: '首页',
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKHome.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),
  }

  render(){
    return(
      <View>
        <Text>首页</Text>
      </View>

    );
  }
}
function select(store){
   return {

   }
 }

 export default connect(select)(Home);
