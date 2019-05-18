import React from 'react';
import PropTypes from 'prop-types';
import { 
  View, 
  StyleSheet,
} from 'react-native';
import { getStatusBarHeight } from 'utils/StatusBarHeight';
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
// tabIconDefault
// tabIconSelected
function Header({ style, children }) {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

Header.propTypes = {
  style: PropTypes.object,
}

Header.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    paddingTop: getStatusBarHeight() + 10,
    backgroundColor: Colors.headerBackground,
    paddingHorizontal: Layouts.gutterWidth,
    height: 90,
    borderColor: '#EEEEEE',
    borderBottomWidth: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
  },
})

export default Header;