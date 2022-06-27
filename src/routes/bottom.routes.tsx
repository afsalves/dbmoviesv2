import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '@modules/Home'
import Favorites from '@modules/Favorites'
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import {theme} from '@global/styles/theme'

const {Navigator, Screen} = createBottomTabNavigator();

const BottomNavigation: React.FC = () => {

  const {secondary80} = theme.colors;
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: theme.colors.primary,
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabelStyle: {color: 'white', fontSize: 15, fontFamily:theme.fonts.heading},
        tabBarStyle: {
          backgroundColor: secondary80,
          borderTopColor: secondary80,
          height: 100,
        },
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: (({size, focused}) => (
            <Ionicons
              name="home-outline"
              size={size}
              color={focused ? 'red' : 'white'}
            />
          ))
        }}
      />

      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarIcon: (({size, focused}) => (
            <MaterialIcons
              name="favorite-outline"
              size={size}
              color={focused ? 'red' : 'white'}
            />
          ))
        }}
      />
    </Navigator>
  );
};

export default BottomNavigation;
