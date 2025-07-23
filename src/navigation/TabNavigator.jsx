import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Gallery from '../screens/Gallery';
import Game from '../screens/Game';
import Home from '../screens/Home';
import Planetas from '../screens/Planetas';
import Curiosidades from '../screens/Curiosidades';
import Footer from '../components/Footer/Footer';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBar={props => <Footer {...props} />}
      screenOptions={{ headerShown: false }}
    >
      <Tab.Screen name="Gallery" component={Gallery} />
      <Tab.Screen name="Game" component={Game} />
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Planets" component={Planetas} />
      <Tab.Screen name="Curiosities" component={Curiosidades} />
    </Tab.Navigator>
  );
} 