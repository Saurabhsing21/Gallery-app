// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Screens/HomeScreen';
import AboutAppScreen from './Screens/AboutAppScreen'; 

const Drawer = createDrawerNavigator(); // Initializing drawer navigator

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3498db', 
          },
          headerTintColor: '#fff', 
        }}
      >
        <Drawer.Screen name='Home' component={HomeScreen} /> 
        <Drawer.Screen name='About App' component={AboutAppScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;