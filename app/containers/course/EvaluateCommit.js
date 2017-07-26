


import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,



} from 'react-native';

import { connect } from 'react-redux';
import HeaderView from '../../components/JKHeader/HeaderView1.js'


class EvaluateCommit extends Component {
  constructor(props) {
    super(props);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='发表评价'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  render(){

    return(
      <View style={styles.container}>
        <Text>fabiaopingjia</Text>
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
     uuid:store.userInfo.user_id,
   }
}
export default connect(select)(EvaluateCommit);
