import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import profileStore from '../../utils/profileStore';

const ProfileStory = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {profileStore.map(item => (
        <View key={item.id}
          style={{alignItems: 'center', marginHorizontal: 12, marginTop: 2}}>
          <View
            style={{
              borderColor: 'gray',
              borderWidth: 2,
              borderRadius: 35,
              width: 70,
              height:70,
              justifyContent:"center",
              alignItems:"center"
            }}>
            <Image
              style={{
                width: 60,
                height: 60,
                borderRadius: 30,
              }}
              source={{uri: item.image}}
            />
          </View>
          <Text style={{marginTop: 6}}>{item.emoji}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default ProfileStory;

const styles = StyleSheet.create({});
