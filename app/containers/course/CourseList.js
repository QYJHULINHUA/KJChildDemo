
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Dimensions,
  Image,
  TouchableHighlight,
  ActivityIndicator


} from 'react-native';


import {BASEURL} from '../../utils/netUtils.js'
import Toast, {DURATION} from 'react-native-easy-toast'

import CourseTagList from './ CourseTagList.js'
import { connect } from 'react-redux';
import {getCourseList} from '../../network/CourseNetApi.js'

const { width } = Dimensions.get('window')
let dd = [
  {key:'001',tagTitle:'0-1岁'},
  {key:'002',tagTitle:'1-3岁'},
  {key:'003',tagTitle:'3-10岁'},
];


class CourseList extends Component {
  constructor(props) {
    super(props);
    this.state={
      loading: false,
      data: [],
      page: 1,
      error: null,
      refreshing: false,
      mainLabel:null,
      childLabel:null,

    }

    this._renderItem = this._renderItem.bind(this);
  }

  static propTypes = {
    tagListShow:React.PropTypes.bool,//是否显示返回按钮
    scrollEnabled:React.PropTypes.bool,
    reqCourseType:React.PropTypes.string,//免费课程、畅销课程、推荐课程
    limit:React.PropTypes.number,
  }

  static defaultProps = {
    tagListShow: true,
    scrollEnabled:true,
    reqCourseType:'changxiaokecheng',//默认请求免费课程
    limit:10,//默认一页请求十条
  };

  componentDidMount() {
    this.reqCourseList();
  }

   reqCourseList = () => {
    const { page,mainLabel,childLabel } = this.state;
    const {limit,reqCourseType} = this.props;
    let is_free = true;
    if (reqCourseType === 'isFree') {
      is_free = true;
    }else if (reqCourseType === 'changxiaokecheng') {
      is_free = false;
    }else {
      is_free = true;
    }

    let formData = {
      page:page,
      mainLabel:mainLabel,
      childLabel:childLabel,
      limit:limit,
      is_free:is_free,

    }

    this.setState({ loading: true });
    getCourseList(formData,(responsedata)=>{
      let code = responsedata['code'];
      // console.log(responsedata);
      if (code === '1') {
        if (responsedata['data'].length > 0) {
          this.setState({
            data: page === 1 ? responsedata['data'] : [...this.state.data, ...responsedata['data']],
            error: responsedata['msg'] || null,
            loading: false,
            refreshing: false
          });

        }else {
          // this.refs.toast.show('未加载到更多数据');
          this.setState({
            data:[...this.state.data, ...responsedata['data']],
            page: this.state.page > 1 ? this.state.page-1:1,
            error:responsedata['msg'] || null,
            loading: false,
            refreshing: false
          });

        }


      }else {
        console.log('加载数据失败');
        this.refs.toast.show(responsedata['msg']);
        this.setState({
          data:this.props.data,
          page: this.state.page > 1 ? this.state.page-1:1,
          error:responsedata['msg'] || null,
          loading: false,
          refreshing: false
        });
      }
    })

  };

  handleRefresh = () => {
    console.log('ssss');
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.reqCourseList();
      }
    );
  };

  handleLoadMore = () => {
    console.log("滑动到底部了");

    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.reqCourseList();
      }
    );
  };

  renderFooter = () => {
    if (!this.state.loading) return null;
    return (
      <View
        style={{
          paddingVertical: 20,
          borderTopWidth: 1,
          borderColor: "#CED0CE"
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  };

  _renderItem = ({item}) => (
    <TouchableHighlight
      underlayColor={'transparent'}
      onPress={()=>{
        this.props.onPressCell(item);
      }}>
      <View style={{width:width/2,height:210,justifyContent:'center',alignItems:'center'}}>
        <Image resizeMode='stretch' style={{width:width/2 - 20,height:90}}
        source={{url:`${BASEURL}${item.ProImg}`}} />
        <View style={{height:10}}/>
        <View style={{width:width/2-20,height:90,}}>
          <Text style={{color:'#4A4A4A',fontSize:14,fontWeight:'bold'}}>{item.ProName}</Text>
          <Text style={{top:2,color:'#898989',fontSize:13 ,width:width/2-20}} numberOfLines={2}>{item.ProDesc}</Text>
          <Text style={{top:5,color:'red',fontSize:12}}>{item.ProScore==='0'?'免费':`${item.ProScore}积分`}</Text>
        </View>

      </View>
  </TouchableHighlight>

  );


  _selectTagIdx(idx: string){
    console.log(`tag is : ${idx} `);

  }

  render(){

    return(
      <View style={styles.container}>
        {
          this.props.tagListShow?<View style={{backgroundColor:'#F3F3F3',height:50}}>
            <CourseTagList
              selectItem = {this._selectTagIdx}
              tagData = {dd}
              rowHeight={50}/>
          </View>:null

        }

        <View style={{height:10}}/>

        <FlatList
          data={this.state.data}
          keyExtractor={item => item.Id}
          renderItem={this._renderItem}
          numColumns={2}
          scrollEnabled={this.props.scrollEnabled}
          onRefresh={this.handleRefresh}
          onEndReached={this.handleLoadMore}
          refreshing={this.state.refreshing}

          ListFooterComponent={this.renderFooter}
          onEndReachedThreshold={0.1}
          />
          <Toast ref="toast" position="center"/>


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
function select(store){
   return {
   }
}
export default connect(select)(CourseList);
