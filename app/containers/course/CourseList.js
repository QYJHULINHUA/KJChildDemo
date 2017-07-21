
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Image


} from 'react-native';

import { connect } from 'react-redux';
const { width } = Dimensions.get('window')

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[
        {key:'001',title:'课程1',url:require('./img/test.png')},
        {key:'002',title:'课程2',url:require('./img/test.png')},
        {key:'003',title:'课程3',url:require('./img/test.png')},
        {key:'004',title:'课程4',url:require('./img/test.png')},
        {key:'005',title:'课程5',url:require('./img/test.png')},
        {key:'006',title:'课程6',url:require('./img/test.png')},
        {key:'007',title:'课程7',url:require('./img/test.png')},
        {key:'008',title:'课程8',url:require('./img/test.png')},
        {key:'009',title:'课程9',url:require('./img/test.png')},
        {key:'0010',title:'课程10',url:require('./img/test.png')},
        {key:'0011',title:'课程11',url:require('./img/test.png')},
        {key:'0012',title:'课程12',url:require('./img/test.png')},
        {key:'0013',title:'课程13',url:require('./img/test.png')},
        {key:'0014',title:'课程14',url:require('./img/test.png')},
        {key:'0015',title:'课程15',url:require('./img/test.png')},
      ]
    }
  }


  _renderItem = ({item}) => (
    <View style={{width:width/2,height:210,justifyContent:'center',alignItems:'center'}}>
      <Image resizeMode='stretch' style={{width:width/2 - 20,height:90}} source={item.url} />
      <View style={{height:10}}/>
      <View style={{width:width/2-20,height:90,}}>
        <Text style={{color:'#4A4A4A',fontSize:14,fontWeight:'bold'}}>{item.title}</Text>
        <Text style={{top:2,color:'#898989',fontSize:13 ,width:width/2-20}} numberOfLines={2}>课程简介文字课程简介文字课程简介简介文字课程简介文字课程简介文字课程简介文字课程简介文字</Text>

      </View>

    </View>

  );

  render(){
    return(

      <View style={styles.container}>
        <View style={{backgroundColor:'gray',height:60}}><Text>header</Text></View>
        <View style={{height:10}}/>

        <FlatList
          data={this.state.data}
          numColumns={2}
          // columnWrapperStyle={{paddingHorizontal:10}}
          renderItem={this._renderItem}/>
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
export default connect(select)(CourseList);
