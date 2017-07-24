

import {
  View,
  Text
} from 'react-native';
import {SeparatorLine} from '../../components/SeparatorLine.js'

export const BabyRank = ({dataSource}) => (
  dataSource != null?(
    <View>
      <SeparatorLine/>
      <View style={{height:100,backgroundColor:'white',justifyContent:'center'}}>
        <Text>这一块是宝宝排名,如果没有宝宝就看不到这里了喔</Text>
      </View>
    </View>


  ):(
    <View></View>
  )
);
