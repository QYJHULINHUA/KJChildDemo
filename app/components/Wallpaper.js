import React, { Component, PropTypes } from 'react';
import Dimensions from 'Dimensions';
import {
	StyleSheet,
	Image,
} from 'react-native';



export default class Wallpaper extends Component {

	static propsTypes = {
		// bgSrc:React.PropTypes.string,
		// imageStyle
	}

	render() {
		return (
			<Image style={[styles.picture,this.props.imageStyle]} source={this.props.bgSrc}>
				{this.props.children}
			</Image>
		);
	}
}

const styles = StyleSheet.create({
	picture: {
		flex: 1,
		width: null,
		height: null,
		resizeMode: 'cover',
	},
});
