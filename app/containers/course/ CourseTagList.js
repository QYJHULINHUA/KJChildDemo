



import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
} from 'react-native';

import {navBarStyle} from '../../utils/KJStylesE.js'


const { width } = Dimensions.get('window')

export default class CourseTagList extends React.PureComponent {
  constructor(props) {
    super(props);
    this._renderItem = this._renderItem.bind(this);



  }

  static propTypes = {
    tagData:React.PropTypes.array.isRequired,
    rowHeight:React.PropTypes.number.isRequired,
  }

  _renderItem = ({item}) => (
    <View style={[styles.itemContainer,{height:this.props.rowHeight}]}>
      <View style={styles.itemButton}>
        <Text style={styles.textStyle}>{item.tagTitle}</Text>
      </View>
    </View>
  );

  render(){
    return(

      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.tagData}
          horizontal={true}
          renderItem={this._renderItem}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  itemContainer:{
    width:100,
    justifyContent:'center',
    alignItems:'center'
  },

  itemButton:{
    borderRadius:10,
    width:80,
    height:26,
    backgroundColor:'white',
    // backgroundColor:navBarStyle.theme_color,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'#898989'
  },
});
