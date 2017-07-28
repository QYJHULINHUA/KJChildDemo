

import React,{Component} from 'react';
import {
  View,
  Image,
  Text,
  Dimensions,
  TouchableHighlight
} from 'react-native';

const { width } = Dimensions.get('window')

export default class CommodityCellItem extends Component {
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
                  source={{uri:this.props.inputData.item.CProImg}}
                />
              </View>

              {cell_style==='拍卖'?<Text style={{width:contenCellWidth,height:20,backgroundColor:'#FD7801',textAlign:'center',fontSize:16}}>正在拍卖</Text>:null}

              <View style={{height:25}}>
                <Text style={{top:8,height:17,fontSize:16}}>{this.props.inputData.item.CProName}</Text>
              </View>

              {cell_style==='以物换物'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"#898989"}}>{this.props.inputData.item.CProDesc}</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>发布时间  {this.props.inputData.item.CreateDate}</Text>
              </View>

              :null}

              {cell_style==='积分兑换'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"red"}}>积分 {this.props.inputData.item.ProScore}</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>市场参考价 {this.props.inputData.item.ProPrice} 元</Text>
              </View>

              :null}

              {cell_style==='拍卖'?
              <View>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:12,color:"red"}}>当前价 {this.props.inputData.item.CProPrice}</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>结束时间 {this.props.inputData.item.EndDate}</Text>
                <Text numberOfLines={1} style={{width:contenCellWidth,fontSize:10,color:"#898989"}}>围观人数 {this.props.inputData.item.BrowseTimes}</Text>
              </View>

              :null}


            </View>

          </View>
      </TouchableHighlight>

    )
  }
}
