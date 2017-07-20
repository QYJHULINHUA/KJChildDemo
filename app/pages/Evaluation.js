

import React, { Component, PropTypes } from 'react';
import {
  Text,
	StyleSheet,
	View,
} from 'react-native';

import Wallpaper from '../components/Wallpaper.js';
import { connect } from 'react-redux';
import HeaderView from '../components/JKHeader/HeaderView1.js'



class Evaluation extends Component {



	static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='综合评测' rightItemString='分享' showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

	render() {
		return (

			<Wallpaper bgSrc={require('../containers/src/pingce.jpg')}>
			{/**code*/}
			</Wallpaper>
		);
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },


});

function select(store){
   return {

   }
}

export default connect(select)(Evaluation);
