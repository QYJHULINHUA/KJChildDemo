
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import HeaderView from '../../components/JKHeader/HeaderView1.js'


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
      <View>
        <Text>jjjj</Text>
      </View>
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
