
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'

import HeaderView from '../../components/JKHeader/HeaderView1.js'

class Group extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: '圈子',
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKGroups.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),

    header:<HeaderView tilte='我得圈子'/>,
  }

  render(){
    return(
      <View>
        <Text>圈子</Text>
      </View>

    );
  }
}
function select(store){
   return {

   }
 }

 export default connect(select)(Group);
