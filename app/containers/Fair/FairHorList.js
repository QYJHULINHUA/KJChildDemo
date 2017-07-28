

import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  FlatList,
} from 'react-native';
const { width } = Dimensions.get('window')

class MyListItem extends Component {
  constructor(props) {
    super(props);
  }

  render(){
    console.log('FairHorList');
    return(
      <View><Text>item</Text></View>
    )
  }
}

export default class FairHorList extends Component {
  constructor(props) {
    super(props);

    this.state={
      data:[
        {key:'1',title:'001'},
        {key:'2',title:'002'},
        {key:'3',title:'003'},
      ],
    }
  }

  static propTypes = {
    fairTypeStr:React.PropTypes.string.isRequired,//是否显示返回按钮
    containerStyle:View.propTypes.style,
  }

  static defaultProps = {
    containerStyle:{}
  };

  _renderItem(item){
    console.log(item);
    return(
      <MyListItem/>
    )
  }
  render(){
    return(
      <View style={[styles.container,this.props.containerStyle]}>
        <FlatList
          removeClippedSubviews={false}
          data={this.state.data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    height:250,
    backgroundColor:'green',

  },

});
