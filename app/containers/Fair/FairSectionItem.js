import {
  View,
  Dimensions,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight,
} from 'react-native';

const { width } = Dimensions.get('window')
const sectionHeight = 40;
import {navBarStyle} from '../../utils/KJStylesE.js'

export const FairSectionItem = ({leftMargin,sectionTitle,sectionTitleStyle,getMorePress}) => (
  <View style={[styles.container,sectionTitleStyle]}>
    <View style={[styles.containerView,{left:leftMargin,width:width-leftMargin-10,}]}>
      <View style={styles.leftView}>

        <View style={{width:3,height:18,backgroundColor:navBarStyle.theme_color}}/>
        <Text style={{left:4,fontWeight:'400'}}>{sectionTitle}</Text>

      </View>
      <TouchableHighlight
        underlayColor={'transparent'}
        onPress={()=>{
          getMorePress(sectionTitle)
        }}
        >

        <View style={styles.rightView}>
          <Text style={{color:'#9B9B9B',fontSize:14}}>更多</Text>
          <Image
            style={{width:15,height:15}}
            source={require('../src/arrows.png')}/>

        </View>
      </TouchableHighlight>



    </View>


  </View>
);

FairSectionItem.propTypes = {
  leftMargin: React.PropTypes.number.isRequired,
  sectionTitle: React.PropTypes.string.isRequired,
  getMorePress:React.PropTypes.func.isRequired,
};

const styles = StyleSheet.create({

  container:{
    height:sectionHeight,
    width:width,
    borderBottomWidth:1,
    borderBottomColor:'#D2D2D2',
  },
  containerView:{
    top:10,
    height:30,
    justifyContent:'space-between',
    alignItems:'center',
    flexDirection:'row',

  },
  leftView:{
    flexDirection:'row',
  },
  rightView:{
    height:30,
    alignItems:'center',
    flexDirection:'row',

  },
})
