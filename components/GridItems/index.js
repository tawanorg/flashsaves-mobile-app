import React from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native';
import ItemCard from 'components/ItemCard';
import Layouts from 'app-constants/Layout';
// import Colors from 'app-constants/Colors';

const GridItems = ({
  data,
  onPressItem,
}) => {
  const column1Data = data.filter((item, i) => i%2 === 0);
  const column2Data = data.filter((item, i) => i%2 === 1);
  return (
    <View style={styles.wrapper}>
      <View style={styles.column}>
        <FlatList
          scrollEnabled={false}
          data={column1Data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => onPressItem(item)}>
              <ItemCard 
                photoUrl={item.photoUrl}
                style={[styles.item, { 
                  height: item.height, 
                  marginLeft: 0,
                }]}
              />
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.column}>
        <FlatList
          scrollEnabled={false}
          data={column2Data}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => onPressItem(item)}>
              <ItemCard 
                photoUrl={item.photoUrl}
                style={[styles.item, {
                  height: item.height, 
                  marginRight: 0,
                }]}
              />
              </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Layouts.gutterWidth,
  },
  wrapper: {
    flex: 1,
    flexDirection: 'row',
  },
  column: {
    flex: 1,
    flexDirection: 'column'
  },
  item: {
    margin: Layouts.gutterWidth / 2,
  }
});

export default GridItems;