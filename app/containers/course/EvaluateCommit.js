
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TextInput,
  ScrollView,
} from 'react-native';

import { connect } from 'react-redux';
import HeaderView from '../../components/JKHeader/HeaderView1.js'
import {SectionTitle} from './SectionTitle.js'
import KJC_Button from '../../components/JKButton.js'
import StarRating from 'react-native-star-rating';
import {navBarStyle} from '../../utils/KJStylesE.js'
import {commitCourseEvaluate} from '../../network/CourseNetApi.js'
import Toast, {DURATION} from 'react-native-easy-toast'



const { width } = Dimensions.get('window')


class EvaluateCommit extends Component {
  constructor(props) {
    super(props);

    this.state = { text: '',starCount:0 };
    this._commitEvaluate = this._commitEvaluate.bind(this);

  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='发表评价'  showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  onStarRatingPress(rating) {
    this.setState({
      starCount: rating
    });
  }

  _commitEvaluate(){
    let formData = {
      block_level:this.state.starCount,
      proId:this.props.navigation.state.params.proId,
      UserId:this.props.uuid,
      subComment:this.state.text,
    }

    commitCourseEvaluate(formData,(responseData)=>{

      if (responseData['code'] === '1') {
          this.refs.toast.show('发表评论成功');
      }else {
        this.refs.toast.show('发表评论失败');
      }

    });

  }

  render(){

    console.log(this.props.navigation.state.params.proId);

    return(
      <ScrollView
        keyboardDismissMode="on-drag"
        style={styles.container}>
        <View style={{height:180,backgroundColor:'white',padding: 10}}>

          <TextInput
            style={{ height:160,borderColor: '#D2D2D2', borderWidth: 1,fontSize:14}}
            value={this.state.text}
            multiline = {true}
            placeholder='评价内容最多60个汉子'
            placeholderTextColor='#898989'
            maxLength={70}
            textAlignVertical = 'top'
            onChangeText={(text) => this.setState({text})}
            />

        </View>

        <View style={{height:10}}></View>

        <SectionTitle
          sectionTitleStyle={{backgroundColor:'white'}}
          sectionTitle='评价该课程'
          leftMargin={16}/>

          <View style={{height:60,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <View style={{height:20,width:120}}>
              <StarRating
              starSize={18}
              disabled={false}
              maxStars={5}
              rating={this.state.starCount}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              starColor={navBarStyle.theme_color}/>
            </View>



          </View>

          <KJC_Button
            btn_text='发表评价'
            btnUnderlayColor='#4DC1C1'
            onPress={this._commitEvaluate}

            btnStyle={{top:60,height:60,width:width,backgroundColor:'#4DC1C1',}}/>

            <Toast ref="toast" position="center"/>
      </ScrollView>
    );
  }
}

// absolute和relative.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
    backgroundColor:"#F3F3F3",


  },
});
function select(store){
   return {
     uuid:store.userInfo.user_id,
   }
}
export default connect(select)(EvaluateCommit);
