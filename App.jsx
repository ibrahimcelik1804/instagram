import {Text, SafeAreaView} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabsNavigations from './src/router/BottomTabsNavigations';

const App = () => {
  return (
    <NavigationContainer>
      <BottomTabsNavigations />
    </NavigationContainer>
  );
};

export default App;
