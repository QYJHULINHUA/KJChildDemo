'use strict'

import React ,{Component} from 'react';
import {Provider} from 'react-redux';

import store from './myRedux/store';
import MyNavigator from './containers/KJChlid_Navigator.js'


export default class App extends Component {
  render(){
    return(
      <Provider store = {store}>
        <MyNavigator/>
      </Provider>
    )
  }
}
