import React from 'react';
import PropTypes from 'prop-types';
import {
  View, 
  Text, 
  StyleSheet,
} from 'react-native';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
import Header from 'components/Header';

const MENU_NAME = {
  Notification: 'Notification',
  Bookmark: 'For you',
}

const NotificationHeader = ({ navigationState, style }) => {
  let activeIndex = navigationState.index;

  return (
    <Header style={[styles.container, style]}>
      {
        navigationState.routes.map((routes, key) => (
          <View
            style={[
              styles.menuItem,
              { borderBottomColor: key === activeIndex ? Colors.primary : '#FFFFFF', }
            ]} 
            key={routes.key}>
            <Text style={[
              styles.menuText,
              { color: key === activeIndex ? Colors.primary : Colors.color, }
            ]}>{MENU_NAME[routes.routeName]}</Text>
          </View>
        ))
      }
    </Header>
  );
};

NotificationHeader.propTypes = {
  style: PropTypes.object,
}

NotificationHeader.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: 0,
    backgroundColor: '#FFFFFF',
    // borderBottomWidth: 0,
  },
  menuItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    borderBottomWidth: 2,
    height: '100%',
  },
  menuText: {
    fontSize: 16,
    fontWeight: "600",
  },
})

export default NotificationHeader;