import React from 'react';
import PropTypes from 'prop-types';
import {
  Image, 
  View, 
  Text, 
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'expo';
import { getStatusBarHeight } from 'utils/StatusBarHeight';
import Colors from 'app-constants/Colors';
import Avatar from 'components/Avatar';
import Layouts from 'app-constants/Layout';
// tabIconDefault
// tabIconSelected
function Header({ style }) {
  return (
    <View style={[styles.container, style]}>
      <View style={[styles.row]}>
        <Image 
          source={require('assets/images/logo.png')} 
          resizeMode="contain" 
          style={styles.logo}
        />
        <View style={[styles.row, { marginLeft: Layouts.gutterWidth }]}>
          <Icon.Feather
            name="navigation"
            color={Colors.tabIconSelected}
            size={16}
          />
          <Text style={styles.locationText}>Melbourne, Australia</Text>
        </View>
      </View>
      <View style={[styles.row]}>
        <TouchableOpacity>
          <Icon.Feather
            name="search"
            color={Colors.tabIconSelected}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.avatar}>
          <Avatar 
            imageUrl="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/44/1540913834-sigourneyweaveravatar.jpg" 
            size={32}
          />
        </TouchableOpacity>
      </View>
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
    paddingTop: getStatusBarHeight() + (Layouts.gutterWidth * 2),
    backgroundColor: Colors.headerBackground,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: Layouts.gutterWidth,
    paddingBottom: Layouts.gutterWidth / 1.5,
    alignItems: 'center',
  },
  logo: {
    width: 32,
    height: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginLeft: Layouts.gutterWidth * 2,
  },
  text: {
    fontWeight: "600",
    fontSize: 24,
    marginLeft: Layouts.gutterWidth,
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    marginLeft: Layouts.gutterWidth / 2,
  }
})

export default Header;