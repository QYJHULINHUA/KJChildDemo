

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

class MyListItem extends Component {
  constructor(props) {
    super(props);
  }

  static propTypes = {
    cellStyle:React.PropTypes.string.isRequired,//是否显示返回按钮
    cellHeight:React.PropTypes.number.isRequired,
    clickCell:React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    inputData:{},
  };

  render(){
    console.log('FairHorList');
    let cellWidth = width/2;
    let contenCellWidth= cellWidth-40;
    let cell_style = this.props.cellStyle;

    return(

      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={()=>{
          this.props.clickCell(this.props.inputData);
        }}
        >

          <View style={{height:this.props.cellHeight,width:cellWidth}}>

            <View style={{left:20,width:contenCellWidth,height:this.props.cellHeight,justifyContent:'center',}}>
              <View style={{borderWidth:1,borderColor:'#D2D2D2',}}>

                <Image
                  style={{width:contenCellWidth-2,height:contenCellWidth}}
                  source={{uri:'https://img14.360buyimg.com/n0/jfs/t3127/302/6759817728/310883/d8845fa8/58ad06d4N48f50019.jpg'}}
                />
              </View>

              {cell_style==='拍卖'?<Text style={{width:contenCellWidth,height:20,backgroundColor:'#FD7801',textAlign:'center',fontSize:16}}>正在拍卖</Text>:null}

              <View style={{height:25}}>
                <Text style={{top:8,height:17,fontSize:16}}>商品名称</Text>
              </View>

              {cell_style==='以物换物'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"#898989"}}>商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情商品详情</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>发布于 2017.7.1</Text>
              </View>

              :null}

              {cell_style==='积分兑换'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"red"}}>积分600</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>市场参考价 1000 元</Text>
              </View>

              :null}

              {cell_style==='拍卖'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"red"}}>当前价 ¥453.00</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>距离结束 1天12小时18分</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>围观人数 13456人</Text>
              </View>

              :null}


            </View>

          </View>
      </TouchableHighlight>

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

    this._renderItem=this._renderItem.bind(this);
  }

  static propTypes = {
    fairTypeStr:React.PropTypes.string.isRequired,//是否显示返回按钮
    containerHeight:React.PropTypes.number,
    clickCell:React.PropTypes.func.isRequired,
  }

  static defaultProps = {
    containerHeight:250,
  };

  _renderItem(item){
    console.log(item);
    return(
      <MyListItem
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
  },

});
