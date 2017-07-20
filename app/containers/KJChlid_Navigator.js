
import { StackNavigator,TabNavigator,TabBarBottom } from 'react-navigation';
import { connect } from 'react-redux';

import Home from './Home/Home.js'
import Groups from './Groups/Group.js'
import Mine from './Mine/Mine.js'
import MyBaby from '../pages/myBaby.js'
import Evaluation from '../pages/Evaluation.js'

import Regist from './Mine/Regist.js'
import Login from './Mine/Login.js'

import {tabBarIconStyle} from '../utils/KJStylesE.js'

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


const RootTabNav = TabNavigator(
  {
    Home: { screen: Home },
    Groups: { screen: Groups },
    Mine: { screen: Mine },
  },
  {
    swipeEnabled: false,
    animationEnabled: false,
    lazyLoad: false,
    navigationOptions:{
      headerLeft:null,
      gesturesEnabled:false,
    },
    tabBarComponent:TabBarBottom,
    tabBarPosition:'bottom',
    tabBarOptions: {
      activeTintColor: tabBarIconStyle.activeColor,
      inactiveTintColor: tabBarIconStyle.inactiveColor,
      labelStyle: {
          fontSize: tabBarIconStyle.labelFontSize,
      },
    },
  }
);


const SimpleAppReactNavigation = StackNavigator(
  {
    RootTabNav: { screen: RootTabNav },
    MyBaby:{ screen: MyBaby },
    Regist:{ screen:Regist},
    Login:{screen:Login},
    Evaluation:{screen:Evaluation},
  },
  {
    initialRouteName:'RootTabNav',
  }
);

export default connect()(SimpleAppReactNavigation);
