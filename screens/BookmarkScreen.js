import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class BookmarkScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Bookmark</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default BookmarkScreen;