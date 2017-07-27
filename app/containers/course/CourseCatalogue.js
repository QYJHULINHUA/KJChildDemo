
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  WebView,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window')

export default class CourseCatalogue extends Component {
  constructor(props) {
    super(props);
  }

  static propsTypes = {
    sourceData: React.PropTypes.string,
  }

  static defaultProps ={
    sourceData:'<p>  </p >',

  }

  render(){
    return(
      <View style={styles.container}>
        <WebView
          scalesPageToFit={true}
          source={{html:this.props.sourceData}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
  },
});

// '<p><img src="/js/ueditor/net/upload/image/20170708/6363512185795841845084206.jpg" title="x1.jpg"/></p><p><img src="/js/ueditor/net/upload/image/20170708/6363512185809082257812684.jpg" title="x2.jpg"/></p><p><img src="/js/ueditor/net/upload/image/20170708/6363512185818082768784500.jpg" title="x3.jpg"/></p><p><br/></p>'
