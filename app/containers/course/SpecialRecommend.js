import React, { Component } from "react";
import { View, Text, FlatList, ActivityIndicator,TouchableHighlight,Dimensions,Image } from "react-native";
const { width } = Dimensions.get('window')
import Toast, {DURATION} from 'react-native-easy-toast'
import {getSpecialRecommendationList} from '../../network/CourseNetApi.js'
import {BASEURL} from '../../utils/netUtils.js'


class SpecilaRecommend extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    getSpecialRecommendationList(null,(responsedata)=>{
      let code = responsedata['code'];
      let msg = responsedata['msg'];
      let data = responsedata['data'];
      console.log(responsedata);

      if (code === '1') {
        if (data.length > 0) {
          this.setState({
            data:data,
          })
        }else {
          this.refs.toast.show('没有加载到更多数据');
        }

      }else {
          this.refs.toast.show(msg);
      }

    })


  };





  _renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={()=>{
        console.log(item);
        // this.props.onPressCell(item);
      }}>
      <View style={{width:width,height:240}}>
        <Image
        style={{height:150}}
        source={{url:`${BASEURL}${item.Image}`}}
      />
      <Text>{item.AdName}</Text>
      <Text>{item.AdName}</Text>
      </View>
  </TouchableHighlight>

  );

  render() {
    return (
      <View containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
        <FlatList
          data={this.state.data}
          renderItem={this._renderItem}
          keyExtractor={item => item.Id}
        />
        <Toast ref="toast" position="center"/>
      </View>
    );
  }
}

export default SpecilaRecommend;
