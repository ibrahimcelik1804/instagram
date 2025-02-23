import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowDown from '../../assets/icons/arrowDown';
import Messenger from '../../assets/icons/messenger';
import Plus from '../../assets/icons/plus';
import Heart from '../../assets/icons/heart';

const HeaderTop = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 13,
        paddingVertical: 5,
      }}>
      <View style={{flexDirection: 'row', gap: 8}}>
        <Image source={require('../../assets/Images/logo.png')} />
        <ArrowDown style={{}} />
      </View>
      <View style={{flexDirection: 'row'}}>
        <Heart />
        <Messenger style={{paddingHorizontal: 30}} />
        <Plus />
      </View>
    </View>
  );
};

export default HeaderTop;

const styles = StyleSheet.create({});
