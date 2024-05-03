// HomeScreen.js

import React, { useEffect, useState } from 'react';
import { View, FlatList, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { AntDesign } from '@expo/vector-icons';
import ReactNativeZoomableView from '@dudigital/react-native-zoomable-view/src/ReactNativeZoomableView';


const HomeScreen = () => {
  const [images, setImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isOffline, setIsOffline] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get(
        'https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=20&page=1&api_key=6f102c62f41998d151e5a1b48713cf13&format=json&nojsoncallback=1&extras=url_s'
      );
      const data = response.data;

      const imageUrls = data.photos.photo.map((photo) => photo.url_s);
      setImages(imageUrls);

      // Cache data
      await AsyncStorage.setItem('cachedImages', JSON.stringify(imageUrls));
      setIsOffline(false);
    } catch (error) {
      setIsOffline(true);

      const cachedImages = await AsyncStorage.getItem('cachedImages');
      if (cachedImages) {
        setImages(JSON.parse(cachedImages));
      }
    } finally {
      setRefreshing(false);
    }
  };

  const openFullScreenImage = (index) => {
    setSelectedImageIndex(index);
  };

  const screenWidth = Dimensions.get('window').width;

  const onRefresh = async () => {
    setRefreshing(true);
    fetchImages();
  };

  return (
    <View style={styles.container}>
      {selectedImageIndex !== null ? (
        <View style={{ flex: 1 }}>
          <View style={styles.fullImageHeader}>
            <TouchableOpacity onPress={() => setSelectedImageIndex(null)}>
              <AntDesign name="leftcircleo" size={40} color='#3498db' />
            </TouchableOpacity>
          </View>
            <View style={styles.fullImageContainer}>
                <ReactNativeZoomableView
                zoomEnabled={true}
                maxZoom={1.5}
                minZoom={0.5}
                zoomStep={0.25}
                >
                    <Image style={{ width: screenWidth, height: screenWidth }} source={{ uri: images[selectedImageIndex] }} />
                </ReactNativeZoomableView> 
            </View>
          
        </View>
      ) : (
        <FlatList
          data={images}
          keyExtractor={(_, index) => index.toString()}
          refreshing={refreshing}
          onRefresh={onRefresh}
          renderItem={({ item, index }) => (
            <TouchableOpacity onPress={() => openFullScreenImage(index)}>
              <Image style={styles.image} source={{ uri: item }} />
            </TouchableOpacity>
          )}
          numColumns={3}
        />
      )}
      {isOffline && <Text style={styles.offlinetext}>You are currently offline.</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 8,
    borderRadius: 8,
  },
  fullImageHeader: {
    position: 'absolute',
    top: 5,
    left: 10,
    zIndex: 1,
  },

  fullImageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  offlinetext: {
    alignSelf: 'center',
    marginTop: 10,
    color: 'red',
  },
});

export default HomeScreen;
