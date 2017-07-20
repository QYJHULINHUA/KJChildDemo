import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  SectionList,
  Image,
  Text

} from 'react-native';


import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import {getTuiJianGroup ,getMyGroup} from '../../network/GroupNet.js'

const ITEM_HEIGHT = 50; //item的高度
const HEADER_HEIGHT = 24;  //分组头部的高度
const SEPARATOR_HEIGHT = 1;  //分割线的高度

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
      data:[{key:'myGroups',data:myGroupData,msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]

    };

    this._getGroup = this._getGroup.bind(this);
    this._getGroup(this.props.uuid);
  }


 async _getGroup(uuid){
    let formData = {
      userId:uuid,
    }
    await getMyGroup(formData,(responseData)=>{
      // console.log('我的圈子回调：',uuid,responseData);
      // console.log('我的圈子回调：');
      if (responseData['code'] === '1') {
        myGroupData = responseData['data'];
        this.setState({
          data:[{key:'myGroups',data:myGroupData,msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]
        })
      }

    });
    await getTuiJianGroup(formData,(responseData)=>{
      // console.log('推荐圈子回调：',uuid,responseData);
      // console.log('推荐圈子回调：');
      if (responseData['code'] === '1') {
        tuijianGroupData = responseData['data'];
        this.setState({
          data:[{key:'myGroups',data:myGroupData,msg:'我的圈子'},{key:'tuijianGroups',data:tuijianGroupData,msg:'推荐的圈子'}]
        })
      }

    });
  }

  shouldComponentUpdate(nextProps, nextState){
    if (this.props.uuid != nextProps.uuid) {
      console.log('jinru',nextProps.uuid);
      this._getGroup(nextProps.uuid);
    }
    return true;

  }



  render(){
    // console.log('我的圈子刷新');
    return(
      <View style={styles.container}>
          <SectionList
            removeClippedSubviews={false}
            keyExtractor={item => item.Id}
            ref='list'
            enableEmptySections
            renderItem={this._renderItem}
            renderSectionHeader={this._renderSectionHeader}
            SectionSeparatorComponent={this.renderFooter}
            ItemSeparatorComponent={this.renderSeparator}
            sections={this.state.data}
            // getItemLayout={this._getItemLayout}
          />
      </View>
    );
  }


    renderSeparator = () => {
      return (
        <View
          style={{
            height: 1,
            backgroundColor: "#CED0CE",
            marginLeft: 16,
          }}
        />
      );
    };



  _renderItem = (item) => {
    // console.log(item);

    return (
        <View style={styles.itemView}>
            <Text>{item.item.CircleName}</Text>
        </View>
    )

  }

  _renderSectionHeader = (section) =>{
    console.log('section____',section);
    if (section.section.key === 'myGroups') {
      return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{section.section.msg} ({section.section.data.length})</Text>
        </View>
      )
    }else {
      return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>{section.section.msg}</Text>
        </View>
      )
    }

  }

  // _getItemLayout (data,index){
  //   let [length, separator, header] = [ITEM_HEIGHT, SEPARATOR_HEIGHT, HEADER_HEIGHT];
  //   return {length, offset: (length + separator) * index + header, index};
  // }

  renderFooter = () => {


    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <Text>添加圈子</Text>
      </View>
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: 16,
        }}
      />
    );
  };

}


const styles = StyleSheet.create({
  container: {
        flex: 1,
    },

    headerView: {
        justifyContent: 'center',
        height: HEADER_HEIGHT,
        paddingLeft: 20,
        backgroundColor: '#eee'
    },
    headerText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#3cb775'
    },
    itemView: {
        flexDirection: 'row',
        padding: 12,
        alignItems: 'center',
        height: ITEM_HEIGHT
    }
});

function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}

export default connect(select)(Group);
