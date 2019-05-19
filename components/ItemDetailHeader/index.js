import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions, 
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

const width = Dimensions.get('window').width;

function HomeHeader({ style }) {
  return (
    <Header style={[styles.container, style]}>
      <TouchableOpacity>
        <Icon.Feather
          name="chevron-left"
          color={Colors.tabIconSelected}
          size={28}
        />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Text style={styles.title} numberOfLines={1}>#เครื่องสําอางญี่ปุ่น</Text>
      </View>
      <View style={styles.row}>
        <TouchableOpacity style={[styles.button]}>
          <Icon.Feather
            name="more-horizontal"
            color={Colors.black}
            size={28}
          />
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.button}>
          <Icon.MaterialCommunityIcons
            name="tag-plus"
            color={Colors.tabIconSelected}
            size={16}
          />
        </TouchableOpacity> */}
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
    position: 'relative'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTitle: {
    position: 'absolute',
    width: width,
    bottom: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.black,
  },
  button: {
    // backgroundColor: '#EEEEEE',
    // borderRadius: 4,
    // paddingHorizontal: 15,
    // paddingVertical: 0,
  }
})

export default HomeHeader;