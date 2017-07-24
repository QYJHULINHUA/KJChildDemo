import {
  View,
  Dimensions,
  Text
} from 'react-native';

const { width } = Dimensions.get('window')
const sectionHeight = 40;
import {navBarStyle} from '../../utils/KJStylesE.js'

export const SectionTitle = ({leftMargin,sectionTitle}) => (
  <View style={{height:sectionHeight,borderBottomWidth:1,borderBottomColor:'#D2D2D2'}}>
    <View style={{top:10,height:30,alignItems:'center',flexDirection:'row'}}>
      <Text style={{width:leftMargin}}/>
      <View style={{width:3,height:18,backgroundColor:navBarStyle.theme_color}}/>
      <Text style={{left:4,fontWeight:'400'}}>{sectionTitle}</Text>
    </View>

  </View>
);

SectionTitle.propTypes = {
  leftMargin: React.PropTypes.number.isRequired,
  sectionTitle: React.PropTypes.string.isRequired,
};
