

import {
  View,
  Text,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';

const { width } = Dimensions.get('window')



const ItemCard = ({item,width,height}) => (

  <View style={{width:width,height:height,justifyContent:'center',alignItems:'center'}}>

    <Image resizeMode='stretch' style={{width:30,height:30}} source={item.url} />
    <View style={{height:10}}></View>
    <Text style={{color:'#404040',fontSize:12}}>{item.title}</Text>

  </View>
);


export const NavigationCard = ({listData1,listData2,onPressFun}) => (
  <View style={{height:160,backgroundColor:'white'}}>
    <View style={{height:80,flexDirection:'row',justifyContent:'space-between'}}>
      {
        listData1.map((item,idx)=>{
          return(
            <TouchableOpacity
              key={idx}
              onPress={()=>{
                onPressFun(item.title)
              }}>
            <ItemCard height={80} width={width/4} item={item}/>
          </TouchableOpacity>
          )
        })
      }
    </View>

    <View style={{height:80,flexDirection:'row',justifyContent:'space-between'}}>
      {
        listData2.map((item,idx)=>{
          return(
            <TouchableOpacity
              key={idx}
              onPress={()=>{
                onPressFun(item.title)
              }}>
            <ItemCard height={80} width={width/4} item={item}/>
          </TouchableOpacity>
          )
        })
      }
    </View>
  </View>
);

NavigationCard.defaultProps = {
  listData1:[
    {title:'社会焦点',url:require('./img/shehuijiaodian.png')},
    {title:'育儿知识',url:require('./img/yuerzhishi.png')},
    {title:'宝贝帮',url:require('./img/baobeibang.png')},
    {title:'课程',url:require('./img/kechen.png')}],
  listData2:[
    {title:'专家帮助',url:require('./img/zhuanjiabangzhu.png')},
    {title:'宝贝活动',url:require('./img/baobeihuodong.png')},
    {title:'宝贝评测',url:require('./img/baobeipingce.png')},
    {title:'集市',url:require('./img/jishi.png')}]
}
