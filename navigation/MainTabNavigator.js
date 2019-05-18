import React from 'react';
import { View } from 'react-native';
import { Icon } from 'expo';
import { createStackNavigator, createBottomTabNavigator, createMaterialTopTabNavigator } from 'react-navigation';

import NotificationHeader from 'components/NotificationHeader';
import Colors from 'app-constants/Colors';
import HomePageContainer from 'containers/HomePage';
import PostScreen from 'screens/PostScreen';
import NotificationScreen from 'screens/NotificationScreen';
import BookmarkScreen from 'screens/BookmarkScreen';
import ItemDetailScreen from 'screens/ItemDetailScreen';

const HomeStack = createStackNavigator({
  Home: HomePageContainer,
  Detail: ItemDetailScreen,
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


const NotificationStack = createMaterialTopTabNavigator({
  Notification: NotificationScreen,
  Bookmark: BookmarkScreen,
}, {
  tabBarComponent: NotificationHeader,
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
      backgroundColor: Colors.bottomBarBackground,
    },
  },
});
