import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window')

class CourseIntroduce extends Component {
  constructor(props) {
    super(props);

  }

  render(){
    return(
      <View style={styles.container}>
        <Text>课程介绍</Text>
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
export default connect(select)(CourseIntroduce);
