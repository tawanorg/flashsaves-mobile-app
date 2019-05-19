import React from 'react';
import {
  TouchableOpacity, 
  StyleSheet, 
  View, 
  Image, 
  ScrollView, 
  Text,
  Dimensions,
} from 'react-native';
import { Icon, BlurView, LinearGradient } from 'expo';
import { withNavigation } from 'react-navigation';
import { Navigator, Route } from 'utils/NavigatorGenerator';
import ItemDetailHeader from 'components/ItemDetailHeader';
import Avatar from 'components/Avatar';
import GridItems from 'components/GridItems';
import Layouts from 'app-constants/Layout';
import Colors from 'app-constants/Colors';

const height = Dimensions.get('window').height;

const h = (maximum, minimum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
const data = [
  {
    key: 'a',
    photoUrl: 'https://scontent-lga3-1.cdninstagram.com/vp/7af128d3d40071ecd8edeef7ba47f186/5D549FA0/t51.2885-15/e35/58763471_592384411244755_7811020563016459547_n.jpg?_nc_ht=scontent-lga3-1.cdninstagram.com',
    height: h(100, 200),
    nextId: 'b',
  },
  {
    key: 'b',
    photoUrl: 'https://piratenproxy.nl/pbs.twimg.com/media/D3Csq4aU0AErpsr.jpg',
    height: h(200, 350),
    nextId: 'c',
  },
  {
    key: 'c', 
    photoUrl: 'http://artsreview.com.au/wp-content/uploads/2017/10/OA-Costume-Sale-Rack.jpg',
    height: h(200, 350),
    nextId: 'd'
  },
  {
    key: 'd',
    photoUrl: 'https://media.australias.guide/file/sitemedia/wp-content/uploads/sites/6/kadina-garage-sale-at-kadina-showgrounds-5af3863eab57f3d762896571-800x598.jpeg',
    height: h(200, 350),
    nextId: null
  }
];
 
class ItemDetailScreen extends React.Component {
  static navigationOptions = {
    header: <ItemDetailHeader />,
    // gesturesEnabled: false,
  };

  render() {
    return (
      <Navigator {...this.props}>
        {
          data.map(({
            key,
            nextId,
            photoUrl,
          }, index) => (
            <Route 
              name={`Item-${key}`} 
              component={({ navigator }) => (
                <View 
                  style={styles.container}
                >
                  <ScrollView style={styles.contentContainer}>
                    <View
                      style={styles.galleryContainer}
                    >
                      <Image 
                        style={styles.gallery} 
                        source={{ uri: photoUrl }}
                        resizeMode="cover"
                      />
                      <BlurView 
                        tint="dark" 
                        intensity={90}
                        style={StyleSheet.absoluteFill}
                      >
                        <Image 
                          resizeMode="contain" 
                          style={styles.gallery} 
                          source={{ uri: photoUrl }}
                        />
                      </BlurView>
                      {/* <View style={styles.socialContainer}>
                        <TouchableOpacity style={styles.button}>
                          <Icon.Feather
                            name="heart"
                            size={32}
                            color="#FFFFFF"
                          />
                          <Text style={styles.buttonText}>4.5k Liked</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                          <Icon.MaterialCommunityIcons
                            name="share"
                            size={29}
                            color="#FFFFFF"
                          />
                          <Text style={styles.buttonText}>3.1k Shared</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                          <Icon.Feather
                            name="map-pin"
                            size={32}
                            color="#FFFFFF"
                          />
                          <Text style={styles.buttonText}>~1.5 Km</Text>
                        </TouchableOpacity>
                      </View> */}
                      <View style={styles.arrowContainer}>
                        <TouchableOpacity style={[styles.arrowButton, styles.button]}>
                          <Icon.Feather
                            name="heart"
                            size={24}
                            color="#FFFFFF"
                          />
                          <Text style={styles.buttonText}>4.5k Liked</Text>
                        </TouchableOpacity>
                        {index !== 0 && (
                          <TouchableOpacity 
                            onPress={() => navigator.pop()}
                            style={styles.arrowButton}
                          >
                            <Icon.Feather
                              name="arrow-left"
                              color='#FFFFFF'
                              size={32}
                            />
                          </TouchableOpacity>
                        )}
                        {
                          nextId && (
                            <TouchableOpacity 
                              onPress={() => navigator.push(`Item-${nextId}`)}
                              style={styles.arrowButton}
                            >
                              <Icon.Feather
                                name="arrow-right"
                                color='#FFFFFF'
                                size={32}
                              />
                            </TouchableOpacity>
                          )
                        }
                        <TouchableOpacity style={[styles.arrowButton, styles.button]}>
                          <Icon.Feather
                            name="map-pin"
                            size={24}
                            color="#FFFFFF"
                          />
                          <Text style={styles.buttonText}>~1.5 Km</Text>
                        </TouchableOpacity>
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
                    <View style={[styles.userContainer, styles.row, { justifyContent: 'space-between' }]}>
                      <View style={styles.row}>
                        <Avatar size={45} imageUrl="https://i.pravatar.cc/300" />
                        <View style={styles.column}>
                          <Text style={styles.userNameText}>Tawan</Text>
                        </View>
                      </View>
                      <TouchableOpacity style={styles.buttonPrimary}>
                        <Text style={styles.buttonPrimaryText}>Follow</Text>
                      </TouchableOpacity>
                    </View>
                    <Text style={styles.moreText}>More like this</Text>
                    <View style={styles.gridItemWrapper}>
                      <GridItems
                        onPressItem={(item) => navigator.push(`Item-${item.key}`)} 
                        data={data}
                      />
                    </View>
                  </ScrollView>
                </View>
              )}
            />
          ))
        }
      </Navigator>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  contentContainer: {
    flex: 1,
  },
  socialContainer: {
    paddingHorizontal: Layouts.gutterWidth,
    paddingTop: Layouts.gutterWidth,
    zIndex: 100,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  column: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  },
  galleryContainer: {
    backgroundColor: '#FFFFFF',
    position: 'relative',
  },
  gallery: {
    width: '100%',
    height: height / 2,
  },
  gridItemWrapper: {
    paddingHorizontal: Layouts.gutterWidth,
    paddingVertical: 10
  },
  button: {
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'transparent',
    width: 60,
    position: 'relative',
    top: 3,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 3
  },
  userContainer: {
    padding: Layouts.gutterWidth,
  },
  userNameText: {
    fontSize: 15,
    fontWeight: "600",
    marginLeft: Layouts.gutterWidth,
  },
  buttonPrimary: {
    backgroundColor: Colors.primary,
    paddingVertical: Layouts.gutterWidth,
    paddingHorizontal: Layouts.gutterWidth * 2,
    borderRadius: 4
  },
  buttonPrimaryText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: "600",
  },
  moreText: {
    fontSize: 18,
    fontWeight: "600",
    paddingTop: Layouts.gutterWidth * 2,
    paddingHorizontal: Layouts.gutterWidth,
  },
  arrowContainer: {
    zIndex: 200,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: Layouts.gutterWidth * 2,
  },
  arrowButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.black,
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    marginHorizontal: 10
  },
});

export default withNavigation(ItemDetailScreen);