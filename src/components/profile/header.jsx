import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import ArrowDown from '../../assets/icons/arrowDown';
import Plus from '../../assets/icons/plus';
import HamburgerMenu from '../../assets/icons/hamburgerMenu';

const HeaderProfile = () => {
  return (
    <View style={{flexDirection: 'row', paddingHorizontal: 14,justifyContent:"space-between"}}>
      <View style={{flexDirection: 'row'}}>
        <Text style={{fontWeight: '700', fontSize: 22}}>username</Text>
        <ArrowDown style={{paddingHorizontal: 14, marginTop: 3}} />
      </View>
      <View  style={{flexDirection: 'row',gap:20}}>
        <Plus />
        <HamburgerMenu />
      </View>
    </View>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({});
