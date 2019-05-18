import React, { Component } from 'react';
import { 
  StyleSheet, 
  View, 
  Image,
  Text,
  ScrollView,
} from 'react-native';
import Avatar from 'components/Avatar';

class ItemDetail extends Component {
  render() {
    const { photoUrl } = this.props;

    return (
      <View style={styles.container}>
        <Image
          source={{ uri: photoUrl }}
          style={styles.gallery}
          resizeMode="cover"
        />
        <View>
          <Text>ScrollView</Text>
        </View>
        <Image
          source={{ uri: 'https://i.stack.imgur.com/43hRI.jpg' }}
          resizeMode="cover"
          style={{
            width: '100%',
            height: 150
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  gallery: {
    flex: 1,
    width: '100%',
  }
})

export default ItemDetail;