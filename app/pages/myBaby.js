
import React,{Component} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  FlatList,
  ActivityIndicator,

} from 'react-native';

import { connect } from 'react-redux';
import {tabBarIconStyle} from '../utils/KJStylesE.js'
import HeaderView from '../components/JKHeader/HeaderView1.js'
import CellItem from '../components/JKListItem/item1.js'

class MyBaby extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 1,
      seed: 1,
      error: null,
      refreshing: false
    };


  }

  static navigationOptions = ({ navigation }) => ({
    header:<HeaderView tilte='我的宝宝' rightItemString='编辑' showBack={true} backBtnOnPress={()=>{
      navigation.goBack();
    }} />,
  });

  componentDidMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = () => {
    const { page, seed } = this.state;
    const url = `https://randomuser.me/api/?seed=${seed}&page=${page}&results=20`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: page === 1 ? res.results : [...this.state.data, ...res.results],
          error: res.error || null,
          loading: false,
          refreshing: false
        });
      })
      .catch(error => {
        this.setState({ error, loading: false });
      });
  };

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        seed: this.state.seed + 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          backgroundColor: "#CED0CE",
          marginLeft: 16,
        }}
      />
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






  render(){
    return(


      <View>
        <FlatList
            data={this.state.data}

            renderItem={({ item }) => (
              <CellItem cell_title={item.email}/>

            )}

            keyExtractor={item => item.email}
            ItemSeparatorComponent={this.renderSeparator}
            // ListHeaderComponent={this.renderHeader}
            ListFooterComponent={this.renderFooter}
            // onRefresh={this.handleRefresh}
            refreshing={this.state.refreshing}
            // onEndReached={this.handleLoadMore}
            onEndReachedThreshold={50}
          />
      </View>





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

 export default connect(select)(MyBaby);

 
