

import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,

} from 'react-native';

class FairScorePage extends Component {

  constructor(props) {
    super(props);

  }

  render(){
    return(
      <View>
        <Text>积分兑换</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',
  },
});

function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}

export default connect(select)(FairScorePage);
