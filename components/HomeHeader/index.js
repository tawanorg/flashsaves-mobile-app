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
import Colors from 'app-constants/Colors';
import Layouts from 'app-constants/Layout';
import Avatar from 'components/Avatar';
import Header from 'components/Header';

function HomeHeader({ style }) {
  return (
    <Header style={[styles.container, style]}>
      <View style={[styles.row, { flex: 1, overflow: 'hidden' }]}>
        <Image 
          source={require('assets/images/logo.png')} 
          resizeMode="contain" 
          style={styles.logo}
        />
        {/* <TouchableOpacity style={{ marginLeft: 5 }}>
          <Text style={styles.locationText}>Melbourne</Text>
        </TouchableOpacity> */}
      </View>
      <View style={styles.row}>
        <TouchableOpacity>
          <Icon.Feather
            name="search"
            color={Colors.tabIconSelected}
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: Layouts.gutterWidth * 2 }}>
          <Avatar 
            imageUrl="https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/44/1540913834-sigourneyweaveravatar.jpg" 
            size={32}
            />
        </TouchableOpacity>
    </View>
    </Header>
  );
};

HomeHeader.propTypes = {
  style: PropTypes.object,
}

HomeHeader.defaultProps = {
  style: null,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    width: 120,
    height: 32,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    
  },
  locationText: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black
  }
})

export default HomeHeader;