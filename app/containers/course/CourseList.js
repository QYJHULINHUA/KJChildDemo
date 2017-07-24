
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlight


} from 'react-native';

import CourseTagList from './ CourseTagList.js'
import { connect } from 'react-redux';
const { width } = Dimensions.get('window')

class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[
        {key:'001',title:'婴儿运动与智力发育密切相关',url:require('./img/test.png'),money:'免费'},
        {key:'002',title:'新生儿饮食的护理',url:require('./img/test.png'),money:'免费'},
        // {key:'003',title:'怎么判断孩子是否吃饱了',url:require('./img/test.png'),money:'¥12.00'},
        // {key:'004',title:'3个月时可训练宝宝的翻身',url:require('./img/test.png'),money:'免费'},
        // {key:'005',title:'如何制作混合奶',url:require('./img/test.png'),money:'免费'},
        // {key:'006',title:'宝宝夜啼怎么哄',url:require('./img/test.png'),money:'¥69.00'},
        // {key:'007',title:'小宝宝为何会罢奶',url:require('./img/test.png'),money:'免费'},
        // {key:'008',title:'英语教学需要多元智能理论',url:require('./img/test.png'),money:'免费'},
        // {key:'009',title:'给宝宝创造学爬的好环境',url:require('./img/test.png'),money:'免费'},
        // {key:'0010',title:'怎么教孩子数数效果最好',url:require('./img/test.png'),money:'免费'},
        // {key:'0011',title:'宝宝怎么进行启智训练',url:require('./img/test.png'),money:'免费'},
        // {key:'0012',title:'音乐魅力',url:require('./img/test.png'),money:'免费'},
        // {key:'0013',title:'奥尔夫的音乐活动',url:require('./img/test.png'),money:'免费'},
        // {key:'0014',title:'幼儿语言教育的略谈',url:require('./img/test.png'),money:'免费'},
        // {key:'0015',title:'珠算',url:require('./img/test.png'),money:'免费'},
      ]
    }

    this._renderItem = this._renderItem.bind(this);
  }

  static propTypes = {
    tagListShow:React.PropTypes.bool,//是否显示返回按钮
  }

  static defaultProps = {
    tagListShow: true,
  }




  _renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={()=>{
        this.props.onPressCell(item);
      }}>
      <View style={{width:width/2,height:210,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='stretch' style={{width:width/2 - 20,height:90}} source={item.url} />
        <View style={{height:10}}/>
        <View style={{width:width/2-20,height:90,}}>
          <Text style={{color:'#4A4A4A',fontSize:14,fontWeight:'bold'}}>{item.title}</Text>
          <Text style={{top:2,color:'#898989',fontSize:13 ,width:width/2-20}} numberOfLines={2}>课程简介文字课程简介文字课程简介简介文字课程简介文字课程简介文字课程简介文字课程简介文字</Text>
          <Text style={{top:5,color:'red',fontSize:12}}>{item.money}</Text>
        </View>

      </View>
  </TouchableHighlight>

  );


  _selectTagIdx(idx: string){
    console.log(`tag is : ${idx} `);

  }

  render(){

    let dd = [
      {key:'001',tagTitle:'0-1岁'},
      {key:'002',tagTitle:'1-3岁'},
      {key:'003',tagTitle:'3-10岁'},
      {key:'004',tagTitle:'肢体行知'},
      {key:'0011',tagTitle:'0-1岁'},
      {key:'0021',tagTitle:'1-3岁'},
      {key:'0031',tagTitle:'3-10岁'},
      {key:'0041',tagTitle:'肢体行知'},
    ];


    return(


      <View style={styles.container}>
        {
          this.props.tagListShow?<View style={{backgroundColor:'#F3F3F3',height:50}}>
            <CourseTagList
              selectItem = {this._selectTagIdx}
              tagData = {dd}
              rowHeight={50}/>
          </View>:null

        }



        <View style={{height:10}}/>

        <FlatList
          data={this.state.data}
          numColumns={2}
          initialNumToRender={6}
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
