import React from 'react';
import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';

const RootStack = createStackNavigator({
  Main: MainTabNavigator,
}, {
  mode: 'modal',
  headerMode: 'none',
});

export default createAppContainer(createSwitchNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: RootStack,
}));