

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
    {/* <View style={{height:10}}></View> */}
    <Image resizeMode='stretch' style={{width:50,height:50}} source={item.url} />
    <View style={{height:10}}></View>
    <Text style={{color:'#404040',fontSize:14}}>{item.title}</Text>

  </View>
);


export const NavCard = ({listData1,onPressFun}) => (
  <View style={{height:100,}}>
    <View style={{height:100,flexDirection:'row',justifyContent:'space-between'}}>
      {
        listData1.map((item,idx)=>{
          return(
            <TouchableOpacity
              key={idx}
              onPress={()=>{
                onPressFun(item.title)
              }}>
            <ItemCard height={100} width={width/3} item={item}/>
          </TouchableOpacity>
          )
        })
      }
    </View>

  </View>
);

NavCard.defaultProps = {
  listData1:[
    {title:'积分兑换',url:{url:'http://www.haopic.me/wp-content/uploads/2015/12/20151229084606577.png'}},
    {title:'以物换物',url:{url:'http://www.haopic.me/wp-content/uploads/2015/12/20151229084606577.png'}},
    {title:'拍卖',url:{url:'http://www.haopic.me/wp-content/uploads/2015/12/20151229084606577.png'}}],

}
