import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Image,
  Text,
  Dimensions,
  TouchableHighlight,

} from 'react-native';



import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import {getTuiJianGroup ,getMyGroup} from '../../network/GroupNet.js'
const { width } = Dimensions.get('window')
import {BASEURL} from '../../utils/netUtils.js'

const ITEM_HEIGHT = 60; //item的高度
const HEADER_HEIGHT = 30;  //分组头部的高度
const marginLeft = 16;


let myGro_itme = [{Id:'-100',CircleName:'添加圈子'}];
let myGroupData = [];
let tuijianGroupData = [];
class Group extends Component {

  static navigationOptions = {
    tabBarLabel: '圈子',
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKGroups.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),
    header:<HeaderView tilte='我得圈子'/>,
  }


  constructor(props) {
    super(props);
    this.state = {
      data:[{key:'myGroups',data:[...myGroupData,...myGro_itme],msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]

    };

    this._getGroup = this._getGroup.bind(this);
    this._getGroup(this.props.uuid);
  }


 async _getGroup(uuid){
    let formData = {
      userId:uuid,
    }
    await getMyGroup(formData,(responseData)=>{
      if (responseData['code'] === '1') {

        myGroupData = responseData['data'];
        this.setState({
          data:[{key:'myGroups',data:[...myGroupData,...myGro_itme],msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]
        })
      }

    });
    await getTuiJianGroup(formData,(responseData)=>{
      if (responseData['code'] === '1') {
        tuijianGroupData = responseData['data'];
        this.setState({
          data:[{key:'myGroups',data:[...myGroupData,...myGro_itme],msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]
        })
      }

    });
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.uuid != nextProps.uuid) {
      this._getGroup(nextProps.uuid);
    }
    return true;

  }



  render(){

    return(
      <View style={styles.container}>
          <SectionList
            removeClippedSubviews={false}
            keyExtractor={item => item.Id}
            renderSectionHeader={this._renderSectionHeader}
            renderItem={this._renderItem}
            ItemSeparatorComponent={this._renderSeparator}
            sections={this.state.data}
          />


      </View>
    );
  }

  _renderSectionHeader = (section) =>{
    let length = section.section.key === 'myGroups' ? `(${section.section.data.length-1})`:'';
    return(
      <View style={styles.headerView}>
          <Text style={styles.headerText}>{section.section.msg} {length}</Text>
      </View>
    )

  };

  _renderItem = (item) => {

    if (item.item.Id==='-100') {
       return(
         <TouchableHighlight
           underlayColor={'transparent'}
           onPress={()=>{
             console.log('添加更多圈子');
           }}>


           <View style={[styles.itemView,{justifyContent:'center',alignItems :'center'}]}>
             <Image
               style={{width:25,height:25}}
               source={require('./add.png')}/>
             <Text>添加更多圈子</Text>
           </View>
         </TouchableHighlight>
       )
    }
    else {
      return (
          <View style={styles.itemView}>
            <View style={{height:ITEM_HEIGHT,width:72,justifyContent:'center',alignItems :'center'}}>
              <Image
                style={{width:40,height:40}}
                source={{url:`${BASEURL}${item.item.CircleImg}`}}/>
            </View>
            {
              item.item.time?
              <View>

              </View>
              :
              <View style={{height:ITEM_HEIGHT,width:width-72,flexDirection:'row',alignItems :'center',justifyContent:'space-between'}}>
                <View>
                  <Text style={{color:'#4A4A4A',fontSize:14,fontWeight:'bold'}}>{item.item.CircleName}</Text>
                  <Text style={{height:8}}/>
                  <Text style={{color:'#898989',fontSize:13}}>
                    <Text style={{color:'#4DC1C1',fontSize:13}}>粉丝  </Text>
                    {item.item.CollectTimes}
                    <Text style={{color:'#4DC1C1',fontSize:13}}>  帖子  </Text>
                    {item.item.noteNumber}
                  </Text>
                </View>
                <View>
                  <TouchableHighlight
                    underlayColor={'transparent'}
                    style={{width:ITEM_HEIGHT,height:60,justifyContent:'center',alignItems :'center'}}
                    onPress={()=>{
                      console.log('add');
                    }}
                    >
                      <Image
                        style={{width:25,height:25}}
                        source={require('./add.png')}/>
                  </TouchableHighlight>

                </View>

              </View>
            }
          </View>
      )
    }
  };

  _renderSeparator = () => {
    return (
      <View style={styles.separator}/>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

  },

  headerView:{
    backgroundColor:'white',
    height: HEADER_HEIGHT,
    justifyContent:'center',

  },
  headerText:{
    left:marginLeft,
    fontSize: 15,
    color: '#898989'
  },
  separator:{
    height: 1,
    backgroundColor: "#CED0CE",
    marginLeft: marginLeft+56,
  },

  itemView: {
    flexDirection: 'row',
    width:width,
    height: ITEM_HEIGHT
  }
});

function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}

export default connect(select)(Group);
