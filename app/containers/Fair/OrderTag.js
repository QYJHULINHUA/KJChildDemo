
import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  TouchableHighlight
} from 'react-native';
import {navBarStyle} from '../../utils/KJStylesE.js';
const { width } = Dimensions.get('window');

class MyListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.item.key);
  };

  render() {
    return (
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={this._onPress}>
        <View style={[styles.itemContainer,{height:this.props.rowHeight}]}>
          <View style={this.props.selectedStr === this.props.item.key?styles.itemButtonSelected:styles.itemButton}>
            <Text style={this.props.selectedStr === this.props.item.key?{color:'white'}:{color:'#898989'}}>
              {this.props.item.tagTitle}
            </Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

export default class OrderTag extends React.PureComponent {

  static propTypes = {
    tagData:React.PropTypes.array.isRequired,
    rowHeight:React.PropTypes.number.isRequired,
    selectItem:React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
      this.state = { keyStr: '' };
    }

  _onPressItem = (idStr: string) => {
    this.props.selectItem(idStr)
    this.setState({ keyStr: idStr})

  };

  _renderItem = ({item}) => (
    <MyListItem
      onPressItem={this._onPressItem}
      item={item}
      rowHeight={this.props.rowHeight}
      selectedStr={this.state.keyStr}
    />

  );

  componentDidMount() {
    // this.setState({ keyStr: this.props.tagData[0].key})
  }

  render(){

    return(

      <View style={styles.container}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={this.props.tagData}
          horizontal={true}
          extraData={this.state.keyStr}
          renderItem={this._renderItem}/>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#F3F3F3',
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

  itemButtonSelected:{
    borderRadius:10,
    width:80,
    height:26,
    // backgroundColor:'white',
    backgroundColor:navBarStyle.theme_color,
    justifyContent:'center',
    alignItems:'center'
  },
  textStyle:{
    color:'#898989'
  },
});
