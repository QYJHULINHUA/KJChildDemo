
// 社会焦点

import {
  View,
  Dimensions,
  Text
} from 'react-native';

import {navBarStyle} from '../../utils/KJStylesE.js'
import Swiper from 'react-native-swiper'
const cellHeight = 25;
const { width } = Dimensions.get('window')
export const SocialFocus = () => (
  <View style={{height:cellHeight,backgroundColor:navBarStyle.theme_color,flexDirection:'row',justifyContent:'space-between'}}>
    <View style={{height:cellHeight,alignItems:'center'}}>
      <Text style={{color:'white',fontSize:14,fontWeight:'bold'}}>📢 社会焦点  </Text>
    </View>


    <Swiper style={{}} horizontal={false} autoplay autoplayTimeout={3.5}>
      <View style={{height:cellHeight,justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:13 ,width:width-150}} numberOfLines={1}>含A2蛋白质的婴幼儿配方奶粉，吃的头更大吃的头更大吃的头更大</Text>
      </View>
      <View style={{height:cellHeight,justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:13 ,width:width-150}} numberOfLines={1}>美绑架中国女学者章莹颖嫌犯今出庭受审 中方敦促美严惩凶手</Text>
      </View>
      <View style={{height:cellHeight,justifyContent:'center'}}>
        <Text style={{color:'white',fontSize:13 ,width:width-150}} numberOfLines={1}>86.4%受访者认为须治理塑料袋使用 菜市场使用最多</Text>
      </View>
    </Swiper>
  </View>
);
