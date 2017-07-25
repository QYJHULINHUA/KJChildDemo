import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Dimensions,
  TouchableHighlight,
  Image,
  ScrollView,


} from 'react-native';
import KJC_Button from '../../components/JKButton.js'


import StarRating from 'react-native-star-rating';
const { width } = Dimensions.get('window')
import {navBarStyle} from '../../utils/KJStylesE.js'
import {SectionTitle} from './SectionTitle.js'
import CourseList from './CourseList.js'

const leftMargin = 16;

const courseContext = '《红楼梦》，原名《石头记》，中国古典长篇章回小说，是中国四大小说名著之一。《红楼梦》书内提及的书名，还有《情僧录》、《风月宝鉴》、《金陵十二钗》、《金玉缘》，乾隆四十九年甲辰（1784年）梦觉主人序本题为《红楼梦》（甲辰梦序抄本）。1791年在第一次活字印刷后（程甲本），《红楼梦》便取代《石头记》而成为通行的书名。 原本共120回，但后40回失传。后来高鹗、程伟元声称取得后40回稿，并整理印行，即为目前较通行的120回全本。现今学界普遍认为通行本前八十回为曹雪芹所作，后四十回不知为何人所作。但民间普遍认为为高鹗所作，另有一说为高鹗、程伟元二人合作著续。人民文学出版社认为';

export default class CourseIntroduce extends Component {
  constructor(props) {
    super(props);
    this.state = {
      teacherAvatar:'http://p3.wmpic.me/article/2014/07/29/1406605856_wMlLrnQe.jpg'
    };

  }

  static defaultProps ={
    sourceData:{},

  }
  onStarRatingPress(rating) {
    // this.setState({
    //   starCount: rating
    // });
  }


  render(){
    console.log('sourceData',this.props.sourceData);
    let sourceData = this.props.sourceData;
    return(
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={{left:leftMargin,width:200,height:20,justifyContent:'center'}}>
          <Text style={{color:'#000000',fontWeight:'400'}}>{sourceData.ProName}</Text>
        </View>

        <View style={{height:30,alignItems:'center',flexDirection:'row',borderBottomWidth:1,borderBottomColor:'#D2D2D2'}}>
          <Text style={{width:leftMargin}}/>
          <StarRating
          starSize={18}
          disabled={false}
          maxStars={5}
          rating={sourceData.flag}
          selectedStar={(rating) => this.onStarRatingPress(rating)}
          starColor={navBarStyle.theme_color}/>
          <Text>   </Text>
          <Text>{sourceData.flag}分</Text>
          <Text>   </Text>
          <Text>{sourceData.BrowseTimes}人学过</Text>
        </View>

        <SectionTitle
          sectionTitle='课程简介'
          leftMargin={leftMargin}/>

          <Text
            numberOfLines={4}
            style={{height:75,paddingVertical:13,paddingLeft:15,paddingRight:5,color:'#898989',fontSize:12}}>
            {sourceData.ProDesc}
          </Text>

        <SectionTitle
          sectionTitle='讲师'
          leftMargin={leftMargin}/>

          <View
            style={{flexDirection:'row',height:75,paddingVertical:13,paddingLeft:15,paddingRight:5}}>
            <Image
              source={{uri:this.state.teacherAvatar}}
              style={{width:50,height:50}}/>

              <Text
                numberOfLines={5}
                style={{left:5,width:width-80, color:'#898989',fontSize:12}}>
                {courseContext}
              </Text>

          </View>

        <SectionTitle
          sectionTitle='课程推荐'
          leftMargin={leftMargin}/>

          <View style={{height:220}}>

            <CourseList
              tagListShow={false}
              scrollEnabled={false}
              limit={2}
              onPressCell={(item)=>{
                console.log(`点击课程： ${item}`);

                // const { navigate } = this.props.navigation;
                // navigate('CourseDetails',{courseItem:item})
              }}/>

          </View>

          <View style={{height:60,flexDirection:'row'}}>
            <KJC_Button
              btn_text='免费'
              btnUnderlayColor='#F5556D'
              onPress={()=>{
                console.log('免费button');
              }}
              btnStyle={{height:60,width:0.33*width,backgroundColor:'#F5556D',}}/>
            <KJC_Button
              btn_text='加入学习'
              btnUnderlayColor='#4DC1C1'
              onPress={()=>{
                console.log('加入学习button');
              }}
              btnStyle={{height:60,width:0.67*width,backgroundColor:'#4DC1C1',}}/>
          </View>

      </ScrollView>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width:width,
  },
});
