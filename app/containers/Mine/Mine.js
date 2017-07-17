
import React,{Component} from 'react';
import {tabBarIconStyle} from '../../utils/KJStylesE.js'
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,

} from 'react-native';

var ParallaxView = require('react-native-parallax-view');
import { Form,Button,Util } from 'react-native-wxui';
import {ImageButton} from '../../components/JKImageButton.js'
import { connect } from 'react-redux';
import {defaultContainerStyles} from '../../utils/KJStylesE.js'

class Mine extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    tabBarLabel: '我的',
    header:null,
    tabBarIcon:({tintColor})=>(
      <Image
        source={require('../src/JKMine.png')}
        style={{width: tabBarIconStyle.width,height: tabBarIconStyle.height,tintColor: tintColor}}
      />
    ),
  }


  render(){
    return(
      <ParallaxView
          // ref={component => this._scrollView = component}
          backgroundSource={require('../src/mineHeaderImage.jpg')}
          windowHeight={220}
          showsVerticalScrollIndicator={false}
          header={HEADER}>


          <View style={styles.seprateStyle}></View>
          <View style={styles.view1Style}>
            <View style={styles.view2Style}>
              <Text onPress={()=>{
                const { navigate } = this.props.navigation;
                navigate('MyBaby')
              }}> 我的宝宝 </Text>
              <Text>完善宝宝资料</Text>
            </View>
            <View style={styles.view3Style}>

              <Text onPress={()=>{
                const { navigate } = this.props.navigation;
                navigate('Login')
              }}>充值积分/注册</Text>
              <Text>购买挣取积分</Text>
            </View>

          </View>
          <View style={styles.seprateStyle}></View>

          <Form.LinkField
              label="我的圈子"
              iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
              onPress={() => {
                  console.log('LinkField pressed!')
              }}
             />

           <Form.LinkField
               label="我的课程"
               iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
               onPress={() => {
                   console.log('LinkField pressed!')
               }}
              />
            <Form.LinkField
                label="我的帖子"
                iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                onPress={() => {
                    console.log('LinkField pressed!')
                }}
               />
             <Form.LinkField
                 label="我的收藏"
                 iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                 onPress={() => {
                     console.log('LinkField pressed!')
                 }}
                />
              <Form.LinkField
                  label="我的评测"
                  iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                  onPress={() => {
                      console.log('LinkField pressed!')
                  }}
                 />
               <Form.LinkField
                   label="我的订单"
                   iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                   onPress={() => {
                       console.log('LinkField pressed!')
                   }}
                  />
                <Form.LinkField
                    label="我的专家预约"
                    iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                    onPress={() => {
                        console.log('LinkField pressed!')
                    }}
                   />

                 <Form.LinkField
                     label="我的专家预约"
                     iconLeft={<Image source={require('../src/setIcon.png')} style={styles.iconLeft} />}
                     onPress={() => {
                         console.log('LinkField pressed!')
                     }}
                    />


      </ParallaxView>
    );
  }
}

var styles = StyleSheet.create({
    header: {
      top:20,
      flex: 1,
    },
    header1: {
      height:40,
      flexDirection:'row-reverse',

    },

    header2: {
      height:180,
      justifyContent:'center',

    },

    view1Style:{
      width:null,
      height:80,
      flexDirection:'row',
      justifyContent:'space-between',
    },

    view2Style:{
      width:Util.WIDTH*0.5,
      backgroundColor:'green',
      height:80,
      justifyContent:'center',
    },
    view3Style:{
      width:Util.WIDTH*0.5,
      backgroundColor:'blue',
      height:80,
      justifyContent:'center',
    },

    setButton:{
      width:30,
      height:30,
      top:20,
      left:16,
    },
    avatarImageStyle:{
      left:40,
      width:100,
      height:100,
      borderRadius:50,
    },
    seprateStyle:{
      width:null,
      height:16,
      backgroundColor:defaultContainerStyles.main_Background_Color,
    },
    iconLeft: {
        width: 20,
        height: 20,

    },





});



var HEADER = (
    <View style={styles.header}>
      <View style={styles.header1}>
        <ImageButton
          style={styles.setButton}
          appearance={
            {
              normal: require("../src/setIcon.png"),
              highlight: require("../src/setIcon.png")
            }
          }

          onPress={()=>{
            console.log('hh');
          }}
        />
      </View>

      <View style={styles.header2}>

        <Image
           defaultSource={require('../src/avatarImageDefault.png')}
           style={styles.avatarImageStyle} />

      </View>
    </View>
);


function select(store){
   return {

   }
 }

 export default connect(select)(Mine);
