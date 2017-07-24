import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window')
// import StarRating from 'react-native-star-rating';
//
// import {navBarStyle} from '../../utils/KJStylesE.js'
// import {SectionTitle} from './SectionTitle.js'
// import KJC_Button from '../../components/JKButton.js'

class CourseEvaluate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      starCount: 3.5,
      teacherAvatar:'http://p3.wmpic.me/article/2014/07/29/1406605856_wMlLrnQe.jpg'
    };

  }


  render(){
    return(
      <View style={styles.container}>
        <Text>课程评价</Text>

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
export default connect(select)(CourseEvaluate);
