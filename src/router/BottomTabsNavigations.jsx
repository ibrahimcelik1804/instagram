import {View, Text, Image, StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home';
import SCREENS from '../utils/router';
import SearchScreen from '../screens/search';
import ReelScreen from '../screens/reel';
import ShopScreen from '../screens/shop';
import ProfileScreen from '../screens/profile';
import Home from '../assets/icons/home';
import Search from '../assets/icons/search';
import Play from '../assets/icons/play';
import Bag from '../assets/icons/bag';
import RedDot from '../assets/icons/red';
import stories from '../utils/stories';

const {HOMESCREEN, PROFILESCREEN, REELSCREEN, SHOPSCREEN, SEARCHSCREEN} =
  SCREENS;
const Tab = createBottomTabNavigator();

const BottomTabsNavigations = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'white',
      }}>
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size}) => (
            <Home width={size} height={size} fill={color} />
          ),
        }}
        name={HOMESCREEN}
        component={HomeScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => <Search focused={focused} />,
        }}
        name={SEARCHSCREEN}
        component={SearchScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => <Play focused={focused} />,
        }}
        name={REELSCREEN}
        component={ReelScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({color, size, focused}) => <Bag focused={focused} />,
        }}
        name={SHOPSCREEN}
        component={ShopScreen}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={[
                {
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: 8,
                  marginTop: 16,
                },
              ]}>
              <View style={[{width: 35, height: 35}, focused && styles.avatar]}>
                <Image
                  style={[
                    {
                      width: 28,
                      height: 28,
                      justifyContent: 'center',
                      alignItems: 'center',
                      borderRadius: 14,
                    },
                  ]}
                  source={{uri: stories[0].user.avatar}}
                />
              </View>
              <RedDot />
            </View>
          ),
        }}
        name={PROFILESCREEN}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
};

export default BottomTabsNavigations;

const styles = StyleSheet.create({
  avatar: {
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
