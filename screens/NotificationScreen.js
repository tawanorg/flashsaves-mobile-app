import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

class NotificationScreen extends React.Component {
  static navigationOptions = {
    title: 'title ',
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>NotificationScreen</Text>
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

export default NotificationScreen;