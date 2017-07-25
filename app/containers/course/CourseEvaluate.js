import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  FlatList,


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window')
const leftMargin = 16;
import {SectionTitle} from './SectionTitle.js'
import KJC_Button from '../../components/JKButton.js'

function getItemListData() {

  var tempList = [];
  for (var i = 0; i < 20; i++) {
    let itemData = {
      key:i,
      evaluate:'婴儿运动与智力发育密切相关',
      url:require('./img/test.png')
    }
    tempList.push(itemData)
  }
  return tempList;
}

class CourseEvaluate extends Component {
  constructor(props) {
    super(props);
    let dd =  getItemListData();
    this.state={
      data:dd,
    }

  }

  _renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={()=>{
        // this.props.onPressCell(item);
      }}>
        <View style={{width:width/2,height:210,justifyContent:'center',alignItems:'center'}}>
          <Text>haha</Text>

        </View>
    </TouchableHighlight>
  );


  render(){
    return(
      <View style={styles.container}>
        <SectionTitle
          sectionTitleStyle={{backgroundColor:'#DBF3F3'}}
          sectionTitle='评价详情'
          leftMargin={leftMargin}/>

          <FlatList
            data={this.state.data}
            initialNumToRender={6}
            renderItem={this._renderItem}/>

          <KJC_Button
            btn_text='评价'
            btnUnderlayColor='#4DC1C1'
            onPress={()=>{
              console.log('评价button');
            }}
            btnStyle={{height:60,width:width,backgroundColor:'#4DC1C1',}}/>


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
