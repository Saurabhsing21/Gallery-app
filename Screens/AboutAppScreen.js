// AboutAppScreen.js

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutAppScreen = () => {
  return (
    <View style={styles.container}>

      <Text style={styles.aboutText}>
        This mobile app is a gallery of images sourced from Flickr API. 
      </Text>
      <Text style={styles.aboutText}>
        It allows you to view recent images from Flickr on the homepage. 
      </Text>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  aboutText: {
    fontSize: 25,
    textAlign: 'justify',
    margin:20,
  },
});

export default AboutAppScreen;
