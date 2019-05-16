import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { LinearGradient } from 'expo';
import Avatar from 'components/Avatar';
import Layouts from 'app-constants/Layout';

const ItemCard = ({ photoUrl, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image 
        source={{ uri: photoUrl }}
        style={[styles.image, {
          height: style.height
        }]}
        resizeMode="cover"
      />
      <View style={styles.user}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Avatar size={24} imageUrl="https://i.pravatar.cc/300" />
          <View style={{ flexDirection: 'column', marginLeft: 5 }}>
            <Text style={styles.text}>Tim Tawan</Text>
            <Text style={[styles.text, { fontSize: 10 }]}>1.4k flashes</Text>
          </View>
        </View>
      </View>
      <LinearGradient
        colors={['transparent', 'transparent', 'rgba(0,0,0,0.8)']}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderRadius: 5,
    position: 'relative',
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    flex: 1,
    borderRadius: 5,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  user: {
    padding: Layouts.gutterWidth,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 100,
  }
});


export default ItemCard;