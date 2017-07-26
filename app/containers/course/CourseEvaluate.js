import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  FlatList,


} from 'react-native';
import {BASEURL} from '../../utils/netUtils.js'
import StarRating from 'react-native-star-rating';
import {navBarStyle} from '../../utils/KJStylesE.js'

const { width } = Dimensions.get('window')
const leftMargin = 16;
import {SectionTitle} from './SectionTitle.js'
import KJC_Button from '../../components/JKButton.js'
import {getCourseEvaluate} from '../../network/CourseNetApi.js'


export default class CourseEvaluate extends Component {
  constructor(props) {
    super(props);

    this.state={
      data:[],
    }
  }

  static propsTypes = {
    evaluateOnPress: React.PropTypes.func.isRequired,
  }

  static defaultProps ={
    sourceData:{},

  }

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest(){
    if (this.props.sourceData.Id) {
      let formData = {
        lessonId:this.props.sourceData.Id,
      }
      getCourseEvaluate(formData,(responseData)=>{
        let code = responseData['code'];
        let data = responseData['data'];
        if (code === '1') {
          this.setState({
            data:data,
          })
        }

      })

    }

  }

  onStarRatingPress(rating){
    console.log(rating);
  }
  _renderItem = (item) => {
    console.log(item);
    return(
      <View style={{flexDirection:'row',width:width,height:100,borderBottomWidth:1,borderBottomColor:'#D2D2D2'}}>
        <View style={{width:76,height:100}}>
          <Image
            style={{top:10,left:16,width:50,height:50}}
            source={{url:`${BASEURL}${item.item.HeadImg}`}} />

        </View>

        <View style={{width:width-76,height:100,}}>
          <Text style={{left:5,top:10,right:10,height:50,color:'#898989'}}>
            {item.item.Content}
          </Text>

          <View style={{left:5,top:10,right:10,height:20,flexDirection:'row',alignItems:'center'}}>
            <View style={{width:100}}>
              <StarRating
              starSize={18}
              disabled={false}
              maxStars={5}
              rating={parseInt(item.item.Flag)}
              selectedStar={(rating) => this.onStarRatingPress(rating)}
              starColor={navBarStyle.theme_color}/>
            </View>
            <Text>    </Text>
            <Text style={{color:'#898989'}}>{parseInt(item.item.Flag)}分</Text>

            <Text>    </Text>
            <Text style={{color:'#898989'}}>{item.item.addtime}</Text>

          </View>



        </View>


      </View>
    )
  }




  render(){
    console.log(this.state.data);
    return(
      <View style={styles.container}>
        <SectionTitle
          sectionTitleStyle={{backgroundColor:'#DBF3F3'}}
          sectionTitle='评价详情'
          leftMargin={leftMargin}/>

          <FlatList
            data={this.state.data}
            keyExtractor={item => item.Id}
            initialNumToRender={6}
            renderItem={this._renderItem}/>

          <KJC_Button
            btn_text='评价'
            btnUnderlayColor='#4DC1C1'
            onPress={()=>{
              this.props.evaluateOnPress('点击评价')
            }}
            btnStyle={{height:60,width:width,backgroundColor:'#4DC1C1',}}/>


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
