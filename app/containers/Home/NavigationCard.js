

import {
  View,
  Text
} from 'react-native';

export const NavigationCard = ({separatorStyle}) => (
  <View style={{height:160,backgroundColor:'white'}}>
    <View style={{height:80,flexDirection:'row',justifyContent:'space-between'}}>
      <Text>😊 社会焦点</Text><Text>😄育儿知识</Text><Text>😢宝贝帮</Text><Text>😁课程</Text>
    </View>

    <View style={{height:80,flexDirection:'row',justifyContent:'space-between'}}>
      <Text>😊 专家帮助</Text><Text>😄宝贝活动</Text><Text>😢宝贝评测</Text><Text>😁集市</Text>
    </View>
  </View>
);
