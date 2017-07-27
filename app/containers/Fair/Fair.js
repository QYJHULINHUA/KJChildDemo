import { connect } from 'react-redux';
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  Dimensions
} from 'react-native';

import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
const { width } = Dimensions.get('window')

import { SearchBar } from 'react-native-wxui';
import {SeparatorLine} from '../../components/SeparatorLine.js'

import {NavCard} from './NavCard.js'


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
    // this.state={
    //   text:'',
    // }
  }



  render(){

    return(
      <ScrollView style={styles.container}>

          <SearchBar
            editable={true}
            fullWidth={true}
            onPress={() => {
                console.log('SearchBar Pressed')
            }} />

            <Image
              style={{width:width,height:130,}}
              source={{url:'http://img.kutoo8.com/upload/image/71961728/dn201308081006_960x540.jpg'}}/>

              <NavCard onPressFun={(str)=>{
                console.log(str);
                // this._NavigationCardClick(str);

              }}/>

              <SeparatorLine/>


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
