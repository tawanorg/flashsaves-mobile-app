import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'expo';
import Header from 'components/HomeHeader';
import GridItems from 'components/GridItems';
import Layouts from 'app-constants/Layout';
import Colors from 'app-constants/Colors';

const h = (maximum, minimum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

const data = [
  {
    key: 'a',
    photoUrl: 'https://scontent-lga3-1.cdninstagram.com/vp/7af128d3d40071ecd8edeef7ba47f186/5D549FA0/t51.2885-15/e35/58763471_592384411244755_7811020563016459547_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
    height: h(100, 200),
  },
  {
    key: 'b',
    photoUrl: 'https://scontent-lga3-1.cdninstagram.com/vp/75438acb8b5cadf47a9235d401e55dd2/5D686BA1/t51.2885-15/e35/53213320_1788235837943757_1076001338825228526_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
    height: h(200, 300),
  },
  {
    key: 'c',
    photoUrl: 'https://pbs.twimg.com/media/D5EIFWQUUAAiI72.jpg',
    height: h(100, 200),
  },
  {
    key: 'd',
    photoUrl: 'https://i0.wp.com/spellee.com/wp-content/uploads/2017/11/11-5-770x480.jpg',
    height: h(150, 200),
  },
  {
    key: 'd',
    photoUrl: 'https://arch.punpromotion.com/wp-content/uploads/2018/04/29597230_1709518562417823_7381979159427542338_n.jpg',
    height: h(150, 200),
  },
  {
    key: 'd',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuFSXVsZJko-oplyabv4ONUdK_UXwZkWRh0cmjZKNRPrZpck-Z',
    height: h(150, 200),
  },
  {
    key: 'd',
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG2xPikxBxQzvMhdz9Udey2iJezmHiOJM5cTmYn3ugc-hxVpGL',
    height: h(150, 200),
  },
  {
    key: 'd',
    photoUrl: 'https://piratenproxy.nl/pbs.twimg.com/media/D3Csq4aU0AErpsr.jpg',
    height: h(200, 350),
  },
];

const filtersData = [
  'รายการแนะนำ',
  'เครื่องสำอาง',
  'ของเล่นเด็ก',
  'เสื้อผ้า',
  'เครื่องใช้ไฟฟ้า'
]

export default class extends React.Component {
  static navigationOptions = {
    header: <Header />,
    gesturesEnabled: false,
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={{ flex: 1 }}>
          <View>
            <FlatList
              horizontal
              ListHeaderComponent={() => (
                <View style={[styles.filterItem, { marginLeft: Layouts.gutterWidth }]}>
                  <Icon.Feather name="filter" size={18} style={[styles.filterItemText, { fontSize: 18 }]} />
                </View>
              )}
              style={styles.filterContainer}
              showsHorizontalScrollIndicator={false}
              data={filtersData}
              renderItem={({ item, index }) => (
                <View style={[styles.filterItem, index === 0 && styles.filterSelected]}>
                  <Text style={[styles.filterItemText, index === 0 && styles.filterSelectedText]}>{item}</Text>
                </View>
              )}
            />
          </View>
          <ScrollView style={styles.gridItemWrapper}>
            <GridItems 
              data={data} 
              onPressItem={(item) => this.props.navigation.navigate('Detail', item)}
            />
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FFFFFF'
  },
  gridItemWrapper: {
    paddingHorizontal: Layouts.gutterWidth,
  },
  filterItem: {
    backgroundColor: Colors.backgroundColorLight,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: Layouts.gutterWidth * 2,
    paddingVertical: Layouts.gutterWidth,
    marginRight: Layouts.gutterWidth,
  },
  filterItemText: {
    position: 'relative',
    top: -1,
    color: Colors.black,
    fontWeight: "600",
    fontSize: 13,
    lineHeight: 20,
  },
  filterContainer: {
    paddingVertical: Layouts.gutterWidth,
  },
  filterSelected: {
    backgroundColor: Colors.primary,
  },
  filterSelectedText: {
    color: '#FFFFFF'
  },
});
