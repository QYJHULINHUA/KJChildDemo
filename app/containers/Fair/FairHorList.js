

import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  FlatList,
  TouchableHighlight
} from 'react-native';
const { width } = Dimensions.get('window')

import {getCommodityList} from '../../network/FairNetApi'
import CommodityCellItem from './CommodityCellItem'


export default class FairHorList extends Component {
  constructor(props) {
    super(props);

    this.state={
      data:[],
    }

    this._renderItem=this._renderItem.bind(this);
    this.makeRemoteRequest=this.makeRemoteRequest.bind(this);

  }

  static propTypes = {
    fairTypeStr:React.PropTypes.string.isRequired,
    containerHeight:React.PropTypes.number,
    clickCell:React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    containerHeight:250,
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest(){
    reqStr = this.props.fairTypeStr;
    let req_string = 'defaultString';
    let formData = {
      limit:4,
    };

    if (reqStr === '以物换物') {
      req_string = 'Commodity';
    }else if (reqStr === '积分兑换') {
      req_string = 'Score';
    }else if (reqStr === '拍卖') {
      req_string = 'Auction';
    }else {

    }

    getCommodityList(req_string,formData,(responseData)=>{

      console.log('集市回调',responseData);

      let code = responseData['code'];
      let data = responseData['data'];

      if (code === '1') {
        this.setState({
          data:data,
        })

      }
    });



  }

  _renderItem(item){
    console.log(item);
    return(
      <CommodityCellItem
        clickCell={this.props.clickCell}
        inputData={item}
        cellStyle={this.props.fairTypeStr}
        cellHeight={this.props.containerHeight}/>
    )
  }
  render(){
    return(
      <View style={[styles.container,{height:this.props.containerHeight}]}>
        <FlatList
          removeClippedSubviews={false}
          horizontal={true}
          data={this.state.data}
          keyExtractor={item => item.Id}
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
  },

});
