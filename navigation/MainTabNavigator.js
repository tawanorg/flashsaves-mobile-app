import React from 'react';
import { View } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import Colors from 'app-constants/Colors';
import HomePageContainer from 'containers/HomePage';
import PostScreen from 'screens/PostScreen';
import SettingScreen from 'screens/SettingScreen';

const HomeStack = createStackNavigator({
  Home: HomePageContainer,
});

HomeStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="home"
      size={24}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

const PostStack = createStackNavigator({
  Post: PostScreen,
});

PostStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <View style={{ 
      backgroundColor: Colors.primary,
      borderRadius: 60 / 2,
      width: 60,
      height: 60,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    }}>
      <Icon.Feather
        name="plus"
        size={40}
        color="#FFFFFF"
      />
    </View>
  ),
};


const NotificationStack = createStackNavigator({
  Setting: SettingScreen,
});

NotificationStack.navigationOptions = {
  tabBarLabel: () => null,
  tabBarIcon: ({ focused }) => (
    <Icon.Feather
      name="heart"
      size={24}
      color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  ),
};

export default createBottomTabNavigator({
  HomeStack,
  PostStack,
  NotificationStack,
}, {
  tabBarOptions: {
    style: {
      backgroundColor: '#FAFAFA',
    },
  },
});
