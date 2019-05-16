import React from 'react';
import PropTypes from 'prop-types';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Colors from 'app-constants/Colors';
 
const Avatar = ({ size, style, imageUrl }) => {
  return (
    <TouchableOpacity style={[styles.container, {
      width: size,
      height: size,
      borderRadius: size / 2,
    }, style]}>
      <View style={[styles.background, {
        width: size,
        height: size,
        borderRadius: (size) / 2,
      }]}>
        <Image
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={[styles.avatar, {
            width: size,
            height: size,
            borderRadius: (size) / 2,
          }]}
        />
      </View>
    </TouchableOpacity>
  );
};

Avatar.propTypes = {
  size: PropTypes.number,
  name: PropTypes.string,
  imageUrl: PropTypes.string,
}

Avatar.defaultProps = {
  size: 45,
  name: null,
  imageUrl: null,
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.primary,
    zIndex: 10,
  },
  avatar: {},
  background: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    fontFamily: 'Lato-Regular',
    fontWeight: "400",
    color: Colors.primary,
    marginLeft: 5
  }
})

export default Avatar;
