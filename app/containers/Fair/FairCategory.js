

import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  RefreshControl,
  Platform
} from 'react-native';

import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
const { width,height } = Dimensions.get('window')
import FairTagList from './FairTagList.js'
import OrderTag from './OrderTag'
import FairVertical from './FairVertical.js'

import { SearchBar } from 'react-native-wxui';



let dd = [
  {key:'001',tagTitle:'0-1岁'},
  {key:'002',tagTitle:'1-3岁'},
  {key:'003',tagTitle:'3-10岁'},
];

let dd2 = [
  {key:'001',tagTitle:'积分值'},
  {key:'002',tagTitle:'上架时间'},
];

class FairCategory extends Component {

  constructor(props) {
    super(props);
    this.state={
      isRefreshing:false,
    }
    this._onRefresh=this._onRefresh.bind(this);

  }

  static navigationOptions = ({ navigation }) => ({
    // rightImagePath:require('./resource/btnAdd.png')
    header:<HeaderView
      tilte={navigation.state.params.CategoryName}
      showRightButton={true}
      showBack={true}
      rihghtBtnOnPress={()=>{
        console.log('点击购物车');
      }}
      rightImagePath={require('./img/gouwuche.png')}
      backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  clickShangPingCell(item){

    console.log('点击商品：',item);
  }


  _onRefresh() {

    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 5000);

  }

  _selectTagIdx(idx: string){
    console.log(`tag is : ${idx} `);

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

        {this.props.navigation.state.params.CategoryName==='积分兑换'?<FairTagList selectItem = {this._selectTagIdx} tagData = {dd} rowHeight={50}/>:null}

        <OrderTag selectItem = {this._selectTagIdx} tagData = {dd2} rowHeight={50}/>
        <FairVertical
          listHeight={getFlatlistHeigh(this.props.navigation.state.params.CategoryName)}
          clickCell={this.clickShangPingCell}
          containerHeight={this.props.navigation.state.params.CategoryName==='拍卖'?280:250}
          fairTypeStr={this.props.navigation.state.params.CategoryName}/>





      </ScrollView>
    );
  }
}


function getFlatlistHeigh(str:string) {
  let headerHeight = Platform.OS === 'ios'?64:44;
  // let searchBarHeight = 35;
  // let tagListHeight = 50;
  // let oriderHeight = 50;

  if (str === '积分兑换') {
    return height - 137 - headerHeight;
  }else {
    return height - 87 - headerHeight;
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

export default connect(select)(FairCategory);
