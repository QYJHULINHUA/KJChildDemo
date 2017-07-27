import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions,
  RefreshControl
} from 'react-native';

import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
const { width } = Dimensions.get('window')

import { SearchBar } from 'react-native-wxui';
import {SeparatorLine} from '../../components/SeparatorLine.js'

import {NavCard} from './NavCard.js'
import {FairSectionItem} from './FairSectionItem.js'
import FairHorList from './FairHorList.js'


class Fair extends Component {

  static navigationOptions = {
    tabBarLabel: '集市',
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKGroups.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),
    header:<HeaderView tilte='集市'/>,
  }

  constructor(props) {
    super(props);
    this.state={
      isRefreshing:false,
    }
    this._onRefresh=this._onRefresh.bind(this);

  }

  _onPressSectionItem(str:string){
    console.log(str);
  }

  _onRefresh() {
    console.log('刷新集市首页');
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 5000);

  }



  render(){

    return(
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            tintColor="#00C9C5"
            title="Loading..."
            titleColor="#00ff00"
            colors={['#00C9C5', '#00ff00', '#0000ff']}
            progressBackgroundColor="#ffff00"
          />
        }
         showsVerticalScrollIndicator={false}
         style={styles.container}>

          <SearchBar
            editable={true}
            fullWidth={true}
            onPress={() => {
                console.log('SearchBar Pressed')
            }} />

            <Image
              style={{width:width,height:130,}}
              source={{url:'http://img.kutoo8.com/upload/image/71961728/dn201308081006_960x540.jpg'}}/>

              <NavCard onPressFun={this._onPressSectionItem}/>

              <SeparatorLine/>
              <FairSectionItem
                leftMargin={16}
                getMorePress={this._onPressSectionItem}
                sectionTitle='以物换物'/>
              <FairHorList fairTypeStr='以物换物'/>

              <SeparatorLine/>
              <FairSectionItem
                leftMargin={16}
                getMorePress={this._onPressSectionItem}
                sectionTitle='积分兑换'/>
              <FairHorList fairTypeStr='积分兑换'/>

              <SeparatorLine/>
              <FairSectionItem
                leftMargin={16}
                getMorePress={this._onPressSectionItem}
                sectionTitle='拍卖'/>
              <FairHorList containerStyle={{height:280}} fairTypeStr='拍卖'/>

      </ScrollView>
    );
  }
}







const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  },

});

function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}

export default connect(select)(Fair);
